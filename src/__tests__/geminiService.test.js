import { describe, it, expect } from 'vitest';
import { sanitizeInput, generateLocalReasoning, generateAirQualityAdvice } from '../services/geminiService';
import { CITIES_DATA } from '../data/mockData';

describe('Gemini Service & Security Tests', () => {
  const city = CITIES_DATA.delhi;
  const profile = {
    members: ['infant', 'asthma'],
    commute: 'Metro / Rail Transit',
    housing: 'High-Rise Apartment (8th+ floor)',
    cooking: 'LPG Gas Burner'
  };

  describe('Input Sanitization & XSS Mitigation', () => {
    it('strips angle brackets to prevent script injection', () => {
      const malicious = '<script>alert("xss")</script>How to purify room?';
      const clean = sanitizeInput(malicious);
      expect(clean).not.toContain('<script>');
      expect(clean).not.toContain('</script>');
      expect(clean).toBe('scriptalert("xss")/scriptHow to purify room?');
    });

    it('handles non-string inputs safely', () => {
      expect(sanitizeInput(null)).toBe('');
      expect(sanitizeInput(undefined)).toBe('');
      expect(sanitizeInput(12345)).toBe('');
    });

    it('enforces maximum character boundary', () => {
      const longInput = 'a'.repeat(2000);
      const clean = sanitizeInput(longInput);
      expect(clean.length).toBe(1000);
    });
  });

  describe('Heuristic Local Domain Engine', () => {
    it('accurately identifies high risk sensitive households', () => {
      const advice = generateLocalReasoning(city, profile, 'What routines are safe?');
      expect(advice).toContain('CRITICAL RISK');
      expect(advice).toContain('infant');
      expect(advice).toContain('asthma');
    });

    it('adds tailored infant protection rules when child is queried', () => {
      const advice = generateLocalReasoning(city, profile, 'How to protect my baby from smog?');
      expect(advice).toContain('Child Protection Priority');
      expect(advice).toContain('Alveolar ventilation rate');
    });

    it('adds DIY Corsi-Rosenthal blueprints when filter/purifier is queried', () => {
      const advice = generateLocalReasoning(city, profile, 'Can I build a cheap DIY purifier?');
      expect(advice).toContain('Corsi-Rosenthal box');
      expect(advice).toContain('MERV-13');
    });

    it('specifies the midday solar ventilation window when windows/ventilation queried', () => {
      const advice = generateLocalReasoning(city, profile, 'When can I open windows to ventilate?');
      expect(advice).toContain('Ventilation Window Rule');
      expect(advice).toContain(city.safeWindow);
    });
  });

  describe('generateAirQualityAdvice Orchestrator', () => {
    it('rejects empty prompts with a validation fallback message', async () => {
      const result = await generateAirQualityAdvice({
        cityData: city,
        profile,
        prompt: '   ',
        apiKey: ''
      });
      expect(result.source).toBe('validation-fallback');
      expect(result.text).toContain('valid question');
    });

    it('falls back seamlessly to local engine when API key is missing or invalid', async () => {
      const result = await generateAirQualityAdvice({
        cityData: city,
        profile,
        prompt: 'Give me low emission daily tips',
        apiKey: 'invalid-key-format'
      });
      expect(result.source).toBe('local-engine');
      expect(result.text).toContain('Low-Emission Daily Routine Adjustments');
      expect(result.text).toContain('Direct Impact of Your Actions');
    });
  });
});

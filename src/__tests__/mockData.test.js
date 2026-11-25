import { describe, it, expect } from 'vitest';
import { CITIES_DATA, AQI_SCALE, IAQ_HACKS } from '../data/mockData';

describe('Data Integrity & WHO Guidelines Benchmarks', () => {
  it('contains valid meteorological and pollutant data for all supported cities', () => {
    const cityKeys = Object.keys(CITIES_DATA);
    expect(cityKeys.length).toBeGreaterThanOrEqual(6);

    cityKeys.forEach((key) => {
      const city = CITIES_DATA[key];
      expect(city.name).toBeDefined();
      expect(city.country).toBeDefined();
      expect(city.aqi).toBeGreaterThanOrEqual(0);
      expect(city.pm25).toBeGreaterThanOrEqual(0);
      expect(city.pm10).toBeGreaterThanOrEqual(0);
      expect(city.whoMultiple).toBeGreaterThan(0);
      expect(city.dangerWindow).toBeDefined();
      expect(city.safeWindow).toBeDefined();
    });
  });

  it('correctly maps AQI bands across the AQI scale', () => {
    expect(AQI_SCALE.length).toBe(6);
    expect(AQI_SCALE[0].label).toBe('Good');
    expect(AQI_SCALE[5].label).toBe('Hazardous');
    expect(AQI_SCALE[5].max).toBe(500);
  });

  it('verifies IAQ Hacks have complete scientific specifications and CADR metrics', () => {
    expect(IAQ_HACKS.length).toBeGreaterThanOrEqual(5);
    IAQ_HACKS.forEach((hack) => {
      expect(hack.id).toBeDefined();
      expect(hack.title).toBeDefined();
      expect(hack.category).toBeDefined();
      expect(hack.cadr).toBeDefined();
      expect(hack.cost).toBeDefined();
      expect(hack.steps.length).toBeGreaterThanOrEqual(3);
      expect(hack.impact).toBeDefined();
    });
  });
});

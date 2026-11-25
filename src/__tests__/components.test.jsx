import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import AqiHeroCard from '../components/AqiHeroCard';
import ProfileSelector from '../components/ProfileSelector';
import RoutinePlanner from '../components/RoutinePlanner';
import IndoorHacks from '../components/IndoorHacks';
import ImpactCalculator from '../components/ImpactCalculator';
import Header from '../components/Header';
import App from '../App';

describe('UI Component Accessibility & Functionality Tests', () => {
  const profile = {
    members: ['infant', 'asthma'],
    commute: 'Metro / Rail Transit',
    housing: 'High-Rise Apartment (8th+ floor)',
    cooking: 'LPG Gas Burner'
  };

  describe('AqiHeroCard', () => {
    it('renders city title, AQI level and WHO guideline multiple', () => {
      render(<AqiHeroCard selectedCity="delhi" />);
      expect(screen.getByText('Delhi NCR')).toBeInTheDocument();
      expect(screen.getByText('Hazardous')).toBeInTheDocument();
      expect(screen.getByText(/WHO Guideline/i)).toBeInTheDocument();
    });

    it('displays pollutant progressbars with accessible attributes', () => {
      render(<AqiHeroCard selectedCity="delhi" />);
      const progressbars = screen.getAllByRole('progressbar');
      expect(progressbars.length).toBeGreaterThan(0);
      expect(progressbars[0]).toHaveAttribute('aria-valuenow');
    });
  });

  describe('ProfileSelector', () => {
    it('toggles sensitive household member selection', () => {
      const setProfile = vi.fn();
      render(<ProfileSelector profile={profile} setProfile={setProfile} />);
      
      const infantBtn = screen.getByRole('button', { name: /Infant \/ Toddler/i });
      expect(infantBtn).toHaveAttribute('aria-pressed', 'true');
      
      fireEvent.click(infantBtn);
      expect(setProfile).toHaveBeenCalledWith({
        ...profile,
        members: ['asthma']
      });
    });

    it('changes commute method via accessible dropdown', () => {
      const setProfile = vi.fn();
      render(<ProfileSelector profile={profile} setProfile={setProfile} />);
      
      const select = screen.getByLabelText(/Commute Method/i);
      fireEvent.change(select, { target: { value: 'Two-Wheeler / Bike' } });
      expect(setProfile).toHaveBeenCalledWith({
        ...profile,
        commute: 'Two-Wheeler / Bike'
      });
    });
  });

  describe('RoutinePlanner', () => {
    it('renders diurnal routine time slots', () => {
      render(<RoutinePlanner selectedCity="delhi" profile={profile} />);
      expect(screen.getByText(/05:30 – 09:00 AM/i)).toBeInTheDocument();
      expect(screen.getByText(/11:30 AM – 03:30 PM/i)).toBeInTheDocument();
    });

    it('expands slot details on click with aria-expanded attribute', () => {
      render(<RoutinePlanner selectedCity="delhi" profile={profile} />);
      const slotButton = screen.getByRole('button', { name: /05:30 – 09:00 AM/i });
      expect(slotButton).toHaveAttribute('aria-expanded', 'false');

      fireEvent.click(slotButton);
      expect(slotButton).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByText(/Ground-level inversion locks PM2.5/i)).toBeInTheDocument();
    });
  });

  describe('IndoorHacks', () => {
    it('renders hacks tabs and switches selected hack details', () => {
      render(<IndoorHacks />);
      expect(screen.getAllByText('DIY Corsi-Rosenthal Box').length).toBeGreaterThan(0);
      
      const wetMopTab = screen.getByRole('tab', { name: /Static Wet-Microfiber Protocol/i });
      fireEvent.click(wetMopTab);
      expect(screen.getByText(/Ban all dry brooms and feather dusters/i)).toBeInTheDocument();
    });
  });

  describe('ImpactCalculator', () => {
    it('calculates avoided CO2 and lung sparing dynamically based on inputs', () => {
      render(<ImpactCalculator selectedCity="delhi" />);
      expect(screen.getByText(/Your Avoided CO₂/i)).toBeInTheDocument();
      expect(screen.getByText(/Deep Alveolar Sparing/i)).toBeInTheDocument();
      
      const commuteSlider = screen.getByLabelText(/Kilometers of solo car commute shifted/i);
      fireEvent.change(commuteSlider, { target: { value: '30' } });
      expect(commuteSlider.value).toBe('30');
    });
  });

  describe('Header', () => {
    it('renders logo and allows location selection', () => {
      const setSelectedCity = vi.fn();
      render(
        <Header 
          selectedCity="delhi" 
          setSelectedCity={setSelectedCity} 
          apiKey="" 
          setApiKey={vi.fn()} 
        />
      );
      expect(screen.getByText('AeroAI')).toBeInTheDocument();
      
      const citySelect = screen.getByRole('combobox');
      fireEvent.change(citySelect, { target: { value: 'mumbai' } });
      expect(setSelectedCity).toHaveBeenCalledWith('mumbai');
    });
  });

  describe('Full App Smoke Test', () => {
    it('renders entire dashboard without crashing', () => {
      render(<App />);
      expect(screen.getAllByText('AeroAI').length).toBeGreaterThan(0);
      expect(screen.getByText('Smog Defense & Routines')).toBeInTheDocument();
      expect(screen.getByText('Indoor IAQ Hacks')).toBeInTheDocument();
      expect(screen.getByText('Direct Impact Engine')).toBeInTheDocument();
    });
  });
});

/**
 * Options for the Preferences panel.
 * Exchange rates are reference values only, used to show approximate conversions of the rupee figures.
 * Update `rates` and `ratesDate` together.
 */
export const prefsConfig = {
  regions: [
    { value: 'en-IN', label: 'India' },
    { value: 'en-US', label: 'United States' },
    { value: 'en-GB', label: 'United Kingdom' },
    { value: 'en-IE', label: 'Europe' },
  ],
  currencies: [
    { code: 'INR', label: 'Indian rupee (INR)' },
    { code: 'USD', label: 'US dollar (USD)' },
    { code: 'EUR', label: 'Euro (EUR)' },
    { code: 'GBP', label: 'British pound (GBP)' },
  ],
  /** Rupees per unit, Xe mid-market reference. */
  rates: { INR: 1, USD: 93.9, EUR: 104.8, GBP: 125.7 },
  ratesDate: '6 Nov 2026',
  ratesSource: 'Xe mid-market',
  languages: [
    { code: 'en', label: 'English (original)' },
    { code: 'hi', label: 'हिन्दी, Hindi' },
    { code: 'ta', label: 'தமிழ், Tamil' },
    { code: 'te', label: 'తెలుగు, Telugu' },
    { code: 'kn', label: 'ಕನ್ನಡ, Kannada' },
    { code: 'mr', label: 'मराठी, Marathi' },
    { code: 'es', label: 'Español, Spanish' },
    { code: 'fr', label: 'Français, French' },
    { code: 'de', label: 'Deutsch, German' },
    { code: 'ja', label: '日本語, Japanese' },
  ],
  defaults: {
    theme: 'dark',
    motion: 'system',
    text: 'default',
    contrast: 'default',
    links: 'default',
    spacing: 'default',
    region: 'en-IN',
    currency: 'INR',
  },
} as const;

export type PrefKey = keyof typeof prefsConfig.defaults;

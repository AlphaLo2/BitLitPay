export type CountryCode = 'US' | 'NG' | 'GH' | 'KE' | 'ZA';

export interface CountryInfo {
  code: CountryCode;
  currency: string;
  currencySymbol: string;
  providers: ServiceProvider[];
}

export interface ServiceProvider {
  id: string;
  name: string;
  logo?: string;
  services: {
    airtime: boolean;
    data: boolean;
  };
}

export const countryData: Record<CountryCode, CountryInfo> = {
  US: {
    code: 'US',
    currency: 'USD',
    currencySymbol: '$',
    providers: [
      { id: 'att', name: 'AT&T', services: { airtime: true, data: true } },
      { id: 'verizon', name: 'Verizon', services: { airtime: true, data: true } },
      { id: 'tmobile', name: 'T-Mobile', services: { airtime: true, data: true } },
    ],
  },
  NG: {
    code: 'NG',
    currency: 'NGN',
    currencySymbol: '₦',
    providers: [
      { id: 'mtn', name: 'MTN', services: { airtime: true, data: true } },
      { id: 'airtel', name: 'Airtel', services: { airtime: true, data: true } },
      { id: '9mobile', name: '9mobile', services: { airtime: true, data: true } },
      { id: 'glo', name: 'Glo', services: { airtime: true, data: true } },
    ],
  },
  GH: {
    code: 'GH',
    currency: 'GHS',
    currencySymbol: 'GH₵',
    providers: [
      { id: 'mtn-gh', name: 'MTN', services: { airtime: true, data: true } },
      { id: 'vodafone', name: 'Vodafone', services: { airtime: true, data: true } },
    ],
  },
  KE: {
    code: 'KE',
    currency: 'KES',
    currencySymbol: 'KSh',
    providers: [
      { id: 'safaricom', name: 'Safaricom', services: { airtime: true, data: true } },
      { id: 'airtel-ke', name: 'Airtel', services: { airtime: true, data: true } },
    ],
  },
  ZA: {
    code: 'ZA',
    currency: 'ZAR',
    currencySymbol: 'R',
    providers: [
      { id: 'vodacom', name: 'Vodacom', services: { airtime: true, data: true } },
      { id: 'mtn-za', name: 'MTN', services: { airtime: true, data: true } },
    ],
  },
};

export const getCurrentCountry = (): CountryCode => {
  // This would typically use geolocation or IP-based detection
  // For now, returning a default
  return 'NG';
};
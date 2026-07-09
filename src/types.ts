export interface TerrorEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  coordinates: string;
  description: string;
  casualties: string;
  impactText: string;
  educationalTakeaway: string;
}

export interface MemorialTribute {
  id: string;
  name: string;
  message: string;
  type: 'candle' | 'rose' | 'message';
  timestamp: number;
}

export interface Brand {
  slug: string;
  name: string;
  country: string;
  logoUrl?: string;
}

export interface Market {
  countryName: string;
  code: string; // e.g. 'ng'
  isActive: boolean;
}

export type ChamberCategory = 'Spring Brake' | 'Service Brake' | 'Air Disc Actuator';

export interface BrakeChamber {
  slug: string;
  name: string;
  brandSlug: string;
  category: ChamberCategory;
  priceUSD: number;
  type: string; // e.g. "Type 30/30", "Type 20"
  strokeSize: string; // e.g. "Standard", "Long Stroke"
  strokeInch?: string; // e.g. "2-1/2 in", "3 in"
  pushRodLengthInch?: string; // e.g. "8 in", "18 in"
  dutySpec?: string; // e.g. "severe-duty"
  mountType?: string; // e.g. "clevis"

  application?: string; // e.g. "S-Cam Brake", "Disc"
  crossReferenceBrands?: string[]; // e.g. ["Bendix", "Haldex"]
  oemPartNumbers?: { brand: string; partNumber: string; notes?: string }[];
  material: string; // e.g. "Steel", "Aluminum"
  includedItems: string[];
  description: string;
  specifications: {
    maxOperatingPressure: string;
    operatingTemperature: string;
    pushRodLength: string;
    portSize: string;
    weight: string;
  };
  galleryUrls: string[];
  factoryVideoUrl?: string;
  promoVideoUrl?: string;
  stock: number;
  publishedAt: string;
  moq?: number; // Minimum Order Quantity for wholesale
  palletQuantity?: number; // Units per pallet
}

export type AccessoryCategory = 'Diaphragm' | 'Caging Bolt' | 'Clamp Band' | 'Slack Adjuster' | 'Other';

export interface BrakeAccessory {
  slug: string;
  name: string;
  brandSlug: string; // "generic" if unbranded
  category: AccessoryCategory;
  priceUSD: number;
  description: string;
  features: string[];
  galleryUrls: string[];
  stock: number;
  publishedAt: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImageUrl: string;
  publishDate: string;
}

export interface Provider {
  name: string;
  location: string;
  description: string;
  services: string[];
  contact: string;
  email: string;
  website: string;
  compliances: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  providers: Provider[];
}
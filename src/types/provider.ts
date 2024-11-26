export interface Facility {
  type: string;
  location: string;
  capacity: string;
  certifications: string[];
}

export interface Contact {
  phone: string;
  email: string;
  website: string;
}

export interface Provider {
  name: string;
  location: string;
  description: string;
  services: string[];
  certifications: string[];
  contact: Contact;
  facilities: Facility[];
}
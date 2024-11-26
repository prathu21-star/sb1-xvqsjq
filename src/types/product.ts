export interface ProductSpecification {
  parameter: string;
  value: string;
  unit?: string;
}

export interface ProductSupplier {
  name: string;
  location: string;
  leadTime: string;
  minOrderQty: string;
  certifications: string[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  specifications: ProductSpecification[];
  applications: string[];
  suppliers: ProductSupplier[];
  documents?: {
    name: string;
    type: string;
    url: string;
  }[];
  images?: {
    url: string;
    alt: string;
  }[];
}
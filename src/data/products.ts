import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: "HPLC-001",
    name: "High Performance Liquid Chromatography System",
    category: "Analytical Instruments",
    subcategory: "Chromatography",
    description: "Advanced HPLC system for pharmaceutical analysis with integrated automation",
    specifications: [
      {
        parameter: "Flow Rate Range",
        value: "0.001-10",
        unit: "mL/min"
      },
      {
        parameter: "Pressure Range",
        value: "0-15000",
        unit: "psi"
      },
      {
        parameter: "Injection Volume",
        value: "0.1-100",
        unit: "µL"
      }
    ],
    applications: [
      "Pharmaceutical Analysis",
      "Quality Control",
      "Method Development",
      "Research Applications"
    ],
    suppliers: [
      {
        name: "Waters India",
        location: "Mumbai, Maharashtra",
        leadTime: "4-6 weeks",
        minOrderQty: "1 unit",
        certifications: ["ISO 9001:2015", "CE"]
      },
      {
        name: "Agilent India",
        location: "Bangalore, Karnataka",
        leadTime: "3-5 weeks",
        minOrderQty: "1 unit",
        certifications: ["ISO 9001:2015", "CE", "UL"]
      }
    ],
    documents: [
      {
        name: "Technical Specifications",
        type: "PDF",
        url: "/docs/hplc-specs.pdf"
      },
      {
        name: "Application Note",
        type: "PDF",
        url: "/docs/hplc-app-note.pdf"
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1582719508461-905c673771fd",
        alt: "HPLC System"
      }
    ]
  },
  {
    id: "CELL-001",
    name: "Advanced CO2 Incubator",
    category: "Laboratory Equipment",
    subcategory: "Cell Culture",
    description: "Precision controlled CO2 incubator for cell culture applications",
    specifications: [
      {
        parameter: "Temperature Range",
        value: "4-50",
        unit: "°C"
      },
      {
        parameter: "CO2 Range",
        value: "0-20",
        unit: "%"
      },
      {
        parameter: "Capacity",
        value: "170",
        unit: "L"
      }
    ],
    applications: [
      "Cell Culture",
      "Tissue Culture",
      "Stem Cell Research",
      "Microbiology"
    ],
    suppliers: [
      {
        name: "Thermo Fisher Scientific India",
        location: "Chennai, Tamil Nadu",
        leadTime: "2-3 weeks",
        minOrderQty: "1 unit",
        certifications: ["ISO 9001:2015", "CE"]
      }
    ],
    documents: [
      {
        name: "User Manual",
        type: "PDF",
        url: "/docs/incubator-manual.pdf"
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120",
        alt: "CO2 Incubator"
      }
    ]
  }
];

// Helper function to get unique subcategories for a category
export const getSubcategories = (category: string): string[] => {
  return Array.from(new Set(
    products
      .filter(product => product.category === category)
      .map(product => product.subcategory)
  ));
};
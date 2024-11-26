import type { Provider } from '../../types/provider';

export const packagingProviders = {
  'Primary Packaging': [
    {
      name: "SGD Pharma India",
      location: "Mumbai, Maharashtra",
      description: "Glass packaging solutions provider",
      services: ["Glass Vials", "Ampoules", "Cartridges"],
      certifications: ["ISO 15378", "DMF Type III", "ISO 9001:2015"],
      contact: {
        phone: "+91-22-66789000",
        email: "contact@sgdpharma.com",
        website: "www.sgdpharma.com"
      },
      facilities: [
        {
          type: "Manufacturing",
          location: "Mumbai",
          capacity: "1 billion units/year",
          certifications: ["ISO 15378", "DMF Type III"]
        }
      ]
    }
  ],
  'Secondary Packaging': [
    {
      name: "ACG Pharmapack",
      location: "Pune, Maharashtra",
      description: "Integrated packaging solutions",
      services: ["Blister Packaging", "Bottle Packaging", "Labeling"],
      certifications: ["ISO 15378", "ISO 9001:2015", "DMF Type III"],
      contact: {
        phone: "+91-20-30112000",
        email: "info@acg-world.com",
        website: "www.acg-world.com"
      },
      facilities: [
        {
          type: "Packaging Facility",
          location: "Pune",
          capacity: "500 million units/year",
          certifications: ["ISO 15378", "ISO 9001:2015"]
        }
      ]
    }
  ]
};
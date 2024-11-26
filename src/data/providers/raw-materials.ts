import type { Provider } from '../../types/provider';

export const rawMaterialsProviders = {
  'Excipients': [
    {
      name: "IMCD India",
      location: "Mumbai, Maharashtra",
      description: "Pharmaceutical excipients distributor",
      services: ["Excipient Supply", "Technical Support", "Formulation Assistance"],
      certifications: ["ISO 9001:2015", "GDP", "EXCiPACT"],
      contact: {
        phone: "+91-22-66447777",
        email: "info@imcd.in",
        website: "www.imcd.in"
      },
      facilities: [
        {
          type: "Distribution Center",
          location: "Mumbai",
          capacity: "10,000 MT/year",
          certifications: ["GDP", "ISO 9001:2015"]
        }
      ]
    }
  ],
  'APIs & Intermediates': [
    {
      name: "Laurus Labs",
      location: "Hyderabad, Telangana",
      description: "API and intermediates manufacturer",
      services: ["API Manufacturing", "Custom Synthesis", "Process Development"],
      certifications: ["US FDA", "EU GMP", "WHO GMP"],
      contact: {
        phone: "+91-40-39804333",
        email: "info@lauruslabs.com",
        website: "www.lauruslabs.com"
      },
      facilities: [
        {
          type: "Manufacturing",
          location: "Visakhapatnam",
          capacity: "5000 MT/year",
          certifications: ["US FDA", "EU GMP"]
        }
      ]
    }
  ]
};
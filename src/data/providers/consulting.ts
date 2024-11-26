import type { Provider } from '../../types/provider';

export const consultingProviders = {
  'Technical Consulting': [
    {
      name: "PharmConsult India",
      location: "Pune, Maharashtra",
      description: "Technical consulting services",
      services: ["Process Optimization", "Technology Transfer", "Facility Design"],
      certifications: ["ISO 9001:2015"],
      contact: {
        phone: "+91-20-67891000",
        email: "info@pharmconsult.in",
        website: "www.pharmconsult.in"
      },
      facilities: [
        {
          type: "Consulting Office",
          location: "Pune",
          capacity: "50 consultants",
          certifications: ["ISO 9001:2015"]
        }
      ]
    }
  ],
  'Strategic Consulting': [
    {
      name: "IQVIA India",
      location: "Mumbai, Maharashtra",
      description: "Strategic pharmaceutical consulting",
      services: ["Market Access", "Business Strategy", "Commercial Excellence"],
      certifications: ["ISO 9001:2015", "ISO 27001"],
      contact: {
        phone: "+91-22-33456700",
        email: "info.india@iqvia.com",
        website: "www.iqvia.com"
      },
      facilities: [
        {
          type: "Consulting Hub",
          location: "Mumbai",
          capacity: "300 consultants",
          certifications: ["ISO 9001:2015"]
        }
      ]
    }
  ]
};
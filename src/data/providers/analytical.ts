import type { Provider } from '../../types/provider';

export const analyticalProviders = {
  'Method Development': [
    {
      name: "Eurofins Analytical Services",
      location: "Bangalore, Karnataka",
      description: "Leading analytical testing laboratory",
      services: ["Method Development", "Method Validation", "Stability Studies"],
      certifications: ["US FDA", "EMA", "NABL", "ISO 17025"],
      contact: {
        phone: "+91-80-28410400",
        email: "contact@eurofins.in",
        website: "www.eurofins.in"
      },
      facilities: [
        {
          type: "Analytical Lab",
          location: "Bangalore",
          capacity: "50,000 samples/year",
          certifications: ["NABL", "US FDA"]
        }
      ]
    }
  ],
  'Stability Studies': [
    {
      name: "Choksi Laboratories",
      location: "Indore, Madhya Pradesh",
      description: "Comprehensive stability testing services",
      services: ["Stability Studies", "Method Development", "Raw Material Testing"],
      certifications: ["NABL", "WHO GMP", "ISO 17025"],
      contact: {
        phone: "+91-731-4243888",
        email: "info@choksilab.com",
        website: "www.choksilab.com"
      },
      facilities: [
        {
          type: "Stability Chambers",
          location: "Indore",
          capacity: "1000 samples/batch",
          certifications: ["NABL", "WHO GMP"]
        }
      ]
    }
  ]
}
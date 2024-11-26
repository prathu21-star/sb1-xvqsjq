import type { Provider } from '../../types/provider';

export const manufacturingProviders = {
  'API Manufacturing': [
    {
      name: "Divi's Laboratories",
      location: "Hyderabad, Telangana",
      description: "Leading manufacturer of APIs and custom synthesis solutions",
      services: ["Custom API Synthesis", "Process Development", "Scale-up Services"],
      certifications: ["US FDA", "EU GMP", "WHO GMP", "ISO 14001:2015"],
      contact: {
        phone: "+91-40-23786300",
        email: "contact@divislabs.com",
        website: "www.divislabs.com"
      },
      facilities: [
        {
          type: "Manufacturing",
          location: "Visakhapatnam",
          capacity: "12,000 MT/year",
          certifications: ["US FDA", "EU GMP"]
        }
      ]
    },
    {
      name: "Aurobindo Pharma",
      location: "Hyderabad, Telangana",
      description: "Vertically integrated pharmaceutical company",
      services: ["API Manufacturing", "Custom Synthesis", "Process Development"],
      certifications: ["US FDA", "EU GMP", "WHO GMP", "ISO 9001:2015"],
      contact: {
        phone: "+91-40-66725000",
        email: "info@aurobindo.com",
        website: "www.aurobindo.com"
      },
      facilities: [
        {
          type: "API Manufacturing",
          location: "Hyderabad",
          capacity: "15,000 MT/year",
          certifications: ["US FDA", "EU GMP"]
        }
      ]
    },
    {
      name: "Dr. Reddy's Laboratories",
      location: "Hyderabad, Telangana",
      description: "Global pharmaceutical company with strong API capabilities",
      services: ["API Manufacturing", "Custom Synthesis", "Technology Transfer"],
      certifications: ["US FDA", "EU GMP", "WHO GMP", "ISO 14001:2015"],
      contact: {
        phone: "+91-40-49002900",
        email: "apis@drreddys.com",
        website: "www.drreddys.com"
      },
      facilities: [
        {
          type: "API Manufacturing",
          location: "Hyderabad",
          capacity: "18,000 MT/year",
          certifications: ["US FDA", "EU GMP"]
        }
      ]
    }
  ],
  'Sterile Manufacturing': [
    {
      name: "Gland Pharma",
      location: "Hyderabad, Telangana",
      description: "Specialized in injectable manufacturing",
      services: ["Sterile Injectables", "Prefilled Syringes", "Lyophilization"],
      certifications: ["US FDA", "EU GMP", "WHO GMP"],
      contact: {
        phone: "+91-40-30510999",
        email: "info@glandpharma.com",
        website: "www.glandpharma.com"
      },
      facilities: [
        {
          type: "Sterile Manufacturing",
          location: "Hyderabad",
          capacity: "1 billion units/year",
          certifications: ["US FDA", "EU GMP"]
        }
      ]
    },
    {
      name: "Intas Pharmaceuticals",
      location: "Ahmedabad, Gujarat",
      description: "Leading sterile products manufacturer",
      services: ["Sterile Manufacturing", "Aseptic Processing", "Quality Control"],
      certifications: ["US FDA", "EU GMP", "WHO GMP"],
      contact: {
        phone: "+91-79-39306969",
        email: "corporate@intaspharma.com",
        website: "www.intaspharma.com"
      },
      facilities: [
        {
          type: "Sterile Facility",
          location: "Ahmedabad",
          capacity: "800 million units/year",
          certifications: ["US FDA", "EU GMP"]
        }
      ]
    }
  ],
  'High Potency APIs': [
    {
      name: "Dishman Carbogen Amcis",
      location: "Ahmedabad, Gujarat",
      description: "Specialist in HPAPI manufacturing",
      services: ["HPAPI Manufacturing", "Containment Solutions", "Process Development"],
      certifications: ["US FDA", "EU GMP", "ISO 14001:2015"],
      contact: {
        phone: "+91-2717-420100",
        email: "contact@dishmangroup.com",
        website: "www.dishmangroup.com"
      },
      facilities: [
        {
          type: "HPAPI Manufacturing",
          location: "Bavla, Gujarat",
          capacity: "200 MT/year",
          certifications: ["US FDA", "EU GMP"]
        }
      ]
    },
    {
      name: "Piramal Pharma Solutions",
      location: "Mumbai, Maharashtra",
      description: "Integrated HPAPI development and manufacturing",
      services: ["HPAPI Development", "Scale-up", "Commercial Manufacturing"],
      certifications: ["US FDA", "EU GMP", "ISO 14001:2015"],
      contact: {
        phone: "+91-22-30462000",
        email: "info@piramal.com",
        website: "www.piramalpharmasolutions.com"
      },
      facilities: [
        {
          type: "HPAPI Facility",
          location: "Ahmedabad",
          capacity: "150 MT/year",
          certifications: ["US FDA", "EU GMP"]
        }
      ]
    }
  ],
  'Solid Dosage Forms': [
    {
      name: "Cipla Limited",
      location: "Mumbai, Maharashtra",
      description: "Leading solid dosage form manufacturer",
      services: ["Tablet Manufacturing", "Capsule Manufacturing", "Technology Transfer"],
      certifications: ["US FDA", "EU GMP", "WHO GMP"],
      contact: {
        phone: "+91-22-24826000",
        email: "contactus@cipla.com",
        website: "www.cipla.com"
      },
      facilities: [
        {
          type: "Solid Dosage Facility",
          location: "Goa",
          capacity: "12 billion units/year",
          certifications: ["US FDA", "EU GMP"]
        }
      ]
    }
  ]
};
import type { Provider } from '../../types/provider';

export const researchProviders = {
  'Drug Discovery': [
    {
      name: "Syngene International",
      location: "Bangalore, Karnataka",
      description: "Integrated research organization",
      services: ["Hit-to-Lead", "Lead Optimization", "Medicinal Chemistry"],
      certifications: ["GLP", "ISO 9001:2015", "AAALAC"],
      contact: {
        phone: "+91-80-28523444",
        email: "info@syngene.com",
        website: "www.syngene.com"
      },
      facilities: [
        {
          type: "Research Center",
          location: "Bangalore",
          capacity: "2 million sqft",
          certifications: ["GLP", "ISO 9001:2015"]
        }
      ]
    }
  ],
  'DMPK Studies': [
    {
      name: "GVK Biosciences",
      location: "Hyderabad, Telangana",
      description: "Leading DMPK service provider",
      services: ["ADME Studies", "PK Analysis", "Bioanalysis"],
      certifications: ["GLP", "AAALAC", "ISO 9001:2015"],
      contact: {
        phone: "+91-40-66929999",
        email: "info@gvkbio.com",
        website: "www.gvkbio.com"
      },
      facilities: [
        {
          type: "DMPK Lab",
          location: "Hyderabad",
          capacity: "10,000 samples/month",
          certifications: ["GLP", "AAALAC"]
        }
      ]
    }
  ]
};
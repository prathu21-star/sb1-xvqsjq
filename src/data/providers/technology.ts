import type { Provider } from '../../types/provider';

export const technologyProviders = {
  'LIMS Solutions': [
    {
      name: "LabVantage Solutions India",
      location: "Mumbai, Maharashtra",
      description: "Leading LIMS provider",
      services: ["LIMS Implementation", "Validation", "Technical Support"],
      certifications: ["ISO 9001:2015", "ISO 27001"],
      contact: {
        phone: "+91-22-61575500",
        email: "info@labvantage.com",
        website: "www.labvantage.com"
      },
      facilities: [
        {
          type: "Development Center",
          location: "Mumbai",
          capacity: "200 personnel",
          certifications: ["ISO 9001:2015", "ISO 27001"]
        }
      ]
    }
  ],
  'Quality Management Systems': [
    {
      name: "MasterControl India",
      location: "Bangalore, Karnataka",
      description: "QMS software solutions provider",
      services: ["QMS Implementation", "Validation", "Training"],
      certifications: ["ISO 9001:2015", "ISO 27001"],
      contact: {
        phone: "+91-80-67123400",
        email: "info@mastercontrol.com",
        website: "www.mastercontrol.com"
      },
      facilities: [
        {
          type: "Support Center",
          location: "Bangalore",
          capacity: "150 personnel",
          certifications: ["ISO 9001:2015"]
        }
      ]
    }
  ]
};
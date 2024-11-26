import type { Provider } from '../../types/provider';

export const regulatoryProviders = {
  'Registration Services': [
    {
      name: "Freyr Solutions",
      location: "Hyderabad, Telangana",
      description: "Global regulatory solutions provider",
      services: ["Registration Strategy", "Dossier Preparation", "Post-Approval Changes"],
      certifications: ["ISO 9001:2015", "ISO 27001"],
      contact: {
        phone: "+91-40-48545454",
        email: "info@freyr.com",
        website: "www.freyr.com"
      },
      facilities: [
        {
          type: "Regulatory Operations",
          location: "Hyderabad",
          capacity: "1000+ submissions/year",
          certifications: ["ISO 9001:2015"]
        }
      ]
    }
  ],
  'GMP Consulting': [
    {
      name: "PharmaCM Consulting",
      location: "Mumbai, Maharashtra",
      description: "Specialized GMP consulting firm",
      services: ["GMP Audits", "Compliance Training", "Remediation Support"],
      certifications: ["ISO 9001:2015"],
      contact: {
        phone: "+91-22-49785600",
        email: "contact@pharmacm.com",
        website: "www.pharmacm.com"
      },
      facilities: [
        {
          type: "Training Center",
          location: "Mumbai",
          capacity: "200 personnel/batch",
          certifications: ["ISO 9001:2015"]
        }
      ]
    }
  ]
};
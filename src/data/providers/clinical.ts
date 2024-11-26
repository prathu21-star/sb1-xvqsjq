import type { Provider } from '../../types/provider';

export const clinicalProviders = {
  'Phase I Studies': [
    {
      name: "Veeda Clinical Research",
      location: "Ahmedabad, Gujarat",
      description: "Full-service clinical research organization",
      services: ["Phase I Studies", "Bioequivalence", "Clinical Pharmacology"],
      certifications: ["US FDA", "DCGI", "ANVISA", "WHO"],
      contact: {
        phone: "+91-79-30013000",
        email: "info@veedacr.com",
        website: "www.veedacr.com"
      },
      facilities: [
        {
          type: "Clinical Unit",
          location: "Ahmedabad",
          capacity: "300 beds",
          certifications: ["DCGI", "US FDA"]
        }
      ]
    }
  ],
  'Bioequivalence Studies': [
    {
      name: "Lambda Therapeutic Research",
      location: "Ahmedabad, Gujarat",
      description: "Specialized in bioequivalence studies",
      services: ["Bioequivalence", "Clinical Trials", "Bioanalysis"],
      certifications: ["US FDA", "EMA", "ANVISA", "DCGI"],
      contact: {
        phone: "+91-79-30013000",
        email: "info@lambda-cro.com",
        website: "www.lambda-cro.com"
      },
      facilities: [
        {
          type: "Clinical Facility",
          location: "Ahmedabad",
          capacity: "400 beds",
          certifications: ["US FDA", "EMA"]
        }
      ]
    }
  ]
}
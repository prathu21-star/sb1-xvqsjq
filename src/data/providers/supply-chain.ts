import type { Provider } from '../../types/provider';

export const supplyChainProviders = {
  'Cold Chain Logistics': [
    {
      name: "Coldman Logistics",
      location: "Mumbai, Maharashtra",
      description: "Temperature-controlled pharmaceutical logistics",
      services: ["Cold Chain Storage", "Temperature Monitoring", "Last Mile Delivery"],
      certifications: ["GDP", "ISO 9001:2015", "WHO GDP"],
      contact: {
        phone: "+91-22-45678900",
        email: "info@coldman.com",
        website: "www.coldman.com"
      },
      facilities: [
        {
          type: "Cold Storage",
          location: "Mumbai",
          capacity: "10,000 pallets",
          certifications: ["GDP", "ISO 9001:2015"]
        }
      ]
    }
  ],
  'Warehousing & Distribution': [
    {
      name: "DHL Supply Chain",
      location: "Bangalore, Karnataka",
      description: "End-to-end supply chain solutions",
      services: ["Warehousing", "Distribution", "Inventory Management"],
      certifications: ["GDP", "ISO 9001:2015", "TAPA FSR"],
      contact: {
        phone: "+91-80-67890000",
        email: "info.india@dhl.com",
        website: "www.dhl.com/in"
      },
      facilities: [
        {
          type: "Distribution Center",
          location: "Bangalore",
          capacity: "50,000 sqft",
          certifications: ["GDP", "ISO 9001:2015"]
        }
      ]
    }
  ]
};
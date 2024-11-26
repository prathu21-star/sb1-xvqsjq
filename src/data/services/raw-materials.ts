import type { Service } from '../../types/service';

export const rawMaterialsServices: Service[] = [
  {
    id: 1001,
    title: "Excipients Supply",
    description: "Pharmaceutical grade excipients and raw materials",
    category: "Raw Materials & Excipients",
    providers: [
      {
        name: "IMCD India",
        location: "Mumbai, Maharashtra",
        description: "Leading distributor of pharmaceutical excipients",
        review: "High-quality materials with excellent technical support",
        services: [
          "Excipient Supply",
          "Technical Support",
          "Formulation Assistance",
          "Regulatory Documentation"
        ],
        contact: "+91-22-6644-7777",
        email: "info@imcd.in",
        website: "www.imcd.in",
        compliances: ["ISO 9001:2015", "GDP", "EXCiPACT"],
        teamSize: {
          research: 25,
          technical: 75,
          support: 50
        },
        keyOfficials: [
          {
            name: "Mr. Deepak Gupta",
            position: "Technical Director",
            qualification: "M.Pharm Pharmaceutics",
            linkedIn: "linkedin.com/in/deepakgupta"
          }
        ],
        infrastructure: [
          {
            category: "Storage Facilities",
            items: [
              {
                name: "Warehouse",
                model: "GDP Compliant Facility",
                specifications: "Temperature and humidity controlled storage",
                quantity: 3
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 1002,
    title: "Laboratory Equipment",
    description: "Advanced laboratory equipment and instruments",
    category: "Laboratory Equipment",
    providers: []
  },
  {
    id: 1003,
    title: "Clean Room Equipment",
    description: "Clean room infrastructure and equipment",
    category: "Clean Room Equipment",
    providers: []
  }
];
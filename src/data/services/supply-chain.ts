import type { Service } from '../../types/service';

export const supplyChainServices: Service[] = [
  {
    id: 901,
    title: "Cold Chain Logistics",
    description: "Temperature-controlled logistics and distribution",
    category: "Cold Chain Logistics",
    providers: [
      {
        name: "Coldman Logistics",
        location: "Mumbai, Maharashtra",
        description: "Specialized pharmaceutical cold chain logistics provider",
        review: "Excellent temperature control and monitoring",
        services: [
          "Temperature Controlled Storage",
          "Cold Chain Distribution",
          "Real-time Monitoring",
          "Last Mile Delivery"
        ],
        contact: "+91-22-4567-8900",
        email: "info@coldman.com",
        website: "www.coldman.com",
        compliances: ["GDP", "ISO 9001:2015", "WHO GDP"],
        teamSize: {
          research: 10,
          technical: 150,
          support: 100
        },
        keyOfficials: [
          {
            name: "Mr. Rajiv Mehta",
            position: "Operations Director",
            qualification: "MBA Logistics",
            linkedIn: "linkedin.com/in/rajivmehta"
          }
        ],
        infrastructure: [
          {
            category: "Cold Chain Facilities",
            items: [
              {
                name: "Cold Storage Unit",
                model: "Advanced Storage Facility",
                specifications: "Temperature range -20°C to +25°C",
                quantity: 5
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 902,
    title: "Warehousing & Distribution",
    description: "Pharmaceutical warehousing and distribution services",
    category: "Warehousing & Distribution",
    providers: []
  },
  {
    id: 903,
    title: "Track & Trace Solutions",
    description: "Supply chain visibility and serialization services",
    category: "Track & Trace Solutions",
    providers: []
  }
];
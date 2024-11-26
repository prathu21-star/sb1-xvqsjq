import type { Service } from '../../types/service';

export const technologyServices: Service[] = [
  {
    id: 601,
    title: "Laboratory Information Management",
    description: "LIMS implementation and support services",
    category: "LIMS Solutions",
    providers: [
      {
        name: "LabVantage Solutions India",
        location: "Mumbai, Maharashtra",
        description: "Leading LIMS provider with industry-specific solutions",
        review: "Excellent implementation and support services",
        services: [
          "LIMS Implementation",
          "Validation",
          "Training",
          "Technical Support"
        ],
        contact: "+91-22-6157-5500",
        email: "info@labvantage.com",
        website: "www.labvantage.com",
        compliances: ["ISO 9001:2015", "ISO 27001:2013"],
        teamSize: {
          research: 50,
          technical: 150,
          support: 75
        },
        keyOfficials: [
          {
            name: "Mr. Anil Kumar",
            position: "Country Manager",
            qualification: "MS Computer Science",
            linkedIn: "linkedin.com/in/anilkumar"
          }
        ],
        infrastructure: [
          {
            category: "Development Center",
            items: [
              {
                name: "Software Development Lab",
                model: "Modern Development Center",
                specifications: "Advanced development and testing environment",
                quantity: 1
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 602,
    title: "Quality Management Systems",
    description: "QMS software solutions and implementation",
    category: "Quality Management Systems",
    providers: []
  },
  {
    id: 603,
    title: "Laboratory Automation",
    description: "Lab automation solutions and integration services",
    category: "Laboratory Automation",
    providers: []
  }
];
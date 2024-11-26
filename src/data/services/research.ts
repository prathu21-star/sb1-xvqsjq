import type { Service } from '../../types/service';

export const researchServices: Service[] = [
  {
    id: 501,
    title: "Drug Discovery Services",
    description: "Integrated drug discovery and development solutions",
    category: "Drug Discovery",
    providers: [
      {
        name: "Syngene International",
        location: "Bangalore, Karnataka",
        description: "Leading contract research organization with integrated drug discovery capabilities",
        review: "Excellent scientific expertise and project management",
        services: [
          "Hit-to-Lead",
          "Lead Optimization",
          "Medicinal Chemistry",
          "In-vitro Biology"
        ],
        contact: "+91-80-2852-3444",
        email: "info@syngene.com",
        website: "www.syngene.com",
        compliances: ["GLP", "ISO 9001:2015", "AAALAC"],
        teamSize: {
          research: 400,
          technical: 300,
          support: 100
        },
        keyOfficials: [
          {
            name: "Dr. Manoj Nerurkar",
            position: "COO",
            qualification: "PhD Medicinal Chemistry",
            linkedIn: "linkedin.com/in/manojnerurkar"
          }
        ],
        infrastructure: [
          {
            category: "Research Facilities",
            items: [
              {
                name: "Chemistry Labs",
                model: "Integrated Research Facility",
                specifications: "State-of-the-art synthesis and analysis capabilities",
                quantity: 10
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 502,
    title: "DMPK Studies",
    description: "Comprehensive DMPK and ADME studies",
    category: "DMPK Studies",
    providers: []
  },
  {
    id: 503,
    title: "Bioanalytical Services",
    description: "Advanced bioanalytical testing and method development",
    category: "Bioanalytical Services",
    providers: []
  }
];
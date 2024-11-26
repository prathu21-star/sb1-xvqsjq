import type { Service } from '../../types/service';

export const consultingServices: Service[] = [
  {
    id: 801,
    title: "Technical Consulting",
    description: "Specialized technical consulting for pharmaceutical industry",
    category: "Technical Consulting",
    providers: [
      {
        name: "PharmConsult India",
        location: "Pune, Maharashtra",
        description: "Expert pharmaceutical consulting firm with global experience",
        review: "Excellent technical expertise and project delivery",
        services: [
          "Process Optimization",
          "Technology Transfer",
          "Facility Design",
          "Technical Due Diligence"
        ],
        contact: "+91-20-6789-1000",
        email: "info@pharmconsult.in",
        website: "www.pharmconsult.in",
        compliances: ["ISO 9001:2015"],
        teamSize: {
          research: 20,
          technical: 40,
          support: 15
        },
        keyOfficials: [
          {
            name: "Dr. Amit Patel",
            position: "Principal Consultant",
            qualification: "PhD Chemical Engineering",
            linkedIn: "linkedin.com/in/amitpatel"
          }
        ],
        infrastructure: [
          {
            category: "Consulting Office",
            items: [
              {
                name: "Technical Center",
                model: "Modern Office Space",
                specifications: "Advanced simulation and modeling capabilities",
                quantity: 1
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 802,
    title: "Strategic Consulting",
    description: "Business strategy and market access consulting",
    category: "Strategic Consulting",
    providers: []
  },
  {
    id: 803,
    title: "Project Management",
    description: "Pharmaceutical project management services",
    category: "Project Management",
    providers: []
  }
];
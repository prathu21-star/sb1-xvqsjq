import type { Service } from '../../types/service';

export const regulatoryServices: Service[] = [
  {
    id: 401,
    title: "Regulatory Affairs Consulting",
    description: "Strategic regulatory consulting and submission support for global markets",
    category: "Regulatory Affairs",
    providers: [
      {
        name: "Freyr Solutions",
        location: "Hyderabad, Telangana",
        description: "Global regulatory solutions provider with expertise across multiple regions",
        review: "Excellent track record in regulatory submissions",
        services: [
          "Registration Strategy",
          "Dossier Preparation",
          "Post-Approval Changes",
          "Regulatory Intelligence"
        ],
        contact: "+91-40-4854-5454",
        email: "info@freyr.com",
        website: "www.freyr.com",
        compliances: ["ISO 9001:2015", "ISO 27001:2013"],
        teamSize: {
          research: 100,
          technical: 250,
          support: 80
        },
        keyOfficials: [
          {
            name: "Dr. Raj Sharma",
            position: "Head of Regulatory Affairs",
            qualification: "PhD Regulatory Sciences",
            linkedIn: "linkedin.com/in/rajsharma"
          }
        ],
        infrastructure: [
          {
            category: "Regulatory Operations",
            items: [
              {
                name: "Publishing System",
                model: "eCTD Suite",
                specifications: "Compliant with global submission requirements",
                quantity: 1
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 402,
    title: "Registration Services",
    description: "Product registration and market authorization support",
    category: "Registration Services",
    providers: []
  },
  {
    id: 403,
    title: "GMP Consulting",
    description: "GMP compliance consulting and audit preparation",
    category: "GMP Consulting",
    providers: []
  }
];
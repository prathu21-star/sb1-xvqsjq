import type { Service } from '../../types/service';

export const qualityServices: Service[] = [
  {
    id: 301,
    title: "Quality Assurance Services",
    description: "Comprehensive QA/QC services for pharmaceutical industry",
    category: "Quality Assurance",
    providers: [
      {
        name: "Eurofins India",
        location: "Hyderabad, Telangana",
        description: "Leading analytical testing laboratory with state-of-the-art instrumentation",
        review: "Exceptional analytical expertise and rapid turnaround times",
        services: ["Method Development", "Stability Studies", "Raw Material Testing", "Impurity Profiling"],
        contact: "+91-40-44556677",
        email: "indiaservices@eurofins.com",
        website: "www.eurofins.co.in",
        compliances: ["US FDA", "EU GMP", "NABL", "ISO/IEC 17025"],
        teamSize: {
          research: 75,
          technical: 120,
          support: 40
        },
        keyOfficials: [
          {
            name: "Dr. Priya Sharma",
            position: "Technical Director",
            qualification: "PhD Analytical Chemistry",
            linkedIn: "linkedin.com/in/priyasharma"
          }
        ],
        infrastructure: [
          {
            category: "Analytical Lab",
            items: [
              {
                name: "HPLC Systems",
                model: "Agilent 1290 Infinity II",
                specifications: "Ultra-high performance liquid chromatography",
                quantity: 15
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 302,
    title: "Analytical Testing Services",
    description: "Advanced analytical testing and method development",
    category: "Analytical Testing",
    providers: []
  },
  {
    id: 303,
    title: "Stability Studies",
    description: "ICH compliant stability testing services",
    category: "Stability Studies",
    providers: []
  },
  {
    id: 304,
    title: "Microbiology Testing",
    description: "Comprehensive microbiology testing services",
    category: "Microbiology Testing",
    providers: []
  }
];
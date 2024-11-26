import { Building2 } from 'lucide-react';
import type { Service } from '../types/service';

export const serviceCategories = [
  'API Manufacturing',
  'Delivery Formulations',
  'Delivery Technologies',
  'Raw Materials & Excipients',
  'Processing Equipment',
  'Quality Assurance',
  'Regulatory Affairs',
  'Manufacturing Equipment',
  'Analytical Testing',
  'Contract Manufacturing',
  'Contract Sales',
  'Data Management',
  'Fill & Finish',
  'Medical Devices',
  'Clinical Trials Phase I-II',
  'Clinical Trials Phase III-IV',
  'Preclinical Services',
  'Supply Chain',
  'Validation Services',
  'Medical Writing',
  'Pharmacovigilance'
];

export const services: Service[] = [
  {
    id: 1,
    title: "API Manufacturing & Development",
    description: "End-to-end API development and manufacturing services with advanced capabilities",
    category: "API Manufacturing",
    providers: [
      {
        name: "Divi's Laboratories",
        location: "Hyderabad, Telangana",
        description: "Leading manufacturer of APIs and custom synthesis solutions",
        review: "Outstanding quality and regulatory compliance record",
        services: ["Custom API Synthesis", "Process Development", "Scale-up Services", "Regulatory Support"],
        contact: "+91-40-23786300",
        email: "contact@divislabs.com",
        website: "www.divislabs.com",
        compliances: ["US FDA", "EMA", "WHO GMP", "ISO 14001:2015"],
        teamSize: {
          research: 200,
          technical: 450,
          support: 150
        },
        keyOfficials: [
          {
            name: "Dr. Murali K. Divi",
            position: "Managing Director",
            qualification: "PhD Pharmaceutical Chemistry",
            linkedIn: "linkedin.com/in/muralidivi"
          }
        ],
        infrastructure: [
          {
            category: "Manufacturing Facilities",
            items: [
              {
                name: "API Production Units",
                model: "Custom Built",
                specifications: "Multiple production blocks with dedicated areas for high potency APIs",
                quantity: 4
              },
              {
                name: "R&D Center",
                model: "Integrated Research Facility",
                specifications: "State-of-the-art analytical and process development labs",
                quantity: 1
              }
            ]
          }
        ]
      },
      {
        name: "Aurobindo Pharma",
        location: "Hyderabad, Telangana",
        description: "Vertically integrated pharmaceutical company specializing in API manufacturing",
        review: "Consistent quality and reliable supply chain",
        services: ["API Manufacturing", "Custom Synthesis", "Process Development", "Regulatory Support"],
        contact: "+91-40-66725000",
        email: "info@aurobindo.com",
        website: "www.aurobindo.com",
        compliances: ["US FDA", "EMA", "WHO GMP", "ISO 9001:2015"],
        teamSize: {
          research: 300,
          technical: 600,
          support: 200
        },
        keyOfficials: [
          {
            name: "Mr. P.V. Ramprasad Reddy",
            position: "Executive Chairman",
            qualification: "M.Pharm",
            linkedIn: "linkedin.com/in/pvrprasadreddy"
          }
        ],
        infrastructure: [
          {
            category: "Manufacturing Units",
            items: [
              {
                name: "API Production Facility",
                model: "Integrated Manufacturing Unit",
                specifications: "Advanced automation and process control",
                quantity: 6
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Delivery Technologies & Formulations",
    description: "Advanced drug delivery systems and formulation development",
    category: "Delivery Technologies",
    providers: [
      {
        name: "Syngene International",
        location: "Bangalore, Karnataka",
        description: "Integrated research organization offering end-to-end formulation services",
        review: "Innovative solutions and excellent technical expertise",
        services: ["Pre-formulation Studies", "Novel Drug Delivery Systems", "Process Optimization", "Technology Transfer"],
        contact: "+91-80-28082808",
        email: "contact@syngeneintl.com",
        website: "www.syngeneintl.com",
        compliances: ["US FDA", "EMA", "MHRA", "ISO 9001:2015"],
        teamSize: {
          research: 150,
          technical: 200,
          support: 100
        },
        keyOfficials: [
          {
            name: "Dr. Mahesh Bhalgat",
            position: "COO",
            qualification: "PhD Pharmaceutical Sciences",
            linkedIn: "linkedin.com/in/maheshbhalgat"
          }
        ],
        infrastructure: [
          {
            category: "Development Labs",
            items: [
              {
                name: "Formulation Development Suite",
                model: "Custom Built",
                specifications: "Integrated development and analytical capabilities",
                quantity: 5
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Raw Materials & Excipients Supply",
    description: "High-quality pharmaceutical raw materials and excipients",
    category: "Raw Materials & Excipients",
    providers: [
      {
        name: "Signet Chemical Corporation",
        location: "Mumbai, Maharashtra",
        description: "Leading supplier of pharmaceutical excipients and specialty chemicals",
        review: "High-quality materials with excellent technical support",
        services: ["Excipient Supply", "Technical Support", "Regulatory Documentation", "Custom Solutions"],
        contact: "+91-22-42424242",
        email: "info@signetcorp.com",
        website: "www.signetcorp.com",
        compliances: ["US FDA", "EDQM", "ISO 9001:2015", "WHO GMP"],
        teamSize: {
          research: 50,
          technical: 100,
          support: 75
        },
        keyOfficials: [
          {
            name: "Mr. Rajesh Mehta",
            position: "Managing Director",
            qualification: "MBA, Chemical Engineering",
            linkedIn: "linkedin.com/in/rajeshmehta"
          }
        ],
        infrastructure: [
          {
            category: "Storage & Distribution",
            items: [
              {
                name: "Temperature Controlled Warehouse",
                model: "Modern Storage Facility",
                specifications: "GDP compliant storage conditions",
                quantity: 3
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Processing Equipment Solutions",
    description: "Advanced pharmaceutical processing and manufacturing equipment",
    category: "Processing Equipment",
    providers: [
      {
        name: "ACG Worldwide",
        location: "Mumbai, Maharashtra",
        description: "Global supplier of integrated pharmaceutical manufacturing solutions",
        review: "Excellent equipment quality and after-sales support",
        services: ["Equipment Supply", "Installation", "Validation", "Technical Support"],
        contact: "+91-22-30046000",
        email: "info@acg-world.com",
        website: "www.acg-world.com",
        compliances: ["CE", "ISO 9001:2015", "cGMP"],
        teamSize: {
          research: 100,
          technical: 300,
          support: 150
        },
        keyOfficials: [
          {
            name: "Mr. Karan Singh",
            position: "Managing Director",
            qualification: "MS Mechanical Engineering",
            linkedIn: "linkedin.com/in/karansingh"
          }
        ],
        infrastructure: [
          {
            category: "Manufacturing Facilities",
            items: [
              {
                name: "Equipment Manufacturing Unit",
                model: "Integrated Production Facility",
                specifications: "State-of-the-art manufacturing capabilities",
                quantity: 4
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 5,
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
              },
              {
                name: "LC-MS/MS",
                model: "Sciex Triple Quad 6500+",
                specifications: "High sensitivity mass detection",
                quantity: 3
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Clinical Research Services",
    description: "Full-service clinical research organization offering Phase I-IV trials",
    category: "Clinical Trials Phase I-II",
    providers: [
      {
        name: "Clinigen India Research",
        location: "Mumbai, Maharashtra",
        description: "Leading CRO with state-of-the-art facilities for clinical trials",
        review: "Excellent project management and adherence to timelines",
        services: ["Phase I-IV Trials", "Bioequivalence Studies", "Clinical Data Management"],
        contact: "+91-22-12345678",
        email: "contact@clinigen.com",
        website: "www.clinigen.com",
        compliances: ["ICH-GCP", "DCGI Approved", "ISO 9001:2015"],
        teamSize: {
          research: 50,
          technical: 30,
          support: 20
        },
        keyOfficials: [
          {
            name: "Dr. Rajesh Kumar",
            position: "Clinical Research Director",
            qualification: "MD, PhD Clinical Research",
            linkedIn: "linkedin.com/in/rajeshkumar"
          }
        ],
        infrastructure: [
          {
            category: "Clinical Facilities",
            items: [
              {
                name: "Clinical Trial Units",
                model: "Phase I Unit",
                specifications: "50-bed facility with ICU backup",
                quantity: 2
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Supply Chain & Logistics",
    description: "End-to-end pharmaceutical supply chain and logistics solutions",
    category: "Supply Chain",
    providers: [
      {
        name: "DHL Supply Chain India",
        location: "Mumbai, Maharashtra",
        description: "Global logistics provider specializing in pharmaceutical supply chain",
        review: "Reliable cold chain management and on-time delivery",
        services: ["Cold Chain Logistics", "Warehousing", "Distribution", "Track & Trace"],
        contact: "+91-22-66757000",
        email: "india.supplychain@dhl.com",
        website: "www.dhl.com/in",
        compliances: ["GDP", "ISO 9001:2015", "TAPA FSR"],
        teamSize: {
          research: 20,
          technical: 200,
          support: 150
        },
        keyOfficials: [
          {
            name: "Mr. Vikas Anand",
            position: "Managing Director",
            qualification: "MBA Supply Chain Management",
            linkedIn: "linkedin.com/in/vikasanand"
          }
        ],
        infrastructure: [
          {
            category: "Logistics Infrastructure",
            items: [
              {
                name: "Temperature Controlled Warehouse",
                model: "Smart Warehouse",
                specifications: "Real-time temperature monitoring",
                quantity: 8
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Validation Services",
    description: "Comprehensive validation and qualification services",
    category: "Validation Services",
    providers: [
      {
        name: "QualiVision Consultants",
        location: "Pune, Maharashtra",
        description: "Specialized validation and qualification service provider",
        review: "Thorough validation approach with excellent documentation",
        services: ["Process Validation", "Equipment Qualification", "Computer System Validation", "Method Validation"],
        contact: "+91-20-67890000",
        email: "info@qualivision.com",
        website: "www.qualivision.com",
        compliances: ["US FDA", "EU GMP", "ISO 9001:2015"],
        teamSize: {
          research: 30,
          technical: 80,
          support: 40
        },
        keyOfficials: [
          {
            name: "Dr. Suresh Menon",
            position: "Technical Director",
            qualification: "PhD Pharmaceutical Technology",
            linkedIn: "linkedin.com/in/sureshmenon"
          }
        ],
        infrastructure: [
          {
            category: "Validation Labs",
            items: [
              {
                name: "Validation Test Lab",
                model: "Modern Test Facility",
                specifications: "Advanced testing and validation equipment",
                quantity: 2
              }
            ]
          }
        ]
      }
    ]
  }
];

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter(service => service.category === category);
};
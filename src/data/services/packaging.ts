import type { Service } from '../../types/service';

export const packagingServices: Service[] = [
  {
    id: 701,
    title: "Primary Packaging Solutions",
    description: "Primary pharmaceutical packaging materials and services",
    category: "Primary Packaging",
    providers: [
      {
        name: "SGD Pharma India",
        location: "Mumbai, Maharashtra",
        description: "Leading manufacturer of pharmaceutical glass packaging",
        review: "High-quality packaging solutions with excellent service",
        services: [
          "Glass Vials",
          "Ampoules",
          "Cartridges",
          "Custom Solutions"
        ],
        contact: "+91-22-6678-9000",
        email: "contact@sgdpharma.com",
        website: "www.sgdpharma.com",
        compliances: ["ISO 15378", "DMF Type III", "ISO 9001:2015"],
        teamSize: {
          research: 30,
          technical: 200,
          support: 70
        },
        keyOfficials: [
          {
            name: "Mr. Prashant Sharma",
            position: "Managing Director",
            qualification: "MBA Operations",
            linkedIn: "linkedin.com/in/prashantsharma"
          }
        ],
        infrastructure: [
          {
            category: "Manufacturing Units",
            items: [
              {
                name: "Glass Manufacturing Line",
                model: "Advanced Production Line",
                specifications: "Fully automated glass forming and inspection",
                quantity: 3
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 702,
    title: "Secondary Packaging Services",
    description: "Secondary packaging and labeling solutions",
    category: "Secondary Packaging",
    providers: []
  },
  {
    id: 703,
    title: "Labeling Services",
    description: "Comprehensive pharmaceutical labeling solutions",
    category: "Labeling Services",
    providers: []
  }
];
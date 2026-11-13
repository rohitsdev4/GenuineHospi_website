import * as React from 'react';
import { Bed, Stethoscope, Syringe, HeartPulse } from 'lucide-react';

export type ProductFaq = {
  question: string;
  answer: string;
};

export type Product = {
  iconName: 'Bed' | 'Stethoscope' | 'Syringe' | 'HeartPulse';
  name: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  description: string;
  longDescription: string;
  features: string[];
  applications: string[];
  specifications: Record<string, string>;
  faqs: ProductFaq[];
  images: string[];
  aiHint: string;
};

export const products: Product[] = [
  {
    iconName: 'Bed',
    name: 'Modular Operation Theaters',
    slug: 'modular-operation-theaters',
    seoTitle:
      'Modular Operation Theater Manufacturer & Turnkey Setup India | SS 304 NABH OT',
    seoDescription:
      'Buy NABH compliant SS 304 Modular Operation Theaters (MOT) in India. Turnkey installation with Laminar Air Flow, HEPA filters, hermetic doors & surgeon control panel. PAN India service.',
    keywords: [
      'modular operation theater manufacturer India',
      'modular OT setup cost India',
      'SS 304 modular operation theatre',
      'NABH compliant modular OT',
      'laminar airflow OT ceiling',
      'hermetic sealing OT door',
      'modular OT Punjab Bihar',
    ],
    description:
      'We offer SS 304 Modular Operation Theaters, built to the highest standards for hospital use. Our modular, waterproof designs feature a polished finish, ensuring durability and hygiene. We provide PAN-India service for these state-of-the-art, NABH-compliant OTs.',
    longDescription:
      'Our Modular Operation Theaters are engineered to provide a highly sterile, controlled, and aesthetically pleasing environment for surgical procedures. We utilize high-quality SS 304 panels which are corrosion-resistant, easy to clean, and extremely durable. Adhering strictly to NABH and international standards, our OT setups include laminar airflow systems, hermetically sealing doors, anti-static flooring, and integrated control panels to ensure the safety and comfort of patients and surgical teams.',
    features: [
      'SS 304 double-skinned wall and ceiling panels',
      'Hermetically sealing sliding doors (manual or automatic)',
      'Laminar Air Flow (LAF) ceiling systems with HEPA filters',
      'Anti-static, conductive PVC flooring',
      'Surgeons control panel (touch screen or digital)',
      'X-ray viewing screens & writing boards',
      'Integrated medical gas outlets and power sockets',
    ],
    applications: [
      'General & Laparoscopic Surgery OTs',
      'Orthopedic & Joint Replacement OTs (Class 100)',
      'Cardiac & Neurosurgery Suites',
      'Gynecology & Maternity OTs',
      'Ophthalmology & ENT Operation Rooms',
    ],
    specifications: {
      'Wall Structure': 'Stainless Steel 304 (1.2mm / 1.5mm thickness)',
      'Sterility Level': 'Class 100 / Class 10,000 (NABH compliant)',
      'Air Flow Rate': '20 to 25 air changes per hour',
      'Flooring Resistance': '10^4 to 10^6 Ohms (Anti-static)',
      'Door Type': 'Hermetically sealed sliding door with glass view port',
      'Control Panel': '6-tile or 9-tile microprocessor controller',
    },
    faqs: [
      {
        question: 'Are your Modular Operation Theaters NABH compliant?',
        answer:
          'Yes. All our SS 304 Modular Operation Theaters are engineered to meet NABH 5th Edition and HTM guidelines, including Class 100/10,000 HEPA laminar airflow, positive pressure differential, and seamless anti-static conductive flooring.',
      },
      {
        question: 'How long does it take to install a Modular OT?',
        answer:
          'A standard single Modular Operation Theater takes 25 to 40 days from site readiness to testing and commissioning, depending on HVAC and MGPS scope.',
      },
      {
        question: 'Do you provide Modular OT installation outside Punjab and Bihar?',
        answer:
          'Yes, Genuine Hospi Enterprises executes turnkey Modular OT projects PAN India, including Delhi NCR, Haryana, UP, Jharkhand, West Bengal, Assam, MP, and Jammu & Kashmir.',
      },
    ],
    images: [
      '/images/modular-ot.jpg',
      '/images/modular-ot1-1.jpeg',
      '/images/modular-ot1-6.jpeg',
      '/images/modular-ot1-7.jpeg',
    ],
    aiHint: 'operating room',
  },
  {
    iconName: 'Stethoscope',
    name: 'Intensive Care Units (ICU)',
    slug: 'intensive-care-units',
    seoTitle:
      'Turnkey ICU Setup & NICU Infrastructure Manufacturer India | NABH Compliant',
    seoDescription:
      'Complete turnkey ICU, NICU & PICU setup solutions in India by Genuine Hospi Enterprises. Dual-arm pendants, isolated power, HEPA ventilation & bed-head panels.',
    keywords: [
      'ICU setup India',
      'turnkey ICU setup manufacturer',
      'NICU setup supplier India',
      'ICU infrastructure NABH standards',
      'ICU bed head panel supplier',
      'ICU ceiling pendant India',
    ],
    description:
      'We specialize in custom-designed ICU setups that adhere to NABH standards. Our ICUs are equipped with cutting-edge patient monitoring, advanced life support systems, and robust infection control measures for superior patient care.',
    longDescription:
      'Genuine Hospi Enterprises designs and installs turnkey Intensive Care Units (ICUs) customized for maximum patient safety and clinical efficiency. Our ICU setups incorporate isolated power systems, integrated nurse call stations, advanced pendant systems, and optimized layouts that guarantee easy patient access and monitoring from central nursing stations. We focus heavily on infection control with antimicrobial surface finishes and dedicated ventilation zoning.',
    features: [
      'NABH compliant ward layouts with isolated cubicles',
      'Dual-arm ceiling pendants for gas and power',
      'Centralized nursing station with integrated monitoring systems',
      'HEPA filtered air handling units (AHUs) for pressure control',
      'Antimicrobial wall paints and seamless flooring',
      'Advanced medical-grade lighting and nurse call systems',
    ],
    applications: [
      'Medical & Surgical ICUs (MICU / SICU)',
      'Neonatal Intensive Care Units (NICU)',
      'Pediatric Intensive Care Units (PICU)',
      'Cardiac Care Units (CCU)',
      'High Dependency Units (HDU) & Isolation Wards',
    ],
    specifications: {
      'Ventilation Zoning': 'Positive/Negative pressure isolation rooms',
      'Electrical System': 'IPS (Isolated Power System) with line isolation monitor',
      'Gas Outlets': 'Oxygen, Vacuum, Air 4 Bar (HTM 02-01 compliant)',
      Flooring: '2mm seamless antimicrobial vinyl flooring',
      Lighting: 'Anti-glare LED cleanroom light fittings',
    },
    faqs: [
      {
        question: 'What is included in a turnkey ICU setup?',
        answer:
          'Our turnkey ICU package covers architectural layout planning, medical gas bed-head units or pendants, isolated electrical wiring, antimicrobial flooring, nurse call systems, and motorized ICU beds.',
      },
      {
        question: 'Do you set up negative-pressure isolation ICU rooms?',
        answer:
          'Yes, we design and commission both positive-pressure protective cubicles and negative-pressure infectious isolation ICU rooms with dedicated HEPA filtration.',
      },
    ],
    images: [
      '/images/icu-setup-1.jpeg',
      '/images/icu-setup-2.jpeg',
      '/images/icu-setup-3.jpeg',
    ],
    aiHint: 'hospital ICU',
  },
  {
    iconName: 'Syringe',
    name: 'Medical Gas Pipelines',
    slug: 'medical-gas-pipelines',
    seoTitle:
      'Medical Gas Pipeline System (MGPS) Manufacturer & Installer India | HTM 02-01',
    seoDescription:
      'Certified Medical Gas Pipeline System (MGPS) installation across India. Degreased copper pipes, automatic oxygen manifold, AVSU, area alarms & bed-head units.',
    keywords: [
      'medical gas pipeline system India',
      'MGPS installation company',
      'medical gas pipeline manufacturer',
      'hospital oxygen pipeline copper',
      'automatic oxygen manifold supplier',
      'bed head panel manufacturer India',
    ],
    description:
      'Our end-to-end Medical Gas Pipeline System (MGPS) installations adhere to the highest safety standards, including HTM 02-01 and ISO 7396-1. We ensure a reliable and safe delivery of medical gases like Oxygen, Nitrous Oxide, and more, throughout your healthcare facility.',
    longDescription:
      'Our Medical Gas Pipeline System (MGPS) provides a continuous, safe, and regulated supply of key medical gases (Oxygen, Nitrous Oxide, Carbon Dioxide, Medical Air, Surgical Air, and Vacuum) to critical areas such as OTs, ICUs, emergency rooms, and general wards. Adhering strictly to HTM 02-01 and ISO 7396-1 standards, we handle everything from manifold systems, area alarm panels, and isolation valves, to copper piping installation and bed-head unit termination.',
    features: [
      'Degreased medical-grade copper pipes (solid drawn, seamless)',
      'Fully automatic gas manifold panels with digital displays',
      'Multi-stage area valve service units (AVSUs)',
      'Area alarm panels for pressure level alerts (high/low)',
      'Custom bed-head panels with integrated gas outlets',
      'Certified leakage and purity testing pre-handover',
    ],
    applications: [
      'Multispeciality & Super-Speciality Hospitals',
      'Operation Theaters & ICU Wings',
      'Emergency & Trauma Care Centers',
      'Maternity & Nursing Homes',
      'Dental & Day-Care Surgical Clinics',
    ],
    specifications: {
      'Copper Pipe Standards': 'BS EN 13348 (Medical Grade)',
      'Manifold Control': 'Microprocessor controlled, automatic changeover',
      'Alarm Systems': 'Audio-visual digital alarm panel',
      'Outlets Standard': 'BS 5682 / DIN 13260-2 self-sealing outlets',
      'Working Pressures':
        'O2/N2O/Air: 4.2 Bar | Surgical Air: 7 Bar | Vacuum: -400 mmHg',
    },
    faqs: [
      {
        question: 'Which copper pipe standard do you use for MGPS?',
        answer:
          'We strictly use BS EN 13348 medical-grade, degreased, solid-drawn seamless copper pipes brazed with nitrogen purging to prevent internal oxidation.',
      },
      {
        question: 'Do you provide pressure testing and certification?',
        answer:
          'Yes, every MGPS installation undergoes 24-hour pneumatic pressure holding tests, cross-connection checks, and gas purity verification before handover.',
      },
    ],
    images: [
      '/images/gas-pipeline.jpeg',
      '/images/gas-pipeline-1.jpeg',
      '/images/gas-pipeline-2.jpeg',
      '/images/gas-pipeline-3.jpeg',
    ],
    aiHint: 'medical equipment',
  },
  {
    iconName: 'Bed',
    name: 'Hospital Furniture',
    slug: 'hospital-furniture',
    seoTitle:
      'Hospital Furniture & ICU Bed Manufacturer India | Fowler Beds, Trolleys & Crash Carts',
    seoDescription:
      'Direct manufacturer of 5-function electric ICU beds, Fowler beds, semi-fowler beds, crash carts, stretchers & bedside lockers in India. ISO & CE certified.',
    keywords: [
      'hospital furniture manufacturer India',
      'ICU bed manufacturer India',
      '5 function electric ICU bed price',
      'fowler bed supplier India',
      'hospital trolley crash cart manufacturer',
      'hospital beds Jalandhar Punjab Bihar',
    ],
    description:
      'We supply a complete range of high-quality, durable, and ergonomic furniture for all hospital needs, including patient beds, examination tables, trolleys, and waiting area chairs, designed for comfort and functionality.',
    longDescription:
      'Genuine Hospi Enterprises is a major supplier of hospital-grade furniture, offering robust and ergonomic designs built for long-term clinical utility and patient comfort. Our product line features ICU beds (5-function/3-function electric & manual), fowler and semi-fowler beds, bedside lockers, overbed tables, examination couches, crash carts, instrument trolleys, and patient transfer stretchers, all made with high-quality mild steel with epoxy powder coating.',
    features: [
      'Multi-functional motorized ICU beds with CPR position controls',
      'Antibacterial ABS plastic head and foot boards',
      'Heavy-duty castors with central braking systems',
      'Epoxy powder coated steel frames for rust prevention',
      'Ergonomic bedside lockers & overbed tables',
      'Fully equipped emergency crash carts with drawer divider systems',
    ],
    applications: [
      'ICU & Critical Care Wards',
      'General & Private Patient Rooms',
      'OPD Examination & Consultation Rooms',
      'Emergency & Casualty Departments',
      'Hospital Waiting & Reception Areas',
    ],
    specifications: {
      'ICU Bed Functions':
        'Backrest, Knee rest, Height adjustment, Trendelenburg, Reverse Trendelenburg',
      'Beds Frame': 'Rectangular MS tubes, pre-treated and powder coated',
      'Weight Capacity': 'Up to 250 kg (Safe working load)',
      'Castors Size': '125mm / 150mm with dust cover and central locking',
      Certifications: 'CE, ISO 9001, ISO 13485',
    },
    faqs: [
      {
        question: 'Can we order bulk hospital furniture with custom hospital branding?',
        answer:
          'Yes, we fulfill bulk orders for new hospitals and nursing homes PAN India with custom color finishes, mattress options, and warranty support.',
      },
      {
        question: 'Do your motorized ICU beds include battery backup?',
        answer:
          'Yes, our 5-function electric ICU beds come with heavy-duty linear actuators and optional battery backup for uninterrupted positioning during power transitions.',
      },
    ],
    images: [
      '/images/hospital-furniture-1.jpeg',
      '/images/hospital-furniture-2.jpeg',
      '/images/hospital-furniture-3.jpeg',
      '/images/hospital-furniture-4.jpeg',
    ],
    aiHint: 'hospital furniture',
  },
  {
    iconName: 'HeartPulse',
    name: 'Oxygen Generation Plant',
    slug: 'oxygen-generation-plant',
    seoTitle:
      'PSA Oxygen Generation Plant Manufacturer India | Medical Oxygen Plant for Hospitals',
    seoDescription:
      'On-site PSA Medical Oxygen Generation Plants (93%±3% purity) for hospitals in India. Automated PLC control, cylinder filling option & turnkey MGPS integration.',
    keywords: [
      'PSA oxygen plant manufacturer India',
      'oxygen generation plant for hospital',
      'medical oxygen generator price India',
      'hospital oxygen plant installation',
      'on-site oxygen plant supplier',
    ],
    description:
      'We install reliable and cost-effective on-site oxygen generation plants. Our solutions provide a continuous and autonomous supply of medical-grade oxygen, reducing dependency on external suppliers and ensuring critical care readiness.',
    longDescription:
      'Our on-site PSA (Pressure Swing Adsorption) Oxygen Generation Plants provide hospitals with a reliable, continuous, and autonomous source of high-purity medical oxygen. By producing oxygen directly from ambient air, our systems eliminate the logistical challenges, safety risks, and recurring costs associated with liquid oxygen tanks and high-pressure cylinders. Each plant features integrated monitoring systems to ensure gas quality complies with Pharmacopeia standards.',
    features: [
      'PSA technology for high-purity oxygen generation (93% to 95%)',
      'Fully automated, unmanned operation with touch-screen controls',
      'Integrated purity analyzers with automatic shutdown and backup switch',
      'Heavy-duty air compressors and desiccant air dryers',
      'Stainless steel piping and medical-grade buffer tanks',
      'Cylinder filling station addon option available',
    ],
    applications: [
      '50-Bed to 500-Bed Hospitals',
      'District & Rural Healthcare Centers',
      'COVID & Respiratory Care Units',
      'High-Consumption Surgical Centers',
    ],
    specifications: {
      'Oxygen Purity': '93% ± 3% (adhering to USP/EP medical guidelines)',
      'PSA Zeolite Life': 'Up to 10 years with proper maintenance',
      'Control System': 'PLC based with remote telemetry option',
      Piping: 'Stainless Steel 316 / Copper',
      'Power Source': '415V, 3-Phase, 50Hz',
    },
    faqs: [
      {
        question: 'What capacities are available for hospital PSA Oxygen Plants?',
        answer:
          'We supply and install PSA Oxygen Generation Plants ranging from 5 Nm3/hr (approx. 100 LPM) up to 100+ Nm3/hr, sized precisely to your hospital bed count and OT/ICU demand.',
      },
      {
        question: 'Can the PSA plant connect directly to our existing MGPS?',
        answer:
          'Yes, our PSA plants integrate seamlessly with existing Medical Gas Pipeline Systems and include automatic changeover to backup cylinder manifolds.',
      },
    ],
    images: ['/images/gas-pipeline.jpeg', '/images/gas-pipeline-4.jpeg', '/images/gas-pipeline-5.jpeg'],
    aiHint: 'oxygen plant',
  },
  {
    iconName: 'Stethoscope',
    name: 'Air Conditioning System',
    slug: 'air-conditioning-system',
    seoTitle:
      'Hospital HVAC & Operation Theater Air Conditioning System India | NABH & ASHRAE 170',
    seoDescription:
      'Specialized Hospital HVAC, Hygienic AHUs & Laminar Airflow systems for Operation Theaters and ICUs in India. 3-stage HEPA filtration, positive pressure & humidity control.',
    keywords: [
      'hospital HVAC system India',
      'operation theater air conditioning',
      'OT AHU manufacturer India',
      'NABH compliant HVAC for OT',
      'cleanroom air handling unit hospital',
    ],
    description:
      'We provide specialized HVAC systems designed for healthcare facilities. Our solutions ensure optimal air quality, precise temperature and humidity control, and compliance with standards for operating theatres and critical care areas.',
    longDescription:
      'Our Specialized Healthcare HVAC (Heating, Ventilation, and Air Conditioning) systems are tailored specifically to meet the strict hygiene and climate control requirements of modern surgical and critical care departments. Adhering to ASHRAE 170 and NABH guidelines, we configure custom AHUs equipped with three-stage filtration (including HEPA) to maintain positive pressure barriers, prevent cross-contamination, and achieve precise room temperature and relative humidity levels.',
    features: [
      'Hygienic Air Handling Units (AHUs) with double-skin panels',
      'Three-stage filtration: Pre-filters, Micro-filters, and HEPA filters',
      'Precise temperature control (18°C to 23°C) and relative humidity control (40% to 60%)',
      'Positive pressure control to maintain sterile zone integrity',
      'Variable Frequency Drives (VFDs) for energy-efficient air flow control',
      'Integrated ducting with anti-microbial coatings',
    ],
    applications: [
      'Modular Operation Theaters (Class 100 / 10,000)',
      'ICU, NICU & Burn Care Wards',
      'IVF Labs & Cleanrooms',
      'Central Sterile Supply Departments (CSSD)',
    ],
    specifications: {
      'Filtration Efficiency': '99.97% down to 0.3 microns (HEPA)',
      'Air Change Rates': 'Exceeding 20 air changes per hour for OTs',
      'Pressure Gradient': '+15 Pa to +25 Pa relative to adjacent rooms',
      Refrigerant: 'Eco-friendly R410A / R407C',
      'Duct Material': 'Galvanized Iron (GI) with insulation or Pre-insulated (PID)',
    },
    faqs: [
      {
        question: 'Why is a specialized AHU required for an Operation Theater instead of split AC?',
        answer:
          'Split ACs recirculate unfiltered air and cannot maintain positive pressure, humidity (40-60% RH), or 20+ air changes per hour required by NABH. Hygienic AHUs with 3-stage HEPA filtration prevent surgical site infections.',
      },
      {
        question: 'Do you provide validation and particle count testing after HVAC installation?',
        answer:
          'Yes, we conduct airflow velocity, HEPA integrity (DOP/PAO), temperature/humidity, and room pressurization validation upon commissioning.',
      },
    ],
    images: ['/images/modular-ot.jpg', '/images/modular-ot1-7.jpeg'],
    aiHint: 'air conditioning',
  },
];

export function getProductIcon(iconName: string) {
  switch (iconName) {
    case 'Bed':
      return <Bed className="h-10 w-10 text-primary" />;
    case 'Stethoscope':
      return <Stethoscope className="h-10 w-10 text-primary" />;
    case 'Syringe':
      return <Syringe className="h-10 w-10 text-primary" />;
    case 'HeartPulse':
      return <HeartPulse className="h-10 w-10 text-primary" />;
    default:
      return <Bed className="h-10 w-10 text-primary" />;
  }
}

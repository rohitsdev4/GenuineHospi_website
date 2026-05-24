import * as React from 'react';
import { Bed, Stethoscope, Syringe, HeartPulse } from 'lucide-react';

export type Product = {
  iconName: 'Bed' | 'Stethoscope' | 'Syringe' | 'HeartPulse';
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  features: string[];
  specifications: Record<string, string>;
  images: string[];
  aiHint: string;
};

export const products: Product[] = [
  {
    iconName: 'Bed',
    name: 'Modular Operation Theaters',
    slug: 'modular-operation-theaters',
    description: 'We offer SS 304 Modular Operation Theaters, built to the highest standards for hospital use. Our modular, waterproof designs feature a polished finish, ensuring durability and hygiene. We provide PAN-India service for these state-of-the-art, NABH-compliant OTs.',
    longDescription: 'Our Modular Operation Theaters are engineered to provide a highly sterile, controlled, and aesthetically pleasing environment for surgical procedures. We utilize high-quality SS 304 panels which are corrosion-resistant, easy to clean, and extremely durable. Adhering strictly to NABH and international standards, our OT setups include laminar airflow systems, hermetically sealing doors, anti-static flooring, and integrated control panels to ensure the safety and comfort of patients and surgical teams.',
    features: [
      'SS 304 double-skinned wall and ceiling panels',
      'Hermetically sealing sliding doors (manual or automatic)',
      'Laminar Air Flow (LAF) ceiling systems with HEPA filters',
      'Anti-static, conductive PVC flooring',
      'Surgeons control panel (touch screen or digital)',
      'X-ray viewing screens & writing boards',
      'Integrated medical gas outlets and power sockets'
    ],
    specifications: {
      'Wall Structure': 'Stainless Steel 304 (1.2mm / 1.5mm thickness)',
      'Sterility Level': 'Class 100 / Class 10,000 (NABH compliant)',
      'Air Flow Rate': '20 to 25 air changes per hour',
      'Flooring Resistance': '10^4 to 10^6 Ohms (Anti-static)',
      'Door Type': 'Hermetically sealed sliding door with glass view port',
      'Control Panel': '6-tile or 9-tile microprocessor controller'
    },
    images: [
      '/images/modular-ot.jpg',
      '/images/modular-ot1-1.jpeg',
      '/images/modular-ot1-6.jpeg'
    ],
    aiHint: 'operating room',
  },
  {
    iconName: 'Stethoscope',
    name: 'Intensive Care Units (ICU)',
    slug: 'intensive-care-units',
    description: 'We specialize in custom-designed ICU setups that adhere to NABH standards. Our ICUs are equipped with cutting-edge patient monitoring, advanced life support systems, and robust infection control measures for superior patient care.',
    longDescription: 'Genuine Hospi Enterprises designs and installs turnkey Intensive Care Units (ICUs) customized for maximum patient safety and clinical efficiency. Our ICU setups incorporate isolated power systems, integrated nurse call stations, advanced pendant systems, and optimized layouts that guarantee easy patient access and monitoring from central nursing stations. We focus heavily on infection control with antimicrobial surface finishes and dedicated ventilation zoning.',
    features: [
      'NABH compliant ward layouts with isolated cubicles',
      'Dual-arm ceiling pendants for gas and power',
      'Centralized nursing station with integrated monitoring systems',
      'HEPA filtered air handling units (AHUs) for pressure control',
      'Antimicrobial wall paints and seamless flooring',
      'Advanced medical-grade lighting and nurse call systems'
    ],
    specifications: {
      'Ventilation Zoning': 'Positive/Negative pressure isolation rooms',
      'Electrical System': 'IPS (Isolated Power System) with line isolation monitor',
      'Gas Outlets': 'Oxygen, Vacuum, Air 4 Bar (HTM 02-01 compliant)',
      'Flooring': '2mm seamless antimicrobial vinyl flooring',
      'Lighting': 'Anti-glare LED cleanroom light fittings'
    },
    images: [
      '/images/icu-setup-1.jpeg',
      '/images/icu-setup-2.jpeg',
      '/images/icu-setup-3.jpeg'
    ],
    aiHint: 'hospital ICU',
  },
  {
    iconName: 'Syringe',
    name: 'Medical Gas Pipelines',
    slug: 'medical-gas-pipelines',
    description: 'Our end-to-end Medical Gas Pipeline System (MGPS) installations adhere to the highest safety standards, including HTM 2022. We ensure a reliable and safe delivery of medical gases like Oxygen, Nitrous Oxide, and more, throughout your healthcare facility.',
    longDescription: 'Our Medical Gas Pipeline System (MGPS) provides a continuous, safe, and regulated supply of key medical gases (Oxygen, Nitrous Oxide, Carbon Dioxide, Medical Air, Surgical Air, and Vacuum) to critical areas such as OTs, ICUs, emergency rooms, and general wards. Adhering strictly to HTM 02-01 and ISO 7396-1 standards, we handle everything from manifold systems, area alarm panels, and isolation valves, to copper piping installation and bed-head unit termination.',
    features: [
      'Degreased medical-grade copper pipes (solid drawn, seamless)',
      'Fully automatic gas manifold panels with digital displays',
      'Multi-stage area valve service units (AVSUs)',
      'Area alarm panels for pressure level alerts (high/low)',
      'Custom bed-head panels with integrated gas outlets',
      'Certified leakage and purity testing pre-handover'
    ],
    specifications: {
      'Copper Pipe Standards': 'BS EN 13348 (Medical Grade)',
      'Manifold Control': 'Microprocessor controlled, automatic changeover',
      'Alarm Systems': 'Audio-visual digital alarm panel',
      'Outlets Standard': 'BS 5682 / DIN 13260-2 self-sealing outlets',
      'Working Pressures': 'O2/N2O/Air: 4.2 Bar | Surgical Air: 7 Bar | Vacuum: -400 mmHg'
    },
    images: [
      '/images/gas-pipeline.jpeg',
      '/images/gas-pipeline-1.jpeg',
      '/images/gas-pipeline-2.jpeg'
    ],
    aiHint: 'medical equipment',
  },
  {
    iconName: 'Bed',
    name: 'Hospital Furniture',
    slug: 'hospital-furniture',
    description: 'We supply a complete range of high-quality, durable, and ergonomic furniture for all hospital needs, including patient beds, examination tables, trolleys, and waiting area chairs, designed for comfort and functionality.',
    longDescription: 'Genuine Hospi Enterprises is a major supplier of hospital-grade furniture, offering robust and ergonomic designs built for long-term clinical utility and patient comfort. Our product line features ICU beds (5-function/3-function electric & manual), fowler and semi-fowler beds, bedside lockers, overbed tables, examination couches, crash carts, instrument trolleys, and patient transfer stretchers, all made with high-quality mild steel with epoxy powder coating.',
    features: [
      'Multi-functional motorized ICU beds with CPR position controls',
      'Antibacterial ABS plastic head and foot boards',
      'Heavy-duty castors with central braking systems',
      'Epoxy powder coated steel frames for rust prevention',
      'Ergonomic bedside lockers & overbed tables',
      'Fully equipped emergency crash carts with drawer divider systems'
    ],
    specifications: {
      'ICU Bed Functions': 'Backrest, Knee rest, Height adjustment, Trendelenburg, Reverse Trendelenburg',
      'Beds Frame': 'Rectangular MS tubes, pre-treated and powder coated',
      'Weight Capacity': 'Up to 250 kg (Safe working load)',
      'Castors Size': '125mm / 150mm with dust cover and central locking',
      'Certifications': 'CE, ISO 9001, ISO 13485'
    },
    images: [
      '/images/hospital-furniture-1.jpeg',
      '/images/hospital-furniture-2.jpeg',
      '/images/hospital-furniture-3.jpeg'
    ],
    aiHint: 'hospital furniture',
  },
  {
    iconName: 'HeartPulse',
    name: 'Oxygen Generation Plant',
    slug: 'oxygen-generation-plant',
    description: 'We install reliable and cost-effective on-site oxygen generation plants. Our solutions provide a continuous and autonomous supply of medical-grade oxygen, reducing dependency on external suppliers and ensuring critical care readiness.',
    longDescription: 'Our on-site PSA (Pressure Swing Adsorption) Oxygen Generation Plants provide hospitals with a reliable, continuous, and autonomous source of high-purity medical oxygen. By producing oxygen directly from ambient air, our systems eliminate the logistical challenges, safety risks, and recurring costs associated with liquid oxygen tanks and high-pressure cylinders. Each plant features integrated monitoring systems to ensure gas quality complies with Pharmacopeia standards.',
    features: [
      'PSA technology for high-purity oxygen generation (93% to 95%)',
      'Fully automated, unmanned operation with touch-screen controls',
      'Integrated purity analyzers with automatic shutdown and backup switch',
      'Heavy-duty air compressors and desiccant air dryers',
      'Stainless steel piping and medical-grade buffer tanks',
      'Cylinder filling station addon option available'
    ],
    specifications: {
      'Oxygen Purity': '93% ± 3% (adhering to USP/EP medical guidelines)',
      'PSA Zeolite Life': 'Up to 10 years with proper maintenance',
      'Control System': 'PLC based with remote telemetry option',
      'Piping': 'Stainless Steel 316 / Copper',
      'Power Source': '415V, 3-Phase, 50Hz'
    },
    images: ['/images/gas-pipeline.jpeg'],
    aiHint: 'oxygen plant',
  },
  {
    iconName: 'Stethoscope',
    name: 'Air Conditioning System',
    slug: 'air-conditioning-system',
    description: 'We provide specialized HVAC systems designed for healthcare facilities. Our solutions ensure optimal air quality, precise temperature and humidity control, and compliance with standards for operating theatres and critical care areas.',
    longDescription: 'Our Specialized Healthcare HVAC (Heating, Ventilation, and Air Conditioning) systems are tailored specifically to meet the strict hygiene and climate control requirements of modern surgical and critical care departments. Adhering to ASHRAE 170 and NABH guidelines, we configure custom AHUs equipped with three-stage filtration (including HEPA) to maintain positive pressure barriers, prevent cross-contamination, and achieve precise room temperature and relative humidity levels.',
    features: [
      'Hygienic Air Handling Units (AHUs) with double-skin panels',
      'Three-stage filtration: Pre-filters, Micro-filters, and HEPA filters',
      'Precise temperature control (18°C to 23°C) and relative humidity control (40% to 60%)',
      'Positive pressure control to maintain sterile zone integrity',
      'Variable Frequency Drives (VFDs) for energy-efficient air flow control',
      'Integrated ducting with anti-microbial coatings'
    ],
    specifications: {
      'Filtration Efficiency': '99.97% down to 0.3 microns (HEPA)',
      'Air Change Rates': 'Exceeding 20 air changes per hour for OTs',
      'Pressure Gradient': '+15 Pa to +25 Pa relative to adjacent rooms',
      'Refrigerant': 'Eco-friendly R410A / R407C',
      'Duct Material': 'Galvanized Iron (GI) with insulation or Pre-insulated (PID)'
    },
    images: ['/images/modular-ot.jpg'],
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

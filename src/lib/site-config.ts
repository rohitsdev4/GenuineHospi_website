export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://genuinehospi.vercel.app';

export const COMPANY_INFO = {
  name: 'Genuine Hospi Enterprises',
  shortName: 'Genuine Hospi',
  tagline: "India's Trusted Hospital Setup Experts",
  foundedYear: 2015,
  email: 'rohitsingh8885882@gmail.com',
  businessEmail: 'genuinehospi2022@gmail.com',
  phones: {
    primary: '+91 62075 07418',
    primaryHref: 'tel:+916207507418',
    primaryRaw: '916207507418',
    secondary: '+91 94788 84840',
    secondaryHref: 'tel:+919478884840',
  },
  addresses: {
    headOffice: {
      label: 'Head Office (Punjab)',
      street: '204, St 02, Sanjay Gandhi Nagar, Industrial Area',
      city: 'Jalandhar',
      state: 'Punjab',
      postalCode: '144004',
      country: 'IN',
      full: '204, St 02, Sanjay Gandhi Nagar, Industrial Area, Jalandhar, 144004, Punjab, India',
    },
    branchOffice: {
      label: 'Branch Office (Bihar)',
      street: 'Bazaar, Pachrukhi',
      city: 'Siwan',
      state: 'Bihar',
      postalCode: '841241',
      country: 'IN',
      full: 'Bazaar, Pachrukhi, Siwan, 841241, Bihar, India',
    },
  },
  serviceStates: [
    'Punjab',
    'Bihar',
    'Delhi NCR',
    'Haryana',
    'Uttar Pradesh',
    'Jharkhand',
    'West Bengal',
    'Assam',
    'Madhya Pradesh',
    'Chhattisgarh',
    'Jammu & Kashmir',
    'Rajasthan',
  ],
} as const;

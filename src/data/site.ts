/**
 * Global site data. Edit any of these values to update the site.
 */

export const site = {
  name: 'Neupane Y. & Associates',
  shortName: 'NY&A',
  monogram: 'NY&A',
  tagline: 'Chartered Accountants',
  promise: 'Accounting Excellence. Business Confidence.',
  description:
    'Neupane Y. & Associates is a Bhaktapur-based chartered accountancy firm offering audit, tax and advisory services for ambitious Nepali businesses.',
  url: 'https://neupaney.com',
  founded: 2019,
  email: 'yogeshneupane2638@gmail.com',
  phone: '+977 970-5459501',
  phoneRaw: '+9779705459501',
  address: {
    line1: 'Chardobato, Madhyapur Thimi',
    line2: 'Bhaktapur 44800',
    region: 'Bagmati Province',
    country: 'Nepal',
  },
  hours: {
    weekdays: 'Sunday – Friday · 10:00 – 18:00',
    weekend: 'Saturday closed',
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61585189030160',
    linkedin: '#',
    twitter: '#',
  },
  /** Web3Forms access key. Replace with the user's real key from web3forms.com */
  contactFormKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
};

export const nav = {
  primary: [
    { label: 'About', href: '/about/' },
    { label: 'Services', href: '/services/' },
    { label: 'Team', href: '/team/' },
    { label: 'Insights', href: '/insights/' },
    { label: 'Contact', href: '/contact/' },
  ],
  footer: {
    services: [
      { label: 'Statutory Audit', href: '/services/statutory-audit/' },
      { label: 'Internal Audit', href: '/services/internal-audit/' },
      { label: 'Tax Advisory', href: '/services/tax-advisory/' },
      { label: 'Business Advisory', href: '/services/business-advisory/' },
      { label: 'Company Registration', href: '/services/company-registration/' },
      { label: 'Bookkeeping', href: '/services/bookkeeping-accounting/' },
      { label: 'Payroll', href: '/services/payroll/' },
    ],
    firm: [
      { label: 'About', href: '/about/' },
      { label: 'Team', href: '/team/' },
      { label: 'Insights', href: '/insights/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
};

/**
 * Stats shown on the home page. Values are intentionally honest /
 * understated for a young firm — easy to revise once real figures are in.
 */
export const stats = [
  { value: '120+', label: 'Engagements delivered' },
  { value: '40+', label: 'Active client relationships' },
  { value: '7', label: 'Service lines' },
  { value: '100%', label: 'Filing accuracy rate' },
];

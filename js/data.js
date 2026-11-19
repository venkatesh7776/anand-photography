/* =========================================================================
   ANAND PHOTOGRAPHY — site content & demo data
   -------------------------------------------------------------------------
   Everything editable lives here. All photographs are DEMO placeholders
   (Unsplash). Replace `img()` calls with your own files, e.g.
   "assets/photos/weddings/sravani-karthik-01.jpg".
   ========================================================================= */

const img = (id, w = 1600) =>
  id.startsWith('assets/') || id.startsWith('http')
    ? id
    : `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const P = {
  // Weddings
  varmala: '1610173826608-bd1f53a52db1',
  mehendiHands: '1597157639073-69284dc0fdaf',
  mehendiGroup: '1505932794465-147d1f1b2c97',
  mandap: '1587271407850-8d438ca9fdf2',
  bride: '1617627143750-d86bc21e42bb',
  confettiWalk: '1595407753234-0882f1e77954',
  hillCouple: '1604017011826-d3b4c23f8914',
  kiss: '1583939003579-730e3918a45a',
  palmCouple: '1606216794074-735e91aa2c92',
  beachCouple: '1537633552985-df8429e8048b',
  ringHands: '1465495976277-4387d4b0b4c6',
  holdHands: '1520854221256-17451cc331bf',
  rings: '1606800052052-a08af7148866',
  bouquet: '1519741497674-611481863552',
  balloonWedding: '1511285560929-80b456fea0bc',
  // Events
  confetti: '1492684223066-81342ee5ff30',
  balloons: '1530103862676-de8c9debad1d',
  cake: '1464349095431-e9a21285b5f3',
  crowd: '1560439514-4e9645039924',
  // Maternity & newborn
  maternity: '1600721391689-2564bb8055de',
  sleepingBaby: '1544126592-807ade215a0b',
  babyFeet: '1555252333-9f8e92e65df9',
  babyFloat: '1519689680058-324335c77eba',
  motherBaby: '1492725764893-90b379c2b6e7',
  babyToys: '1515488042361-ee00e0ddd4e4',
  // Family
  family: '1609220136736-443140cffec6',
  groupSunset: '1511895426328-dc8714191300',
  kids: '1497486751825-1233686d5d80',
  // Portraits
  portraitBW: '1623091410901-00e2d268901f',
  portraitM: '1507003211169-0a1dd7228f2d',
  portraitF: '1531746020798-e6953c6e8e04',
  portraitF2: '1544005313-94ddf0286df2',
  portraitRed: '1494790108377-be9c29b29330',
  // School
  school: '1588072432836-e10032774350',
  schoolDesk: '1503676260728-1c00da094a0b',
  // Misc
  anniversary: '1621621667797-e06afc217fb0',
  camera: '1516035069371-29a1b244cc32',
  vintage: '1452587925148-ce544e77e70d',
};

const SITE = {
  name: 'Anand Photography',
  phone: '+91 98494 01484',
  phoneRaw: '+919849401484',
  whatsapp: 'https://wa.me/919849401484',
  address:
    'Vishnu Street, KRM Colony, Maddilapalem, Visakhapatnam, Andhra Pradesh 530022, India',
  rating: '5.0',
  reviews: 708,
  // TODO: replace with the exact Google Business Profile review link
  reviewsUrl:
    'https://www.google.com/maps/search/?api=1&query=Anand+Photography+Maddilapalem+Visakhapatnam',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Anand+Photography+Vishnu+Street+KRM+Colony+Maddilapalem+Visakhapatnam+530022',
  mapEmbed:
    'https://www.google.com/maps?q=Anand+Photography+Vishnu+Street+KRM+Colony+Maddilapalem+Visakhapatnam&output=embed',
  // TODO: add once confirmed
  instagram: '#',
  instagramHandle: '@anandphotography',
  facebook: '#',
  youtube: '#',
  // Set to a Formspree / Getform / backend URL to receive enquiries by email.
  formEndpoint: '',
};

/* ---------- Hero slides (wedding first) ---------- */
const HERO_SLIDES = [
  { src: P.varmala, label: 'Weddings', pos: '65% 35%' },
  { src: P.bride, label: 'Bridal Portraits', pos: '70% 22%' },
  { src: P.hillCouple, label: 'Engagements', pos: '60% 45%' },
  { src: P.family, label: 'Family', pos: '70% 30%' },
];

/* ---------- Categories = service pages (service.html?s=key) ---------- */
const CATEGORIES = [
  {
    key: 'weddings', title: 'Weddings & Engagements', short: 'Weddings', cover: P.mandap, hero: P.varmala,
    tagline: 'Wedding & Engagement Photography',
    intro: 'Beautifully capturing every emotion, celebration and unforgettable moment of your special day.',
    body: 'From the first rituals to the final farewell, we stay close to the moments that matter — the laughter, the tears, the family, the details — so you can relive your day exactly as it felt.',
    highlights: ['Engagement & pre-wedding shoots', 'Haldi, mehendi & sangeet', 'Muhurtham & wedding rituals', 'Couple & family portraits', 'Reception celebrations'],
    feature: P.bride,
  },
  {
    key: 'events', title: 'Events & Celebrations', short: 'Events', cover: P.balloons, hero: P.confetti,
    tagline: 'Events, Parties & Anniversaries',
    intro: 'From birthdays to family celebrations, we capture the moments that make every occasion memorable.',
    body: 'Celebrations move fast. We capture the candid smiles, the cake-cutting, the hugs and the little in-between moments — and anniversaries that celebrate years of togetherness.',
    highlights: ['Birthday celebrations', 'Anniversary photoshoots', 'House-warming & family functions', 'Naming & cradle ceremonies', 'Corporate & community events'],
    feature: P.cake,
  },
  {
    key: 'maternity', title: 'Maternity & Newborn', short: 'Maternity', cover: P.sleepingBaby, hero: P.motherBaby,
    tagline: 'Maternity & Newborn Photography',
    intro: 'Preserving the beautiful beginnings and precious moments of a growing family.',
    body: 'Gentle, relaxed sessions that celebrate the wait and welcome the newest member of your family — tiny fingers, sleepy smiles and all.',
    highlights: ['Maternity photoshoots', 'Newborn sessions', 'Baby milestones', 'Parents & siblings portraits'],
    feature: P.babyFeet,
  },
  {
    key: 'family', title: 'Family & Group Portraits', short: 'Family', cover: P.family, hero: P.groupSunset,
    tagline: 'Family & Group Photography',
    intro: 'Creating timeless photographs with the people who matter most.',
    body: 'Whether it’s three generations together or a reunion of old friends, we create natural, joyful portraits you’ll want on your walls.',
    highlights: ['Family portraits', 'Generational photographs', 'Friends & group shoots', 'Outdoor & studio sessions'],
    feature: P.kids,
  },
  {
    key: 'portraits', title: 'Individual Portraits', short: 'Portraits', cover: P.portraitBW, hero: P.portraitF2,
    tagline: 'Individual Portraits & Professional Headshots',
    intro: 'Personal and professional portraits that capture your personality and confidence.',
    body: 'From personal portraits to polished headshots for work, we help you look and feel your best in front of the camera.',
    highlights: ['Personal portraits', 'Professional headshots', 'Profile & portfolio shoots', 'Birthday & milestone portraits'],
    feature: P.portraitM,
  },
  {
    key: 'school', title: 'School Photography', short: 'School', cover: P.school, hero: P.kids,
    tagline: 'School Photography',
    intro: 'Capturing memorable school moments through individual portraits and group photographs.',
    body: 'Organised, friendly school photo days that give every student a portrait to be proud of — plus class and group photographs to remember the year.',
    highlights: ['Individual student portraits', 'Class & group photographs', 'Annual day & school events'],
    feature: P.schoolDesk,
  },
];

/* ---------- Events (newest first) — SAMPLE names, replace with real clients ---------- */
const EVENTS = [
  {
    slug: 'sravani-karthik',
    title: 'Sravani & Karthik',
    category: 'Wedding',
    cat: 'weddings',
    location: 'Visakhapatnam',
    date: 'October 2026',
    cover: P.varmala,
    intro:
      'Two families, one beautiful celebration — from the colours of the mehendi to the quiet glances during the muhurtham.',
    photos: [P.varmala, P.mehendiHands, P.mandap, P.bride, P.mehendiGroup, P.ringHands, P.rings, P.bouquet, P.holdHands],
  },
  {
    slug: 'aarav-first-birthday',
    title: "Aarav's First Birthday",
    category: 'Birthday Celebration',
    cat: 'events',
    location: 'Visakhapatnam',
    date: 'September 2026',
    cover: P.cake,
    intro: 'Balloons, cake and a whole lot of giggles — a first birthday the family will relive for years.',
    photos: [P.cake, P.balloons, P.babyFloat, P.babyToys, P.confetti, P.crowd],
  },
  {
    slug: 'divya-maternity',
    title: 'Divya',
    category: 'Maternity Photoshoot',
    cat: 'maternity',
    location: 'RK Beach, Visakhapatnam',
    date: 'August 2026',
    cover: P.motherBaby,
    intro: 'A soft, light-filled session celebrating the beautiful wait for a new beginning.',
    photos: [P.motherBaby, P.maternity, P.sleepingBaby, P.babyFeet, P.babyFloat],
  },
  {
    slug: 'the-varma-family',
    title: 'The Varma Family',
    category: 'Family Portraits',
    cat: 'family',
    location: 'Kailasagiri, Visakhapatnam',
    date: 'July 2026',
    cover: P.family,
    intro: 'Three generations, one golden evening, and plenty of candid laughter.',
    photos: [P.family, P.groupSunset, P.kids, P.portraitBW],
  },
  {
    slug: 'meghana-rohit',
    title: 'Meghana & Rohit',
    category: 'Engagement',
    cat: 'weddings',
    location: 'Rushikonda, Visakhapatnam',
    date: 'June 2026',
    cover: P.hillCouple,
    intro: 'A sunset engagement shoot by the hills — easy, joyful and completely them.',
    photos: [P.hillCouple, P.palmCouple, P.beachCouple, P.kiss, P.confettiWalk, P.balloonWedding],
  },
  {
    slug: 'silver-jubilee',
    title: 'Ramesh & Lakshmi',
    category: 'Anniversary Photoshoot',
    cat: 'events',
    location: 'Visakhapatnam',
    date: 'May 2026',
    cover: P.anniversary,
    intro: 'Twenty-five years of togetherness, told in a single afternoon.',
    photos: [P.anniversary, P.holdHands, P.ringHands, P.rings],
  },
];

/* ---------- Portfolio (shape: t = tall, w = wide, s = square) ---------- */
const PORTFOLIO = [
  { src: P.varmala, cat: 'weddings', shape: 't', caption: 'The Varmala' },
  { src: P.balloons, cat: 'events', shape: 's', caption: 'Birthday Bash' },
  { src: P.bride, cat: 'weddings', shape: 't', caption: 'Bridal Grace' },
  { src: P.motherBaby, cat: 'maternity', shape: 's', caption: 'Little Joys' },
  { src: P.portraitBW, cat: 'portraits', shape: 't', caption: 'Monochrome' },
  { src: P.mandap, cat: 'weddings', shape: 'w', caption: 'The Mandap' },
  { src: P.family, cat: 'family', shape: 't', caption: 'Weekend Smiles' },
  { src: P.sleepingBaby, cat: 'maternity', shape: 'w', caption: 'First Dreams' },
  { src: P.mehendiHands, cat: 'weddings', shape: 's', caption: 'Mehendi Details' },
  { src: P.cake, cat: 'events', shape: 't', caption: 'Sweet Beginnings' },
  { src: P.portraitM, cat: 'portraits', shape: 's', caption: 'Confidence' },
  { src: P.groupSunset, cat: 'family', shape: 'w', caption: 'Golden Hour' },
  { src: P.hillCouple, cat: 'weddings', shape: 't', caption: 'Hills & Hearts' },
  { src: P.babyFeet, cat: 'maternity', shape: 's', caption: 'Tiny Toes' },
  { src: P.confetti, cat: 'events', shape: 'w', caption: 'Celebration' },
  { src: P.portraitF, cat: 'portraits', shape: 't', caption: 'Quiet Strength' },
  { src: P.kids, cat: 'family', shape: 's', caption: 'Together' },
  { src: P.mehendiGroup, cat: 'weddings', shape: 'w', caption: 'Sisterhood' },
  { src: P.school, cat: 'school', shape: 's', caption: 'Classroom Days' },
  { src: P.schoolDesk, cat: 'school', shape: 's', caption: 'First Day' },
  { src: P.kids, cat: 'school', shape: 'w', caption: 'Friends Forever' },
  { src: P.portraitF2, cat: 'portraits', shape: 't', caption: 'Natural Light' },
  { src: P.babyFloat, cat: 'maternity', shape: 's', caption: 'Summer Baby' },
  { src: P.palmCouple, cat: 'weddings', shape: 't', caption: 'Pure Joy' },
  { src: P.crowd, cat: 'events', shape: 'w', caption: 'The Crowd' },
  { src: P.portraitRed, cat: 'portraits', shape: 's', caption: 'Radiant' },
];

/* ---------- Testimonials (verbatim Google reviews) ---------- */
const REVIEWS = [
  { text: 'Very worthy pics with less and reasonable price and good service 📸', name: 'Google Reviewer' },
  { text: 'Highly recommend for family shoots.', name: 'Google Reviewer' },
  { text: 'Hii anand sir nice photography..with least price..best quality of pic..', name: 'Google Reviewer' },
];

/* ---------- FAQ — answers are DRAFTS, confirm with the studio ---------- */
const FAQS = [
  { q: 'How can I book a photoshoot?', a: 'Simply call or WhatsApp us on +91 98494 01484, or send an enquiry through the form on this page. Share your occasion, preferred date and requirements, and we’ll get back to you.' },
  { q: 'What types of photography services do you offer?', a: 'We cover weddings and engagements, events and parties, maternity and newborn, family and group photography, school photography, anniversary shoots, and individual and professional headshots.' },
  { q: 'Do you provide both photography and videography?', a: 'Yes — we offer professional photography and videography. Let us know what you need for your occasion and we’ll suggest the right coverage.' },
  { q: 'Do you cover weddings outside Visakhapatnam?', a: 'Please reach out with your venue and dates. We’ll confirm availability and travel details during our conversation.' },
  { q: 'Do you offer pre-wedding photoshoots?', a: 'Get in touch to discuss pre-wedding shoot ideas, locations and dates — we’d love to plan it with you.' },
  { q: 'How long does it take to receive the photographs?', a: 'Delivery timelines depend on the type and size of the event. We’ll share a clear timeline with you while planning your booking.' },
  { q: 'Can I request a customised photography package?', a: 'Absolutely. Tell us about your occasion and expectations, and we’ll put together options that suit your requirements.' },
  { q: 'How can I know the pricing for my event?', a: 'Pricing depends on the occasion, duration and coverage required. Call, WhatsApp or send an enquiry and we’ll share the details for your event.' },
];

/* ---------- Instagram showcase (replace with real posts) ---------- */
const INSTAGRAM = [P.bride, P.motherBaby, P.mehendiHands, P.family, P.cake, P.palmCouple];

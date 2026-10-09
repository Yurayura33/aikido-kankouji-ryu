// Cropped from page 2 of the client's flyer; that is the only copy we have of these photos.
import montserratImage from '../assets/lineage-montserrat.jpg';
import estanislauImage from '../assets/lineage-estanislau.jpg';
import yasueImage from '../assets/lineage-yasue.jpg';

const description =
  'Aikido Kankouji-ryu dojo in the UK, led by Joseph (Koken), 7th Dan in Kankouji-ryu Aiki. Learn the way of harmony through traditional Aikido training.';

export const aikido = {
  meta: {
    title: 'Aikido Kankouji-ryu | 合気道 冠光寺流',
    description,
  },
  // JSON-LD passed to Layout; @context and url are added there.
  schema: {
    '@type': 'SportsActivityLocation',
    name: 'Aikido Kankouji-ryu',
    description,
    sport: 'Aikido',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1A The Parade, Benyon Rd',
      addressLocality: 'Carshalton',
      addressRegion: 'Surrey',
      postalCode: 'SM5 3RL',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.3626838,
      longitude: -0.1677329,
    },
  },
  nav: {
    about: 'About',
    aiki: 'Kankouji-ryu Aiki',
    instructor: 'Instructor',
    firstVisit: 'First Visit',
    videos: 'Videos',
    contact: 'Contact',
  },
  hero: {
    titleJp: '合気道 冠光寺流',
    titleEn: 'Aikido Kankouji-ryu',
    tagline:
      'The way of harmony — cultivating body, mind, and spirit through the art of Aikido',
    cta: 'Get in Touch',
    scroll: 'Scroll',
  },
  about: {
    title: 'What is Aikido?',
    subtitle: '合気道とは',
    p1: 'The spirit of Aikido, as expressed in the word “aiki,” lies in the attitude of living together in harmony without conflict. Aikido is not merely a martial art for fighting, but a path to protect both oneself and others, and to build peace.',
    p2: 'For this reason, Aikido emphasizes not clashing with force, but accepting and redirecting the opponent’s energy to create harmony. Through training, practitioners cultivate both body and mind, nurture a spirit of respect, and value mutual growth over victory or defeat.',
    p3: 'This spirit extends beyond the dojo into everyday life, fostering the ability to respond flexibly in the face of difficulties, to seek harmony in human relationships, and to achieve inner stability through proper posture and breathing.',
  },
  // The style taught here, from the client's printed flyer.
  aiki: {
    title: 'What is Kankouji-ryu Aiki?',
    question: {
      before: 'How can the teaching ',
      emphasis: '“Love your enemies”',
      after: ' be practised through Budo?',
    },
    paragraphs: [
      'Kankouji-ryu Aiki is a unique martial art that integrates the teachings of love from Jesus Christ with Aikido, a traditional Japanese martial art. Its core principle is “Love your enemies.”',
      'It does not aim to defeat an opponent, but to create no enemies, to understand others, and to transform conflict into harmony through love.',
    ],
    // Japanese parts are marked so screen readers read them with a Japanese voice.
    nameNote: [
      'In Kankouji-ryu, “aiki” is also written ',
      { ja: '愛魂' },
      ', from the characters for love (',
      { ja: '愛' },
      ') and soul (',
      { ja: '魂' },
      ').',
    ],
  },
  lineage: {
    title: 'The Lineage and History',
    steps: [
      {
        name: 'Montserrat Monastery (Spain)',
        text: 'According to the tradition passed down in Montserrat, Spain, it is said that when Jesus faced a violent attacker, He overcame the situation not with hatred, but with love, and even transformed the attacker’s heart.',
        image: montserratImage,
        imageAlt: 'Montserrat Monastery beneath the jagged peaks of the Montserrat mountains',
      },
      {
        name: 'Father Estanislau',
        text: 'This teaching was later transmitted to modern times through Father Estanislau.',
        image: estanislauImage,
        imageAlt: 'Portrait of Father Estanislau',
      },
      {
        name: 'Prof. Kunio Yasue',
        text: 'Japanese martial artist Prof. Kunio Yasue inherited this tradition and, through many years of training in Japanese martial arts and the power of love, created Kankouji-ryu Aiki.',
        image: yasueImage,
        imageAlt: 'Portrait of Prof. Kunio Yasue in a white training uniform',
      },
    ],
    uk: 'Now, for the first time outside of Japan, this unique path of Aiki can be learnt here in the UK.',
    invitation: 'Join us and experience a new way to face conflict through Aiki.',
  },
  instructor: {
    title: 'Instructor',
    subtitle: '指導者',
    name: 'Joseph (Koken)',
    rank: '7th Dan — Kankouji-ryu Aiki',
    bio1: 'From a young age, Joseph has studied Qigong and martial arts, while also immersing himself in the spiritual traditions of the East. In 25 years of martial arts training he has studied Kendo, Karate (in which he holds a black belt) and Aikido, and he currently holds the rank of 7th Dan in Kankouji-ryu Aiki.',
    bio2: 'Now based in the UK, he also provides treatments that help balance the flow of “Ki,” supporting harmony of both body and mind. With years of experience in martial arts and energy practice, Joseph is dedicated to sharing his knowledge in a clear and approachable way.',
  },
  firstVisit: {
    title: 'Your First Class',
    subtitle: 'はじめての方へ',
    intro: 'New to Aikido? Everyone is welcome, regardless of age or experience. Here’s what to know before your first session.',
    items: [
      {
        label: 'What to wear',
        text: 'Comfortable, loose-fitting clothing such as a tracksuit or T-shirt and joggers. If you have a gi (training uniform), feel free to bring it.',
      },
      {
        label: 'Fitness level',
        text: 'No prior fitness or martial arts experience is required. Training is adapted to each individual’s ability.',
      },
      {
        label: 'What to expect',
        text: 'Classes begin with warm-up exercises and breathing, followed by technique practice with a partner. The atmosphere is respectful and supportive.',
      },
      {
        label: 'What to bring',
        text: 'Just yourself, a bottle of water, and an open mind. Please remove jewellery before training.',
      },
    ],
    pricing: 'Your first class is free. After that:',
    fees: [
      { label: 'Twice a week', price: '£50 / month' },
      { label: 'Once a week', price: '£30 / month' },
      { label: 'Drop-in', price: '£10 per class' },
    ],
  },
  videos: {
    title: 'Videos & Social',
    subtitle: '動画・SNS',
    description:
      'Watch our training sessions and technique demonstrations on YouTube, or follow us on Instagram for the latest updates.',
    play: 'Play video',
    embedNotice:
      'Playing the video loads it from YouTube, which receives your IP address and may set cookies. We’ll remember your choice on this device.',
  },
  contact: {
    title: 'Contact',
    subtitle: 'お問い合わせ',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    locationLabel: 'Location',
    locationValue: 'Nickel Support Carshalton, Richard James Hub, 16 The Parade, Beynon Rd, Carshalton SM5 3RL',
    scheduleLabel: 'Schedule',
    scheduleValue: [
      { day: 'Every Sunday', time: '3:15 – 4:15 PM' },
      { day: 'Every Wednesday', time: '7:00 – 8:00 PM' },
    ],
    viewOnMap: 'View on Google Maps',
    showMap: 'Show map',
    mapNotice:
      'Showing the map loads it from Google, which receives your IP address and may set cookies. We’ll remember your choice on this device.',
  },
  footer: {
    backToTop: 'Back to top ↑',
  },
};

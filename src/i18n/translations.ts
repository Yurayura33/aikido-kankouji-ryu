export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    instructor: string;
    firstVisit: string;
    videos: string;
    contact: string;
  };
  hero: {
    titleJp: string;
    titleEn: string;
    tagline: string;
    cta: string;
    scroll: string;
  };
  about: {
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    p3: string;
  };
  instructor: {
    title: string;
    subtitle: string;
    name: string;
    rank: string;
    bio1: string;
    bio2: string;
  };
  firstVisit: {
    title: string;
    subtitle: string;
    intro: string;
    items: { label: string; text: string }[];
    pricing: string;
  };
  videos: {
    title: string;
    subtitle: string;
    description: string;
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    locationValue: string;
    viewOnMap: string;
  };
  footer: {
    copy: string;
    backToTop: string;
  };
}

export const en: Translations = {
  meta: {
    title: 'Aikido Kankouji-ryu | 合気道 冠光寺流',
    description:
      'Aikido Kankouji-ryu dojo in the UK, led by Joseph Eiko (7th Dan Shihan). Learn the way of harmony through traditional Aikido training.',
  },
  nav: {
    about: 'About',
    instructor: 'Instructor',
    firstVisit: 'First Visit',
    videos: 'Videos',
    contact: 'Contact',
  },
  hero: {
    titleJp: '合気道 冠光寺流',
    titleEn: 'Aikido Kankouji-ryu',
    tagline:
      'The way of harmony \u2014 cultivating body, mind, and spirit through the art of Aikido',
    cta: 'Get in Touch',
    scroll: 'Scroll',
  },
  about: {
    title: 'What is Aikido?',
    subtitle: '合気道とは',
    p1: 'The spirit of Aikido, as expressed in the word \u201caiki,\u201d lies in the attitude of living together in harmony without conflict. Aikido is not merely a martial art for fighting, but a path to protect both oneself and others, and to build peace.',
    p2: 'For this reason, Aikido emphasizes not clashing with force, but accepting and redirecting the opponent\u2019s energy to create harmony. Through training, practitioners cultivate both body and mind, nurture a spirit of respect, and value mutual growth over victory or defeat.',
    p3: 'This spirit extends beyond the dojo into everyday life, fostering the ability to respond flexibly in the face of difficulties, to seek harmony in human relationships, and to achieve inner stability through proper posture and breathing.',
  },
  instructor: {
    title: 'Instructor',
    subtitle: '指導者',
    name: 'Joseph Eiko',
    rank: '7th Dan Shihan \u2014 Kankouji-ryu Jujutsu',
    bio1: 'From a young age, Joseph has studied Qigong and martial arts, while also immersing himself in the spiritual traditions of the East. His training includes Kendo, Karate, and Aikido, and he currently holds the rank of 7th Dan Shihan in Kankouji-ryu Jujutsu.',
    bio2: 'Now based in the UK, he also provides treatments that help balance the flow of \u201cKi,\u201d supporting harmony of both body and mind. With years of experience in martial arts and energy practice, Joseph is dedicated to sharing his knowledge in a clear and approachable way.',
  },
  firstVisit: {
    title: 'Your First Class',
    subtitle: 'はじめての方へ',
    intro: 'New to Aikido? Everyone is welcome, regardless of age or experience. Here\u2019s what to know before your first session.',
    items: [
      {
        label: 'What to wear',
        text: 'Comfortable, loose-fitting clothing such as a tracksuit or T-shirt and joggers. If you have a gi (training uniform), feel free to bring it.',
      },
      {
        label: 'Fitness level',
        text: 'No prior fitness or martial arts experience is required. Training is adapted to each individual\u2019s ability.',
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
    pricing: 'Interested? Contact us to book your first session.',
  },
  videos: {
    title: 'Videos & Social',
    subtitle: '動画・SNS',
    description:
      'Watch our training sessions and technique demonstrations on YouTube, or follow us on Instagram for the latest updates.',
  },
  contact: {
    title: 'Contact',
    subtitle: 'お問い合わせ',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    locationLabel: 'Location',
    locationValue: 'United Kingdom',
    viewOnMap: 'View on Google Maps',
  },
  footer: {
    copy: 'Aikido Kankouji-ryu. All rights reserved.',
    backToTop: 'Back to top \u2191',
  },
};
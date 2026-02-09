export interface Translations {
  meta: {
    title: string;
    description: string;
    ogLocale: string;
  };
  nav: {
    about: string;
    instructor: string;
    videos: string;
    contact: string;
    langSwitch: string;
    langSwitchHref: string;
  };
  hero: {
    titleJp: string;
    titleEn: string;
    tagline: string;
    cta: string;
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
    ogLocale: 'en_GB',
  },
  nav: {
    about: 'About',
    instructor: 'Instructor',
    videos: 'Videos',
    contact: 'Contact',
    langSwitch: '日本語',
    langSwitchHref: '/aikido-kankouji-ryu/ja/',
  },
  hero: {
    titleJp: '合気道 冠光寺流',
    titleEn: 'Aikido Kankouji-ryu',
    tagline:
      'The way of harmony \u2014 cultivating body, mind, and spirit through the art of Aikido',
    cta: 'Discover Aikido',
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

export const ja: Translations = {
  meta: {
    title: '合気道 冠光寺流 | Aikido Kankouji-ryu',
    description:
      '英国を拠点とする合気道冠光寺流の道場。ジョセフ・栄光（七段師範）が指導。伝統的な合気道の稽古を通じて、調和の道を学びましょう。',
    ogLocale: 'ja_JP',
  },
  nav: {
    about: '合気道について',
    instructor: '指導者',
    videos: '動画',
    contact: 'お問い合わせ',
    langSwitch: 'English',
    langSwitchHref: '/aikido-kankouji-ryu/en/',
  },
  hero: {
    titleJp: '合気道 冠光寺流',
    titleEn: 'Aikido Kankouji-ryu',
    tagline: '調和の道 — 合気道を通じて心身を磨き、精神を養う',
    cta: '合気道を知る',
  },
  about: {
    title: '合気道とは',
    subtitle: 'What is Aikido?',
    p1: '合気道の精神は「合気」という言葉に表されるように、争わず共に調和して生きるという姿勢にあります。合気道は単なる格闘技ではなく、自分と他者の両方を守り、平和を築くための道です。',
    p2: 'そのため、合気道は力でぶつかるのではなく、相手のエネルギーを受け入れ、導くことで調和を生み出すことを重視します。稽古を通じて、心身を鍛え、敬意の心を育み、勝ち負けよりも互いの成長を大切にします。',
    p3: 'この精神は道場の外にも広がり、困難に柔軟に対応する力、人間関係の中に調和を求める力、そして正しい姿勢と呼吸を通じて内面の安定を得る力を育みます。',
  },
  instructor: {
    title: '指導者',
    subtitle: 'Instructor',
    name: 'ジョセフ・栄光',
    rank: '冠光寺流柔術 七段師範',
    bio1: 'ジョセフは幼少期より気功や武道を学び、東洋の精神的伝統にも深く関わってきました。剣道、空手、合気道の修行を経て、現在は冠光寺流柔術の七段師範の位を持っています。',
    bio2: '現在は英国を拠点に、「気」の流れを整える施術も行い、心身の調和をサポートしています。長年の武道と気の実践の経験を活かし、わかりやすく親しみやすい形で知識を伝えることに尽力しています。',
  },
  videos: {
    title: '動画・SNS',
    subtitle: 'Videos & Social',
    description:
      'YouTubeで稽古や技の実演をご覧いただけます。Instagramでは最新情報を発信しています。',
  },
  contact: {
    title: 'お問い合わせ',
    subtitle: 'Contact',
    emailLabel: 'メール',
    phoneLabel: '電話',
    locationLabel: '所在地',
    locationValue: '英国',
    viewOnMap: 'Google マップで見る',
  },
  footer: {
    copy: '合気道 冠光寺流 All rights reserved.',
    backToTop: 'トップへ戻る \u2191',
  },
};

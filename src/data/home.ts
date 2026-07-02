export const home = {
  meta: {
    title: 'Japanese Wellness & Aikido | Joseph', // TODO(name)
    description:
      'Japanese Wellness Therapy and traditional Aikido with Joseph in the UK — acupressure / Qi energy treatments and martial arts training rooted in the way of harmony.',
  },
  // JSON-LD passed to Layout; @context and url are added there.
  schema: {
    '@type': 'Person',
    name: 'Joseph', // TODO(name)
    jobTitle: 'Aikido Instructor & Japanese Wellness Practitioner',
    knowsAbout: ['Aikido', 'Acupressure', 'Qi energy healing', 'Japanese martial arts'],
  },
  intro: {
    titleJp: '癒し 調和', // decorative watermark ("Healing & Harmony") — TODO(jp): confirm with Joseph
    titleEn: 'Japanese Wellness & Aikido',
    tagline:
      'Led by Joseph — a Japanese energy practitioner and martial-arts master based in the UK — sharing the way of harmony both through healing and on the mat.',
  },
  services: [
    {
      key: 'therapy',
      name: 'Japanese Wellness Therapy',
      jp: '指圧と氣エネルギー', // TODO(jp): confirm Japanese with Joseph
      blurb:
        'Acupressure and Qi energy treatment to relieve tension, ease stress and restore the body’s natural balance. Home visits available.',
      href: '/therapy',
      cta: 'Explore Therapy',
    },
    {
      key: 'aikido',
      name: 'Aikido Kankouji-ryu',
      jp: '合気道 冠光寺流',
      blurb:
        'Traditional Aikido training for all ages and abilities — cultivating body, mind and spirit through the art of harmony.',
      href: '/aikido',
      cta: 'Explore Aikido',
    },
  ],
  footer: {
    backToTop: 'Back to top ↑',
  },
};

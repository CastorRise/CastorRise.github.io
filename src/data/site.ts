export const categories = [
  {
    slug: 'photography',
    imageStem: 'photo-01',
  },
  {
    slug: 'illustration',
    imageStem: 'illustration-01',
  },
  {
    slug: 'weather',
    imageStem: 'weather-01',
  },
] as const;

export type Category = (typeof categories)[number];

export const projects = [
  {
    slug: 'nimby',
    title: 'Nimby-finance-tool',
    description: {
      en: 'A lightweight analysis tool.',
      zh: '一个轻量的分析工具。',
      'zh-tw': '一個輕量的分析工具。',
      ja: '軽量な分析ツール。',
    },
    imageStem: 'nimby',
  },
] as const;

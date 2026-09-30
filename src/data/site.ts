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
    repository: 'https://github.com/CastorRise/nimby-finance-tool',
  },
  {
    slug: 'class-schedule-to-calendar',
    title: 'Class-schedule-to-Calendar',
    description: {
      en: 'Turn PDF class schedules into .ics files for your calendar.',
      zh: '课程表助手：把 PDF 课程表转换为 .ics 文件，导入手机或电脑日历。',
      'zh-tw': '課表助手：將 PDF 課表轉換為 .ics 檔案，匯入手機或電腦行事曆。',
      ja: 'PDF の時間割を .ics ファイルに変換し、スマートフォンやパソコンのカレンダーへ。',
    },
    imageStem: 'class-schedule',
    repository: 'https://github.com/CastorRise/Class-schedule-to-Calendar',
  },
] as const;

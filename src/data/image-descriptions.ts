import type { Locale } from '../i18n';
import type { Category } from './site';

type ImageDescription = string | Partial<Record<Locale, string>>;

// 图片简介按模块、文件名填写，文件名不含扩展名。空字符串或没有条目时，左下角留空。
// 例如：'photo-02': '傍晚的街道，记录城市里的片刻。',
// 直接填写字符串时，四种语言共用这一段文字。
// 分别翻译可写：'photo-02': { zh: '中文简介', en: 'English description', 'zh-tw': '繁體簡介', ja: '日本語の紹介' },
// 翻译未填写时使用 zh；某个语言明确填写 '' 时，该语言留空。
export const imageDescriptions: Record<Category['slug'], Record<string, ImageDescription>> = {
  photography: {
    'photo-01': '',
    'photo-02': '',
    'photo-03': '',
    'photo-04': '',
    'photo-05': '',
    'photo-06': '',
    'photo-07': '',
    'photo-08': '',
    'photo-09': '',
    'photo-10': '',
    'photo-11': '',
    'photo-12': '',
    'photo-13': '',
    'photo-14': '',
  },
  illustration: {
    'illustration-01': '',
    'illustration-02': '',
    'illustration-03': '',
    'illustration-04': '',
    'illustration-05': '',
    'illustration-06': '',
    'illustration-07': '',
  },
  weather: {
    'weather-01': '',
    'weather-02': '',
    'weather-03': '',
    'weather-04': '',
    'weather-05': '',
    'weather-06': '',
  },
};

export function getImageDescription(category: Category['slug'], stem: string, locale: Locale): string {
  const entry = imageDescriptions[category][stem];
  const description = typeof entry === 'string' ? entry : entry?.[locale] ?? entry?.zh ?? '';
  return description.trim();
}

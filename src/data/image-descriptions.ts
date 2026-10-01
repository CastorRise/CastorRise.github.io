import type { Locale } from '../i18n';
import type { Category } from './site';
import { imageDescriptionTranslations } from './image-description-translations';

// 图片简介按模块、文件名填写，文件名不含扩展名。空字符串或没有条目时，左下角留空。
// 例如：'photo-02': '傍晚的街道，记录城市里的片刻。',
// 这里只填写简体中文。填好后让 Codex 在发布前补译英文、繁体中文（台湾）和日文。
// 译文保存在 image-description-translations.ts；尚未补译时各语言暂时显示中文原文。
export const imageDescriptions: Record<Category['slug'], Record<string, string>> = {
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
  const description = imageDescriptions[category][stem]?.trim() ?? '';
  if (!description || locale === 'zh') return description;
  const translation = imageDescriptionTranslations[category][stem];
  return translation?.source === description ? translation[locale].trim() : description;
}

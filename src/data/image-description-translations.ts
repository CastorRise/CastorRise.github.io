import type { Locale } from '../i18n';
import type { Category } from './site';

type TranslatedDescription = { source: string } & Record<Exclude<Locale, 'zh'>, string>;

// 由 AI 根据中文原文逐条翻译，在发布前补齐；用户只需编辑 image-descriptions.ts。
// source 保存翻译时的中文原文。中文修改后，旧译文不会继续展示。
export const imageDescriptionTranslations: Record<Category['slug'], Record<string, TranslatedDescription>> = {
  photography: {},
  illustration: {},
  weather: {},
};

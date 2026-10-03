import type { Locale } from '../i18n';
import type { Category } from './site';
import { imageDescriptionTranslations } from './image-description-translations';

// 图片简介按模块、文件名填写，文件名不含扩展名。空字符串或没有条目时，左下角留空。
// 例如：'photo-02': '傍晚的街道，记录城市里的片刻。',
// 这里只填写简体中文。填好后让 Codex 在发布前补译英文、繁体中文（台湾）和日文。
// 译文保存在 image-description-translations.ts；尚未补译时各语言暂时显示中文原文。
export const imageDescriptions: Record<Category['slug'], Record<string, string>> = {
  photography: {
    'photo-01': '盛夏强生对流催生出的庞大积雨云，拍摄于河南省郑州市',
    'photo-02': '被满天的星星所拥抱，拍摄于湖南省浏阳市-大围山',
    'photo-03': '梅溪湖雨后火烧云日落，拍摄于湖南省长沙市-梅溪湖',
    'photo-04': '含苞待放的金色郁金香，拍摄于湖南省长沙市-省植物园',
    'photo-05': '彩云伴月，拍摄于河南省郑州市',
    'photo-06': '初夏强对流催生出的剧烈云地放电，拍摄于湖南省长沙市',
    'photo-07': '盛夏强对流后的晚霞，拍摄于河南省郑州市',
    'photo-08': '佩佩可爱！',
    'photo-09': '小特可爱！',
    'photo-10': '夕阳下的新郑国际机场，拍摄于河南省航空港区-CGO',
    'photo-11': '日落大道，拍摄于河南省郑州市-陇海快速路',
    'photo-12': '日落大道，拍摄于河南省郑州市-陇海快速路',
    'photo-13': '雪松，拍摄于河南省郑州市-西流湖',
    'photo-14': '雪梅，拍摄于河南省郑州市-西流湖',
  },
  illustration: {
    'illustration-01': '请你吃抹茶巴菲！',
    'illustration-02': '在看什么呢...？',
    'illustration-03': '看镜头！',
    'illustration-04': '上伊那牡丹、行ってきます！',
    'illustration-05': 'シーナ、見で！',
    'illustration-06': 'OC',
    'illustration-07': '牡丹伊吹99999',
  },
  weather: {
    'weather-01': '日落下的郑州城和远处的嵩山，拍摄于河南省郑州市',
    'weather-02': '冬季阴云、好似末日孤岛，拍摄于河南省郑州市',
    'weather-03': '初夏旺盛水汽爆发的大片浓积云，拍摄于湖南省长沙市-万家丽',
    'weather-04': '盛夏激烈强对流与局部降水，拍摄于河南省郑州市',
    'weather-05': '积雨云云砧与乳状云，拍摄于河南省郑州市',
    'weather-06': '',
  },
};

export function getImageDescription(category: Category['slug'], stem: string, locale: Locale): string {
  const description = imageDescriptions[category][stem]?.trim() ?? '';
  if (!description || locale === 'zh') return description;
  const translation = imageDescriptionTranslations[category][stem];
  return translation?.source === description ? translation[locale].trim() : description;
}

import type { Category } from './site';

export type ImageFolder = Category['slug'] | 'illustration/coming-soon';

// 上传日期：YYYY-MM-DD。现有日期来自图片首次加入仓库的提交记录（北京时间）。
// 新图片在发布时添加条目；重命名或替换预览文件时保留原上传日期。
export const imageUploadDates: Record<ImageFolder, Record<string, string>> = {
  photography: {
    'photo-01': '2026-09-30',
    'photo-02': '2026-09-30',
    'photo-03': '2026-09-30',
    'photo-04': '2026-09-30',
    'photo-05': '2026-09-30',
    'photo-06': '2026-09-30',
    'photo-07': '2026-09-30',
    'photo-08': '2026-09-30',
    'photo-09': '2026-09-30',
    'photo-10': '2026-09-30',
    'photo-11': '2026-09-30',
    'photo-12': '2026-09-30',
    'photo-13': '2026-09-30',
    'photo-14': '2026-09-30',
  },
  illustration: {
    'illustration-01': '2026-09-30',
    'illustration-02': '2026-09-30',
    'illustration-03': '2026-09-30',
    'illustration-04': '2026-09-30',
    'illustration-05': '2026-09-30',
    'illustration-06': '2026-09-30',
    'illustration-07': '2026-09-30',
  },
  weather: {
    'weather-01': '2026-09-30',
    'weather-02': '2026-09-30',
    'weather-03': '2026-09-30',
    'weather-04': '2026-09-30',
    'weather-05': '2026-09-30',
    'weather-06': '2026-09-30',
  },
  'illustration/coming-soon': {
    'coming-soon-01': '2026-09-30',
  },
};

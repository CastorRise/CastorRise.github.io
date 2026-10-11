// Coming Soon 独立预告图左下角显示的日期，仅用于展示，不会移动或变成正式作品。
export const illustrationReleaseDates: Record<string, string> = {
  'coming-soon-01': '2026-11-10',
};

// 正式插画自动解除隐藏：文件放在 public/images/illustration/，按文件名（不含扩展名）设置日期。
// 北京时间指定日期 00:00 显示。未列出的图片正常显示；列出但留空或日期无效则一直隐藏。
// 例如：'illustration-08': '2026-11-10',
export const illustrationPublishDates: Record<string, string> = {
};

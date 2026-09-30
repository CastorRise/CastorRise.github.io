# 图片放在哪里

把自己的图片复制到下面的目录，提交并推送到 `main` 后，GitHub Actions 会重新构建、发布网站。所有语言版本共用这些图片。

| 展示位置 | 本地目录 | 建议文件名 |
| --- | --- | --- |
| 首页滚动背景 | `public/images/hero/` | `hero-01.jpg`、`hero-02.jpg`、`hero-03.jpg`… |
| 摄影作品 | `public/images/photography/` | `photo-01.jpg`、`photo-02.jpg`… |
| 插画作品 | `public/images/illustration/` | `illustration-01.jpg`、`illustration-02.jpg`… |
| 插画 Coming Soon 预告 | `public/images/illustration/coming-soon/` | `coming-soon-01.jpg`、`coming-soon-02.jpg`… |
| 气象作品 | `public/images/weather/` | `weather-01.jpg`、`weather-02.jpg`… |
| 项目封面 | `public/images/projects/` | Nimby-finance-tool 使用 `nimby.png` |
| 课程表助手封面 | `public/images/projects/` | `class-schedule.jpg`、`class-schedule.png` 等 |

## 首页多图

首页自动读取 `hero/` 里的所有 JPEG、PNG、WebP 和 AVIF 图片，无需修改代码。每次打开或刷新首页，会随机抽取最多三张不同的照片，并随机排列。只有一两张时全部展示；关闭 JavaScript 时按文件名顺序展示前三张。滚动时图片依次向上移动，标题在这一组图片中保持居中；最后进入作品板块。只有一张图时展示一屏；没有图片时展示三屏占位背景。

原来的 `hero.jpg` 仍然支持。使用新编号命名时，如果不需要旧图，请移走旧文件，避免一起显示。不要为同一张图片放入多个格式，否则会分别展示。

建议选横图，宽度至少 2000 px。背景使用 `cover` 保持比例填满屏幕，手机上会裁掉左右两侧，主体尽量靠近中央。建议每张控制在约 300–800 KB，优先 WebP / AVIF；也支持 JPEG / PNG。原图会保留在目录中，构建时自动生成 480、800、1200、1600 和最高 1920 px 宽的 WebP 预览（质量 78，不放大小图），浏览器根据屏幕尺寸和像素密度选择版本。浏览器只加载本次选中的三张，第一张优先加载，后面的图片延迟加载。

## 作品与封面

摄影、插画、气象目录中的所有支持格式图片都会自动出现在各自的作品页，并按文件名排序。作品图保留原始比例，不加背景框；大屏分列上下接续排列，每列中的下一张图片紧接上一张，不按行对齐，手机单列展示。`photo-01`、`illustration-01`、`weather-01` 分别作为首页和作品总览的封面；对应的 `.jpg`、`.jpeg`、`.webp`、`.avif`、`.png` 都支持。手机封面均为 1:1；平板与大屏的插画封面为 1:1，摄影、气象封面为 16:9。

摄影与气象作品页中，原图宽高比超过 16:9 的横图会集中在作品列表最上面，横跨所有列展示大图；16:9 及以下的图片在后面继续按列排列。两组内部各自按文件名排序。手机仍为单列，所有图片保留原始比例。

## 插画 Coming Soon

即将发布的插画放在 `illustration/coming-soon/` 中，构建后会自动出现在插画页顶部的 Coming Soon 区域，并按文件名排序。支持 JPG、JPEG、PNG、WebP 和 AVIF，保留原图比例，按列上下接续排列。没有预告图片时会显示文字提示。

正式发布时，把图片从 `illustration/coming-soon/` 移到 `illustration/`，重新提交并推送。图片就会从预告区域移到已发布作品区域。所有语言版本共用图片；图片只有在提交、推送并完成网站构建后才会在线上显示。

作品页与封面也会生成上述多个尺寸的 WebP 预览，手机和分列作品页优先加载较小版本，保留原始比例与目录中的原文件。HEIC 图片需要先转换为 JPG、PNG 或 WebP；本次两张 HEIC 已转换为同名 JPG，原始 HEIC 仍保留，不会重复显示在作品页。

Nimby-finance-tool 的项目封面使用 `projects/nimby.png`，也支持上面列出的其他扩展名。项目资料在 `src/data/site.ts` 中修改。

课程表助手 `Class-schedule-to-Calendar` 的封面使用 `projects/class-schedule` 加支持的图片扩展名；没有图片时展示 PDF → ICS 文字封面。首页与项目页共用这些项目资料，课程表助手排在 NIMBY 下方。

本地预览运行 `npm run dev`；图片尺寸在构建时读取，增加或替换图片后需要重新构建。还没有图片时页面正常显示占位背景。

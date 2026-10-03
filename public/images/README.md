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
| 关于页配图 | `public/images/about/` | `about.jpg`，也支持 `.jpeg`、`.png`、`.webp`、`.avif` |

## 首页多图

首页自动读取 `hero/` 里的所有 JPEG、PNG、WebP 和 AVIF 图片，无需修改代码。每次打开或刷新首页，会随机抽取最多三张不同的照片，并随机排列。只有一两张时全部展示；关闭 JavaScript 时按文件名顺序展示前三张。滚动时图片依次向上移动，标题在这一组图片中保持居中；最后进入作品板块。只有一张图时展示一屏；没有图片时展示三屏占位背景。

原来的 `hero.jpg` 仍然支持。使用新编号命名时，如果不需要旧图，请移走旧文件，避免一起显示。不要为同一张图片放入多个格式，否则会分别展示。

建议选横图，宽度至少 2000 px。背景使用 `cover` 保持比例填满屏幕，手机上会裁掉左右两侧，主体尽量靠近中央。建议每张控制在约 300–800 KB，优先 WebP / AVIF；也支持 JPEG / PNG。原图会保留在目录中，构建时自动生成 480、800、1200、1600 和最高 1920 px 宽的 WebP 预览（质量 78，不放大小图），浏览器根据屏幕尺寸和像素密度选择版本。浏览器只加载本次选中的三张，第一张优先加载，后面的图片接近屏幕（提前 160 px）时才加载。

## 作品与封面

摄影、插画、气象目录中的所有支持格式图片都会自动出现在各自的作品页，并按文件名排序。作品图保留原始比例，不加背景框；大屏分列上下接续排列，每列中的下一张图片紧接上一张，不按行对齐，手机单列展示。`photo-01`、`illustration-01`、`weather-01` 分别作为首页和作品总览的封面；对应的 `.jpg`、`.jpeg`、`.webp`、`.avif`、`.png` 都支持。手机封面均为 1:1；平板与大屏的插画封面为 1:1，摄影、气象封面为 16:9。

摄影与气象作品页中，原图宽高比超过 16:9 的横图会集中在作品列表最上面，横跨所有列展示大图；16:9 及以下的图片在后面继续按列排列。两组内部各自按文件名排序。手机仍为单列，所有图片保留原始比例。

## 图片简介

摄影、已发布插画、气象作品的左下角显示可选简介。在 `src/data/image-descriptions.ts` 中，找到对应模块和图片文件名（不含 `.jpg` 等扩展名），把空字符串改成简介：

```ts
photography: {
  'photo-01': '', // 没有简介，左下角留空
  'photo-02': '傍晚的街道，记录城市里的片刻。',
}
```

现有图片已预留空白条目。新图片按同样格式加一行即可；没有条目或填写空字符串时不显示简介。简介跟随文件名，展示顺序变化不会串到其他图片。

这里只填写简体中文。填好后让 Codex 根据原文逐条翻译英文、繁体中文（台湾）和日文，并一起发布。AI 译文保存在 `src/data/image-description-translations.ts`，不需要自己维护。译文记录对应的中文原文；如果中文修改但还没有更新译文，各语言暂时显示新的中文原文，避免显示旧简介。修改后需要重新构建并发布。

## 上传日期

作品图片右下角按“上传于2026.9.30 文件名”显示上传日期与文件名，中间以空格隔开；其余语言显示对应语言的日期提示。Coming Soon 的左下角仍显示计划发布日期。

日期在 `src/data/image-upload-dates.ts` 中按模块、图片文件名填写，保存格式为 `YYYY-MM-DD`，展示时去掉月、日的前导零。现有图片使用首次加入仓库的提交日期（北京时间）。新图片发布时补上日期，图片重命名时一并移动日期条目。

## 插画 Coming Soon

图片左下角显示计划发布日期。日期在 `src/data/releases.ts` 中按图片文件名（不含扩展名）填写，格式为 `YYYY-MM-DD`，网页显示为 `YYYY.MM.DD`；尚未填写的图片显示“发布日期待定”。目前 `coming-soon-01` 的发布日期为 `2026.11.10`。

即将发布的插画放在 `illustration/coming-soon/` 中，构建后会自动出现在插画页顶部的 Coming Soon 区域，并按文件名排序。支持 JPG、JPEG、PNG、WebP 和 AVIF，保留原图比例，按列上下接续排列。没有预告图片时会显示文字提示。

正式发布时，把图片从 `illustration/coming-soon/` 移到 `illustration/`，重新提交并推送。图片就会从预告区域移到已发布作品区域。所有语言版本共用图片；图片只有在提交、推送并完成网站构建后才会在线上显示。

作品页与封面也会生成上述多个尺寸的 WebP 预览，手机和分列作品页优先加载较小版本，保留原始比例与目录中的原文件。HEIC 图片需要先转换为 JPG、PNG 或 WebP；本次两张 HEIC 已转换为同名 JPG，原始 HEIC 仍保留，不会重复显示在作品页。

Nimby-finance-tool 的项目封面使用 `projects/nimby.png`，也支持上面列出的其他扩展名。项目资料在 `src/data/site.ts` 中修改。

课程表助手 `Class-schedule-to-Calendar` 的封面使用 `projects/class-schedule` 加支持的图片扩展名；没有图片时展示 PDF → ICS 文字封面。首页自动展示最近更新代码的公开工程，项目页按同样的顺序展示全部工程。网站每天自动同步，也会在每次发布时同步 GitHub 信息。

新工程的封面放在 `projects/` 内，文件名默认使用 GitHub 仓库名称的小写形式，例如 `spectramark.png`。也可以在 `src/data/site.ts` 配置 `imageStem` 和四种语言的简介。没有封面时显示项目名称占位图。首页封面保持 16:9，图片与右侧简介背景做模糊渐变融合；手机端在图片底部融合。

本地预览运行 `npm run dev`；图片尺寸在构建时读取，增加或替换图片后需要重新构建。还没有图片时页面正常显示占位背景。

## 滚动加载

首页第一张背景立即加载；其他背景、模块封面、作品和项目图片仅在接近屏幕（提前 160 px）时发起请求，按用户当前滚动位置加载，不按文件顺序排队。图片加载后保留，往回滚动无需重复请求。关闭 JavaScript 或浏览器不支持 IntersectionObserver 时使用兼容加载方式。

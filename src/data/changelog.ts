import type { Locale } from '../i18n';

interface Update {
  date: string;
  content: Record<Locale, { title: string; changes: string[] }>;
}

export const changelog: Update[] = [
  {
    date: '2026-10-01',
    content: {
      zh: { title: '图片上传日期与简介译文', changes: ['图片右下角显示上传日期与文件名。', '简介只需填写简体中文，其余三种语言的 AI 译文分开维护。'] },
      'zh-tw': { title: '圖片上傳日期與簡介譯文', changes: ['圖片右下角顯示上傳日期與檔名。', '簡介只需填寫簡體中文，其餘三種語言的 AI 譯文分開維護。'] },
      en: { title: 'Image upload dates and translated descriptions', changes: ['Upload dates are displayed before filenames beneath each image.', 'Descriptions are authored in Simplified Chinese, with AI translations maintained separately for the other three languages.'] },
      ja: { title: '画像のアップロード日と紹介文の翻訳', changes: ['画像の右下にアップロード日とファイル名を表示。', '紹介文は簡体字中国語で入力し、ほかの 3 言語の AI 翻訳は別に管理。'] },
    },
  },
  {
    date: '2026-10-01',
    content: {
      zh: { title: '作品图片简介', changes: ['摄影、已发布插画和气象图片支持自定义简介，按文件名填写；没有简介时左下角留空。'] },
      'zh-tw': { title: '作品圖片簡介', changes: ['攝影、已發布插畫與氣象圖片支援自訂簡介，依檔名填寫；沒有簡介時左下角留空。'] },
      en: { title: 'Image descriptions', changes: ['Photography, published illustrations and weather images support optional descriptions keyed by filename; the lower-left caption stays blank when none is provided.'] },
      ja: { title: '作品画像の紹介文', changes: ['写真、公開済みイラスト、気象画像にファイル名で指定する紹介文を追加可能に。未入力の場合は左下を空欄で表示。'] },
    },
  },
  {
    date: '2026-10-01',
    content: {
      zh: { title: '首页提示与更新日志展示调整', changes: ['修复电脑和手机较矮窗口中“向下探索”文字被裁切的问题。', '更新日志默认展示最近三条，较早记录可在下方展开。'] },
      'zh-tw': { title: '首頁提示與更新紀錄顯示調整', changes: ['修正電腦與手機較矮視窗中「向下探索」文字被裁切的問題。', '更新紀錄預設顯示最近三則，較早紀錄可在下方展開。'] },
      en: { title: 'Home scroll cue and changelog display', changes: ['Fixed the clipped scroll cue in shorter desktop and mobile viewports.', 'The three latest updates are shown by default, with earlier entries expandable below.'] },
      ja: { title: 'ホームのスクロール案内と更新履歴の表示調整', changes: ['PC とモバイルの高さが小さい画面でスクロール案内が切れる問題を修正。', '最新の更新を 3 件表示し、それ以前の履歴は下で展開できるように変更。'] },
    },
  },
  {
    date: '2026-10-01',
    content: {
      zh: { title: '手机端图片加载修复', changes: ['调整摄影与气象的手机排版，并为滚动加载加入屏幕位置检查，避免第 4 张等图片漏加载。'] },
      'zh-tw': { title: '行動版圖片載入修正', changes: ['調整攝影與氣象的行動版排版，並為捲動載入加入畫面位置檢查，避免第 4 張等圖片漏載入。'] },
      en: { title: 'Mobile image loading fix', changes: ['Adjusted mobile photography and weather layouts and added viewport checks to prevent images, including the fourth one, from being skipped during scroll loading.'] },
      ja: { title: 'モバイルでの画像読み込みを修正', changes: ['写真と気象のモバイル表示を調整し、画面上の位置確認を追加して、4 枚目などの画像の読み込み漏れを防止。'] },
    },
  },
  {
    date: '2026-09-30',
    content: {
      zh: { title: '摄影作品更新', changes: ['新增 4 张摄影作品，作品集现共 14 张照片。'] },
      'zh-tw': { title: '攝影作品更新', changes: ['新增 4 張攝影作品，作品集現共 14 張照片。'] },
      en: { title: 'Photography collection update', changes: ['Added four photographs, bringing the collection to 14 images.'] },
      ja: { title: '写真作品の更新', changes: ['写真を 4 点追加し、作品集は全 14 点になりました。'] },
    },
  },
  {
    date: '2026-09-30',
    content: {
      zh: {
        title: '网站创建与细节打磨',
        changes: [
          '关于页加入配图与更新日志。',
          'Coming Soon 预告显示计划发布日期。',
          '作品页底部的“继续探索”可返回作品总览。',
          '压缩预览图片，按滚动位置加载，减少不必要的下载。',
          '摄影和气象中超过 16:9 的横图以大图展示，并集中放在最上面。',
          '加入课程表助手项目与封面。',
          '完善四种语言的切换、手机菜单动画与页脚内容。',
        ],
      },
      'zh-tw': {
        title: '網站建立與細節打磨',
        changes: [
          '關於頁加入配圖與更新紀錄。',
          'Coming Soon 預告顯示預計發佈日期。',
          '作品頁底部的「繼續探索」可返回作品總覽。',
          '壓縮預覽圖片，依捲動位置載入，減少不必要的下載。',
          '攝影和氣象中超過 16:9 的橫圖以大圖展示，並集中放在最上方。',
          '加入課表助手專案與封面。',
          '完善四種語言的切換、行動版選單動畫與頁尾內容。',
        ],
      },
      en: {
        title: 'Website creation and refinement',
        changes: [
          'Added artwork and a changelog to the About page.',
          'Displayed planned release dates beneath Coming Soon previews.',
          'Made “Continue exploring” return to the works overview.',
          'Compressed image previews and loaded them near the current scroll position to reduce unnecessary downloads.',
          'Displayed photography and weather images wider than 16:9 at full width, grouped at the top.',
          'Added the timetable assistant project and its cover.',
          'Refined switching between four languages, mobile menu animations and footer content.',
        ],
      },
      ja: {
        title: 'サイトの作成と細部の調整',
        changes: [
          '紹介ページにイラストと更新履歴を追加。',
          'Coming Soon のプレビューに公開予定日を表示。',
          '作品ページ下部の「引き続き見る」から作品一覧へ戻れるように変更。',
          'プレビュー画像を圧縮し、スクロール位置に応じて読み込むことで、不要なダウンロードを削減。',
          '写真と気象の 16:9 より横長の画像を全幅で表示し、上部にまとめて配置。',
          '時間割アシスタントのプロジェクトと表紙を追加。',
          '4 言語の切り替え、モバイルメニューのアニメーション、フッターの内容を改善。',
        ],
      },
    },
  },
];

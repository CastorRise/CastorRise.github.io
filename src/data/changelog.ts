import type { Locale } from '../i18n';

interface Update {
  date: string;
  content: Record<Locale, { title: string; changes: string[] }>;
}

export const changelog: Update[] = [
  {
    date: '2026-09-30',
    content: {
      zh: {
        title: '图片展示与页面完善',
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
        title: '圖片展示與頁面完善',
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
        title: 'Image display and page refinements',
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
        title: '画像表示とページの改善',
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

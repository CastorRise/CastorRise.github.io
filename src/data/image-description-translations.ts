import type { Locale } from '../i18n';
import type { Category } from './site';

type TranslatedDescription = { source: string } & Record<Exclude<Locale, 'zh'>, string>;

// 由 AI 根据中文原文逐条翻译，在发布前补齐；用户只需编辑 image-descriptions.ts。
// source 保存翻译时的中文原文。中文修改后，旧译文不会继续展示。
export const imageDescriptionTranslations: Record<Category['slug'], Record<string, TranslatedDescription>> = {
  "photography": {
    "photo-01": {
      "source": "盛夏强生对流催生出的庞大积雨云，拍摄于河南省郑州市",
      "en": "A vast cumulonimbus born of intense midsummer convection. Photographed in Zhengzhou, Henan.",
      "zh-tw": "盛夏強烈對流孕育的巨大積雨雲，攝於河南省鄭州市。",
      "ja": "真夏の強い対流が育てた巨大な積乱雲。撮影地：中国・河南省鄭州市。"
    },
    "photo-02": {
      "source": "被满天的星星所拥抱，拍摄于湖南省浏阳市-大围山",
      "en": "Embraced by a sky full of stars. Photographed on Mount Daweishan, Liuyang, Hunan.",
      "zh-tw": "被滿天星星擁抱，攝於湖南省瀏陽市大圍山。",
      "ja": "満天の星に包まれて。撮影地：中国・湖南省瀏陽市、大囲山。"
    },
    "photo-03": {
      "source": "梅溪湖雨后火烧云日落，拍摄于湖南省长沙市-梅溪湖",
      "en": "A fiery sunset over Meixi Lake after the rain. Photographed in Changsha, Hunan.",
      "zh-tw": "梅溪湖雨後的火燒雲與日落，攝於湖南省長沙市梅溪湖。",
      "ja": "雨上がりの梅渓湖を彩る、燃えるような夕焼け。撮影地：中国・湖南省長沙市、梅渓湖。"
    },
    "photo-04": {
      "source": "含苞待放的金色郁金香，拍摄于湖南省长沙市-省植物园",
      "en": "A golden tulip about to bloom. Photographed at Hunan Botanical Garden, Changsha.",
      "zh-tw": "含苞待放的金色鬱金香，攝於湖南省長沙市省植物園。",
      "ja": "咲くのを待つ、黄金色のチューリップ。撮影地：中国・湖南省長沙市、省植物園。"
    },
    "photo-05": {
      "source": "彩云伴月，拍摄于河南省郑州市",
      "en": "Colorful clouds beside the moon. Photographed in Zhengzhou, Henan.",
      "zh-tw": "彩雲伴月，攝於河南省鄭州市。",
      "ja": "月に寄り添う彩雲。撮影地：中国・河南省鄭州市。"
    },
    "photo-06": {
      "source": "初夏强对流催生出的剧烈云地放电，拍摄于湖南省长沙市",
      "en": "Intense cloud-to-ground lightning from an early-summer thunderstorm. Photographed in Changsha, Hunan.",
      "zh-tw": "初夏強烈對流帶來的劇烈雲地閃電，攝於湖南省長沙市。",
      "ja": "初夏の強い対流がもたらした激しい落雷。撮影地：中国・湖南省長沙市。"
    },
    "photo-07": {
      "source": "盛夏强对流后的晚霞，拍摄于河南省郑州市",
      "en": "The evening glow after a midsummer thunderstorm. Photographed in Zhengzhou, Henan.",
      "zh-tw": "盛夏強烈對流過後的晚霞，攝於河南省鄭州市。",
      "ja": "真夏の激しい雷雨が去ったあとの夕焼け。撮影地：中国・河南省鄭州市。"
    },
    "photo-08": {
      "source": "佩佩可爱！",
      "en": "Pepe is adorable!",
      "zh-tw": "佩佩好可愛！",
      "ja": "ペペ、かわいい！"
    },
    "photo-09": {
      "source": "小特可爱！",
      "en": "Xiaote is adorable!",
      "zh-tw": "小特好可愛！",
      "ja": "シャオテ、かわいい！"
    },
    "photo-10": {
      "source": "夕阳下的新郑国际机场，拍摄于河南省航空港区-CGO",
      "en": "Xinzheng International Airport at sunset. Photographed in the airport district of Henan (CGO).",
      "zh-tw": "夕陽下的新鄭國際機場，攝於河南省航空港區（CGO）。",
      "ja": "夕日に染まる新鄭国際空港。撮影地：中国・河南省航空港区（CGO）。"
    },
    "photo-11": {
      "source": "日落大道，拍摄于河南省郑州市-陇海快速路",
      "en": "Sunset Boulevard. Photographed along Longhai Expressway, Zhengzhou, Henan.",
      "zh-tw": "日落大道，攝於河南省鄭州市隴海快速路。",
      "ja": "夕暮れの大通り。撮影地：中国・河南省鄭州市、隴海快速路。"
    },
    "photo-12": {
      "source": "日落大道，拍摄于河南省郑州市-陇海快速路",
      "en": "Sunset Boulevard. Photographed along Longhai Expressway, Zhengzhou, Henan.",
      "zh-tw": "日落大道，攝於河南省鄭州市隴海快速路。",
      "ja": "夕暮れの大通り。撮影地：中国・河南省鄭州市、隴海快速路。"
    },
    "photo-13": {
      "source": "雪松，拍摄于河南省郑州市-西流湖",
      "en": "Snow-covered cedars. Photographed at Xiliu Lake, Zhengzhou, Henan.",
      "zh-tw": "覆雪的雪松，攝於河南省鄭州市西流湖。",
      "ja": "雪をまとった針葉樹。撮影地：中国・河南省鄭州市、西流湖。"
    },
    "photo-14": {
      "source": "雪梅，拍摄于河南省郑州市-西流湖",
      "en": "Plum blossoms in the snow. Photographed at Xiliu Lake, Zhengzhou, Henan.",
      "zh-tw": "雪中梅花，攝於河南省鄭州市西流湖。",
      "ja": "雪の中に咲く梅。撮影地：中国・河南省鄭州市、西流湖。"
    }
  },
  "illustration": {
    "illustration-01": {
      "source": "请你吃抹茶巴菲！",
      "en": "Let me treat you to a matcha parfait!",
      "zh-tw": "請你吃抹茶芭菲！",
      "ja": "抹茶パフェ、ごちそうするね！"
    },
    "illustration-02": {
      "source": "在看什么呢...？",
      "en": "What are you looking at...?",
      "zh-tw": "在看什麼呢……？",
      "ja": "何を見てるの……？"
    },
    "illustration-03": {
      "source": "看镜头！",
      "en": "Look at the camera!",
      "zh-tw": "看鏡頭！",
      "ja": "カメラを見て！"
    },
    "illustration-04": {
      "source": "上伊那牡丹、行ってきます！",
      "en": "Botan Kamiina, off I go!",
      "zh-tw": "上伊那牡丹，我出門囉！",
      "ja": "上伊那ぼたん、行ってきます！"
    },
    "illustration-05": {
      "source": "シーナ、見で！",
      "en": "Sheena, look!",
      "zh-tw": "シーナ，看！",
      "ja": "シーナ、見で！"
    },
    "illustration-06": {
      "source": "OC",
      "en": "OC",
      "zh-tw": "OC",
      "ja": "OC"
    },
    "illustration-07": {
      "source": "牡丹伊吹99999",
      "en": "Botan × Ibuki forever!",
      "zh-tw": "牡丹與伊吹長長久久！",
      "ja": "ぼたんといぶき、ずっと一緒に！"
    }
  },
  "weather": {
    "weather-01": {
      "source": "日落下的郑州城和远处的嵩山，拍摄于河南省郑州市",
      "en": "Zhengzhou at sunset, with Mount Song in the distance. Photographed in Zhengzhou, Henan.",
      "zh-tw": "夕陽下的鄭州城與遠方的嵩山，攝於河南省鄭州市。",
      "ja": "夕日に染まる鄭州の街と、遠くに見える嵩山。撮影地：中国・河南省鄭州市。"
    },
    "weather-02": {
      "source": "冬季阴云、好似末日孤岛，拍摄于河南省郑州市",
      "en": "Winter clouds, like an island at the end of the world. Photographed in Zhengzhou, Henan.",
      "zh-tw": "冬日陰雲，彷彿末日中的孤島，攝於河南省鄭州市。",
      "ja": "冬の曇り空、まるで世界の終わりに浮かぶ孤島。撮影地：中国・河南省鄭州市。"
    },
    "weather-03": {
      "source": "初夏旺盛水汽爆发的大片浓积云，拍摄于湖南省长沙市-万家丽",
      "en": "A broad field of towering cumulus fueled by abundant early-summer moisture. Photographed in Wanjiali, Changsha, Hunan.",
      "zh-tw": "初夏充沛水氣催生的大片濃積雲，攝於湖南省長沙市萬家麗。",
      "ja": "初夏の豊富な水蒸気で発達した、広範囲の雄大積雲。撮影地：中国・湖南省長沙市、万家麗。"
    },
    "weather-04": {
      "source": "盛夏激烈强对流与局部降水，拍摄于河南省郑州市",
      "en": "Intense midsummer convection and localized rainfall. Photographed in Zhengzhou, Henan.",
      "zh-tw": "盛夏的劇烈對流與局部降雨，攝於河南省鄭州市。",
      "ja": "真夏の激しい対流と局地的な降雨。撮影地：中国・河南省鄭州市。"
    },
    "weather-05": {
      "source": "积雨云云砧与乳状云，拍摄于河南省郑州市",
      "en": "A cumulonimbus anvil and mammatus clouds. Photographed in Zhengzhou, Henan.",
      "zh-tw": "積雨雲的雲砧與乳狀雲，攝於河南省鄭州市。",
      "ja": "積乱雲のかなとこ雲と乳房雲。撮影地：中国・河南省鄭州市。"
    }
  }
};

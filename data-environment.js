// ==========================================
// 类别 5：🏞️ 环境自然与四时 (25词) - 马来西亚本地化 SMK 适用版
// ==========================================
const environmentIdioms = [
    {
        idiom: "鸟语花香",
        pinyin: "niǎo yǔ huā xiāng",
        defZh: "小鸟在唱歌，花儿散发着香气。形容大自然春天美好的景色。",
        defEn: "Birds singing and flowers emitting fragrance.",
        defBm: "Keindahan alam semula jadi dengan kicauan burung dan keharuman bunga.",
        example: "清晨，阳光穿过树梢，金马仑的高原里一片鸟语花香。",
        category: "环境自然"
    },
    {
        idiom: "风和日丽",
        pinyin: "fēng hé rì lì",
        defZh: "微风吹过，阳光明媚。形容天气晴朗温暖，特别舒服。",
        defEn: "Mild breeze and bright sunshine; fine and warm weather.",
        defBm: "Cuaca yang sangat cerah, tenang dan indah.",
        example: "在一个风和日丽的星期天，我们全家前往迪沙鲁海滩野餐。",
        category: "环境自然"
    },
    {
        idiom: "冰天雪地",
        pinyin: "bīng tiān xuě dì",
        defZh: "到处都是厚厚的冰和雪。形容天气极其寒冷。",
        defEn: "A world of ice and snow; extremely cold weather.",
        defBm: "Kawasan yang dilitupi salji dan ais; teramat sejuk.",
        example: "虽然温带国家的冬季是一片冰天雪地，但依然吸引了不少热带游客。",
        category: "环境自然"
    },
    {
        idiom: "倾盆大雨",
        pinyin: "qīng pén dà yǔ",
        defZh: "雨下得非常大，像盆里的水倒下来。形容雨势猛烈。",
        defEn: "Downpour; raining cats and dogs.",
        defBm: "Hujan lebat yang mencurah-curah.",
        example: "刚才天空突然乌云密布，紧接着就下起了一场倾盆大雨。",
        category: "环境自然"
    },
    {
        idiom: "烈日当空",
        pinyin: "liè rì dāng kōng",
        defZh: "火辣辣的太阳高高挂在天空中。形容天气十分酷热。",
        defEn: "The scorching, blazing sun shines high in the sky.",
        defBm: "Cuaca panas terik (panas membara).",
        example: "烈日当空，修路的工人们汗流浃背，依然坚守岗位。",
        category: "环境自然"
    },
    {
        idiom: "秋高气爽",
        pinyin: "qiū gāo qì shuǎng",
        defZh: "秋天的天空晴朗，空气清凉爽快。形容秋季最舒适的天气。",
        defEn: "The clear autumn sky and crisp, cool air.",
        defBm: "Cuaca musim luruh yang cerah, sejuk dan sangat selesa.",
        example: "秋高气爽，此时正是登高赏红叶的最佳季节。",
        category: "环境自然"
    },
    {
        idiom: "万水千山",
        pinyin: "wàn shuǐ qiān shān",
        defZh: "翻过千座山，涉过万条河。比喻路途艰难遥远。",
        defEn: "A long and arduous journey through many rivers and mountains.",
        defBm: "Perjalanan yang sangat jauh, sukar dan berliku-liku.",
        example: "他不远万里，翻越万水千山来到吉隆坡寻找失联多年的叔叔。",
        category: "环境自然"
    },
    {
        idiom: "春光明媚",
        pinyin: "chūn guāng míng mèi",
        defZh: "春天的阳光灿烂，景致鲜艳美丽。形容春景极其动人。",
        defEn: "Bright and beautiful spring days.",
        defBm: "Keindahan pemandangan musim bunga yang cerah dan mempesonakan.",
        example: "春光明媚的时节里，郊外的草坪上开满了黄色的小野花。",
        category: "环境自然"
    },
    {
        idiom: "世外桃源",
        pinyin: "shì wài táo yuán",
        defZh: "比喻风景优美、生活安乐、与外面世界隔绝的宁静地方。",
        defEn: "A hidden paradise; utopia.",
        defBm: "Tempat yang sangat indah, aman dan harmoni bagaikan syurga dunia.",
        example: "这个偏远古老的小山村安静祥和，生活节奏慢，宛如世外桃源。",
        category: "环境自然"
    },
    {
        idiom: "波澜壮阔",
        pinyin: "bō lán zhuàng kuò",
        defZh: "水面波浪巨大。比喻声势雄壮、规模宏伟浩大。",
        defEn: "Magnificent and scale; grand and surging.",
        defBm: "Pemandangan gelombang air yang sangat megah dan berskala besar.",
        example: "长篇历史小说向我们展示了那一幕波澜壮阔的历史变革。",
        category: "环境自然"
    },
    {
        idiom: "人山人海",
        pinyin: "rén shān rén hǎi",
        defZh: "人聚集得非常多，像山和海洋一样。形容极其拥挤。",
        defEn: "A huge crowd of people; extremely crowded.",
        defBm: "Sangat sesak dengan kehadiran orang ramai.",
        example: "国庆节那天，独立广场上举行了游行，现场简直人山人海。",
        category: "环境自然"
    },
    {
        idiom: "绿树成荫",
        pinyin: "lǜ shù chéng yīn",
        defZh: "树木繁茂，遮蔽了阳光，形成大片大片的阴凉地方。",
        defEn: "Shady trees; green trees casting cool shadows.",
        defBm: "Kawasan yang redup dilitupi dedaun hijau pepohonan yang rimbun.",
        example: "学校的马路两旁绿树成荫，是炎热夏日同学们避暑的好去处。",
        category: "环境自然"
    },
    {
        idiom: "寸草不生",
        pinyin: "cùn cǎo bù shēng",
        defZh: "连一根小草也生长不出来。形容土地极其贫瘠荒凉。",
        defEn: "Barren; not even a blade of grass grows.",
        defBm: "Tanah gersang yang tandus (tiada tumbuhan langsung).",
        example: "由于常年干旱缺少雨水，这片戈壁荒漠寸草不生。",
        category: "环境自然"
    },
    {
        idiom: "白雪皑皑",
        pinyin: "bái xuě ái ái",
        defZh: "形容洁白的积雪堆满山野，到处都是白茫茫一片。",
        defEn: "Pure white snow covering the fields/mountains.",
        defBm: "Dilitupi salji putih bersih yang sangat luas dan indah.",
        example: "隆冬时节，远处的富士山顶上白雪皑皑，分外壮观。",
        category: "环境自然"
    },
    {
        idiom: "乌云密布",
        pinyin: "wū yún mì bù",
        defZh: "满天都是厚厚的黑云。暗示着大雨、暴风雨马上要降临。",
        defEn: "Dark clouds gather; overcast sky.",
        defBm: "Langit mendung dilitupi awan hitam tebal (cuaca buruk).",
        example: "天空中突然间乌云密布，大风刮起，看来暴风雨要来了。",
        category: "环境自然"
    },
    {
        idiom: "层峦叠嶂",
        pinyin: "céng luán dié zhàng",
        defZh: "形容山峰起伏，重重叠叠，层层相连。景象十分险峻。",
        defEn: "Range upon range of mountains; overlapping peaks.",
        defBm: "Banjaran gunung-ganang yang bertindih-tindih dengan indahnya.",
        example: "站在吉隆坡塔上远眺，远处层峦叠嶂的蒂迪旺沙山脉若隐若现。",
        category: "环境自然"
    },
    {
        idiom: "惊涛骇浪",
        pinyin: "jīng tāo hài làng",
        defZh: "汹涌吓人的滔天巨浪。比喻险恶的斗争环境或严峻挑战。",
        defEn: "Raging waves; terrifying storm.",
        defBm: "Ombak besar yang dahsyat; cabaran atau dugaan yang sangat berat.",
        example: "勇敢的航海家们驾驶着老旧的帆船，穿过了大洋上的无数惊涛骇浪。",
        category: "环境自然"
    },
    {
        idiom: "荒无人烟",
        pinyin: "huāng wú rén yān",
        defZh: "十分荒凉冷清，见不到一个人的身影，没有人家居住。",
        defEn: "Desolate and uninhabited; remote wilderness.",
        defBm: "Kawasan sunyi sepi yang tandus tanpa kediaman manusia.",
        example: "这艘迷失的飞船在降落前，曾飞过了许多荒无人烟的沙漠小岛。",
        category: "环境自然"
    },
    {
        idiom: "风景如画",
        pinyin: "fēng jǐng rú huà",
        defZh: "大自然的美景就像一幅精美的画。形容风景极其迷人。",
        defEn: "Picturesque; beautiful as a painting.",
        defBm: "Pemandangan semula jadi yang sangat indah bagaikan lukisan.",
        example: "沙巴的神山山脚下风景如画，令前来露营的游客流连忘返。",
        category: "环境自然"
    },
    {
        idiom: "狂风暴雨",
        pinyin: "kuáng fēng bào yǔ",
        defZh: "猛烈的风，倾盆的雨。比喻恶劣的气候或极为艰巨的处境。",
        defEn: "Violent wind and rain storm.",
        defBm: "Ribut taufan dan hujan lebat yang sangat dahsyat.",
        example: "昨晚的一场狂风暴雨，把院子里养的花盆都吹坏了。",
        category: "环境自然"
    },
    {
        idiom: "青山绿水",
        pinyin: "qīng shān lǜ shuǐ",
        defZh: "青绿色的山，澄清碧绿的水。形容山水自然风光之美。",
        defEn: "Green hills and clear blue waters.",
        defBm: "Keindahan pemandangan gunung hijau dan air sungai yang jernih.",
        example: "这里远离城市工厂的污染，依然保持着原本的青山绿水。",
        category: "环境自然"
    },
    {
        idiom: "浩浩荡荡",
        pinyin: "hào hào dàng dàng",
        defZh: "形容水势广阔，声势宏大。多形容队伍规模非常庞大。",
        defEn: "Vast, grand and majestic scale.",
        defBm: "Barisan atau kumpulan orang yang sangat besar, kuat dan bersemangat.",
        example: "大宝森节当天，信徒组成的游行队伍浩浩荡荡地走向黑风洞。",
        category: "环境自然"
    },
    {
        idiom: "烟雾缭绕",
        pinyin: "yān wù liáo rào",
        defZh: "形容云雾、烟气扩散，环绕在周围的神秘景象。",
        defEn: "Wreathed in mist or smoke; shrouded in fog.",
        defBm: "Kawasan yang diselimuti kabus tebal atau asap tebal secara misteri.",
        example: "清晨的高山村庄烟雾缭绕，宛如童话里的仙境一样美好。",
        category: "环境自然"
    },
    {
        idiom: "海枯石烂",
        pinyin: "hǎi kū shí làn",
        defZh: "直到海水干枯，石头变烂。比喻意志或友情等誓言永久不变。",
        defEn: "Even if the seas run dry and rocks crumble; eternity.",
        defBm: "Kesetiaan, janji atau persahabatan yang kekal abadi selama-lamanya.",
        example: "他们两个是在小学时认识的，彼此誓言这份兄弟之情海枯石烂不变。",
        category: "环境自然"
    },
    {
        idiom: "春意盎然",
        pinyin: "chūn ýi àng rán",
        defZh: "形容大自然里生机勃勃、绿意盎然、春天的活力极其浓厚。",
        defEn: "Full of the breath of spring; overflowing with life.",
        defBm: "Suasana musim bunga yang dipenuhi dengan kecergasan dan kehidupan hijau.",
        example: "春风吹过，山野草地上野花竞相开放，呈现一派春意盎然的景象。",
        category: "环境自然"
    }
];

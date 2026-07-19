// ==========================================
// 类别 5：🏞️ 环境自然与四时 (25词)
// ==========================================
const environmentIdioms = [
    {
        idiom: "鸟语花香",
        pinyin: "niǎo yǔ huā xiāng",
        defZh: "鸟儿叫得好听，花儿开得喷香。形容春天的美好景象。",
        defEn: "Birds sing and flowers give forth fragrance.",
        example: "春天到了，公园里一片鸟语花香，吸引了许多游客。",
        category: "环境自然"
    },
    {
        idiom: "风和日丽",
        pinyin: "fēng hé rì lì",
        defZh: "和风习习，阳光灿烂。形容天气晴朗温暖。",
        defEn: "The wind is mild and the sun is bright.",
        example: "在一个风和日丽的周末，我们全家去海边野餐。",
        category: "环境自然"
    },
    {
        idiom: "冰天雪地",
        pinyin: "bīng tiān xuě dì",
        defZh: "形容四处都是冰雪，极其寒冷的环境。",
        defEn: "A world of ice and snow.",
        example: "冬季的哈尔滨是一片冰天雪地，美得像个童话世界。",
        category: "环境自然"
    },
    {
        idiom: "倾盆大雨",
        pinyin: "qīng pén dà yǔ",
        defZh: "雨大得像盆里的水倒下来一样。形容雨势极大。",
        defEn: "Downpour; torrential rain.",
        example: "刚才还是晴空万里，突然间就下起了倾盆大雨。",
        category: "环境自然"
    },
    {
        idiom: "烈日当空",
        pinyin: "liè rì dāng kōng",
        defZh: "炎热的太阳高高挂在天空。形容天气酷热。",
        defEn: "The scorching sun shines in the sky.",
        example: "烈日当空，建筑工人依然在工地上辛苦地忙碌着。",
        category: "环境自然"
    },
    {
        idiom: "秋高气爽",
        pinyin: "qiū gāo qì shuǎng",
        defZh: "秋天天空晴朗，气候凉爽宜人。",
        defEn: "The autumn sky is clear and the air is crisp.",
        example: "秋高气爽的时节，最适合约上三五好友去登山。",
        category: "环境自然"
    },
    {
        idiom: "万雪千山",
        pinyin: "wàn xuě qiān shān",
        defZh: "形容路途艰难遥远，翻越了很多山岭。",
        defEn: "Numerous mountains and rivers; a long journey.",
        example: "红军历尽万水千山，终于赢得了最后的胜利。",
        category: "环境自然"
    },
    {
        idiom: "春光明媚",
        pinyin: "chūn guāng míng mèi",
        defZh: "形容春天的景致鲜明可爱，阳光明亮。",
        defEn: "Bright and beautiful spring days.",
        example: "在春光明媚的日子里，田野里开满了金黄色的油菜花。",
        category: "环境自然"
    },
    {
        idiom: "世外桃源",
        pinyin: "shì wài táo yuán",
        defZh: "比喻风景优美、生活安乐且与世隔绝的地方。",
        defEn: "A fictitious land of peace; utopia.",
        example: "这个古老的小村庄安静祥和，宛如世外桃源。",
        category: "环境自然"
    },
    {
        idiom: "波澜壮阔",
        pinyin: "bō lán zhuàng kuò",
        defZh: "比喻声势雄壮浩大，规模宏伟。",
        defEn: "Surging and magnificent; grand.",
        example: "站在甲板上，展现在眼前的是波澜壮阔的大海。",
        category: "环境自然"
    },
    {
        idiom: "人山人海",
        pinyin: "rén shān rén hǎi",
        defZh: "形容聚集的人极多。",
        defEn: "A huge crowd of people; sea of faces.",
        example: "国庆节那天，步行街上人山人海，热闹非凡。",
        category: "环境自然"
    },
    {
        idiom: "绿树成荫",
        pinyin: "lǜ shù chéng yīn",
        defZh: "树木枝叶茂密，遮挡了阳光，形成大片阴凉。",
        defEn: "Green trees providing pleasant shade.",
        example: "校园的小道两旁绿树成荫，是夏日乘凉的好去处。",
        category: "环境自然"
    },
    {
        idiom: "寸草不生",
        pinyin: "cùn cǎo bù shēng",
        defZh: "连一根小草也生长不出来。形容土地极其贫瘠荒凉。",
        defEn: "Barren land; not even a blade of grass grows.",
        example: "由于长期缺少雨水，这片荒漠寸草不生。",
        category: "环境自然"
    },
    {
        idiom: "白雪皑皑",
        pinyin: "bái xuě ái ái",
        defZh: "形容洁白的雪大片堆积的样子。",
        defEn: "Pure white snow covering the ground.",
        example: "远处的阿尔卑斯山脉白雪皑皑，分外壮观。",
        category: "环境自然"
    },
    {
        idiom: "乌云密布",
        pinyin: "wū yún mì bù",
        defZh: "满天都是黑云。天气阴沉，暗示暴雨将至。",
        defEn: "Dark clouds gather; overcast.",
        example: "天空中乌云密布，看来马上就要下大雨了。",
        category: "环境自然"
    },
    {
        idiom: "层峦叠嶂",
        pinyin: "céng luán dié zhàng",
        defZh: "形容山峰起伏，重重叠叠，层层相连。",
        defEn: "Range after range of mountains.",
        example: "车窗外那层峦叠嶂的风景，美得让人陶醉。",
        category: "环境自然"
    },
    {
        idiom: "惊涛骇浪",
        pinyin: "jīng tāo hài làng",
        defZh: "汹涌吓人的巨浪。比喻险恶的环境或尖锐的斗争。",
        defEn: "Raging waves; terrifying storm.",
        example: "勇敢的航海家驾着帆船，穿过了无数惊涛骇浪。",
        category: "环境自然"
    },
    {
        idiom: "鸟无人烟",
        pinyin: "huāng wú rén yān",
        defZh: "十分荒凉，见不到一个人影，没有人家。",
        defEn: "Desolate and uninhabited.",
        example: "探险队迷失在这个荒无人烟的原始森林里。",
        category: "环境自然"
    },
    {
        idiom: "风景如画",
        pinyin: "fēng jǐng rú huà",
        defZh: "美丽的风景就像画出来的一样。",
        defEn: "Picturesque scenery.",
        example: "桂林山水风景如画，令无数文人墨客流连忘返。",
        category: "环境自然"
    },
    {
        idiom: "狂风暴雨",
        pinyin: "kuáng fēng bào yǔ",
        defZh: "大风大雨。比喻声势猛烈或处境险恶。",
        defEn: "Violent storm; fierce wind and rain.",
        example: "昨晚一场狂风暴雨，把院子里的花盆都吹翻了。",
        category: "环境自然"
    },
    {
        idiom: "青山绿水",
        pinyin: "qīng shān lǜ shuǐ",
        defZh: "青绿色的山，澄清的水。形容山水风光优美。",
        defEn: "Green hills and clear waters.",
        example: "我们应该保护环境，留住这片青山绿水。",
        category: "环境自然"
    },
    {
        idiom: "浩浩荡荡",
        pinyin: "hào hào dàng dàng",
        defZh: "形容水势广阔浩大。现多形容声势雄壮，规模宏大。",
        defEn: "Vast and mighty; grandiose.",
        example: "游行队伍浩浩荡荡地走过中央广场。",
        category: "环境自然"
    },
    {
        idiom: "烟雾缭绕",
        pinyin: "yān wù liáo rào",
        defZh: "形容云雾或烟气扩散、环绕在周围的景象。",
        defEn: "Enshrouded in mist or smoke.",
        example: "清晨的清迈山区烟雾缭绕，宛如仙境。",
        category: "环境自然"
    },
    {
        idiom: "海枯石烂",
        pinyin: "hǎi kū shí làn",
        defZh: "海水枯干，石头烂透。形容经历了极长的时间，多用于誓言。",
        defEn: "Even if the seas run dry and the rocks crumble.",
        example: "无论海枯石烂，他们的友谊永远不会改变。",
        category: "环境自然"
    },
    {
        idiom: "春意盎然",
        pinyin: "chūn yì àng rán",
        defZh: "形容春天的生机与活力十分浓厚。",
        defEn: "Spring in the air; overflowing with vitality.",
        example: "校园的草坪上开满了野花，呈现出一派春意盎然的景象。",
        category: "环境自然"
    }
];

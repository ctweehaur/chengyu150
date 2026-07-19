// ==========================================
// 类别 1：🎭 人物外貌与神态 (25词)
// ==========================================
const characterIdioms = [
    {
        idiom: "眉飞色舞",
        pinyin: "méi fēi sè wǔ",
        defZh: "形容非常高兴得意神态。",
        defEn: "Be beam with joy; radiant with delight.",
        example: "一谈起那场足球赛，哥哥就眉飞色舞地向大家描述起来。",
        category: "人物神态"
    },
    {
        idiom: "大惊失色",
        pinyin: "dà jīng shī sè",
        defZh: "形容非常惊恐，脸色都变了。",
        defEn: "Turn pale with fright.",
        example: "听到这个坏消息，她大惊失色，半天说不出话来。",
        category: "人物神态"
    },
    {
        idiom: "垂头丧气",
        pinyin: "chuí tóu sàng qì",
        defZh: "形容因失败或不顺心而精神振作不起来的样子。",
        defEn: "Dejected; crestfallen.",
        example: "考试没考好，小明垂头丧气地走回家。",
        category: "人物神态"
    },
    {
        idiom: "衣冠楚楚",
        pinyin: "yī guān chǔ chǔ",
        defZh: "形容穿戴整齐、漂亮。",
        defEn: "Immaculately dressed; dapper.",
        example: "他今天穿得衣冠楚楚去参加面试。",
        category: "人物神态"
    },
    {
        idiom: "文质彬彬",
        pinyin: "wén zhì bīn bīn",
        defZh: "形容人举止文雅，有礼貌。",
        defEn: "Gentle and refined.",
        example: "这位新老师文质彬彬的，深受学生们喜欢。",
        category: "人物神态"
    },
    {
        idiom: "目瞪口呆",
        pinyin: "mù dèng kǒu dāi",
        defZh: "形容因吃惊或害怕而发愣的样子。",
        defEn: "Stunned; dumbfounded.",
        example: "精彩的魔术表演让台下的观众看得目瞪口呆。",
        category: "人物神态"
    },
    {
        idiom: "精神抖擞",
        pinyin: "jīng shén dǒu sǒu",
        defZh: "形容精神振作，饱满。",
        defEn: "Full of vigor and vitality.",
        example: "运动员们精神抖擞地步入运动场。",
        category: "人物神态"
    },
    {
        idiom: "意气风发",
        pinyin: "yì qì fēng fā",
        defZh: "形容精神振奋，气概豪迈。",
        defEn: "High-spirited and vigorous.",
        example: "毕业典礼上，同学们个个意气风发，憧憬着未来。",
        category: "人物神态"
    },
    {
        idiom: "蓬头垢面",
        pinyin: "péng tóu gòu miàn",
        defZh: "形容头发散乱，脸上很脏，样子消沉。",
        defEn: "Unkempt appearance; disheveled.",
        example: "连续加了几天班后，他变得蓬头垢面。",
        category: "人物神态"
    },
    {
        idiom: "喜笑颜开",
        pinyin: "xǐ xiào yán kāi",
        defZh: "心情愉快，满脸笑容。",
        defEn: "Be covered with smiles; beam with joy.",
        example: "得知自己中奖的消息，妈妈喜笑颜开。",
        category: "人物神态"
    },
    {
        idiom: "神采奕奕",
        pinyin: "shén cǎi yì yì",
        defZh: "形容精神饱满，容光焕发。",
        defEn: "Glowing with health and radiating vigor.",
        example: "爷爷虽然八十岁了，但依然神采奕奕。",
        category: "人物神态"
    },
    {
        idiom: "面红耳赤",
        pinyin: "miàn hóng ěr chì",
        defZh: "形容因激动、羞愧或发怒而脸色涨红的样子。",
        defEn: "Flushed with anger or excitement.",
        example: "两个人为了一个小问题争论得面红耳赤。",
        category: "人物神态"
    },
    {
        idiom: "理直气壮",
        pinyin: "lǐ zhí qì zhuàng",
        defZh: "理由充分，说话很有气势。",
        defEn: "Speak with bold confidence.",
        example: "既然你没有做错事，就应该理直气壮地说明真相。",
        category: "人物神态"
    },
    {
        idiom: "气势汹汹",
        pinyin: "qì shì xiōng xiōng",
        defZh: "形容气势凶猛，态度粗暴。",
        defEn: "Aggressive; fierce.",
        example: "他气势汹汹地冲进办公室质问经理。",
        category: "人物神态"
    },
    {
        idiom: "小心翼翼",
        pinyin: "xiǎo xīn yì yì",
        defZh: "形容举动十分谨慎，不敢疏忽。",
        defEn: "With greatest care; gingerly.",
        example: "她小心翼翼地捧着花瓶，生怕把它摔碎了。",
        category: "人物神态"
    },
    {
        idiom: "从容不迫",
        pinyin: "cóng róng bù pò",
        defZh: "沉着镇静，不慌不忙。",
        defEn: "Calm and unhurried.",
        example: "面对突发情况，队长从容不迫地指挥大家撤离。",
        category: "人物神态"
    },
    {
        idiom: "手忙脚乱",
        pinyin: "shǒu máng jiǎo luàn",
        defZh: "形容做事没有条理，慌里慌张。",
        defEn: "In a rush and muddle; frantic.",
        example: "今天早上起晚了，全家人搞得手忙脚乱。",
        category: "人物神态"
    },
    {
        idiom: "手舞足蹈",
        pinyin: "shǒu wǔ zú dǎo",
        defZh: "两手舞动，两脚跳跃。形容高兴到了极点。",
        defEn: "Dance with joy.",
        example: "听到要去迪士尼乐园，妹妹高兴得手舞足蹈。",
        category: "人物神态"
    },
    {
        idiom: "威风凛凛",
        pinyin: "wēi fēng lǐn lǐn",
        defZh: "形容声势或气派令人敬畏。",
        defEn: "Majestic; awe-inspiring.",
        example: "石狮子威风凛凛地守在大门口。",
        category: "人物神态"
    },
    {
        idiom: "昂首挺胸",
        pinyin: "áng shǒu tǐng xiōng",
        defZh: "抬起头，挺起胸膛。形容斗志高昂或骄傲自满。",
        defEn: "Hold one's head high.",
        example: "士兵们昂首挺胸地走过阅兵台。",
        category: "人物神态"
    },
    {
        idiom: "老态龙钟",
        pinyin: "lǎo thái lóng zhōng",
        defZh: "形容年老体衰，行动不灵便的样子。",
        defEn: "Old and infirm.",
        example: "这位老态龙钟的老人正在缓慢地过马路。",
        category: "人物神态"
    },
    {
        idiom: "落落大方",
        pinyin: "luò luò dà fāng",
        defZh: "形容人的言谈举止自然大方。",
        defEn: "Natural and graceful.",
        example: "主持人落落大方地走上舞台，赢ended了阵阵掌声。",
        category: "人物神态"
    },
    {
        idiom: "哑口无言",
        pinyin: "yǎ kǒu wú yán",
        defZh: "像哑巴一样说不出话来。形容理屈词穷。",
        defEn: "Speechless; struck dumb.",
        example: "在铁一样的证据面前，小偷被问得哑口无言。",
        category: "人物神态"
    },
    {
        idiom: "滔滔不绝",
        pinyin: "tāo tāo bù jué",
        defZh: "比喻话很多，说起来没完没了。",
        defEn: "Talk volubly; pour out words.",
        example: "一提到他喜欢的游戏，他就滔滔不绝地讲个不停。",
        category: "人物神态"
    },
    {
        idiom: "张口结舌",
        pinyin: "zhāng kǒu jié shé",
        defZh: "张着嘴巴说不出话来。形容理屈或紧张。",
        defEn: "Tongue-tied.",
        example: "面对老师的突然提问，他张口结舌，不知所措。",
        category: "人物神态"
    }
];

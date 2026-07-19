// ==========================================
// 类别 2：🧠 心情感受与心理 (25词)
// ==========================================
const emotionIdioms = [
    {
        idiom: "心惊肉跳",
        pinyin: "xīn jīng ròu tiào",
        defZh: "形容担心灾祸临头，恐慌不安。",
        defEn: "Palpitating with anxiety or fear.",
        example: "屋外的暴风雨越来越大，听得人心惊肉跳。",
        category: "心理情感"
    },
    {
        idiom: "忐忑不安",
        pinyin: "tǎn tè bù ān",
        defZh: "心神极为不安，七上八下。",
        defEn: "Restless; perturbed.",
        example: "做错了事，他的心里一直忐忑不安。",
        category: "心理情感"
    },
    {
        idiom: "欣喜若狂",
        pinyin: "xīn xǐ ruò kuáng",
        defZh: "高兴得像发了狂一样。形容快乐到了极点。",
        defEn: "Be wild with joy.",
        example: "收到名牌大学录取通知书的那一刻，他欣喜若狂。",
        category: "心理情感"
    },
    {
        idiom: "怒气冲冲",
        pinyin: "nù qì chōng chōng",
        defZh: "形容非常愤怒的样子。",
        defEn: "In a towering rage; furious.",
        example: "他怒气冲冲地推开门，大声质问是谁弄坏了电脑。",
        category: "心理情感"
    },
    {
        idiom: "百感交集",
        pinyin: "bǎi gǎn jiāo jí",
        defZh: "各种感触交织在一起。形容感触很多。",
        defEn: "All sorts of feelings well up in one's heart.",
        example: "重回阔别多年的故乡，老人百感交集。",
        category: "心理情感"
    },
    {
        idiom: "心花怒放",
        pinyin: "xīn huā nù fàng",
        defZh: "形容内心极其高兴。",
        defEn: "Burst with joy; jubilant.",
        example: "听了老师的夸奖，小红心里心花怒放。",
        category: "心理情感"
    },
    {
        idiom: "归心似箭",
        pinyin: "guī xīn sì jiàn",
        defZh: "想回家的心情像射出的箭一样急。形容回家心切。",
        defEn: "Anxious to return home.",
        example: "临近除夕，在外工作的人们个个归心似箭。",
        category: "心理情感"
    },
    {
        idiom: "闷闷不乐",
        pinyin: "mèn mèn bù lè",
        defZh: "心情不舒畅，很不快乐。",
        defEn: "Depressed; in the blues.",
        example: "自从宠物狗丢失后，妹妹整天闷闷不乐。",
        category: "心理情感"
    },
    {
        idiom: "心急如焚",
        pinyin: "xīn jí rú fén",
        defZh: "心里急得像火烧一样。形容极为焦急。",
        defEn: "Burning with impatience; anxiety.",
        example: "孩子发高烧还没退，父母心急如焚。",
        category: "心理情感"
    },
    {
        idiom: "心满意足",
        pinyin: "xīn mǎn yì zú",
        defZh: "心愿满足，十分快乐。",
        defEn: "Perfectly satisfied.",
        example: "吃到了期待已久的大餐，他感到心满意足。",
        category: "心理情感"
    },
    {
        idiom: "悲喜交加",
        pinyin: "bēi xǐ jiāo jiā",
        defZh: "悲伤和喜悦的感情交织在一起。",
        defEn: "Mixed feelings of grief and joy.",
        example: "找到了失散多年的儿子，老人悲喜交加。",
        category: "心理情感"
    },
    {
        idiom: "心惊胆战",
        pinyin: "xīn jīng dǎn zhàn",
        defZh: "形容非常害怕。",
        defEn: "Terror-stricken; frightened out of one's wits.",
        example: "走在悬崖边陡峭的小路上，让人心惊胆战。",
        category: "心理情感"
    },
    {
        idiom: "谢天谢地",
        pinyin: "xiè tiān xiè dì",
        defZh: "表示目的达到或避过灾难后的庆幸心情。",
        defEn: "Thank goodness.",
        example: "谢天谢地，丢失的钱包终于找到了。",
        category: "心理情感"
    },
    {
        idiom: "心安理得",
        pinyin: "xīn ān lǐ dé",
        defZh: "自信事情做得合理，心里很坦然。",
        defEn: "Have a clear conscience.",
        example: "只要尽了最大努力，即使失败了也心安理得。",
        category: "心理情感"
    },
    {
        idiom: "依依不舍",
        pinyin: "yī yī bù shě",
        defZh: "形容留恋，舍不得离开。",
        defEn: "Reluctant to part.",
        example: "毕业时，同学们依依不舍地告别。",
        category: "心理情感"
    },
    {
        idiom: "大失所望",
        pinyin: "dà shī suǒ wàng",
        defZh: "原来的愿望完全落空，非常失望。",
        defEn: "Greatly disappointed.",
        example: "这场被高度期待的电影却让人大失所望。",
        category: "心理情感"
    },
    {
        idiom: "做贼心虚",
        pinyin: "zuò zéi xīn xū",
        defZh: "做了坏事的人心里总是不踏实，害怕被发现。",
        defEn: "Have a guilty conscience.",
        example: "他说话结结巴巴，眼神闪烁，一副做贼心虚的样子。",
        category: "心理情感"
    },
    {
        idiom: "惊慌失措",
        pinyin: "jīng huāng shī cuò",
        defZh: "由于惊慌，一下子不知怎么办才好。",
        defEn: "Panic-stricken.",
        example: "面对突然发生的火灾，大家千万不要惊慌失措。",
        category: "心理情感"
    },
    {
        idiom: "愁眉苦脸",
        pinyin: "chóu méi kǔ liǎn",
        defZh: "皱着眉头，哭丧着脸。形容忧愁苦恼的样子。",
        defEn: "Wear a worried look; miserable face.",
        example: "遇到了解决不了的难题，他整天愁眉苦脸的。",
        category: "心理情感"
    },
    {
        idiom: "扬眉吐气",
        pinyin: "yáng méi tǔ qì",
        defZh: "形容摆脱压抑后的舒畅、自豪心情。",
        defEn: "Feel proud and elated.",
        example: "这次比赛拿了冠军，全队上下终于扬眉吐气了。",
        category: "心理情感"
    },
    {
        idiom: "热泪盈眶",
        pinyin: "rè lèi yíng kuàng",
        defZh: "因非常激动或感动，眼中充满了泪水。",
        defEn: "Eyes filled with tears of excitement.",
        example: "看到国旗升起的那一刻，教练热泪盈眶。",
        category: "心理情感"
    },
    {
        idiom: "六神无主",
        pinyin: "liù shén wú zhǔ",
        defZh: "形容心神不定，十分惊慌，没有主意。",
        defEn: "Distracted; fully bewildered.",
        example: "听到儿子受伤的消息，她吓得六神无主。",
        category: "心理情感"
    },
    {
        idiom: "乐不思蜀",
        pinyin: "lè bù sī shǔ",
        defZh: "比喻在新环境中过得很快乐，不想回家。",
        defEn: "Indulge in pleasure and forget home.",
        example: "孩子们在游乐园里玩得乐不思蜀，都不想回家了。",
        category: "心理情感"
    },
    {
        idiom: "怒发冲冠",
        pinyin: "nù fà chōng guān",
        defZh: "愤怒得头发直竖，顶起帽子。形容愤怒到了极点。",
        defEn: "Bristle with anger.",
        example: "看到弱小者被欺负，他气得怒发冲冠。",
        category: "心理情感"
    },
    {
        idiom: "若有所思",
        pinyin: "ruò yǒu suǒ sī",
        defZh: "好像在思考着什么。",
        defEn: "As if lost in thought.",
        example: "他看着窗外，若有所思地发呆。",
        category: "心理情感"
    }
];

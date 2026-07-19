// ==========================================
// 类别 4：🤝 处事品格与人际 (25词)
// ==========================================
const relationshipIdioms = [
    {
        idiom: "齐心协力",
        pinyin: "qí xīn xié lì",
        defZh: "思想一致，共同努力。",
        defEn: "Concerted efforts; pull together.",
        example: "只要大家齐心协力，就没有克服不了的困难。",
        category: "品格人际"
    },
    {
        idiom: "助人为乐",
        pinyin: "zhù rén wéi lè",
        defZh: "把帮助别人当作快乐。",
        defEn: "Take pleasure in helping others.",
        example: "雷锋叔叔是一个助人为乐的模范。",
        category: "品格人际"
    },
    {
        idiom: "舍己为人",
        pinyin: "shě jǐ wèi rén",
        defZh: "为了帮助别人而牺牲自己的利益。",
        defEn: "Sacrifice oneself for others.",
        example: "为了抢救落水儿童，消防员做出了舍己为人的壮举。",
        category: "品格人际"
    },
    {
        idiom: "针锋相对",
        pinyin: "zhēn fēng xiāng duì",
        defZh: "比喻双方在观点或行动上尖锐对立。",
        defEn: "Tit for tat; be sharply opposed.",
        example: "辩论赛上，正反两方选手针锋相对，互不相让。",
        category: "品格人际"
    },
    {
        idiom: "大公无私",
        pinyin: "dà gōng wú sī",
        defZh: "完全为公，毫无私心。",
        defEn: "Unselfish; perfectly impartial.",
        example: "法官判案必须大公无私，遵循法律事实。",
        category: "品格人际"
    },
    {
        idiom: "光明磊落",
        pinyin: "guāng míng lěi luò",
        defZh: "形容胸怀坦荡，行为正派，没有见不得人的事。",
        defEn: "Open and aboveboard.",
        example: "他做人光明磊落，从不在背后说人坏话。",
        category: "品格人际"
    },
    {
        idiom: "损人利己",
        pinyin: "sǔn rén lì jǐ",
        defZh: "损害别人的利益来换取自己的利益。",
        defEn: "Harm others to benefit oneself.",
        example: "这种损人利己的行为遭到了大家的谴责。",
        category: "品格人际"
    },
    {
        idiom: "同甘共苦",
        pinyin: "tóng gān gòng kǔ",
        defZh: "共同享受幸福，共同承担苦难。",
        defEn: "Share joy and sorrow.",
        example: "这对夫妻几十年如同甘共苦，感情深厚。",
        category: "品格人际"
    },
    {
        idiom: "忘恩负义",
        pinyin: "wàng ēn fù yì",
        defZh: "忘记别人对自己的恩德，做出对不起别人的事。",
        defEn: "Ungrateful; bite the hand that feeds you.",
        example: "我们要懂得感恩，决不能做忘恩负义的人。",
        category: "品格人际"
    },
    {
        idiom: "通情达理",
        pinyin: "tōng qíng dá lǐ",
        defZh: "说话、做事很合道理，很懂人情。",
        defEn: "Reasonable and understanding.",
        example: "隔壁的张大妈非常通情达理，大家都喜欢找她聊天。",
        category: "品格人际"
    },
    {
        idiom: "斤斤计较",
        pinyin: "jīn jīn jì jiào",
        defZh: "形容过分在乎无关紧要的琐碎事情或利益。",
        defEn: "Haggle over every penny; picky.",
        example: "朋友之间应该大度一点，不要斤斤计较。",
        category: "品格人际"
    },
    {
        idiom: "息事宁人",
        pinyin: "xī shì níng rén",
        defZh: "调解纠纷，使事情平息下来，让大家相安无事。",
        defEn: "Patch up a quarrel and maintain peace.",
        example: "为了息事宁人，他主动向邻居道了歉。",
        category: "品格人际"
    },
    {
        idiom: "推心置腹",
        pinyin: "tuī xīn zhì fù",
        defZh: "比喻真心待人，毫无保留地谈真心话。",
        defEn: "Confide inside knowledge completely.",
        example: "经过一次推心置腹的谈话，两人的误会解开了。",
        category: "品格人际"
    },
    {
        idiom: "自私自利",
        pinyin: "zì sī zì lì",
        defZh: "只为自己的利益打算，不顾别人。",
        defEn: "Selfish; textbook self-interest.",
        example: "自私自利的人往往很难交到真正的朋友。",
        category: "品格人际"
    },
    {
        idiom: "见利忘义",
        pinyin: "jiàn lì wàng yì",
        defZh: "见到利益就忘记了道义。",
        defEn: "Forget justice at the sight of money.",
        example: "他在利益面前见利忘义，背叛了多年的好兄弟。",
        category: "品格人际"
    },
    {
        idiom: "宽宏大量",
        pinyin: "kuān hóng dà liàng",
        defZh: "形容人度量大，能容人、原谅人。",
        defEn: "Magnanimous; broad-minded.",
        example: "他是个宽宏大量的人，不会把这件小事放在心上。",
        category: "品格人际"
    },
    {
        idiom: "众志成城",
        pinyin: "zhòng zhì chéng chéng",
        defZh: "万众一心，像坚固的城墙一样。比喻大家团结一致力量强。",
        defEn: "Unity is strength.",
        example: "灾难面前，全国人民众志成城，共渡难关。",
        category: "品格人际"
    },
    {
        idiom: "患难与共",
        pinyin: "huàn nàn yǔ gòng",
        defZh: "共同承担困难和灾祸。",
        defEn: "Share trials and tribulations together.",
        example: "这两家公司是患难与共的战略合作伙伴。",
        category: "品格人际"
    },
    {
        idiom: "借刀杀人",
        pinyin: "jiè dāo shā rén",
        defZh: "比喻利用别人的力量去伤害自己想要伤害的人。",
        defEn: "Murder with a borrowed sword.",
        example: "他企图借刀杀人，不过这一阴谋很快被识破了。",
        category: "品格人际"
    },
    {
        idiom: "落井下石",
        pinyin: "luò jǐng xià shí",
        defZh: "比喻在别人遇到灾祸、困难的时候顺便去加害他。",
        defEn: "Hit a person when he's down.",
        example: "朋友遇到困难时我们应伸出援手，而不是落井下石。",
        category: "品格人际"
    },
    {
        idiom: "一意孤行",
        pinyin: "yī yì gū xíng",
        defZh: "不听别人的劝告，固执地照自己的想法去做。",
        defEn: "Blunder blindly; act willfully.",
        example: "如果他不听劝阻一意孤行，后果只能由他自己承担。",
        category: "品格人际"
    },
    {
        idiom: "虚情假意",
        pinyin: "xū qíng jiǎ yì",
        defZh: "假装出来的热情或好意。不是真心实意。",
        defEn: "Hypocritical; false friendliness.",
        example: "他那虚情假意的关切，让人感到十分不舒服。",
        category: "品格人际"
    },
    {
        idiom: "以德报怨",
        pinyin: "yǐ dé bào yuàn",
        defZh: "用恩德和善意去回报别人对自己的怨恨。",
        defEn: "Return good for evil.",
        example: "面对曾经伤害过他的人，他选择了以德报怨。",
        category: "品格人际"
    },
    {
        idiom: "风雨同舟",
        pinyin: "fēng yǔ tóng zhōu",
        defZh: "比喻共同经历艰难困苦，互相帮助。",
        defEn: "Stand together through thick and thin.",
        example: "几十年来，这间老字号和员工们风雨同舟地走到了今天。",
        category: "品格人际"
    },
    {
        idiom: "口蜜腹剑",
        pinyin: "kǒu mì fù jiàn",
        defZh: "嘴上说得甜，心里却怀着害人的阴谋。",
        defEn: "Honey on one's lips and murder in one's heart.",
        example: "别看他平时对你笑脸相迎，其实是一个口蜜腹剑的小人。",
        category: "品格人际"
    }
];

// ==========================================
// 类别 4：🤝 处事品格与人际 (25词) - 马来西亚本地化 SMK 适用版
// ==========================================
const relationshipIdioms = [
    {
        idiom: "齐心协力",
        pinyin: "qí xīn xié lì",
        defZh: "想法和目标一致，大家共同努力。",
        defEn: "Concerted effort; pulling together as one.",
        defBm: "Bekerjasama (Bagaikan aur dengan tebing / Bulat air kerana pembetung, bulat manusia kerana muafakat).",
        example: "只要大家齐心协力，就没有完成不了的学校壁画项目。",
        category: "品格人际"
    },
    {
        idiom: "助人为乐",
        pinyin: "zhù rén wéi lè",
        defZh: "把帮助别人当作自己的快乐。",
        defEn: "Take pleasure in helping others.",
        defBm: "Suka menolong orang lain.",
        example: "大卫经常在学校帮同学们补习数学，真是个助人为乐的好学生。",
        category: "品格人际"
    },
    {
        idiom: "舍己为人",
        pinyin: "shě jǐ wèi rén",
        defZh: "为了帮助别人而牺牲自己或自己的利益。",
        defEn: "Sacrificing oneself for the benefit of others.",
        defBm: "Sanggup berkorban demi kebaikan orang lain.",
        example: "这位热心的市民舍己为人，跳入河中救起了溺水的小孩。",
        category: "品格人际"
    },
    {
        idiom: "针锋相对",
        pinyin: "zhēn fēng xiāng duì",
        defZh: "比喻双方在争论或行动中观点尖锐对立，互不相让。",
        defEn: "Sharply opposed; tit for tat.",
        defBm: "Bertarung hujah secara bertentangan dan tidak mahu mengalah.",
        example: "辩论赛上，正反两方的辩手针对环保议题展开了针锋相对的辩论。",
        category: "品格人际"
    },
    {
        idiom: "大公无私",
        pinyin: "dà gōng wú sī",
        defZh: "一心为公，毫无私心。办事非常公平公正。",
        defEn: "Completely selfless and impartial.",
        defBm: "Adil dan tidak berat sebelah (adil saksama).",
        example: "法官在判决案件时，应当大公无私，只看事实证据。",
        category: "品格人际"
    },
    {
        idiom: "光明磊落",
        pinyin: "guāng míng lěi luò",
        defZh: "胸怀坦荡，行为正派。没有任何见不得人的秘密。",
        defEn: "Open and aboveboard; honorable.",
        defBm: "Sangat jujur, tulus ikhlas dan berintegriti tinggi.",
        example: "他做人光明磊落，有什么想法总是当面提出来，从不暗地伤人。",
        category: "品格人际"
    },
    {
        idiom: "损人利己",
        pinyin: "sǔn rén lì jǐ",
        defZh: "损害别人的利益来换取自己的利益。",
        defEn: "Harming others to benefit oneself.",
        defBm: "Mementingkan diri sendiri dengan mengorbankan orang lain.",
        example: "在竞争激烈的比赛中，我们应当靠实力赢，绝不做损人利己的事。",
        category: "品格人际"
    },
    {
        idiom: "同甘共苦",
        pinyin: "tóng gān gòng kǔ",
        defZh: "共同享受幸福，共同承担困难和痛苦。",
        defEn: "Share both joy and sorrow together.",
        defBm: "Bersama-sama melalui susah dan senang (berat sama dipikul, ringan sama dijinjing).",
        example: "这两家公司是风雨同舟、同甘共苦的商业伙伴。",
        category: "品格人际"
    },
    {
        idiom: "忘恩负义",
        pinyin: "wàng ēn fù yì",
        defZh: "忘记别人对自己的恩德，甚至做出对不起恩人的事。",
        defEn: "Ungrateful; biting the hand that feeds you.",
        defBm: "Kacang lupakan kulit / Tidak mengenang budi.",
        example: "他曾经得到大卫的大力资助，如今发财了却不认人，真是忘恩负义。",
        category: "品格人际"
    },
    {
        idiom: "通情达理",
        pinyin: "tōng qíng dá lǐ",
        defZh: "说话做事合情合理。懂得人情世故，不无理取闹。",
        defEn: "Reasonable, understanding and sensible.",
        defBm: "Bertimbang rasa dan bersikap sangat rasional.",
        example: "隔壁的邻居非常通情达理，每次听到我们的施工噪音都能理解谅解。",
        category: "品格人际"
    },
    {
        idiom: "斤斤计较",
        pinyin: "jīn jīn jì jiào",
        defZh: "在无关紧要的小事或极小的利益上过分地计较。",
        defEn: "Haggling over every minor detail or small benefit.",
        defBm: "Sangat berkira tentang perkara kecil atau remeh-temeh.",
        example: "朋友相处要多点大度包容，别在小事上斤斤计较。",
        category: "品格人际"
    },
    {
        idiom: "息事宁人",
        pinyin: "xī shì níng rén",
        defZh: "调解纠纷，使事情平息下来，让大家相安无事。",
        defEn: "Patch up a quarrel; maintain peace.",
        defBm: "Menyelesaikan perselisihan demi menjaga keamanan bersama.",
        example: "为了息事宁人，他主动把车退了一步，让对面的车辆先行通过。",
        category: "品格人际"
    },
    {
        idiom: "推心置腹",
        pinyin: "tuī xīn zhì fù",
        defZh: "真心待人。毫无保留地吐露真心话。",
        defEn: "Confiding in someone completely; sincere.",
        defBm: "Meluahkan isi hati yang jujur dan ikhlas kepada kawan.",
        example: "通过那一次推心置腹的深度交谈，兄弟两人的多年误会终于化解了。",
        category: "品格人际"
    },
    {
        idiom: "自私自利",
        pinyin: "zì sī zì lì",
        defZh: "只为自己的私利打算，不顾别人的利益和感受。",
        defEn: "Selfish and self-centered.",
        defBm: "Bagai enau dalam belukar, melepaskan pucuk masing-masing.",
        example: "这种自私自利的人在班集体里是很难结交到真正的朋友的。",
        category: "品格人际"
    },
    {
        idiom: "见利忘义",
        pinyin: "jiàn lì wàng yì",
        defZh: "在金钱利益面前，把道义和信用完全丢在一边。",
        defEn: "Forgetting morality for personal gain.",
        defBm: "Melupakan keadilan dan persahabatan demi kepentingan peribadi.",
        example: "商业竞争要重信誉，绝不能因蝇头小利就见利忘义。",
        category: "品格人际"
    },
    {
        idiom: "宽宏大量",
        pinyin: "kuān hóng dà liàng",
        defZh: "度量宽大。能原谅别人的过错，不记仇。",
        defEn: "Magnanimous; very forgiving and generous.",
        defBm: "Berjiwa besar dan pemaaf (tidak berdendam).",
        example: "他是一个宽宏大量的人，不小心被你撞到了也只是笑笑不生气。",
        category: "品格人际"
    },
    {
        idiom: "众志成城",
        pinyin: "zhòng zhì chéng chéng",
        defZh: "万众一心，力量就像坚固的城墙一样。比喻团结就是力量。",
        defEn: "Unity is strength; working together to overcome any obstacle.",
        defBm: "Bulat air kerana pembetung, bulat manusia kerana muafakat.",
        example: "在百年一遇的洪灾面前，全马各族人民众志成城，共同救灾。",
        category: "品格人际"
    },
    {
        idiom: "患难与共",
        pinyin: "huàn nàn yǔ gòng",
        defZh: "共同承担困难、灾祸和磨难。",
        defEn: "Share trials, hardships and tribulations together.",
        defBm: "Menghadapi kesukaran dan musibah secara bersama-sama.",
        example: "创业初期，他们几位志同道合的兄弟患难与共，终于有了今天的成就。",
        category: "品格人际"
    },
    {
        idiom: "借刀杀人",
        pinyin: "jiè dāo shā rén",
        defZh: "比喻利用别人的力量去伤害自己想要伤害的人。",
        defEn: "To harm someone using another person as a tool.",
        defBm: "Menggunakan pihak lain sebagai alat untuk mencederakan musuh.",
        example: "他利用别人的一句无心抱怨去告状，这种借刀杀人的做法真卑鄙。",
        category: "品格人际"
    },
    {
        idiom: "落井下石",
        pinyin: "luò jǐng xià shí",
        defZh: "比喻在别人遇到困难、灾祸时，不去帮助反而去加害他。",
        defEn: "To hit a person when he is already down.",
        defBm: "Menolak orang yang jatuh ditimpa tangga.",
        example: "朋友犯了错正处于低谷时，我们应拉他一把，而不是落井下石。",
        category: "品格人际"
    },
    {
        idiom: "一意孤行",
        pinyin: "yī yì gū xíng",
        defZh: "不听别人的好意劝告，非常固执地照自己的想法去做。",
        defEn: "Acting willfully and ignoring advice.",
        defBm: "Berdegil mengikut keputusan sendiri tanpa mendengar nasihat orang lain.",
        example: "如果他继续一意孤行地去投资这个高风险项目，后果只能自负了。",
        category: "品格人际"
    },
    {
        idiom: "虚情假意",
        pinyin: "xū qíng jiǎ yì",
        defZh: "假装出来的虚伪好意和热心。不是真心的。",
        defEn: "Hypocritical and insincere kindness.",
        defBm: "Sikap berpura-pura baik atau tidak ikhlas (talam dua muka).",
        example: "我们能够分辨谁是真朋友，谁又在对我们虚情假意。",
        category: "品格人际"
    },
    {
        idiom: "以德报怨",
        pinyin: "yǐ dé bào yuàn",
        defZh: "用善良、宽容的态度去回报别人对自己的怨恨和伤害。",
        defEn: "Return good for evil; forgive and move on.",
        defBm: "Membalas kejahatan atau kebencian orang lain dengan kebaikan.",
        example: "面对曾经嘲笑过他的对手，他选择了以德报怨，在他困难时提供援助。",
        category: "品格人际"
    },
    {
        idiom: "风雨同舟",
        pinyin: "fēng yǔ tóng zhōu",
        defZh: "比喻在艰难困苦的环境中共同度过，互相扶持帮助。",
        defEn: "Stand together through thick and thin; weather the storm together.",
        defBm: "Bagaikan aur dengan tebing (saling membantu semasa sukar).",
        example: "在这场史无前例的经济危机中，全公司上下风雨同舟，共渡难关。",
        category: "品格人际"
    },
    {
        idiom: "口蜜腹剑",
        pinyin: "kǒu mì fù jiàn",
        defZh: "嘴巴说得像蜜一样甜，心里却怀着害人的毒计。形容人虚伪奸诈。",
        defEn: "Honeyed words but a wicked heart.",
        defBm: "Kata-kata manis di mulut tetapi berniat jahat di dalam hati.",
        example: "别被他平时的甜言蜜语骗了，其实他是一个口蜜腹剑的伪君子。",
        category: "品格人际"
    }
];

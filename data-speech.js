// ==========================================
// 类别 6：💬 说话言谈与寓理 (25词)
// ==========================================
const speechIdioms = [
    {
        idiom: "胡言乱语",
        pinyin: "hú yán luàn yǔ",
        defZh: "指没有根据、不合情理地瞎说。",
        defEn: "Nonsense; talk wildly.",
        example: "他因为发高烧烧糊涂了，一直在床上胡言乱语。",
        category: "说话寓理"
    },
    {
        idiom: "名正言顺",
        pinyin: "míng zhèng yán shùn",
        defZh: "名义正当，说话合乎情理，做事顺理成章。",
        defEn: "Perfectly justifiable; perfectly normal.",
        example: "他通过了层层考核，名正言顺地接任了部门经理的职位。",
        category: "说话寓理"
    },
    {
        idiom: "自相矛盾",
        pinyin: "zì xiāng máo dùn",
        defZh: "比喻自己的言行前后抵触，不能自圆其说。",
        defEn: "Self-contradictory.",
        example: "你刚才还说没去过那个商场，现在又说买了衣服，真是自相矛盾。",
        category: "说话寓理"
    },
    {
        idiom: "画蛇添足",
        pinyin: "huà shé tiān zú",
        defZh: "比喻做了多余的事，不仅没有好处，反而坏了事。",
        defEn: "Gild the lily; ruin something by adding unnecessary elements.",
        example: "这篇作文结尾已经很完美了，你再加这两句纯属画蛇添足。",
        category: "说话寓理"
    },
    {
        idiom: "井底之蛙",
        pinyin: "jǐng dǐ zhī wā",
        defZh: "井底的青蛙。比喻眼光狭隘、见识短浅的人。",
        defEn: "A frog in a well; a person with narrow vision.",
        example: "我们必须多出国看世界，不能做井底之蛙。",
        category: "说话寓理"
    },
    {
        idiom: "对牛弹琴",
        pinyin: "duì niú tán qín",
        defZh: "比喻对不懂道理的人讲道理，白费口舌。也讽刺看错对象。",
        defEn: "Play the lute to a cow; address the wrong audience.",
        example: "他根本不懂音乐，你跟他谈交响乐简直是对牛弹琴。",
        category: "说话寓理"
    },
    {
        idiom: "狐假虎威",
        pinyin: "hú jiǎ hǔ wēi",
        defZh: "狐狸假借老虎的威势。比喻依仗别人的势力来欺压人。",
        defEn: "The fox borrows the tiger's majesty; bully people by relying on powerful connections.",
        example: "那个组长整天狐假虎威，拿着经理的指令来刁难员工。",
        category: "说话寓理"
    },
    {
        idiom: "流言蜚语",
        pinyin: "liú yán fēi yǔ",
        defZh: "毫无根据的传言、诽谤和恶意的坏话。",
        defEn: "Rumors and slanders; gossip.",
        example: "做人只要问心无愧，就不必理会那些流言蜚语。",
        category: "说话寓理"
    },
    {
        idiom: "直言不讳",
        pinyin: "zhí yán bù huì",
        defZh: "说话直截了当，毫无顾忌和隐瞒。",
        defEn: "Speak frankly without reservations.",
        example: "王顾问直言不讳地指出了我们方案中存在的致命漏洞。",
        category: "说话寓理"
    },
    {
        idiom: "三言两语",
        pinyin: "sān yán liǎng yǔ",
        defZh: "几句话。形容言语十分简短。",
        defEn: "In a few words; briefly.",
        example: "这个复杂的科学原理，绝对不是三言两语就能解释清楚的。",
        category: "说话寓理"
    },
    {
        idiom: "守口如瓶",
        pinyin: "shǒu kǒu rú píng",
        defZh: "闭口不言，像瓶口塞紧了一样。形容说话极其谨慎，保守秘密。",
        defEn: "Keep one's mouth shut; tight-lipped.",
        example: "放心吧，你告诉我的秘密，我一定会守口如瓶的。",
        category: "说话寓理"
    },
    {
        idiom: "一针见血",
        pinyin: "yī zhēn jiàn xiě",
        defZh: "比喻说话或写文章直截了当，切中要害。",
        defEn: "Hit the nail on the head.",
        example: "老师的点评一针见血，立刻让我找到了修改作文的方向。",
        category: "说话寓理"
    },
    {
        idiom: "亡羊补牢",
        pinyin: "wáng yáng bǔ láo",
        defZh: "丢了羊再去修补羊圈。比喻出了问题及时补救，还来得及。",
        defEn: "Mend the fold after the sheep are lost; better late than never.",
        example: "虽然之前错过了机会，但现在开始努力亡羊补牢，还来得及。",
        category: "说话寓理"
    },
    {
        idiom: "拔苗助长",
        pinyin: "bá miáo zhù zhǎng",
        defZh: "比喻违反事物的发展规律，急于求成，反而把事情弄糟。",
        defEn: "Pull up seedlings to help them grow; spoil things through excessive enthusiasm.",
        example: "让幼稚园的孩子去学微积分，简直是拔苗助长。",
        category: "说话寓理"
    },
    {
        idiom: "掩耳盗铃",
        pinyin: "yǎn ěr dào líng",
        defZh: "捂住自己的耳朵去偷铃铛。比喻自己欺骗自己。",
        defEn: "Deceive oneself; bury one's head in the sand.",
        example: "他以为不看成绩单就代表没考砸，简直是掩耳盗铃。",
        category: "说话寓理"
    },
    {
        idiom: "塞翁失马",
        pinyin: "sài wēng shī mǎ",
        defZh: "比喻一时虽然受到损失，也许因此能得到好处。坏事可变好事。",
        defEn: "A blessing in disguise.",
        example: "虽然丢了旧工作，但他却因此找到了更好的平台，真是塞翁失马。",
        category: "说话寓理"
    },
    {
        idiom: "千篇一律",
        pinyin: "qiān piān yī lǜ",
        defZh: "形容文章或事物形式单调，都是一个老套路，没有变化。",
        defEn: "Stereotyped; repetitive and monotonous.",
        example: "现在的网络短视频千篇一律，看多了让人觉得很无聊。",
        category: "说话寓理"
    },
    {
        idiom: "口若悬河",
        pinyin: "kǒu ruò xuán hé",
        defZh: "讲起话来滔滔不绝，像瀑布奔流一样。形容能言善辩。",
        defEn: "Have a grand flow of words; highly eloquent.",
        example: "推销员口若悬河地介绍着产品，许多路人都停下来购买。",
        category: "说话寓理"
    },
    {
        idiom: "言行一致",
        pinyin: "yán xíng yī zhì",
        defZh: "说的和做的完全相同。",
        defEn: "Match words with deeds.",
        example: "我们做人要诚实信用，做到言行一致。",
        category: "说话寓理"
    },
    {
        idiom: "信口开河",
        pinyin: "xìn kǒu kāi hé",
        defZh: "随口乱说，不负责任。",
        defEn: "Talk irresponsibly; shoot one's mouth off.",
        example: "在正式的新闻发布会上，发言人绝不能信口开河。",
        category: "说话寓理"
    },
    {
        idiom: "语重心长",
        pinyin: "yǔ zhòng xīn cháng",
        defZh: "言辞诚恳，情意深长。多用于长辈或老师的劝导。",
        defEn: "Speak in earnest words and with good intentions.",
        example: "毕业前夕，班主任语重心长地对我们说了许多勉励的话。",
        category: "说话寓理"
    },
    {
        idiom: "巧舌如簧",
        pinyin: "qiǎo shé rú huáng",
        defZh: "形容能说会道，善于用花言巧语欺骗人。",
        defEn: "Have a glib tongue.",
        example: "任凭那个骗子巧舌如簧，大伙儿就是不上他的当。",
        category: "说话寓理"
    },
    {
        idiom: "人云亦云",
        pinyin: "rén yún yì yún",
        defZh: "人家怎么说，自己也跟着怎么说。形容没有独立见解。",
        defEn: "Echo what others say; slavishly parrot others.",
        example: "面对复杂的网络舆论，我们要理性分析，绝不能人云亦云。",
        category: "说话寓理"
    },
    {
        idiom: "字斟句酌",
        pinyin: "zì zhēn jù zhuó",
        defZh: "对写文章或说话的每一个字词都仔细推敲琢磨。形容极其谨慎。",
        defEn: "Weigh every word carefully.",
        example: "这份外交公函非常重要，起草时必须字斟句酌。",
        category: "说话寓理"
    },
    {
        idiom: "言外之意",
        pinyin: "yán wài zhī yì",
        defZh: "话里暗含着而没有直接说出来的意思。",
        defEn: "Implication; reading between the lines.",
        example: "听完经理的这番话，他立刻明白了其中的言外之意。",
        category: "说话寓理"
    }
];

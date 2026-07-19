// ==========================================
// 类别 6：💬 说话言谈与寓理 (25词) - 马来西亚本地化 SMK 适用版
// ==========================================
const speechIdioms = [
    {
        idiom: "胡言乱语",
        pinyin: "hú yán luàn yǔ",
        defZh: "没有任何事实根据地胡说八道。",
        defEn: "Nonsense; talking wildly and foolishly.",
        defBm: "Cakap kosong / Cakap merapu.",
        example: "他刚才发高烧烧糊涂了，所以在病床上一直胡言乱语。",
        category: "说话寓理"
    },
    {
        idiom: "名正言顺",
        pinyin: "míng zhèng yán shùn",
        defZh: "名义正当，做事或说话顺理成章，理由非常充足。",
        defEn: "Perfectly justifiable; reasonable and normal.",
        defBm: "Mempunyai alasan yang sah, munasabah dan diterima secara rasmi.",
        example: "他经过了考核竞选，名正言顺地当上了学长团团长。",
        category: "说话寓理"
    },
    {
        idiom: "自相矛盾",
        pinyin: "zì xiāng máo dùn",
        defZh: "比喻自己说的话或做的事前后抵触，不能自圆其说。",
        defEn: "Self-contradictory in word or deed.",
        defBm: "Bercanggah antara kata-kata dengan perbuatan sendiri.",
        example: "你刚才还说你没拿别人的笔，现在笔却从你口袋拿出来，真是自相矛盾。",
        category: "说话寓理"
    },
    {
        idiom: "画蛇添足",
        pinyin: "huà shé tiān zú",
        defZh: "比喻做了多余的事，不仅没有好处，反而坏了事情。",
        defEn: "Ruining something by adding unnecessary details.",
        defBm: "Melakukan sesuatu yang sia-sia / berlebihan.",
        example: "这篇作文结尾本已非常完美，你非要再写这句废话，简直是画蛇添足。",
        category: "说话寓理"
    },
    {
        idiom: "井底之蛙",
        pinyin: "jǐng dǐ zhī wā",
        defZh: "井底的青蛙。比喻眼光十分狭窄、见识浅薄短浅的人。",
        defEn: "A person with narrow vision; a frog in a well.",
        defBm: "Katak di bawah tempurung.",
        example: "我们要多阅读，放眼世界，绝对不能做目光短浅的井底之蛙。",
        category: "说话寓理"
    },
    {
        idiom: "对牛弹琴",
        pinyin: "duì niú tán qín",
        defZh: "比喻对着不懂道理的人讲道理。白费力气和口舌。",
        defEn: "Addressing the wrong audience; waste of effort.",
        defBm: "Masuk telinga kanan, keluar telinga kiri.",
        example: "大卫根本对古典音乐一窍不通，你跟他大谈贝多芬简直是对牛弹琴。",
        category: "说话寓理"
    },
    {
        idiom: "狐假虎威",
        pinyin: "hú jiǎ hǔ wēi",
        defZh: "狐狸假借老虎的威势。比喻依仗有权有势的人来欺压他人。",
        defEn: "Bullying people by relying on powerful connections.",
        defBm: "Menumpang megah / Berlagak dengan kuasa orang lain.",
        example: "那个小职员经常拿着经理的名牌刁难同事，纯粹是狐假虎威。",
        category: "说话寓理"
    },
    {
        idiom: "流言蜚语",
        pinyin: "liú yán fēi yǔ",
        defZh: "毫无事实根据的、恶意的、诽谤别人的坏话、八卦传言。",
        defEn: "Slanderous rumors; malicious gossip.",
        defBm: "Khabar angin yang berunsur fitnah atau gosip jahat.",
        example: "做人只要问心无愧就行，完全不必理会背后的那些流言蜚语。",
        category: "说话寓理"
    },
    {
        idiom: "直言不讳",
        pinyin: "zhí yán bù huì",
        defZh: "说话直截了当，没有任何隐瞒和顾忌。",
        defEn: "Speaking frankly without any reservation.",
        defBm: "Bercakap secara berterus-terang tanpa menyembunyikan kebenaran.",
        example: "王顾问在点评会上面，直言不讳地指出我们计划中的重大漏洞。",
        category: "说话寓理"
    },
    {
        idiom: "三言两语",
        pinyin: "sān yán liǎng yǔ",
        defZh: "短短几句话。形容说话内容十分简明扼要。",
        defEn: "Briefly; in just a few words.",
        defBm: "Menerangkan sesuatu perkara dengan ringkas (beberapa perkataan sahaja).",
        example: "这个复杂的量子物理学原理，绝不是三言两语就能解释得清的。",
        category: "说话寓理"
    },
    {
        idiom: "守口如瓶",
        pinyin: "shǒu kǒu rú píng",
        defZh: "嘴巴紧闭得像塞住的瓶口。比喻保密工作做得好，绝不泄漏。",
        defEn: "Keeping one's mouth shut; tight-lipped about a secret.",
        defBm: "Menyimpan rahsia atau amanah dengan sangat ketat.",
        example: "你放心把秘密告诉我吧，我保证对谁都守口如瓶。",
        category: "说话寓理"
    },
    {
        idiom: "一针见血",
        pinyin: "yī zhēn jiàn xiě",
        defZh: "比喻说话或写文章能直截了当，切中核心要害。",
        defEn: "Hit the nail on the head; direct and precise.",
        defBm: "Bercakap secara tepat dan terus-terang mengenai isi penting.",
        example: "老师的那句评语一针见血，立刻帮我指出了作文的致命错误。",
        category: "说话寓理"
    },
    {
        idiom: "亡羊补牢",
        pinyin: "wáng yáng bǔ láo",
        defZh: "羊丢了才去修补羊圈。比喻出了问题及时补救，还来得及避免更大的损失。",
        defEn: "Mending the fold after the sheep are lost; better late than never.",
        defBm: "Sesal dahulu pendapatan, sesal kemudian tidak berguna (memperbaiki kesalahan).",
        example: "这次考试考砸了，现在开始查漏补缺，认真复习，亡羊补牢为时不晚。",
        category: "说话寓理"
    },
    {
        idiom: "拔苗助长",
        pinyin: "bá miáo zhù zhǎng",
        defZh: "比喻违反事物自然发展的规律，急于求成，结果把事情弄坏了。",
        defEn: "Spoiling things through excessive enthusiasm or being too hasty.",
        defBm: "Mengharapkan hasil cepat sehingga merosakkan seluruh rancangan.",
        example: "逼一个三岁的幼儿去学奥数题目，这无异于拔苗助长。",
        category: "说话寓理"
    },
    {
        idiom: "掩耳盗铃",
        pinyin: "yǎn ěr dào líng",
        defZh: "捂住自己的耳朵去偷铃铛。比喻自己欺骗自己，想法愚蠢。",
        defEn: "Deceiving oneself; burying one's head in the sand.",
        defBm: "Menipu diri sendiri dengan tindakan yang sangat bodoh.",
        example: "不交手机却以为班主任不知道他带了手机，简直是掩耳盗铃。",
        category: "说话寓理"
    },
    {
        idiom: "塞翁失马",
        pinyin: "sài wēng shī mǎ",
        defZh: "比喻一时虽然受到了小损失，说不定反而能因此得到好处（坏事变好事）。",
        defEn: "A blessing in disguise.",
        defBm: "Ada hikmah yang tersembunyi di sebalik setiap musibah.",
        example: "虽然在运动会跌倒错失金牌，却让他认识了一群好战友，真是塞翁失马，焉知非福。",
        category: "说话寓理"
    },
    {
        idiom: "千篇一律",
        pinyin: "qiān piān yī lǜ",
        defZh: "形容文章或事物形式单一，一成不变，没有新意和变化。",
        defEn: "Stereotyped; repetitive and monotonous.",
        defBm: "Sesuatu yang membosankan, tidak kreatif dan sentiasa sama.",
        example: "目前的网络自媒体短视频千篇一律，看多了十分乏味。",
        category: "说话寓理"
    },
    {
        idiom: "口若悬河",
        pinyin: "kǒu ruò xuán hé",
        defZh: "说话像大河奔流一样滔滔不绝。形容能言善辩，口才极其出众。",
        defEn: "Extremely eloquent; a grand flow of words.",
        defBm: "Sangat petah bercakap dengan aliran hujah yang lancar.",
        example: "那位著名的华人销售代表口若悬河，很快就说服了台下的顾客购买商品。",
        category: "说话寓理"
    },
    {
        idiom: "言行一致",
        pinyin: "yán xíng yī zhì",
        defZh: "说的话和做的事完全相同。形容人说话算话、讲信用。",
        defEn: "Matching one's words with deeds; honest.",
        defBm: "Cakap serupa bikin (berpegang pada janji).",
        example: "做人必须讲引起信用，只有做到言行一致，才能赢得他人信赖。",
        category: "说话寓理"
    },
    {
        idiom: "信口开河",
        pinyin: "xìn kǒu kāi hé",
        defZh: "毫无事实根据、不负责任地随口乱说。",
        defEn: "Talking irresponsibly; shooting one's mouth off.",
        defBm: "Bercakap sesuka hati tanpa memikirkan kesannya.",
        example: "在重大的校务会议上，身为代表的人绝不能信口开河。",
        category: "说话寓理"
    },
    {
        idiom: "语重心长",
        pinyin: "yǔ zhòng xīn cháng",
        defZh: "言辞诚恳，情意深长。多用于长辈、老师对晚辈的真心劝导。",
        defEn: "Speaking in earnest words and with good intentions.",
        defBm: "Nasihat yang tulus, penuh hikmah dan mendalam daripada orang tua.",
        example: "临考前，级任老师语重心长地叮嘱我们大考时的注意细节。",
        category: "说话寓理"
    },
    {
        idiom: "巧舌如簧",
        pinyin: "qiǎo shé rú huáng",
        defZh: "形容人能说会道。但多数带有贬义，指擅长用花言巧语欺骗他人。",
        defEn: "Having a glib tongue; sweet-talk to deceive.",
        defBm: "Sangat pandai bermulut manis untuk menipu orang lain.",
        example: "哪怕那个骗子巧舌如簧，台下聪明的同学们也没有一个人上当。",
        category: "说话寓理"
    },
    {
        idiom: "人云亦云",
        pinyin: "rén yún ýi yún",
        defZh: "人家怎么说，自己也跟着怎么说。形容缺乏独立主见。",
        defEn: "Echoing what others say slavishly; parrotting without independent thought.",
        defBm: "Mengikut sahaja pendapat orang lain tanpa berfikir sendiri.",
        example: "面对复杂的互联网传闻，我们应该冷静分析，绝不能人云亦云。",
        category: "说话寓理"
    },
    {
        idiom: "字斟句酌",
        pinyin: "zì zhēn jù zhuó",
        defZh: "对写文章或说话的每一个字和词都仔细推敲、琢磨。形容极其谨慎、认真。",
        defEn: "Weighing every word carefully before speaking or writing.",
        defBm: "Memilih perkataan dengan sangat teliti sebelum bercakap atau menulis.",
        example: "这份写给教育局的公函至关重要，起草时必须字斟句酌，绝不能出错。",
        category: "说话寓理"
    },
    {
        idiom: "言外之意",
        pinyin: "yán wài zhī yì",
        defZh: "话里暗暗隐藏、暗示着却没有直接说出口的意思。",
        defEn: "The implication; reading between the lines.",
        defBm: "Maksud tersirat yang tersembunyi di sebalik kata-kata.",
        example: "听完了校长的这番真诚夸奖，大家立刻就明白了其中的言外之意。",
        category: "说话寓理"
    }
];

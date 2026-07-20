// ==================================================================
// 常用成语 200 句数据源：分卷 7 (💡 见识谋略类 - 成语 151 - 175)
// ==================================================================

const wisdomIdioms = [
    {
        idiom: "高瞻远瞩",
        pinyin: "gāo zhān yuǎn zhǔ",
        defZh: "站得高，看得远。比喻眼光远大，能预见事情的前景和发展趋势。",
        defEn: "Broad vision; far-sighted; look ahead with exceptional insight.",
        defBm: "Mempunyai pandangan yang jauh dan luas serta bijak merancang masa depan.",
        example: "在规划国家数字经济蓝图时，政府领导人展现了高瞻远瞩的智慧。",
        category: "见识谋略"
    },
    {
        idiom: "深谋远虑",
        pinyin: "shēn móu yuǎn lǜ",
        defZh: "计划周密，考虑长远。形容做事非常慎重，具有长远的打算。",
        defEn: "Thoughtful planning; far-sighted planning; deep calculations.",
        defBm: "Perancangan yang sangat teliti, bijak dan mengambil kira kesan jangka panjang.",
        example: "他是一个深谋远虑的创业家，绝不会为眼前的蝇头小利而冒险。",
        category: "见识谋略"
    },
    {
        idiom: "见微知著",
        pinyin: "jiàn wēi zhī zhù",
        defZh: "看到细微的迹象，就能知道事物的发展趋势或本质。",
        defEn: "From a spark, we can see the fire; identify a trend from tiny signs.",
        defBm: "Mengetahui perkembangan atau masalah besar melalui petunjuk kecil sahaja.",
        example: "一个优秀的经济学家应该能够从微小的市场波动中见微知著，预测危机。",
        category: "见识谋略"
    },
    {
        idiom: "防微杜渐",
        pinyin: "fáng wēi dù jiàn",
        defZh: "在坏思想、坏事或问题刚刚萌芽时，就加以制止，不让它发展扩散。",
        defEn: "Nip in the bud; prevent a problem before it gets out of hand.",
        defBm: "Mencegah atau membanteras masalah moral atau disiplin sejak awal sebelum merebak.",
        example: "面对学校里的霸凌现象，我们必须防微杜渐，绝不能等事情闹大才处理。",
        category: "见识谋略"
    },
    {
        idiom: "见仁见智",
        pinyin: "jiàn rén jiàn zhì",
        defZh: "比喻对同一个问题，因为每个人的立场或见识不同，而有不同的看法。",
        defEn: "Different people, different views; open to interpretation.",
        defBm: "Berbeza pandangan atau pendapat (setiap orang mempunyai ulasan tersendiri).",
        example: "关于人工智能是否会完全取代人类，学者们对此见仁见智，辩论不休。",
        category: "见识谋略"
    },
    {
        idiom: "纸上谈兵",
        pinyin: "zhǐ shàng tán bīng",
        defZh: "在纸面上谈论用兵。比喻只懂得空谈理论，不能解决实际问题。",
        defEn: "Armchair strategy; empty theory that cannot be put into practice.",
        defBm: "Hanya pandai bercakap teori kosong di atas kertas tetapi tidak mampu bertindak.",
        example: "没有实战经验的商业计划书，说得再动听也只是纸上谈兵罢了。",
        category: "见识谋略"
    },
    {
        idiom: "守株待兔",
        pinyin: "shǒu zhū dài tù",
        defZh: "比喻死守狭隘经验，妄想不经过努力而获得侥幸的成功或意外财富。",
        defEn: "Wait for windfalls; expect rewards without any personal effort.",
        defBm: "Menunggu durian runtuh tanpa mahu berusaha keras (mengharapkan nasib semata-mata).",
        example: "他不肯踏实找工作，整天幻想中彩票，这种守株待兔的懒散作风真让人叹息。",
        category: "见识谋略"
    },
    {
        idiom: "塞翁失马",
        pinyin: "sài wēng shī mǎ",
        defZh: "边塞老翁丢了马却因祸得福。比喻一时的坏事可能转化为好事，坏事蕴含着好转的转机。",
        defEn: "A blessing in disguise; misfortune may turn into a good fortune.",
        defBm: "Ada hikmah di sebalik musibah yang berlaku (kesulitan yang membawa kebaikan).",
        example: "虽然他落选了国家队，却因此有时间治好旧伤，真是塞翁失马，焉知非福。",
        category: "见识谋略"
    },
    {
        idiom: "寻根问底",
        pinyin: "xún gēn wèn dǐ",
        defZh: "指一定要把事情的源头、起因或底层逻辑彻底查清楚。",
        defEn: "Inquire deeply; trace to the very source; go to the root of the matter.",
        defBm: "Menyiasat atau mencari penjelasan sesuatu perkara hingga ke akar umbi.",
        example: "做学问、做实验必须抱着寻根问底的精神，才能突破科学瓶颈。",
        category: "见识谋略"
    },
    {
        idiom: "急功近利",
        pinyin: "jí gōng jìn lì",
        defZh: "急于求成，只图眼前的利益或暂时的名气，缺乏长远眼光。",
        defEn: "Eager for instant success and quick profits; short-sighted.",
        defBm: "Sangat terburu-buru mahukan hasil yang cepat tanpa memikirkan kesan buruk masa depan.",
        example: "有些商家为了急功近利而偷工减料，最终砸了自己的百年招牌。",
        category: "见识谋略"
    },
    {
        idiom: "敷衍了事",
        pinyin: "fū yǎn liǎo shì",
        defZh: "做事马虎、态度极不认真，只想勉强应付过去就算了。",
        defEn: "Perform one's duty perfunctorily; do a sloppy and careless job.",
        defBm: "Melakukan tugas secara cincai, acuh tidak acuh atau sekadar melepaskan batuk di tangga.",
        example: "对待我们的华文作业，必须态度端正，绝不能抱着敷衍了事的心态。",
        category: "见识谋略"
    },
    {
        idiom: "实事求是",
        pinyin: "shí shì qiú shì",
        defZh: "从实际情况出发，不夸大、不隐瞒，探求事物的真理和正确出路。",
        defEn: "Seek truth from facts; be realistic and practical; call a spade a spade.",
        defBm: "Bertindak berdasarkan realiti dan fakta sebenar tanpa menyembunyikan kebenaran.",
        example: "科学实验容不得半点虚假，我们必须抱着实事求是的态度记录每一个数据。",
        category: "见识谋略"
    },
    {
        idiom: "顺藤摸瓜",
        pinyin: "shùn téng mō guā",
        defZh: "比喻顺着现有的线索一步一步地追查，最终找到事情的真相或根源。",
        defEn: "Follow a clue to the end; follow the trail to find the truth.",
        defBm: "Mengikut petunjuk yang ada selangkah demi selangkah untuk membongkar kebenaran.",
        example: "警方根据盗窃现场遗留的指纹，顺藤摸瓜，成功捣毁了跨国犯罪集团。",
        category: "见识谋略"
    },
    {
        idiom: "举一反三",
        pinyin: "jǔ yī fǎn sān",
        defZh: "从一件事物中领悟其精髓原理，进而推知出其他类似事物的规律特征。",
        defEn: "Draw inferences about other cases from one instance; learn by analogy.",
        defBm: "Mampu memahami banyak perkara baharu dengan merujuk kepada satu contoh sahaja.",
        example: "在做数理解题时，我们要学会举一反三，而不是只知道死记硬背硬公式。",
        category: "见识谋略"
    },
    {
        idiom: "随机应变",
        pinyin: "suí jī yìng biàn",
        defZh: "随着情况和环境的变化，随时灵活机智地调整应变策略。",
        defEn: "Adapt oneself to changing conditions; play by ear.",
        defBm: "Bijak menyesuaikan diri dan bertindak mengikut perubahan keadaan semasa.",
        example: "辩论赛上风云变幻，选手必须学会随机应变，巧妙化解对方的提问。",
        category: "见识谋略"
    },
    {
        idiom: "听其自然",
        pinyin: "tīng qí zì rán",
        defZh: "听任事情自然发展变化，不加以人为的主观干涉或过度操心。",
        defEn: "Let things take their course; let nature run its course.",
        defBm: "Membiarkan perkara berlaku dan berkembang secara semula jadi tanpa campur tangan.",
        example: "既然我们已经做足了所有防汛准备，接下来也只能听其自然了。",
        category: "见识谋略"
    },
    {
        idiom: "三思而行",
        pinyin: "sān sī ér xíng",
        defZh: "反复考虑、想清楚后果后再采取实际行动。形容做事极其谨慎。",
        defEn: "Think twice before acting; look before you leap.",
        defBm: "Berfikir masak-masak sebelum melakukan sesuatu tindakan.",
        example: "进行如此庞大数额的商业投资前，你必须三思而行，以免血本无归。",
        category: "见识谋略"
    },
    {
        idiom: "直截了当",
        pinyin: "zhǐ jié liǎo dàng",
        defZh: "形容说话、做事直爽坦率、干脆利落，不绕弯子、不转弯抹角。",
        defEn: "Straightforward; direct; point-blank; cut to the chase.",
        defBm: "Bercakap atau bertindak secara terus terang tanpa berbelit-belit.",
        example: "你有什么困难就直截了当地跟我说，不必在言谈中转弯抹角。",
        category: "见识谋略"
    },
    {
        idiom: "独辟蹊径",
        pinyin: "dú pì xī jìng",
        defZh: "独自开辟出一条新道路。比喻创造出新颖独特的见解、风格或新工作方法。",
        defEn: "Blaze a new trail; take a completely unique path; stand out.",
        defBm: "Mencipta atau memulakan kaedah baharu yang unik dan berbeza daripada orang lain.",
        example: "这位年轻的时装设计师不愿随波逐流，而是独辟蹊径，开创了环保国风风潮。",
        category: "见识谋略"
    },
    {
        idiom: "顾此失彼",
        pinyin: "gù cǐ shī bǐ",
        defZh: "照顾了这一方面，却漏掉了那一方面。形容做事手忙脚乱，不能全面兼顾。",
        defEn: "Attend to one thing and lose sight of another; caught in a dilemma.",
        defBm: "Menjaga satu urusan tetapi mengabaikan atau menjejaskan urusan yang lain pula.",
        example: "在兼顾学业与学校运动训练的过程中，他有些精疲力竭，经常顾此失彼。",
        category: "见识谋略"
    },
    {
        idiom: "投机取巧",
        pinyin: "tóu jī qǔ qiǎo",
        defZh: "利用时机和漏洞，靠小聪明、不正当手段或耍滑头来换取利益。",
        defEn: "Opportunistic; take shortcuts; cheat; seek gain by trickery.",
        defBm: "Mengambil kesempatan secara tidak jujur atau menggunakan jalan pintas yang licik.",
        example: "做学问和考试要靠真才实学，任何投机取巧的行为最终都会败露受罚。",
        category: "见识谋略"
    },
    {
        idiom: "顺应潮流",
        pinyin: "shùn yìng cháo liú",
        defZh: "指顺从并适应时代发展的趋势与社会改革的方向。",
        defEn: "Go with the flow; adapt to the trend of times.",
        defBm: "Mengikut dan menyesuaikan diri dengan arus perkembangan zaman semasa.",
        example: "在无纸化时代下，传统报社必须积极转型，顺应数字化潮流才能生存。",
        category: "见识谋略"
    },
    {
        idiom: "拔苗助长",
        pinyin: "bá miáo zhù zhǎng",
        defZh: "把禾苗拔高来帮助它生长。比喻违反事物发展的规律，急于求成，结果反而把事情砸了。",
        defEn: "Spoil things by excessive enthusiasm; haste makes waste.",
        defBm: "Merosakkan rancangan kerana terlampau tergesa-gesa mahukan perkembangan cepat.",
        example: "家长逼着才三岁的幼儿去上高难度的奥数补习班，无异于拔苗助长。",
        category: "见识谋略"
    },
    {
        idiom: "一尘不染",
        pinyin: "yī chén bù rǎn",
        defZh: "形容环境极其干净整洁。也比喻人的品德纯正，不受不良社会风气的污染。",
        defEn: "Spotless; clean as a whistle; untouched by social corruption.",
        defBm: "Sangat bersih dan suci (merujuk kepada kebersihan fizikal mahupun akhlak yang murni).",
        example: "张老师虽在商界工作多年，却始终保持着廉洁自律、一尘不染的高尚作风。",
        category: "见识谋略"
    },
    {
        idiom: "执迷不悟",
        pinyin: "zhí mí bù wù",
        defZh: "坚持错误的态度，非常固执固步自封，不肯觉悟改过自新。",
        defEn: "Obstinate; refuse to realize one's errors; stubbornly hold to mistakes.",
        defBm: "Sangat degil dan tidak mahu bertaubat atau mengubah kesilapan walaupun ditegur.",
        example: "如果他继续在赌博的泥潭里执迷不悟，他的家庭必将面临彻底破裂的悲剧。",
        category: "见识谋略"
    }
];

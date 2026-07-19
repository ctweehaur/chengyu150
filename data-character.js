// ==========================================
// 类别 1：🎭 人物外貌与神态 (25词) - 马来西亚本地化 SMK 适用版
// ==========================================
const characterIdioms = [
    {
        idiom: "眉飞色舞",
        pinyin: "méi fēi sè wǔ",
        defZh: "形容非常开心、兴奋的样子。",
        defEn: "Looking extremely happy and excited.",
        defBm: "Wajah berseri-seri kerana gembira sekali.",
        example: "一谈起那场足球赛，哥哥就眉飞色舞地向大家描述起来。",
        category: "人物神态"
    },
    {
        idiom: "大惊失色",
        pinyin: "dà jīng shī sè",
        defZh: "形容非常惊慌害怕，脸色都变了。",
        defEn: "Paling with fright; extremely shocked.",
        defBm: "Sangat terkejut hingga muka menjadi pucat.",
        example: "听到家里发生火灾的消息，她大惊失色，半天说不出话来。",
        category: "人物神态"
    },
    {
        idiom: "垂头丧气",
        pinyin: "chuí tóu sàng qì",
        defZh: "形容因失败或失望而精神振作不起来的样子。",
        defEn: "Feeling dejected and crestfallen.",
        defBm: "Hampa dan kecewa (seperti ayam berak kapur).",
        example: "数学考试没考好，小明垂头丧气地走回了家。",
        category: "人物神态"
    },
    {
        idiom: "衣冠楚楚",
        pinyin: "yī guān chǔ chǔ",
        defZh: "形容穿戴整齐、漂亮和体面。",
        defEn: "Dressed neatly and smartly.",
        defBm: "Berpakaian sangat kemas, rapi dan tampan.",
        example: "他今天穿得衣冠楚楚，去参加学校的演讲比赛。",
        category: "人物神态"
    },
    {
        idiom: "文质彬彬",
        pinyin: "wén zhì bīn bīn",
        defZh: "形容人举止文雅，非常有礼貌。",
        defEn: "Polite, gentle and refined.",
        defBm: "Bersikap sopan santun, lemah lembut dan berbudi bahasa.",
        example: "这位班长一向文质彬彬的，深受老师和同学们喜欢。",
        category: "人物神态"
    },
    {
        idiom: "目瞪口呆",
        pinyin: "mù dèng kǒu dāi",
        defZh: "因吃惊、害怕或感到意外而发愣的样子。",
        defEn: "Stunned and speechless with shock.",
        defBm: "Tercengang atau tergamam kerana terlalu terkejut.",
        example: "精彩的魔术表演让台下的同学们看得目瞪口呆。",
        category: "人物神态"
    },
    {
        idiom: "精神抖擞",
        pinyin: "jīng shén dǒu sǒu",
        defZh: "形容精神振作，充满朝气和活力。",
        defEn: "Full of energy, spirit and vigor.",
        defBm: "Sangat bersemangat, cergas dan bertenaga.",
        example: "操场上的同学们精神抖擞地练习着课间操。",
        category: "人物神态"
    },
    {
        idiom: "意气风发",
        pinyin: "yì qì fēng fā",
        defZh: "形容精神振奋，志气高昂。",
        defEn: "High-spirited and full of ambition.",
        defBm: "Bersemangat tinggi dan dipenuhi azam yang membara.",
        example: "毕业典礼上，毕业生个个意气风发，憧憬着未来。",
        category: "人物神态"
    },
    {
        idiom: "蓬头垢面",
        pinyin: "péng tóu gòu miàn",
        defZh: "形容头发散乱，脸上很脏，样子不整洁。",
        defEn: "Untidy; look dirty and disheveled.",
        defBm: "Rambut kusut-masai dan muka kotor (tidak terurus).",
        example: "假期里，他整天躲在房间玩游戏，变得蓬头垢面。",
        category: "人物神态"
    },
    {
        idiom: "喜笑颜开",
        pinyin: "xǐ xiào yán kāi",
        defZh: "心情极其愉快，满脸笑容。",
        defEn: "Beaming with joy and smiling broadly.",
        defBm: "Wajah berseri-seri penuh dengan senyuman gembira.",
        example: "得知自己拿到了华语演讲比赛冠军，他喜笑颜开。",
        category: "人物神态"
    },
    {
        idiom: "神采奕奕",
        pinyin: "shén cǎi yì yì",
        defZh: "形容精神饱满，面容非常有光彩。",
        defEn: "Radiating health, energy and vitality.",
        defBm: "Kelihatan sangat sihat, bertenaga dan berseri-hari.",
        example: "校长虽然工作很忙，但每天清晨依然神采奕奕地迎接学生。",
        category: "人物神态"
    },
    {
        idiom: "面红耳赤",
        pinyin: "miàn hóng ěr chì",
        defZh: "形容因激动、害羞或发怒而脸色涨红。",
        defEn: "Flushed with anger, embarrassment or excitement.",
        defBm: "Muka merah padam (kerana marah, malu atau teruja).",
        example: "他们两个为了一个小问题，竟然争论得面红耳赤。",
        category: "人物神态"
    },
    {
        idiom: "理直气壮",
        pinyin: "lǐ zhí qì zhuàng",
        defZh: "因为理由充分，所以说话做事非常有气势、有底气。",
        defEn: "Speaking or acting with confidence because one is right.",
        defBm: "Bercakap dengan penuh yakin kerana berada di pihak yang benar.",
        example: "既然你没有抄袭别人的作业，就应该理直气壮地向老师说清楚。",
        category: "人物神态"
    },
    {
        idiom: "气势汹汹",
        pinyin: "qì饰汹汹",
        pinyin: "qì shì xiōng xiōng",
        defZh: "形容气势凶猛，态度非常粗鲁野蛮。",
        defEn: "Aggressive and fierce; in a very angry manner.",
        defBm: "Sangat garang, kasar dan menunjukkan sikap agresif.",
        example: "他气势汹汹地冲过来，指责别人弄坏了他的脚踏车。",
        category: "人物神态"
    },
    {
        idiom: "小心翼翼",
        pinyin: "xiǎo xīn yì yì",
        defZh: "形容举动十分谨慎，不敢有一点马虎。",
        defEn: "Very careful and cautious to avoid mistakes.",
        defBm: "Sangat berhati-hati, waspada dan cermat.",
        example: "她小心翼翼地捧着妈妈心爱的花瓶，生怕把它摔碎。",
        category: "人物神态"
    },
    {
        idiom: "从容不迫",
        pinyin: "cóng róng bù pò",
        defZh: "不慌不忙，非常沉着和冷静。",
        defEn: "Calm and unhurried; composed.",
        defBm: "Sangat tenang, sabar dan tidak gopoh-gapah.",
        example: "面对评委老师的提问，她从容不迫地作出了回答。",
        category: "人物神态"
    },
    {
        idiom: "手忙脚乱",
        pinyin: "shǒu máng jiǎo luàn",
        defZh: "形容做事没有计划，慌里慌张，非常混乱。",
        defEn: "In a rush and muddle; disorganized.",
        defBm: "Kelang-kabut dan tidak teratur kerana tergesa-gesa.",
        example: "今天早上起晚了，全家人手忙脚乱地准备出门工作和上学。",
        category: "人物神态"
    },
    {
        idiom: "手舞足蹈",
        pinyin: "shǒu wǔ zú dǎo",
        defZh: "双手舞动，双脚跳跃。形容高兴到了极点。",
        defEn: "Dancing with joy; extremely happy.",
        defBm: "Menari-nari kegirangan kerana terlampau gembira.",
        example: "听说要去乐高乐园游玩，弟弟兴奋得手舞足蹈。",
        category: "人物神态"
    },
    {
        idiom: "威风凛凛",
        pinyin: "wēi fēng lǐn lǐn",
        defZh: "形容声势或气派令人敬畏，非常帅气威武。",
        defEn: "Majestic and awe-inspiring; grand appearance.",
        defBm: "Kelihatan sangat gagah, perkasa dan mengagumkan.",
        example: "两只石狮子威风凛凛地守在神庙的大门口。",
        category: "人物神态"
    },
    {
        idiom: "昂首挺胸",
        pinyin: "áng shǒu tǐng xiōng",
        defZh: "抬起头，挺起胸膛。形容非常有自信、斗志高昂。",
        defEn: "Holding one's head high and chest out; confident.",
        defBm: "Mendabik dada dan mengangkat kepala (penuh keyakinan).",
        example: "同学们昂首挺胸地步入考场，准备迎接SPM挑战。",
        category: "人物神态"
    },
    {
        idiom: "老态龙钟",
        pinyin: "lǎo tài lóng zhōng",
        defZh: "形容年老体衰，行动迟缓不灵活的样子。",
        defEn: "Looking old, weak and shaky.",
        defBm: "Kelihatan sangat tua, lemah dan uzur pergerakannya.",
        example: "那位老态龙钟的爷爷正在缓慢而艰难地穿过马路。",
        category: "人物神态"
    },
    {
        idiom: "落落大方",
        pinyin: "luò luò dà fāng",
        defZh: "形容言谈举止自然大方，毫不拘束害羞。",
        defEn: "Natural, elegant and confident in manner.",
        defBm: "Sopan santun, tenang dan berkeyakinan tinggi dalam pergaulan.",
        example: "主持人落落大方地走上舞台，赢得了台下同学的掌声。",
        category: "人物神态"
    },
    {
        idiom: "哑口无言",
        pinyin: "yǎ kǒu wú yán",
        defZh: "一句话也说不出来。通常形容因理屈词穷而尴尬。",
        defEn: "Speechless and unable to answer back.",
        defBm: "Terdiam seribu bahasa (tiada hujah untuk menjawab).",
        example: "面对老师拿出来的确凿证据，作弊的同学顿时哑口无言。",
        category: "人物神态"
    },
    {
        idiom: "滔滔不绝",
        pinyin: "tāo tāo bù jué",
        defZh: "说话像流水一样没有中断。形容话说得很多，没完没了。",
        defEn: "Talking endlessly and fluently.",
        defBm: "Bercakap tanpa henti bagaikan air yang mengalir lancar.",
        example: "一聊起他最喜欢的游戏，他就滔滔不绝地讲个不停。",
        category: "人物神态"
    },
    {
        idiom: "张口结舌",
        pinyin: "zhāng kǒu jié shé",
        defZh: "张着嘴说不出话。形容因为紧张、害怕或理屈而结巴。",
        defEn: "Tongue-tied with fear, nervousness or shock.",
        defBm: "Terkelu lidah sehingga tidak mampu berkata-kata.",
        example: "突然被校长提问，他张口结舌，不知道该怎么回答。",
        category: "人物神态"
    }
];

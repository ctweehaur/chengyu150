// ==========================================
// 类别 3：✍️ 学习态度与工作 (25词) - 马来西亚本地化 SMK 适用版
// ==========================================
const studyIdioms = [
    {
        idiom: "一丝不苟",
        pinyin: "yī sī bù gǒu",
        defZh: "形容办事极其认真，哪怕是一点细小的地方也绝不马虎。",
        defEn: "Extremely meticulous and conscientious.",
        defBm: "Sangat teliti dan cermat dalam melakukan kerja.",
        example: "陈老师批改我们的作文学业一丝不苟，连标点符号也仔细检查。",
        category: "学习工作"
    },
    {
        idiom: "废寝忘食",
        pinyin: "fèi qǐn wàng shí",
        defZh: "顾不得睡觉，忘记了吃饭。形容非常刻苦用功、专心致志。",
        defEn: "Forgetting to eat and sleep due to hard work.",
        defBm: "Sangat rajin dan gigih bekerja hingga lupa makan dan tidur.",
        example: "为了准备SPM考试，他每天废寝忘食地在图书馆复习。",
        category: "学习工作"
    },
    {
        idiom: "专心致志",
        pinyin: "zhuān xīn zhì zhì",
        defZh: "一心一意，集中精神，聚精会神地做某件事。",
        defEn: "Concentrating with single-minded devotion.",
        defBm: "Menumpukan perhatian sepenuhnya.",
        example: "物理实验室里，同学们都在专心致志地做着电学实验。",
        category: "学习工作"
    },
    {
        idiom: "半途而废",
        pinyin: "bàn tú ér fèi",
        defZh: "事情做到一半就放弃了。比喻没有恒心、有始无终。",
        defEn: "Giving up halfway; leaving a task unfinished.",
        defBm: "Hangat-hangat tahi ayam / Menyerah kalah separuh jalan.",
        example: "学习任何新语言都要坚持到底，绝对不能半途而废。",
        category: "学习工作"
    },
    {
        idiom: "马马虎虎",
        pinyin: "mǎ mǎ hū hū",
        defZh: "形容做事不认真，粗心大意，随随便便。",
        defEn: "Careless; perfunctory; so-so.",
        defBm: "Cincai; melakukan sesuatu dengan acuh tidak acuh.",
        example: "我们写数学作业必须细心，绝不能马马虎虎应付了事。",
        category: "学习工作"
    },
    {
        idiom: "聚精会神",
        pinyin: "jù jīng huì shén",
        defZh: "集中全部精神和注意力在某件事情上。",
        defEn: "Concentrating one's attention fully.",
        defBm: "Memberikan tumpuan sepenuhnya.",
        example: "同学们正在教室里聚精会神地听科学老师讲解实验步骤。",
        category: "学习工作"
    },
    {
        idiom: "持之以恒",
        pinyin: "chí zhī yǐ héng",
        defZh: "长久地坚持下去。形容做事非常有恒心和毅力。",
        defEn: "Persevere; maintain continuous effort over time.",
        defBm: "Berterusan; tidak mudah berputus asa.",
        example: "背诵成语必须持之以恒，才能累积丰富的词汇量。",
        category: "学习工作"
    },
    {
        idiom: "日新月异",
        pinyin: "rì xīn yuè yì",
        defZh: "每天每月都在更新变化。形容发展和进步的速度极快。",
        defEn: "Changing and improving with each passing day.",
        defBm: "Maju dengan sangat cepat (bagaikan cendawan tumbuh selepas hujan).",
        example: "在信息化时代下，电脑与人工智能的发展日新月异。",
        category: "学习工作"
    },
    {
        idiom: "博大精深",
        pinyin: "bó dà jīng shēn",
        defZh: "形容学问、思想、文化等广博高深，内容丰富。",
        defEn: "Broad and profound; vast and deep.",
        defBm: "Mendalam dan luas (mengenai ilmu pengetahuan).",
        example: "华语文学博大精深，蕴含着数千年的智慧结晶。",
        category: "学习工作"
    },
    {
        idiom: "循序渐进",
        pinyin: "xún xù jiàn jìn",
        defZh: "学习或工作按照一定的步骤逐渐深入、提高。",
        defEn: "Follow in order and advance step by step.",
        defBm: "Belajar atau bertindak secara berperingkat-peringkat.",
        example: "背成语需要循序渐进，不应该妄想一天能记住一百个词。",
        category: "学习工作"
    },
    {
        idiom: "有始无终",
        pinyin: "yǒu shǐ wú zhōng",
        defZh: "做事情只有好的开头，却没有坚持到结尾。没有恒心。",
        defEn: "Starting well but failing to finish.",
        defBm: "Bermula dengan baik tetapi berakhir dengan sia-sia.",
        example: "他力下了很多计划却从不完成，总是有始无终。",
        category: "学习工作"
    },
    {
        idiom: "通宵达旦",
        pinyin: "tōng xiāo dá dàn",
        defZh: "整夜工作或学习，一直到天亮。",
        defEn: "Working or staying up all night long until dawn.",
        defBm: "Bekerja atau belajar sepanjang malam suntuk hingga subuh.",
        example: "为了准备学校的国庆展览，美术组通宵达旦地制作模型。",
        category: "学习工作"
    },
    {
        idiom: "全力以赴",
        pinyin: "quán lì yǐ fù",
        defZh: "把全部力量都投入进去。形容毫无保留地去努力。",
        defEn: "Do one's level best; spare no effort.",
        defBm: "Berusaha dengan bersungguh-sungguh (bermati-matian).",
        example: "面对下个月的重要大考，我们必须全力以赴地去备战。",
        category: "学习工作"
    },
    {
        idiom: "熟能生巧",
        pinyin: "shú néng shēng qiǎo",
        defZh: "做某件事熟练了，自然而然就能找到诀窍。",
        defEn: "Practice makes perfect.",
        defBm: "Alah bisa tegal biasa (kemahiran meningkat dengan latihan).",
        example: "学乐器没有别的捷径，只要多练习就能熟能生巧。",
        category: "学习工作"
    },
    {
        idiom: "粗心大意",
        pinyin: "cū xīn dà yì",
        defZh: "做事马虎不细心。常常因为疏忽而犯错。",
        defEn: "Careless and negligent.",
        defBm: "Sangat cuai, lalai dan kurang teliti.",
        example: "正因为他在做题时的粗心大意，导致原本能拿满分的考卷丢了分数。",
        category: "学习工作"
    },
    {
        idiom: "磨刀不误砍柴工",
        pinyin: "mó dāo bù wù kǎn chái gōng",
        defZh: "比喻事先做好准备，能让后面的工作更有效率。",
        defEn: "Preparation doesn't delay work; proper tools save time.",
        defBm: "Persediaan yang rapi memudahkan dan mempercepatkan kerja.",
        example: "写作文前先列好大纲吧，磨刀不误砍柴工。",
        category: "学习工作"
    },
    {
        idiom: "学无止境",
        pinyin: "xué wú zhǐ jìng",
        defZh: "知识是没有尽头的，我们要活到老，学到老。",
        defEn: "Knowledge is limitless and there's no end to learning.",
        defBm: "Menuntut ilmu tiada sempadan.",
        example: "尽管张教授已经是著名学者，他依然保持着学无止境的心态。",
        category: "学习工作"
    },
    {
        idiom: "融会贯通",
        pinyin: "róng huì guàn tōng",
        defZh: "把各方面的知识融合在一起，得到透彻、全面的理解。",
        defEn: "Achieve a comprehensive, deep understanding.",
        defBm: "Memahami pelbagai aspek ilmu secara menyeluruh dan mendalam.",
        example: "复习历史要把事件前后联系起来，才能真正地融会贯通。",
        category: "学习工作"
    },
    {
        idiom: "井井有条",
        pinyin: "jǐng jǐng yǒu tiáo",
        defZh: "形容条理分明，整齐不乱。",
        defEn: "Methodical and perfectly neat; in complete order.",
        defBm: "Tersusun rapi, kemas dan teratur.",
        example: "他把自己的书桌和文具整理得井井有条。",
        category: "学习工作"
    },
    {
        idiom: "得心应手",
        pinyin: "dé xīn yìng shǒu",
        defZh: "心里怎么想，手就能怎么做。比喻技术纯熟，用得顺手。",
        defEn: "Very skilled; doing something with complete ease.",
        defBm: "Melakukan sesuatu kerja dengan sangat mudah kerana sudah mahir.",
        example: "画了十几年的画，他现在拿笔作画已经得心应手了。",
        category: "学习工作"
    },
    {
        idiom: "一窍不通",
        pinyin: "yī qiào bù tōng",
        defZh: "比喻对某门知识或某项技术完全不懂。",
        defEn: "Know absolutely nothing about a subject; clueless.",
        defBm: "Tidak tahu apa-apa langsung tentang sesuatu perkara.",
        example: "我对电脑编程一窍不通，必须从最基本的内容学起。",
        category: "学习工作"
    },
    {
        idiom: "游刃有余",
        pinyin: "yóu rèn yǒu yú",
        defZh: "比喻经验丰富，技术高超，解决问题非常轻松不费力。",
        defEn: "Handling things with ease due to rich experience.",
        defBm: "Mengendalikan tugas sukar dengan mudah kerana berpengalaman luas.",
        example: "面对学校里的各项课外活动协调，他游刃有余地完成任务。",
        category: "学习工作"
    },
    {
        idiom: "雷厉风行",
        pinyin: "léi lì fēng xíng",
        defZh: "比喻执行政策或做事严格迅速，非常有效率。",
        defEn: "Strict and swift; efficient execution.",
        defBm: "Bertindak dengan sangat cepat, tegas dan bertenaga.",
        example: "新学长团上任后，雷厉风行地整顿了早上的纪律。",
        category: "学习工作"
    },
    {
        idiom: "迎难而上",
        pinyin: "yíng nán ér shàng",
        defZh: "面对困难绝不退缩，勇敢、坚定地去克服它。",
        defEn: "Advance despite great difficulties.",
        defBm: "Menghadapi cabaran dengan berani tanpa berundur.",
        example: "在科学研究遇到瓶颈时，团队毅然决定迎难而上。",
        category: "学习工作"
    },
    {
        idiom: "应付了事",
        pinyin: "yìng fù liǎo shì",
        defZh: "做事马虎不认真，仅仅应付一下就算完成。",
        defEn: "Muddle through a task; doing work perfunctorily.",
        defBm: "Melakukan sesuatu sekadar melepas batuk di tangga.",
        example: "对待功课必须诚实，绝不能抱着应付了事的学习态度。",
        category: "学习工作"
    }
];

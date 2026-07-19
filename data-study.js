// ==========================================
// 类别 3：✍️ 学习态度与工作 (25词)
// ==========================================
const studyIdioms = [
    {
        idiom: "一丝不苟",
        pinyin: "yī sī bù gǒu",
        defZh: "形容办事认真，连最细微的地方也不马虎。",
        defEn: "Meticulous; conscientious.",
        example: "陈老师批改作业一丝不苟，连一个错别字也不放过。",
        category: "学习工作"
    },
    {
        idiom: "废寝忘食",
        pinyin: "fèi qǐn wàng shí",
        defZh: "顾不得睡觉，忘记了吃饭。形容专心努力。",
        defEn: "Forget to eat and sleep; hard-working.",
        example: "为了准备期末考试，哥哥废寝忘食地复习功课。",
        category: "学习工作"
    },
    {
        idiom: "专心致志",
        pinyin: "zhuān xīn zhì zhì",
        defZh: "一心一意，集中精神，聚精会神。",
        defEn: "With restricted attention; devoted.",
        example: "同学们正在教室里专心致志地听老师讲课。",
        category: "学习工作"
    },
    {
        idiom: "半途而废",
        pinyin: "bàn tú ér fèi",
        defZh: "事情做了一半就停止。比喻不能坚持到底。",
        defEn: "Give up halfway; leave something unfinished.",
        example: "学习乐器需要持之以恒，绝对不能半途而废。",
        category: "学习工作"
    },
    {
        idiom: "马马虎虎",
        pinyin: "mǎ mǎ hū hū",
        defZh: "形容做事不认真，敷衍了事。",
        defEn: "Careless; perfunctory.",
        example: "你做数学题总是马马虎虎，难怪总算错。",
        category: "学习工作"
    },
    {
        idiom: "聚精会神",
        pinyin: "jù jīng huì shén",
        defZh: "集中精神，专心致志。",
        defEn: "Concentrate one's attention.",
        example: "台下的观众聚精会神地看着精彩的杂技表演。",
        category: "学习工作"
    },
    {
        idiom: "持之以恒",
        pinyin: "chí zhī yǐ héng",
        defZh: "长久地坚持下去。",
        defEn: "Persevere; stay continuous.",
        example: "体育锻炼要持之以恒，才能达到强身健体的效果。",
        category: "学习工作"
    },
    {
        idiom: "日新月异",
        pinyin: "rì xīn yuè yì",
        defZh: "每天每月都有新的变化。形容进步、发展极快。",
        defEn: "Change with each passing day.",
        example: "现代科技发展日新月异，给生活带来了很大便利。",
        category: "学习工作"
    },
    {
        idiom: "博大精深",
        pinyin: "bó dà jīng shēn",
        defZh: "形容理论、学识、思想等广博高深。",
        defEn: "Broad and profound.",
        example: "中华文化博大精深，值得我们好好学习。",
        category: "学习工作"
    },
    {
        idiom: "循序渐进",
        pinyin: "xún xù jiàn jìn",
        defZh: "按照一定的步骤逐渐深入或提高。",
        defEn: "Follow in order and advance step by step.",
        example: "学习知识要循序渐进，不能急于求成。",
        category: "学习工作"
    },
    {
        idiom: "有始无终",
        pinyin: "yǒu shǐ wú zhōng",
        defZh: "有开头没有结尾。指做事不能坚持到底。",
        defEn: "Start well but end poorly.",
        example: "他做事总是有始无终，让人很难信任他。",
        category: "学习工作"
    },
    {
        idiom: "通宵达旦",
        pinyin: "tōng xiāo dá dàn",
        defZh: "整夜直到天亮。",
        defEn: "All night long until dawn.",
        example: "为了完成这个紧急项目，团队通宵达旦地工作。",
        category: "学习工作"
    },
    {
        idiom: "全力以赴",
        pinyin: "quán lì yǐ fù",
        defZh: "把全部力量都投入进去。",
        defEn: "Do one's level best; go all out.",
        example: "面对即将到来的比赛，我们必须全力以赴。",
        category: "学习工作"
    },
    {
        idiom: "熟能生巧",
        pinyin: "shú néng shēng qiǎo",
        defZh: "熟练了就能找到窍门。",
        defEn: "Practice makes perfect.",
        example: "打字没有什么捷径，多练习就能熟能生巧。",
        category: "学习工作"
    },
    {
        idiom: "粗心大意",
        pinyin: "cū xīn dà yì",
        defZh: "做事马虎，不细心。",
        defEn: "Negligent; careless.",
        example: "因为他的粗心大意，导致公司损失了一笔订单。",
        category: "学习工作"
    },
    {
        idiom: "磨刀不误砍柴工",
        pinyin: "mó dāo bù wù kǎn chái gōng",
        defZh: "比喻事先做好准备，能使后面的工作效率更高。",
        defEn: "Preparation doesn't delay work.",
        example: "先把工具整理好再开始，磨刀不误砍柴工。",
        category: "学习工作"
    },
    {
        idiom: "学无止境",
        pinyin: "xué wú zhǐ jìng",
        defZh: "知识是学不完的。",
        defEn: "Knowledge has no limit.",
        example: "虽然他已经是专家了，但他依然认为学无止境。",
        category: "学习工作"
    },
    {
        idiom: "融会贯通",
        pinyin: "róng huì guàn tōng",
        defZh: "把各方面的知识融合在一起，得到全面透彻的理解。",
        defEn: "Achieve a comprehensive mastery of a subject.",
        example: "读书要多思考，才能把所学的知识融会贯通。",
        category: "学习工作"
    },
    {
        idiom: "井井有条",
        pinyin: "jǐng jǐng yǒu tiáo",
        defZh: "形容条理分明，整齐不乱。",
        defEn: "In perfect order; methodical.",
        example: "她的房间总是收拾得井井有条。",
        category: "学习工作"
    },
    {
        idiom: "得心应手",
        pinyin: "dé xīn yìng shǒu",
        defZh: "心里怎么想，手就能怎么做。形容技艺纯熟。",
        defEn: "Fluent and easily managed.",
        example: "李医生做了几百次这类手术，现在已经得心应手了。",
        category: "学习工作"
    },
    {
        idiom: "一窍不通",
        pinyin: "yī qiào bù tōng",
        defZh: "比喻对某件事或某种知识完全不懂。",
        defEn: "Know absolute nothing about.",
        example: "我对电脑编程一窍不通，得从头学起。",
        category: "学习工作"
    },
    {
        idiom: "游刃有余",
        pinyin: "yóu rèn yǒu yú",
        defZh: "比喻工作熟练，经验丰富，解决问题毫不费力。",
        defEn: "Handle with skill and ease.",
        example: "面对复杂的客户投诉，他游刃有余地解决了。",
        category: "学习工作"
    },
    {
        idiom: "雷厉风行",
        pinyin: "léi lì fēng xíng",
        defZh: "比喻执行政策或做事严格迅速，效率极高。",
        defEn: "Enforce strictly and promptly.",
        example: "新经理上任后，雷厉风行地整顿了办公纪律。",
        category: "学习工作"
    },
    {
        idiom: "迎难而上",
        pinyin: "yíng nán ér shàng",
        defZh: "面对困难不退缩，勇敢地去克服。",
        defEn: "Advance despite difficulties.",
        example: "科研人员面对技术瓶颈，选择迎难而上。",
        category: "学习工作"
    },
    {
        idiom: "应付了事",
        pinyin: "yìng fù liǎo shì",
        defZh: "做事不认真，仅仅表面上把事情敷衍过去。",
        defEn: "Muddle through a piece of work.",
        example: "对待学习要诚实，绝对不能抱着应付了事的态度。",
        category: "学习工作"
    }
];

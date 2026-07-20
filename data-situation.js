// ==================================================================
// 常用成语 200 句数据源：分卷 8 (🔥 局势成败类 - 成语 176 - 200)
// ==================================================================

const situationIdioms = [
    {
        idiom: "卷土重来",
        pinyin: "juǎn tǔ chóng lái",
        defZh: "比喻失败后，不甘心失败，重新积蓄强大的力量和资源，再次恢复原有的气势和局面。",
        defEn: "Make a strong comeback after failure; rise again with full force.",
        defBm: "Bangkit semula secara agresif dengan kekuatan baharu selepas mengalami kekalahan.",
        example: "在上届全国球赛中惨败后，该篮球队厉兵秣马，今年终于卷土重来夺得冠军。",
        category: "局势成败"
    },
    {
        idiom: "东山再起",
        pinyin: "dōng shān zài qǐ",
        defZh: "比喻隐退或失败后，重新复出担当重任，重整旗鼓，再次取得重大的事业成功。",
        defEn: "Make a successful comeback; re-emerge and regain success.",
        defBm: "Memulakan semula usaha selepas jatuh muflis atau gagal dalam politik.",
        example: "虽然他的第一家科技公司在股灾中破产了，但他坚守信用，三年后终于东山再起。",
        category: "局势成败"
    },
    {
        idiom: "一蹶不振",
        pinyin: "yī jué bù zhèn",
        defZh: "一跌倒就再也站不起来。比喻遭受一次严重打击后，一味消沉，再也无法恢复斗志和局面。",
        defEn: "Collapse after a single setback; never recover from a single defeat.",
        defBm: "Terus lumpuh, tewas dan tidak mampu bangkit semula selepas sekali gagal.",
        example: "大卫在经历了一次创业挫折后便终日借酒消愁，从此一蹶不振。",
        category: "局势成败"
    },
    {
        idiom: "烟消云散",
        pinyin: "yān xiāo yún sàn",
        defZh: "像烟气和云雾散开一样。比喻原本存在的事物、矛盾、烦恼或重重疑虑瞬间消失干净。",
        defEn: "Vanish into thin air; disappear completely.",
        defBm: "Hilang lenyap begitu sahaja (mengenai kebimbangan, kesedihan atau perselisihan).",
        example: "在真相大白的一刹那，此前大家对这位模范生的一切谣言和怀疑都烟消云散了。",
        category: "局势成败"
    },
    {
        idiom: "风雨飘摇",
        pinyin: "fēng yǔ piāo yáo",
        defZh: "在暴风雨中摇晃。形容局势非常动荡不安，极不稳定，处于随时可能瓦解的危险边缘。",
        defEn: "Tottering in the storm; extremely unstable; in critical danger of collapse.",
        defBm: "Keadaan atau organisasi yang sangat goyah, tidak stabil dan diancam perpecahan.",
        example: "在这场史无前例的金融风暴袭击下，这家百年老字号百货公司处于风雨飘摇之中。",
        category: "局势成败"
    },
    {
        idiom: "蒸蒸日上",
        pinyin: "zhēng zhēng rì shàng",
        defZh: "形容事业、国家建设或生活水平一天一天向好的方向发展，气势非常蓬勃兴旺。",
        defEn: "Flourishing day by day; booming; thriving and making rapid progress.",
        defBm: "Maju dengan sangat pesat dan makmur dari sehari ke sehari.",
        example: "在总经理大刀阔斧的改革下，公司的营业额蒸蒸日上，令人振奋。",
        category: "局势成败"
    },
    {
        idiom: "日趋严重",
        pinyin: "rì qū yán zhòng",
        defZh: "形势或问题随着时间的流逝，一天一天地变得更加严重和严峻。",
        defEn: "Getting worse day by day; deteriorating rapidly.",
        defBm: "Menjadi semakin serius, kronik dan merosot dari hari ke hari.",
        example: "由于工厂常年乱排污水，这一带的水源和河流污染问题已经日趋严重。",
        category: "局势成败"
    },
    {
        idiom: "势如破竹",
        pinyin: "shì rú pò zhú",
        defZh: "比喻气势锐不可当，工作或战事推进极其顺利，毫无任何阻碍地节节得胜。",
        defEn: "With irresistible force; like a hot knife through butter; advance smoothly.",
        defBm: "Kemajuan yang sangat lancar, deras dan pantas tanpa menghadapi sebarang halangan.",
        example: "我校足球队在决赛中势如破竹，接连突破对方防线，最终以五比零大胜。",
        category: "局势成败"
    },
    {
        idiom: "鱼死网破",
        pinyin: "yú sǐ wǎng pò",
        defZh: "不是鱼死就是网破。比喻双方矛盾冲突极深，斗争到两败俱伤、同归于尽的地步。",
        defEn: "A fight to the death; mutual destruction; both sides suffer damage.",
        defBm: "Pertarungan mati-matian sehingga membawa kemusnahan kepada kedua-dua belah pihak.",
        example: "商业竞争应当遵守法律底线，绝对不应该采取这种鱼死网破的恶意报复行为。",
        category: "局势成败"
    },
    {
        idiom: "坐收渔利",
        pinyin: "zuò shōu yú lì",
        defZh: "比喻利用别人之间的争斗和矛盾，自己在一旁袖手旁观，最终轻松获得利益。",
        defEn: "Reap the spoils of others' fight; benefit from the conflict of third parties.",
        defBm: "Mendapat keuntungan secara percuma daripada perselisihan orang lain.",
        example: "两家大型网店由于恶意价格战纷纷亏损，反而让第三方比价平台坐收渔利。",
        category: "局势成败"
    },
    {
        idiom: "树倒猢狲散",
        pinyin: "shù dǎo hú sūn sàn",
        defZh: "大树倒了，树上的猴子就四处散开。比喻有权有势的带头人垮台了，依附他的人便一哄而散。",
        defEn: "Followers scatter when the leader falls; opportunists run away when support collapses.",
        defBm: "Para pengikut bertempiaran lari dan bersurai sebaik sahaja ketua mereka kehilangan kuasa.",
        example: "当那个靠行贿起家的财团董事长被捕后，平日谄媚他的随从们瞬间树倒猢狲散了。",
        category: "局势成败"
    },
    {
        idiom: "家喻户晓",
        pinyin: "jiā yù hù xiǎo",
        defZh: "家家户户都知道。形容人、事情、产品或名声极其响亮，妇孺皆知。",
        defEn: "Well-known to all; household name; universally known.",
        defBm: "Sangat popular dan diketahui oleh setiap keluarga atau lapisan masyarakat.",
        example: "这位本地羽毛球国手在马来西亚是家喻户晓的体育英雄。",
        category: "局势成败"
    },
    {
        idiom: "众所周知",
        pinyin: "zhòng suǒ zhōu zhī",
        defZh: "大家普遍都知道的常识、事实或公开秘密。",
        defEn: "As everyone knows; well known; common knowledge.",
        defBm: "Sesuatu fakta atau perkara yang telah diketahui umum oleh orang ramai.",
        example: "众所周知，吸烟有害健康，还会大幅增加患上肺癌的风险。",
        category: "局势成败"
    },
    {
        idiom: "迫不得已",
        pinyin: "pò bù dé yǐ",
        defZh: "由于受到局势、环境或力量的逼迫，实在没有其他办法而勉强为之。",
        defEn: "Forced to do so; have no alternative; against one's will.",
        defBm: "Terpaksa dilakukan demi menyelesaikan masalah kerana tiada pilihan lain.",
        example: "由于长期面临亏损，管理层迫不得已，只能决定关闭柔佛的分店。",
        category: "局势成败"
    },
    {
        idiom: "兵荒马乱",
        pinyin: "bīng huāng mǎ luàn",
        defZh: "形容战争期间或局势剧烈动荡时，社会混乱凄惨、民不聊生的悲惨景象。",
        defEn: "The turmoil and chaos of war; times of social unrest.",
        defBm: "Keadaan masyarakat yang huru-hara dan kucar-kacir akibat peperangan.",
        example: "在那个兵荒马乱的灾难年代，许多平民家庭都被迫颠沛流离、妻离子散。",
        category: "局势成败"
    },
    {
        idiom: "千钧一发",
        pinyin: "qiān jūn yī fā",
        defZh: "千钧重物吊在一根头发丝上。形容情况危急险峻到了极点，稍微一差错就会造成灾难。",
        defEn: "Hanging by a thread; in an extremely critical moment; a close call.",
        defBm: "Keadaan yang teramat cemas, genting dan berbahaya (bagaikan telur di hujung tanduk).",
        example: "就在校车即将撞上大树的千钧一发之际，司机果断刹车，化险为夷。",
        category: "局势成败"
    },
    {
        idiom: "气象万千",
        pinyin: "qì xiàng wàn qiān",
        defZh: "形容自然风光、社会大场景或城市面貌极其宏伟壮丽，变化多姿、气势雄壮。",
        defEn: "Spectacular and grand scene; constantly changing and magnificent scenery.",
        defBm: "Keadaan atau pemandangan yang sangat indah, megah dan dipenuhi pelbagai perubahan menakjubkan.",
        example: "登上京那巴鲁山顶远眺，只见云海翻滚，日出霞光，真是一派气象万千的壮丽风光。",
        category: "局势成败"
    },
    {
        idiom: "瞬息万变",
        pinyin: "shùn xī wàn biàn",
        defZh: "在一极短的时间内发生了无数次变化。形容局势、天气或科技发展极快且难以预测。",
        defEn: "Changing rapidly in a blink of an eye; fast-changing situation.",
        defBm: "Berubah dengan sangat cepat dan drastik dalam sekelip mata sahaja.",
        example: "金融市场的行情瞬息万变，投资者必须时刻保持警惕，灵活决策。",
        category: "局势成败"
    },
    {
        idiom: "欣欣向荣",
        pinyin: "xīn xīn xiàng róng",
        defZh: "形容草木生长繁茂。也比喻国家、学校建设或事业发展极其兴旺蓬勃，充满生机与希望。",
        defEn: "Thriving; prosperous; growing robustly; full of life.",
        defBm: "Berkembang dengan sangat subur, rancak dan dipenuhi harapan kegemilangan.",
        example: "经过十年的规划和绿色转型，这片昔日的荒地如今已发展成欣欣向荣的智慧生态新城。",
        category: "局势成败"
    },
    {
        idiom: "生机勃勃",
        pinyin: "shēng jī bó bó",
        defZh: "形容生命力、活力非常旺盛，朝气蓬勃，充满力量。",
        defEn: "Full of vitality; vibrant; brimming with life and energy.",
        defBm: "Sangat bertenaga, cergas dan dipenuhi semangat kehidupan yang kuat.",
        example: "雨季过后，大汉山国家公园里万物复苏，呈现一片生机勃勃的景象。",
        category: "局势成败"
    },
    {
        idiom: "岌岌可危",
        pinyin: "jí jí kě wēi",
        defZh: "形容局势或事物处于极其危险、随时可能倒塌、瓦解或失败的紧要边缘。",
        defEn: "In imminent danger; highly precarious; on the verge of collapse.",
        defBm: "Kedudukan yang sangat bahaya, goyah dan kritikal (menanti saat kejatuhan).",
        example: "由于遭遇严重的资金链断裂，这家大型跨国纸业集团在市场上的主导地位岌岌可危。",
        category: "局势成败"
    },
    {
        idiom: "惨不忍睹",
        pinyin: "cǎn bù rěn dǔ",
        defZh: "形容场景凄惨、悲壮或混乱到了让人无法闭眼直视、极其难受的地步。",
        defEn: "Too horrible to look at; shocking and tragic sight; pathetic.",
        defBm: "Sangat ngeri, tragis dan menyedihkan sehinggakan tidak sanggup untuk dipandang.",
        example: "那条没有路灯的联邦公路上昨晚发生了严重的连环车祸，现场一片狼藉，惨不忍睹。",
        category: "局势成败"
    },
    {
        idiom: "水涨船高",
        pinyin: "shuǐ zhǎng chuán gāo",
        defZh: "水位升高了，船身也自然随之提高。比喻事物的基本条件改善了，其派生事物也会自动提高。",
        defEn: "A rising tide lifts all boats; things improve automatically when base conditions get better.",
        defBm: "Meningkat atau naik secara automatik apabila perkara asas yang berkaitan meningkat.",
        example: "随着该新住宅区和新捷运站的完工，周围的商铺租金也水涨船高了。",
        category: "局势成败"
    },
    {
        idiom: "名落孙山",
        pinyin: "míng luò sūn shān",
        defZh: "比喻在重要考试、竞选或选拔中失败、落榜、没有被录用。",
        defEn: "Fail in an examination or selection; fail to pass the test; drop out.",
        defBm: "Gagal dalam peperiksaan penting, kelayakan atau pemilihan rasmi.",
        example: "虽然他在去年的奖学金申请考核中名落孙山，但他没有放弃，今年再次全力以赴挑战。",
        category: "局势成败"
    },
    {
        idiom: "捷足先登",
        pinyin: "jié zú xiān dēng",
        defZh: "脚步快的人先登上目的地。比喻行动敏捷迅速的人，率先抢先一步获得成功或占得商机机遇。",
        defEn: "The early bird catches the worm; the swift foot arrives first; seize opportunities quickly.",
        defBm: "Sesiapa yang bertindak dengan cepat dan awal akan memperoleh peluang atau kejayaan terlebih dahulu.",
        example: "在该黄金地段出让时，眼光独到的地产公司敏捷出手，捷足先登夺下了开发权。",
        category: "局势成败"
    }
];

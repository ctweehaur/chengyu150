// --- 状态初始化 ---
// 获取当前日期的字符串形式，作为每日随机种子的基础
const today = new Date().toDateString();

// 每日计划：存储当天要学习的成语在 allIdioms 里的索引列表
let dailyIndices = [];
let currentIndex = 0;

// 掌握进度表：从本地缓存(localStorage)读取用户标记的掌握状态。
// 数据格式为：{ "成语": true/false }
let masteryStatus = JSON.parse(localStorage.getItem('chengyu_mastery')) || {};

// 测验模块状态
let quizQuestions = [];      // 存放本轮生成的测试题
let currentQuizIndex = 0;   // 当前测验进行到第几题
let quizScore = 0;          // 本轮测验得分
let wrongQuizAnswers = [];  // 本轮答错的成语集合，用于结果页复盘

/**
 * 根据当前日期生成哈希种子，以此实现“同一天打开网页，计划完全一致；换一天则随机换一批”
 */
function initDailyPlan() {
    // 基础的字符串哈希算法
    let hash = 0;
    for (let i = 0; i < today.length; i++) {
        hash = today.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    // 复制全部成语的索引，并依据哈希算法进行伪随机洗牌
    const allIndices = allIdioms.map((_, idx) => idx);
    const shuffled = [...allIndices].sort((a, b) => {
        const rand = Math.sin(hash + a) * 10000;
        return (rand - Math.floor(rand)) - 0.5;
    });
    
    // 每日复习限额。如果词库总数少于10，则全量展示
    const dailyLimit = Math.min(10, allIdioms.length);
    dailyIndices = shuffled.slice(0, dailyLimit);
    currentIndex = 0;
}

/**
 * 解析成语与对应的拼音，生成带 <ruby> 标签的标准 HTML 结构
 * 确保拼音能完美居中对齐在对应的汉字上方
 */
function generateRubyMarkup(idiom, pinyinStr) {
    const chars = idiom.split('');
    const pinyins = pinyinStr.split(' ');
    let html = '';
    
    for (let i = 0; i < chars.length; i++) {
        const py = pinyins[i] || '';
        // 每一个汉字及其上方的拼音包裹在 ruby 与 rt 中
        html += `<ruby class="mx-1">${chars[i]}<rt>${py}</rt></ruby>`;
    }
    return html;
}

/**
 * 刷新并渲染卡片内容（包含正面、反面以及主界面各种状态）
 */
function updateCard() {
    // 每次切换卡片前，先把卡片复位旋转回正面
    const flipCard = document.getElementById('flip-card');
    if (flipCard) flipCard.classList.remove('flipped');
    
    if (dailyIndices.length === 0) return;

    // 获取当前成语的完整数据
    const idiomIndex = dailyIndices[currentIndex];
    const item = allIdioms[idiomIndex];

    // 1. 渲染正面：拼音 + 汉字
    const rubyContainer = document.getElementById('card-idiom-ruby');
    if (rubyContainer) {
        rubyContainer.innerHTML = generateRubyMarkup(item.idiom, item.pinyin);
    }

    // 2. 渲染反面：释义、英文与例句
    const defZhEl = document.getElementById('card-def-zh');
    const defEnEl = document.getElementById('card-def-en');
    const exampleEl = document.getElementById('card-example');
    
    if (defZhEl) defZhEl.innerText = item.defZh;
    if (defEnEl) defEnEl.innerText = item.defEn;
    if (exampleEl) exampleEl.innerText = item.example;

    // 3. 更新页头进度条/状态栏文本
    const statusEl = document.getElementById('daily-status');
    if (statusEl) {
        statusEl.innerText = `今日计划进度：${currentIndex + 1} / ${dailyIndices.length}`;
    }

    // 4. 更新“挑战未掌握项”按钮状态（显示当前错题/未掌握的个数）
    updateQuizButton();
}

/**
 * 更新并维护“挑战未掌握项”入口按钮的状态
 */
function updateQuizButton() {
    const unmasteredCount = allIdioms.filter(item => masteryStatus[item.idiom] === false).length;
    const quizBtn = document.getElementById('quiz-entry-btn');
    
    if (quizBtn) {
        quizBtn.innerText = `🎯 挑战未掌握项 (${unmasteredCount})`;
        quizBtn.disabled = unmasteredCount === 0;
        
        if (unmasteredCount === 0) {
            quizBtn.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            quizBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    }
}

/**
 * 标记当前成语的掌握状态（已掌握 / 待加强）
 */
function markMastery(isMastered) {
    const currentIdiomName = allIdioms[dailyIndices[currentIndex]].idiom;
    
    // 更新内存状态，并写入 localStorage 持久化存储
    masteryStatus[currentIdiomName] = isMastered;
    localStorage.setItem('chengyu_mastery', JSON.stringify(masteryStatus));

    // 平滑地切换到今日计划中的下一张卡片
    currentIndex = (currentIndex + 1) % dailyIndices.length;
    updateCard();
}

/**
 * 启动智能测验模式
 * 自动挑选被标记为“待加强（false）”的成语进行针对性考察
 */
function startQuiz() {
    const unmasteredList = allIdioms.filter(item => masteryStatus[item.idiom] === false);
    if (unmasteredList.length === 0) return;

    // 动态构建本轮专属的测验题库
    quizQuestions = unmasteredList.map(item => {
        // 50% 概率出例句填空题，50% 概率出释义理解选择题
        const isExampleType = Math.random() < 0.5;
        let questionText = "";
        let typeLabel = "";

        if (isExampleType) {
            typeLabel = "选词填空（例句理解）";
            // 自动将例句里出现的成语本身替换为下划线，作为完形填空考察
            questionText = item.example.replace(new RegExp(item.idiom, 'g'), ' _______ ');
        } else {
            typeLabel = "选择合适成语（释义理解）";
            questionText = item.defZh;
        }

        // 生成 4 个多选选项（1个正确答案，另外3个为词库中其他成语的干扰项）
        const options = [item.idiom];
        const pool = allIdioms.filter(x => x.idiom !== item.idiom);
        
        while (options.length < Math.min(4, allIdioms.length)) {
            const randomPick = pool[Math.floor(Math.random() * pool.length)].idiom;
            if (!options.includes(randomPick)) {
                options.push(randomPick);
            }
        }
        
        // 乱序打乱选项
        options.sort(() => Math.random() - 0.5);

        return {
            correctAnswer: item.idiom,
            questionText: questionText,
            typeLabel: typeLabel,
            options: options
        };
    });

    // 重置答题数据
    currentQuizIndex = 0;
    quizScore = 0;
    wrongQuizAnswers = [];

    // 面板切换：隐藏卡片界面，显现测试界面
    document.getElementById('flashcard-panel').classList.add('hidden');
    document.getElementById('quiz-panel').classList.remove('hidden');
    document.getElementById('quiz-panel').classList.add('flex');
    
    renderQuizQuestion();
}

/**
 * 渲染单个多选测验题
 */
function renderQuizQuestion() {
    const q = quizQuestions[currentQuizIndex];
    
    // 更新测验进度、题目类型与具体题目正文
    document.getElementById('quiz-progress').innerText = `题 ${currentQuizIndex + 1} / ${quizQuestions.length}`;
    document.getElementById('quiz-question-type').innerText = q.typeLabel;
    document.getElementById('quiz-question').innerText = q.questionText;

    // 清空旧的选项，重新渲染生成
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';

    q.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = "quiz-option-btn w-full py-4 px-4 text-left text-xs font-semibold rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 active:bg-stone-100 transition-all focus:outline-none flex justify-between items-center";
        btn.innerHTML = `<span>${option}</span>`;
        btn.onclick = () => selectAnswer(btn, option, q.correctAnswer);
        optionsContainer.appendChild(btn);
    });
}

/**
 * 处理用户点击选项的事件，并给出彩色的正误视觉反馈
 */
function selectAnswer(selectedBtn, chosenOption, correctOption) {
    // 锁定当前题目下的全部选项，防止学生在等待转题时重复点击
    const allOptionBtns = document.querySelectorAll('.quiz-option-btn');
    allOptionBtns.forEach(btn => btn.disabled = true);

    const isCorrect = chosenOption === correctOption;

    if (isCorrect) {
        quizScore++;
        // 正确项高亮变绿
        selectedBtn.classList.remove('border-stone-200', 'text-stone-600', 'hover:bg-stone-50');
        selectedBtn.classList.add('border-green-300', 'bg-green-50', 'text-green-700');
        selectedBtn.innerHTML += `<span class="text-green-600 font-bold">✓ 正确</span>`;
    } else {
        // 错误项高亮变红
        selectedBtn.classList.remove('border-stone-200', 'text-stone-600', 'hover:bg-stone-50');
        selectedBtn.classList.add('border-red-300', 'bg-red-50', 'text-red-700');
        selectedBtn.innerHTML += `<span class="text-red-600 font-bold">✗ 错误</span>`;
        
        // 记录答错的成语，用于成绩复盘
        wrongQuizAnswers.push(correctOption);

        // 自动将正确的那一项找出来，标记为温和的浅绿色，引导学生纠错
        allOptionBtns.forEach(btn => {
            if (btn.querySelector('span').innerText === correctOption) {
                btn.classList.add('border-green-200', 'bg-green-50/50', 'text-green-600');
            }
        });
    }

    // 留出 1.2 秒的等待延迟，给学生进行纠错与视觉消化，然后自动切入下一题或结果页
    setTimeout(() => {
        currentQuizIndex++;
        if (currentQuizIndex < quizQuestions.length) {
            renderQuizQuestion();
        } else {
            showQuizResults();
        }
    }, 1200);
}

/**
 * 展示测验完成后的成绩汇报单
 */
function showQuizResults() {
    // 切换面板
    document.getElementById('quiz-panel').classList.remove('flex');
    document.getElementById('quiz-panel').classList.add('hidden');
    
    const resultPanel = document.getElementById('result-panel');
    resultPanel.classList.remove('hidden');
    resultPanel.classList.add('flex');

    // 展示最终得分
    document.getElementById('quiz-score-report').innerText = `本轮挑战共答对：${quizScore} / ${quizQuestions.length} 题`;

    // 渲染错题汇总区块
    const wrongSummary = document.getElementById('wrong-summary');
    const wrongList = document.getElementById('wrong-list');
    wrongList.innerHTML = '';

    if (wrongQuizAnswers.length > 0) {
        wrongSummary.classList.remove('hidden');
        // 错题去重渲染
        [...new Set(wrongQuizAnswers)].forEach(item => {
            const li = document.createElement('li');
            li.innerText = item;
            wrongList.appendChild(li);
        });
    } else {
        wrongSummary.classList.add('hidden');
    }
}

/**
 * 退出测验状态，重置并返回到标准的闪卡页面
 */
function exitQuiz() {
    document.getElementById('quiz-panel').classList.remove('flex');
    document.getElementById('quiz-panel').classList.add('hidden');
    document.getElementById('result-panel').classList.remove('flex');
    document.getElementById('result-panel').classList.add('hidden');
    
    document.getElementById('flashcard-panel').classList.remove('hidden');
    document.getElementById('flashcard-panel').classList.add('block');
    
    updateCard();
}

// --- DOM 加载完毕后的生命周期注册 ---
window.onload = function() {
    // 绑定闪卡盒子的点击翻转事件
    const cardContainer = document.getElementById('card-container');
    if (cardContainer) {
        cardContainer.addEventListener('click', (e) => {
            // 如果点击的事件源不是底下的任何按钮，就触发卡片 3D 翻转
            const card = document.getElementById('flip-card');
            if (card) {
                card.classList.toggle('flipped');
            }
        });
    }

    // 初始化本日计划并渲染首个成语
    initDailyPlan();
    updateCard();
};

// ==========================================
// 1. 初始化变量与状态管理
// ==========================================
let currentPlan = [];       // 今日学习的成语队列
let currentIndex = 0;       // 当前学习的成语索引
let isFlipped = false;      // 卡片是否翻转
let isWeaknessMode = false;  // 是否处于错题专项训练模式

// --- Quiz 测验专用变量 ---
let quizQuestions = [];     // 测验题目队列
let quizCurrentIndex = 0;   // 当前题号
let quizScore = 0;          // 答对题数
const QUIZ_TOTAL = 5;       // 每次测验固定 5 题

if (typeof allIdioms === 'undefined') {
    console.error("错误：未找到成语数据，请检查 data.js 是否正确引入！");
}

// ==========================================
// 2. 核心初始化函数 (学习卡片)
// ==========================================
function initApp() {
    try {
        const savedProgress = localStorage.getItem('chengyu_progress');
        const todayStr = new Date().toDateString();
        
        let wrongList = JSON.parse(localStorage.getItem('chengyu_wrong_list')) || [];
        updateWeaknessButton(wrongList.length);

        if (!savedProgress || JSON.parse(savedProgress).date !== todayStr) {
            const shuffled = [...allIdioms].sort(() => 0.5 - Math.random());
            currentPlan = shuffled.slice(0, Math.min(10, allIdioms.length));
            
            localStorage.setItem('chengyu_progress', JSON.stringify({
                date: todayStr,
                plan: currentPlan,
                index: 0
            }));
            currentIndex = 0;
        } else {
            const progressData = JSON.parse(savedProgress);
            currentPlan = progressData.plan;
            currentIndex = progressData.index;
        }

        isWeaknessMode = false;
        
        const statusEl = document.getElementById('daily-status');
        if (statusEl) statusEl.innerText = "每日复习计划（今日 10 句）";

        setupFlipEvent();
        renderCard();
    } catch (error) {
        console.error("初始化失败:", error);
    }
}

function renderCard() {
    if (currentPlan.length === 0) {
        showEmptyState();
        return;
    }
    if (currentIndex >= currentPlan.length) { currentIndex = 0; }

    const currentIdiom = currentPlan[currentIndex];
    const flipCardEl = document.getElementById('flip-card');
    if (flipCardEl) flipCardEl.classList.remove('rotate-y-180');
    isFlipped = false;

    // 正面渲染
    const rubyContainer = document.getElementById('card-idiom-ruby');
    if (rubyContainer) {
        const idiomText = currentIdiom.idiom || "未知成语";
        const pinyinText = currentIdiom.pinyin || "";

        if (pinyinText) {
            const pinyinArray = pinyinText.split(/\s+/);
            let rubyHtml = "";
            for (let i = 0; i < idiomText.length; i++) {
                const char = idiomText[i];
                const py = pinyinArray[i] || "";
                rubyHtml += `
                    <ruby class="flex flex-col items-center mx-1">
                        <rt class="text-lg sm:text-xl text-stone-500 font-sans tracking-normal lowercase mb-2 font-medium">${py}</rt>
                        <span class="font-serif font-bold">${char}</span>
                    </ruby>
                `;
            }
            rubyContainer.innerHTML = rubyHtml;
        } else {
            rubyContainer.innerHTML = `<span class="font-serif font-bold">${idiomText}</span>`;
        }
    }

    // 反面渲染
    const defZhEl = document.getElementById('card-def-zh');
    if (defZhEl) defZhEl.innerText = currentIdiom.defZh || '暂无释义';

    const defEnEl = document.getElementById('card-def-en');
    if (defEnEl) defEnEl.innerText = currentIdiom.defEn || 'No English translation available.';

    const exampleEl = document.getElementById('card-example');
    if (exampleEl) {
        const idiomText = currentIdiom.idiom || '';
        let exampleText = currentIdiom.example || '暂无例句。';
        if (idiomText && exampleText.includes(idiomText)) {
            exampleText = exampleText.replace(idiomText, `______`);
        }
        exampleEl.innerText = exampleText;
    }

    const progressEl = document.getElementById('progress-indicator');
    if (progressEl) {
        progressEl.innerText = `进度：${currentIndex + 1} / ${currentPlan.length} ${isWeaknessMode ? '（错题训练中）' : ''}`;
    }
}

function setupFlipEvent() {
    const container = document.getElementById('card-container');
    const flipCardEl = document.getElementById('flip-card');
    if (container && flipCardEl) {
        container.onclick = null;
        container.onclick = function() {
            isFlipped = !isFlipped;
            flipCardEl.classList.toggle('rotate-y-180', isFlipped);
        };
    }
}

function markMastery(isMastered) {
    if (currentPlan.length === 0) return;
    const currentIdiom = currentPlan[currentIndex];
    let wrongList = JSON.parse(localStorage.getItem('chengyu_wrong_list')) || [];
    const currentIdiomText = currentIdiom.idiom || '';

    if (!isMastered) {
        if (!wrongList.some(item => item.idiom === currentIdiomText)) { wrongList.push(currentIdiom); }
    } else {
        wrongList = wrongList.filter(item => item.idiom !== currentIdiomText);
    }

    localStorage.setItem('chengyu_wrong_list', JSON.stringify(wrongList));
    updateWeaknessButton(wrongList.length);
    currentIndex++;
    
    if (currentIndex >= currentPlan.length) {
        if (isWeaknessMode) {
            alert("🎉 太棒了！本轮错题专项训练已完成！");
            initApp(); 
            return;
        } else {
            alert("🎉 今日成语已全部浏览完毕！");
            currentIndex = currentPlan.length - 1; 
        }
    }
    renderCard();
}

function startWeaknessTraining() {
    const wrongList = JSON.parse(localStorage.getItem('chengyu_wrong_list')) || [];
    if (wrongList.length === 0) {
        alert("✨ 赞！当前没有待加强的成语！");
        return;
    }
    isWeaknessMode = true;
    currentPlan = [...wrongList].sort(() => 0.5 - Math.random()); 
    currentIndex = 0;
    const statusEl = document.getElementById('daily-status');
    if (statusEl) statusEl.innerText = `🎯 错题专项集训中（共 ${currentPlan.length} 词）`;
    renderCard();
}

function updateWeaknessButton(count) {
    const btn = document.querySelector('button[onclick="startWeaknessTraining()"]');
    if (btn) btn.innerHTML = `🎯 开启错题专项训练 (<span class="text-amber-600 font-bold">${count}</span>)`;
}

function showEmptyState() {
    const rubyContainer = document.getElementById('card-idiom-ruby');
    if (rubyContainer) rubyContainer.innerHTML = `<span class="text-base text-stone-400">今日暂无成语任务</span>`;
}


// ==========================================
// 3. 核心 Quiz (小测验) 控制逻辑
// ==========================================

// 开启测验
function startQuiz() {
    if (!allIdioms || allIdioms.length < 4) {
        alert("数据源成语数量不足 4 个，无法生成选择题选项！");
        return;
    }

    // 1. 隐藏结算页面，显示题目页面
    document.getElementById('quiz-question-container').classList.remove('hidden');
    document.getElementById('quiz-result-container').classList.add('hidden');

    // 2. 随机抽取 5 个成语作为题目
    const shuffled = [...allIdioms].sort(() => 0.5 - Math.random());
    quizQuestions = shuffled.slice(0, Math.min(QUIZ_TOTAL, allIdioms.length));
    
    quizCurrentIndex = 0;
    quizScore = 0;

    // 3. 显示 Modal 视窗
    document.getElementById('quiz-modal').classList.remove('hidden');
    
    // 4. 渲染第一道题
    renderQuizQuestion();
}

// 关闭测验
function closeQuiz() {
    document.getElementById('quiz-modal').classList.add('hidden');
}

// 渲染单道选择题
function renderQuizQuestion() {
    const currentQ = quizQuestions[quizCurrentIndex];
    
    // 更新题号与进度条
    document.getElementById('quiz-q-num').innerText = `题目 ${quizCurrentIndex + 1} / ${quizQuestions.length}`;
    const percent = ((quizCurrentIndex) / quizQuestions.length) * 100;
    document.getElementById('quiz-progress-bar').style.width = `${percent}%`;

    // 渲染题目字样
    document.getElementById('quiz-question-word').innerText = currentQ.idiom;

    // 生成干扰项：从题库中随机找另外 3 个不同的释义
    const distractors = allIdioms
        .filter(item => item.idiom !== currentQ.idiom)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    // 把正确答案和干扰项聚在一起，并打乱顺序
    const options = [currentQ, ...distractors].sort(() => 0.5 - Math.random());

    // 填充 HTML 选项按钮
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = options.map(opt => {
        // 将成语对象的释义传进点击事件
        const isCorrect = (opt.idiom === currentQ.idiom);
        return `
            <button onclick="handleQuizAnswer(this, ${isCorrect})" class="w-full text-left p-4 rounded-xl border-2 border-stone-100 hover:border-amber-400 hover:bg-amber-50/50 transition-all font-sans text-stone-700 text-sm flex items-start gap-2">
                <span class="block text-stone-400 font-mono font-bold mt-0.5">选项:</span>
                <span class="flex-1">${opt.defZh}</span>
            </button>
        `;
    }).join('');
}

// 处理用户点击选项响应
function handleQuizAnswer(buttonEl, isCorrect) {
    // 1. 立即冻结所有按钮防止连点
    const allButtons = document.getElementById('quiz-options').querySelectorAll('button');
    allButtons.forEach(btn => btn.disabled = true);

    // 2. 标记对错状态颜色
    if (isCorrect) {
        quizScore++;
        buttonEl.classList.remove('border-stone-100', 'hover:border-amber-400');
        buttonEl.classList.add('border-green-500', 'bg-green-50/60', 'text-green-800');
    } else {
        buttonEl.classList.remove('border-stone-100', 'hover:border-amber-400');
        buttonEl.classList.add('border-red-500', 'bg-red-50/60', 'text-red-800');
        
        // 自动把正确答案的高亮标绿，方便学生订正
        allButtons.forEach(btn => {
            if (btn.getAttribute('onclick').includes('true')) {
                btn.classList.add('border-green-500', 'bg-green-50/40');
            }
        });

        // 自动将当前答错的这道成语，贴心地加入错题库！
        let wrongList = JSON.parse(localStorage.getItem('chengyu_wrong_list')) || [];
        const currentQ = quizQuestions[quizCurrentIndex];
        if (!wrongList.some(item => item.idiom === currentQ.idiom)) {
            wrongList.push(currentQ);
            localStorage.setItem('chengyu_wrong_list', JSON.stringify(wrongList));
            updateWeaknessButton(wrongList.length);
        }
    }

    // 3. 延时 1.2 秒自动切到下一题，给予反馈时间
    setTimeout(() => {
        quizCurrentIndex++;
        if (quizCurrentIndex < quizQuestions.length) {
            renderQuizQuestion();
        } else {
            showQuizResults();
        }
    }, 1200);
}

// 结算小测验结果
function showQuizResults() {
    document.getElementById('quiz-progress-bar').style.width = `100%`;
    document.getElementById('quiz-question-container').classList.add('hidden');
    document.getElementById('quiz-result-container').classList.remove('hidden');

    // 显示得分
    document.getElementById('quiz-score').innerText = `${quizScore} / ${quizQuestions.length}`;
    
    // 动态评价
    let evaluation = "再接再厉，多刷刷闪卡吧！";
    if (quizScore === quizQuestions.length) {
        evaluation = "👑 太厉害了！满分通关！";
    } else if (quizScore >= 4) {
        evaluation = "🌟 优秀！底子非常扎实！";
    } else if (quizScore >= 3) {
        evaluation = "👍 及格啦，答错的词已经自动帮你放入错题库啰！";
    }
    document.getElementById('quiz-eval').innerText = evaluation;
}

// 启动执行
window.onload = initApp;

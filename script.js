// ==========================================
// 1. 初始化变量与状态管理
// ==========================================
let currentPlan = [];       // 今日学习的成语队列
let currentIndex = 0;       // 当前学习的成语索引
let isFlipped = false;      // 卡片是否翻转
let isWeaknessMode = false;  // 是否处于错题专项训练模式

// 检查数据源是否存在
if (typeof allIdioms === 'undefined') {
    console.error("错误：未找到成语数据，请检查 data.js 是否正确引入！");
}

// ==========================================
// 2. 核心初始化函数
// ==========================================
function initApp() {
    try {
        const savedProgress = localStorage.getItem('chengyu_progress');
        const todayStr = new Date().toDateString();
        
        // 读取错题库（待加强项）
        let wrongList = JSON.parse(localStorage.getItem('chengyu_wrong_list')) || [];
        updateWeaknessButton(wrongList.length);

        // 如果是新的一天，或者没有今日计划，则重新生成 10 条
        if (!savedProgress || JSON.parse(savedProgress).date !== todayStr) {
            // 随机抽取成语（如果总数小于10，则全取）
            const shuffled = [...allIdioms].sort(() => 0.5 - Math.random());
            currentPlan = shuffled.slice(0, Math.min(10, allIdioms.length));
            
            localStorage.setItem('chengyu_progress', JSON.stringify({
                date: todayStr,
                plan: currentPlan,
                index: 0
            }));
            currentIndex = 0;
        } else {
            // 读取已有的今日计划
            const progressData = JSON.parse(savedProgress);
            currentPlan = progressData.plan;
            currentIndex = progressData.index;
        }

        isWeaknessMode = false;
        
        // 更新头部状态文本
        const statusEl = document.getElementById('daily-status');
        if (statusEl) statusEl.innerText = "每日复习计划（今日 10 句）";

        // 绑定卡片点击翻转事件
        setupFlipEvent();
        
        // 渲染第一张卡片
        renderCard();
    } catch (error) {
        console.error("初始化失败:", error);
        const statusEl = document.getElementById('daily-status');
        if (statusEl) statusEl.innerText = "系统初始化异常，请刷新重试";
    }
}

// ==========================================
// 3. 卡片渲染与翻转逻辑（精准对接 data.js 字段名）
// ==========================================
function renderCard() {
    if (currentPlan.length === 0) {
        showEmptyState();
        return;
    }

    // 确保索引不越界
    if (currentIndex >= currentPlan.length) {
        currentIndex = 0; 
    }

    const currentIdiom = currentPlan[currentIndex];
    
    // 重置卡片状态为正面
    const flipCardEl = document.getElementById('flip-card');
    if (flipCardEl) flipCardEl.classList.remove('rotate-y-180');
    isFlipped = false;

    // 1. 渲染正面：拼音注音 (Ruby) -> 大字号显示
    const rubyContainer = document.getElementById('card-idiom-ruby');
    if (rubyContainer) {
        const idiomText = currentIdiom.idiom || "未知成语";
        const pinyinText = currentIdiom.pinyin || "";

        if (pinyinText) {
            // 按空格拆分拼音字符串
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

    // 2. 渲染反面：释义、翻译、例句（精准匹配 defZh, defEn, example）
    const defZhEl = document.getElementById('card-def-zh');
    if (defZhEl) {
        defZhEl.innerText = currentIdiom.defZh || '暂无释义';
    }

    const defEnEl = document.getElementById('card-def-en');
    if (defEnEl) {
        defEnEl.innerText = currentIdiom.defEn || 'No English translation available.';
    }

    const exampleEl = document.getElementById('card-example');
    if (exampleEl) {
        const idiomText = currentIdiom.idiom || '';
        let exampleText = currentIdiom.example || '暂无例句。';
        // 如果例句里包含成语本身，自动将其挖空为 ______
        if (idiomText && exampleText.includes(idiomText)) {
            exampleText = exampleText.replace(idiomText, `______`);
        }
        exampleEl.innerText = exampleText;
    }

    // 3. 更新底部进度指示器
    const progressEl = document.getElementById('progress-indicator');
    if (progressEl) {
        progressEl.innerText = `进度：${currentIndex + 1} / ${currentPlan.length} ${isWeaknessMode ? '（错题训练中）' : ''}`;
    }
}

// 绑定卡片翻转
function setupFlipEvent() {
    const container = document.getElementById('card-container');
    const flipCardEl = document.getElementById('flip-card');
    
    if (container && flipCardEl) {
        container.onclick = null;
        container.onclick = function() {
            isFlipped = !isFlipped;
            if (isFlipped) {
                flipCardEl.classList.add('rotate-y-180');
            } else {
                flipCardEl.classList.remove('rotate-y-180');
            }
        };
    }
}

// ==========================================
// 4. 掌握 / 待加强 按钮交互
// ==========================================
function markMastery(isMastered) {
    if (currentPlan.length === 0) return;

    const currentIdiom = currentPlan[currentIndex];
    let wrongList = JSON.parse(localStorage.getItem('chengyu_wrong_list')) || [];
    const currentIdiomText = currentIdiom.idiom || '';

    if (!isMastered) {
        if (!wrongList.some(item => item.idiom === currentIdiomText)) {
            wrongList.push(currentIdiom);
        }
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
            const savedProgress = JSON.parse(localStorage.getItem('chengyu_progress'));
            if (savedProgress) {
                savedProgress.index = currentIndex;
                localStorage.setItem('chengyu_progress', JSON.stringify(savedProgress));
            }
            currentIndex = currentPlan.length - 1; 
        }
    } else if (!isWeaknessMode) {
        const savedProgress = JSON.parse(localStorage.getItem('chengyu_progress'));
        if (savedProgress) {
            savedProgress.index = currentIndex;
            localStorage.setItem('chengyu_progress', JSON.stringify(savedProgress));
        }
    }

    renderCard();
}

// ==========================================
// 5. 错题专项训练模式逻辑
// ==========================================
function startWeaknessTraining() {
    const wrongList = JSON.parse(localStorage.getItem('chengyu_wrong_list')) || [];
    
    if (wrongList.length === 0) {
        alert("✨ 赞！当前没有待加强的成语，快去学习新词吧！");
        return;
    }

    isWeaknessMode = true;
    currentPlan = [...wrongList].sort(() => 0.5 - Math.random()); 
    currentIndex = 0;

    const statusEl = document.getElementById('daily-status');
    if (statusEl) statusEl.innerText = `🎯 错题专项集训中（共 ${currentPlan.length} 词）`;

    renderCard();
}

// 更新错题按钮上的数字提示
function updateWeaknessButton(count) {
    const btn = document.querySelector('button[onclick="startWeaknessTraining()"]');
    if (btn) {
        btn.innerHTML = `🎯 开启错题专项训练 (<span class="text-amber-600 font-bold">${count}</span>)`;
    }
}

// 当计划内无词时的显示状态
function showEmptyState() {
    const rubyContainer = document.getElementById('card-idiom-ruby');
    if (rubyContainer) rubyContainer.innerHTML = `<span class="text-base text-stone-400">今日暂无成语任务</span>`;
    
    const defZhEl = document.getElementById('card-def-zh');
    if (defZhEl) defZhEl.innerText = '-';
    
    const progressEl = document.getElementById('progress-indicator');
    if (progressEl) progressEl.innerText = '进度：0 / 0';
}

// ==========================================
// 6. 页面加载完毕后自动运行
// ==========================================
window.onload = initApp;

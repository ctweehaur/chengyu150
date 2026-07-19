// --- 状态管理 ---
let idioms = allIdioms; // 假设 data.js 已经加载
let currentIndex = 0;
let masteredIdioms = JSON.parse(localStorage.getItem('masteredIdioms')) || [];
let wrongIdioms = JSON.parse(localStorage.getItem('wrongIdioms')) || [];

// --- 初始化每日计划 ---
function getDailyPlan() {
    const today = new Date().toDateString();
    let plan = JSON.parse(localStorage.getItem('dailyPlan'));
    if (!plan || plan.date !== today) {
        // 随机抽10个
        let shuffled = [...idioms].sort(() => 0.5 - Math.random());
        plan = { date: today, list: shuffled.slice(0, 10) };
        localStorage.setItem('dailyPlan', JSON.stringify(plan));
    }
    return plan.list;
}

const currentPlan = getDailyPlan();

// --- 翻转逻辑 ---
function toggleCard(element) {
    element.classList.toggle('flipped');
}

// --- 标记进度 ---
function markStatus(status) {
    const idiom = currentPlan[currentIndex];
    if (status === 'mastered') {
        if (!masteredIdioms.includes(idiom.id)) masteredIdioms.push(idiom.id);
        wrongIdioms = wrongIdioms.filter(id => id !== idiom.id);
    } else {
        if (!wrongIdioms.includes(idiom.id)) wrongIdioms.push(idiom.id);
        masteredIdioms = masteredIdioms.filter(id => id !== idiom.id);
    }
    localStorage.setItem('masteredIdioms', JSON.stringify(masteredIdioms));
    localStorage.setItem('wrongIdioms', JSON.stringify(wrongIdioms));
    
    if (currentIndex < currentPlan.length - 1) {
        currentIndex++;
        renderCard();
    } else {
        showReviewReport();
    }
}

// --- 错题复盘功能 ---
function showReviewReport() {
    const container = document.querySelector('.card-container');
    const wrongList = idioms.filter(i => wrongIdioms.includes(i.id));
    
    let html = `
        <div class="report-box">
            <h2>复习报告</h2>
            <p>已完成今日计划。错题总数: ${wrongList.length}</p>
            <ul>
                ${wrongList.map(i => `<li>${i.idiom}</li>`).join('')}
            </ul>
            <button onclick="exportReport()">导出错题清单</button>
            <button onclick="location.reload()">重新复习</button>
        </div>
    `;
    container.innerHTML = html;
}

function exportReport() {
    const wrongList = idioms.filter(i => wrongIdioms.includes(i.id));
    const content = wrongList.map(i => `${i.idiom}: ${i.meaning}`).join('\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '错题复盘.txt';
    a.click();
}

// --- 渲染卡片 ---
function renderCard() {
    const idiom = currentPlan[currentIndex];
    const container = document.querySelector('.card-container');
    container.innerHTML = `
        <div class="card" onclick="toggleCard(this)">
            <div class="front">
                <ruby>${idiom.idiom}<rt>${idiom.pinyin}</rt></ruby>
            </div>
            <div class="back">
                <div class="def-header">释义</div>
                <div class="def-zh">${idiom.meaning}</div>
                <div class="def-en">${idiom.english}</div>
                <div class="example">例句：${idiom.example}</div>
            </div>
        </div>
        <div class="controls">
            <button onclick="markStatus('mastered')">掌握</button>
            <button onclick="markStatus('wrong')">未掌握</button>
        </div>
        <div>进度: ${currentIndex + 1} / ${currentPlan.length}</div>
    `;
}

renderCard();

// --- 全局状态 ---
let idioms = allIdioms; // 来自 data.js
let masteredIdioms = JSON.parse(localStorage.getItem('masteredIdioms')) || [];
let wrongIdioms = JSON.parse(localStorage.getItem('wrongIdioms')) || [];

// --- 初始化每日计划 ---
function getDailyPlan() {
    const today = new Date().toDateString();
    let plan = JSON.parse(localStorage.getItem('dailyPlan'));
    if (!plan || plan.date !== today) {
        let shuffled = [...idioms].sort(() => 0.5 - Math.random());
        plan = { date: today, list: shuffled.slice(0, 10) };
        localStorage.setItem('dailyPlan', JSON.stringify(plan));
    }
    return plan.list;
}

const currentPlan = getDailyPlan();
let currentIndex = 0;

// --- 翻转逻辑 ---
function toggleCard(element) { element.classList.toggle('flipped'); }

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

// --- 错题专项训练模式 ---
function startWeaknessTraining() {
    const trainingList = idioms.filter(i => wrongIdioms.includes(i.id));
    if (trainingList.length === 0) { alert("太棒了！目前没有错题需要复习。"); return; }
    
    let tIndex = 0;
    const container = document.querySelector('.card-container');
    
    function renderTraining() {
        const idiom = trainingList[tIndex];
        container.innerHTML = `
            <div class="card" onclick="toggleCard(this)">
                <div class="front">专项复习: <ruby>${idiom.idiom}<rt>${idiom.pinyin}</rt></ruby></div>
                <div class="back">
                    <div class="def-zh">${idiom.meaning}</div>
                    <div class="example">例句：${idiom.example}</div>
                </div>
            </div>
            <button onclick="clearWrong('${idiom.id}')">我已掌握该词</button>
            <p>专项进度: ${tIndex + 1} / ${trainingList.length}</p>
        `;
    }

    window.clearWrong = (id) => {
        wrongIdioms = wrongIdioms.filter(i => i !== id);
        localStorage.setItem('wrongIdioms', JSON.stringify(wrongIdioms));
        tIndex++;
        if (tIndex < trainingList.length) renderTraining();
        else { alert("恭喜！错题已全部消化！"); location.reload(); }
    };
    renderTraining();
}

// --- 导出与报告 ---
function showReviewReport() {
    const container = document.querySelector('.card-container');
    const wrongList = idioms.filter(i => wrongIdioms.includes(i.id));
    container.innerHTML = `
        <div class="report-box">
            <h2>复习报告</h2>
            <p>错题总数: ${wrongList.length}</p>
            <button onclick="exportReport()">导出错题清单</button>
            <button onclick="location.reload()">重新开始</button>
        </div>
    `;
}

function exportReport() {
    const wrongList = idioms.filter(i => wrongIdioms.includes(i.id));
    const content = wrongList.map(i => `${i.idiom}: ${i.meaning}`).join('\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = '错题复盘.txt';
    a.click();
}

// --- 初始渲染 ---
function renderCard() {
    const idiom = currentPlan[currentIndex];
    document.querySelector('.card-container').innerHTML = `
        <div class="card" onclick="toggleCard(this)">
            <div class="front"><ruby>${idiom.idiom}<rt>${idiom.pinyin}</rt></ruby></div>
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
        <p>进度: ${currentIndex + 1} / ${currentPlan.length}</p>
    `;
}

renderCard();

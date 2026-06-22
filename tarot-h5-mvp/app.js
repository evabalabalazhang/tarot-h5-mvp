const state = {
  view: "learn",
  lessonDay: Number(localStorage.getItem("tarot.lessonDay") || 1),
  doneTasks: JSON.parse(localStorage.getItem("tarot.doneTasks") || "{}"),
  lessonWork: JSON.parse(localStorage.getItem("tarot.lessonWork") || "{}"),
  lessonSessions: JSON.parse(localStorage.getItem("tarot.lessonSessions") || "{}"),
  showCompletion: false,
  dailyCard: JSON.parse(localStorage.getItem("tarot.dailyCard") || "null"),
  readings: JSON.parse(localStorage.getItem("tarot.readings") || "[]"),
  filter: "全部",
  query: ""
};

const app = document.querySelector("#app");
const pageTitle = document.querySelector("#pageTitle");

function save() {
  localStorage.setItem("tarot.lessonDay", String(state.lessonDay));
  localStorage.setItem("tarot.doneTasks", JSON.stringify(state.doneTasks));
  localStorage.setItem("tarot.lessonWork", JSON.stringify(state.lessonWork));
  localStorage.setItem("tarot.lessonSessions", JSON.stringify(state.lessonSessions));
  localStorage.setItem("tarot.dailyCard", JSON.stringify(state.dailyCard));
  localStorage.setItem("tarot.readings", JSON.stringify(state.readings));
}

function cardArt(card, className = "tarot-card") {
  return `
    <div class="${className}" aria-label="${card.name}">
      ${
        card.image?.kind === "rws"
          ? `<img class="card-image" src="${card.image.src}" alt="${card.name}" loading="lazy" />`
          : `
            <div class="card-sky"></div>
            <div class="card-symbol">${card.image?.icon || card.number}</div>
            <div class="card-ground"></div>
          `
      }
      <div class="card-title">${card.name}</div>
    </div>
  `;
}

function miniCardHtml(card) {
  return `
    <div class="mini-card">
      ${card.image?.kind === "rws" ? `<img src="${card.image.src}" alt="${card.name}" loading="lazy" />` : `<span>${card.image?.icon || card.number}</span>`}
    </div>
  `;
}

function practiceCardHtml(card) {
  return `
    <button class="practice-card" data-preview-card="${card.id}" type="button">
      <div class="practice-card-image">
        ${card.image?.kind === "rws" ? `<img src="${card.image.src}" alt="${card.name}" loading="lazy" />` : symbolicCardHtml(card)}
      </div>
      <strong>${card.name}</strong>
      <span>${cardTypeLabel(card)}</span>
    </button>
  `;
}

function symbolicCardHtml(card) {
  return `
    <div class="symbolic-card">
      <div class="symbolic-sky"></div>
      <div class="symbolic-mark">${card.image?.icon || card.number}</div>
      <div class="symbolic-ground"></div>
      <small>${card.name}</small>
    </div>
  `;
}

function cardTypeLabel(card) {
  return card.arcana === "major" ? "大阿尔卡那" : "小阿尔卡那";
}

function suitLabel(card) {
  const labels = {
    major: "大阿尔卡那",
    wands: "权杖",
    cups: "圣杯",
    swords: "宝剑",
    pentacles: "星币"
  };
  return labels[card.suit] || card.suit;
}

const day1Flow = {
  day: 1,
  stage: "阶段一：认识塔罗",
  title: "我的第一张塔罗牌",
  estimatedMinutes: 25,
  steps: ["intro", "learn", "practice", "apply", "feedback"],
  stepLabels: {
    intro: "课程导入",
    learn: "学习",
    practice: "练习",
    apply: "应用",
    feedback: "反馈"
  }
};

const day2Flow = {
  day: 2,
  stage: "阶段一：认识塔罗",
  title: "塔罗牌有自己的结构",
  estimatedMinutes: 24,
  steps: ["intro", "learn", "practice", "apply", "feedback"],
  stepLabels: {
    intro: "课程导入",
    learn: "学习",
    practice: "练习",
    apply: "应用",
    feedback: "反馈"
  }
};

function getDay1Session() {
  state.lessonSessions.day1 = state.lessonSessions.day1 || {
    currentStep: "home",
    completedSteps: [],
    answers: {},
    feedbackViewed: false,
    firstCardId: null,
    completedAt: null
  };
  return state.lessonSessions.day1;
}

function getDay2Session() {
  state.lessonSessions.day2 = state.lessonSessions.day2 || {
    currentStep: "home",
    completedSteps: [],
    answers: {},
    feedbackViewed: false,
    completedAt: null
  };
  return state.lessonSessions.day2;
}

function saveDay1Session(session) {
  state.lessonSessions.day1 = session;
  save();
}

function saveDay2Session(session) {
  state.lessonSessions.day2 = session;
  save();
}

function markDay1StepComplete(step) {
  const session = getDay1Session();
  if (!session.completedSteps.includes(step)) session.completedSteps.push(step);
  saveDay1Session(session);
}

function markDay2StepComplete(step) {
  const session = getDay2Session();
  if (!session.completedSteps.includes(step)) session.completedSteps.push(step);
  saveDay2Session(session);
}

function setDay1Step(step) {
  const session = getDay1Session();
  session.currentStep = step;
  saveDay1Session(session);
  render();
}

function setDay2Step(step) {
  const session = getDay2Session();
  session.currentStep = step;
  saveDay2Session(session);
  render();
}

function day1ProgressPercent() {
  const session = getDay1Session();
  return Math.round((session.completedSteps.length / day1Flow.steps.length) * 100);
}

function day2ProgressPercent() {
  const session = getDay2Session();
  return Math.round((session.completedSteps.length / day2Flow.steps.length) * 100);
}

function getDay1FirstCard() {
  const session = getDay1Session();
  if (!session.firstCardId) {
    const visibleCards = cards.filter((card) => card.image?.kind === "rws");
    session.firstCardId = visibleCards[Math.floor(Math.random() * visibleCards.length)]?.id || cards[0].id;
    saveDay1Session(session);
  }
  return cards.find((card) => card.id === session.firstCardId) || cards[0];
}

function randomCard() {
  return cards[Math.floor(Math.random() * cards.length)];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getLesson() {
  return lessons[Math.min(state.lessonDay - 1, lessons.length - 1)];
}

function getLessonKey(lesson = getLesson()) {
  return `day${lesson.day}`;
}

function getLessonWork(lesson = getLesson()) {
  const key = getLessonKey(lesson);
  state.lessonWork[key] = state.lessonWork[key] || {};
  return state.lessonWork[key];
}

function getLessonDone(lesson = getLesson()) {
  return state.doneTasks[getLessonKey(lesson)] || {};
}

function isLessonComplete(lesson) {
  const done = getLessonDone(lesson);
  return ["course", "observe", "practice"].every((task) => done[task]);
}

function courseDayState(lesson) {
  if (lesson.day < state.lessonDay) return "completed";
  if (lesson.day === state.lessonDay) return "current";
  return "locked";
}

function getLessonCover(lesson) {
  if (lesson.cardId) {
    const card = cards.find((item) => item.id === lesson.cardId);
    return card ? cardArt(card) : theoryArt(lesson);
  }
  return theoryArt(lesson);
}

function theoryArt(lesson) {
  const visuals = {
    1: `
      <div class="visual-book"><span></span><span></span></div>
      <div class="visual-question">?</div>
      <div class="visual-stars"><i></i><i></i><i></i></div>
    `,
    2: `
      <div class="visual-structure">
        <span>22</span>
        <span>56</span>
        <strong>78</strong>
      </div>
    `,
    3: `
      <div class="visual-classify">
        <div><strong>大牌</strong><span>主题</span></div>
        <div><strong>小牌</strong><span>日常</span></div>
      </div>
    `,
    4: `
      <div class="visual-elements">
        <span class="fire">火</span>
        <span class="water">水</span>
        <span class="air">风</span>
        <span class="earth">土</span>
      </div>
    `,
    5: `
      <div class="visual-upright">
        <span>正位</span>
        <span>逆位</span>
      </div>
    `,
    6: `
      <div class="visual-bubbles">
        <span>如何？</span>
        <span>看清什么？</span>
      </div>
    `,
    7: `
      <div class="visual-three-cards">
        <span></span>
        <span></span>
        <span></span>
      </div>
    `
  };
  return `
    <div class="learning-art lesson-visual day-${lesson.day}" aria-label="课程视觉图">
      ${visuals[lesson.day] || visuals[1]}
      <div class="learning-art-label">第 ${lesson.day} 天</div>
    </div>
  `;
}

function setView(view) {
  state.view = view;
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.view === view);
  });
  render();
}

function render() {
  const titles = {
    learn: "今日学习",
    daily: "每日抽牌",
    ask: "问牌解读",
    library: "牌库查询",
    profile: "我的成长"
  };
  pageTitle.textContent = titles[state.view];

  if (state.view === "learn") renderLearn();
  if (state.view === "daily") renderDaily();
  if (state.view === "ask") renderAsk();
  if (state.view === "library") renderLibrary();
  if (state.view === "profile") renderProfile();
}

function renderLearn() {
  const day1Session = getDay1Session();
  const day2Session = getDay2Session();

  if (day2Session.currentStep === "completion") {
    renderDay2Completion();
    return;
  }

  if (day2Session.currentStep !== "home") {
    renderDay2Player(day2Session.currentStep);
    return;
  }

  if (day1Session.completedAt) {
    renderDay2Home();
    return;
  }

  const session = day1Session;
  const lesson = lessons[0];
  state.lessonDay = 1;

  if (session.currentStep === "completion") {
    renderDay1Completion();
    return;
  }

  if (session.currentStep !== "home") {
    renderDay1Player(session.currentStep);
    return;
  }

  app.innerHTML = `
    <section class="hero">
      <div>
        <p class="eyebrow">${day1Flow.stage}</p>
        <h2>第 1 天：${day1Flow.title}</h2>
        <p>今天你会完成第一次真实塔罗观察。目标不是背牌义，而是开始学会看牌。</p>
        <div class="button-row">
          <button class="primary" id="startDay1">${session.completedAt ? "复习第 1 天" : session.completedSteps.length ? "继续学习" : "开始学习"}</button>
        </div>
      </div>
      ${getLessonCover(lesson)}
    </section>

    ${day1HomeProgressHtml()}

    <section class="section">
      <div class="section-title">
        <h2>今日任务</h2>
        <span class="small">${day1Flow.estimatedMinutes} 分钟</span>
      </div>
      <div class="mission-list">
        ${day1Flow.steps.map((step) => `
          <div class="mission-item ${session.completedSteps.includes(step) ? "done" : ""}">
            <span>${session.completedSteps.includes(step) ? "✓" : ""}</span>
            <strong>${day1Flow.stepLabels[step]}</strong>
          </div>
        `).join("")}
      </div>
    </section>
  `;

  document.querySelector("#startDay1").addEventListener("click", () => {
    const current = session.completedAt ? "intro" : session.completedSteps.length ? session.currentStep : "intro";
    setDay1Step(current === "home" ? "intro" : current);
  });
}

function renderDay2Home() {
  const session = getDay2Session();
  const lesson = lessons[1];
  state.lessonDay = 2;

  app.innerHTML = `
    <section class="hero">
      <div>
        <p class="eyebrow">${day2Flow.stage}</p>
        <h2>第 2 天：${day2Flow.title}</h2>
        <p>今天你会把 78 张牌分成两层：大牌看人生主题，小牌看日常处境。</p>
        <div class="button-row">
          <button class="primary" id="startDay2">${session.completedAt ? "复习第 2 天" : session.completedSteps.length ? "继续学习" : "开始学习"}</button>
        </div>
      </div>
      ${getLessonCover(lesson)}
    </section>

    ${day2HomeProgressHtml()}

    <section class="section">
      <div class="section-title">
        <h2>今日任务</h2>
        <span class="small">${day2Flow.estimatedMinutes} 分钟</span>
      </div>
      <div class="mission-list">
        ${day2Flow.steps.map((step) => `
          <div class="mission-item ${session.completedSteps.includes(step) ? "done" : ""}">
            <span>${session.completedSteps.includes(step) ? "✓" : ""}</span>
            <strong>${day2Flow.stepLabels[step]}</strong>
          </div>
        `).join("")}
      </div>
    </section>
  `;

  document.querySelector("#startDay2").addEventListener("click", () => {
    const current = session.completedAt ? "intro" : session.completedSteps.length ? session.currentStep : "intro";
    setDay2Step(current === "home" ? "intro" : current);
  });
}

function day1HomeProgressHtml() {
  const session = getDay1Session();
  const percent = day1ProgressPercent();
  return `
    <section class="section lesson-card stage-map">
      <div class="section-title">
        <div>
          <p class="eyebrow">第一周进度</p>
          <h2>认识塔罗</h2>
        </div>
        <span class="small">${session.completedAt ? 1 : 0} / 7</span>
      </div>
      <div class="week-progress" aria-label="第一周进度">
        ${lessons.map((lesson) => {
          const status = lesson.day === 1 ? session.completedAt ? "completed" : "current" : "locked";
          return `
            <button class="progress-node ${status}" ${status === "locked" ? "disabled" : ""}>
              <span>第 ${lesson.day} 天</span>
              <strong>${lesson.day === 1 ? session.completedAt ? "✓" : "当前" : "未开始"}</strong>
            </button>
          `;
        }).join("")}
      </div>
      <div class="section">
        <div class="section-title">
          <h2>第 1 天进度</h2>
          <span class="small">${session.completedSteps.length} / ${day1Flow.steps.length}</span>
        </div>
        <div class="progress" style="--value:${percent}%"><span></span></div>
      </div>
    </section>
  `;
}

function day2HomeProgressHtml() {
  const session = getDay2Session();
  const percent = day2ProgressPercent();
  return `
    <section class="section lesson-card stage-map">
      <div class="section-title">
        <div>
          <p class="eyebrow">第一周进度</p>
          <h2>认识塔罗</h2>
        </div>
        <span class="small">${session.completedAt ? 2 : 1} / 7</span>
      </div>
      <div class="week-progress" aria-label="第一周进度">
        ${lessons.map((lesson) => {
          const status = lesson.day === 1 ? "completed" : lesson.day === 2 ? session.completedAt ? "completed" : "current" : "locked";
          return `
            <button class="progress-node ${status}" ${status === "locked" ? "disabled" : ""}>
              <span>第 ${lesson.day} 天</span>
              <strong>${status === "completed" ? "✓" : status === "current" ? "当前" : "未开始"}</strong>
            </button>
          `;
        }).join("")}
      </div>
      <div class="section">
        <div class="section-title">
          <h2>第 2 天进度</h2>
          <span class="small">${session.completedSteps.length} / ${day2Flow.steps.length}</span>
        </div>
        <div class="progress" style="--value:${percent}%"><span></span></div>
      </div>
    </section>
  `;
}

function renderDay1Player(step) {
  const session = getDay1Session();
  const stepIndex = day1Flow.steps.indexOf(step);
  app.innerHTML = `
    ${day1StepperHtml(step)}
    ${day1StepHtml(step, session)}
  `;
  bindDay1PlayerEvents(step);
  bindCardPreviewEvents();
}

function renderDay2Player(step) {
  const session = getDay2Session();
  app.innerHTML = `
    ${day2StepperHtml(step)}
    ${day2StepHtml(step, session)}
  `;
  bindDay2PlayerEvents(step);
  bindCardPreviewEvents();
}

function day1StepperHtml(currentStep) {
  return `
    <section class="lesson-stepper" aria-label="第 1 天学习步骤">
      ${day1Flow.steps.map((step) => {
        const session = getDay1Session();
        const complete = session.completedSteps.includes(step);
        const current = step === currentStep;
        return `
          <div class="step-pill ${complete ? "complete" : ""} ${current ? "current" : ""}">
            <span>${complete ? "✓" : day1Flow.steps.indexOf(step) + 1}</span>
            <strong>${day1Flow.stepLabels[step]}</strong>
          </div>
        `;
      }).join("")}
    </section>
  `;
}

function day2StepperHtml(currentStep) {
  return `
    <section class="lesson-stepper" aria-label="第 2 天学习步骤">
      ${day2Flow.steps.map((step) => {
        const session = getDay2Session();
        const complete = session.completedSteps.includes(step);
        const current = step === currentStep;
        return `
          <div class="step-pill ${complete ? "complete" : ""} ${current ? "current" : ""}">
            <span>${complete ? "✓" : day2Flow.steps.indexOf(step) + 1}</span>
            <strong>${day2Flow.stepLabels[step]}</strong>
          </div>
        `;
      }).join("")}
    </section>
  `;
}

function day1StepHtml(step, session) {
  if (step === "intro") return day1IntroHtml();
  if (step === "learn") return day1LearnHtml();
  if (step === "practice") return day1PracticeHtml(session);
  if (step === "apply") return day1ApplyHtml(session);
  if (step === "feedback") return day1FeedbackHtml(session);
  return "";
}

function day2StepHtml(step, session) {
  if (step === "intro") return day2IntroHtml();
  if (step === "learn") return day2LearnHtml();
  if (step === "practice") return day2PracticeHtml(session);
  if (step === "apply") return day2ApplyHtml(session);
  if (step === "feedback") return day2FeedbackHtml(session);
  return "";
}

function day1IntroHtml() {
  return `
    <section class="lesson-screen">
      <p class="eyebrow">课程导入</p>
      <h2>今天不是“上完一课”</h2>
      <p>今天你会真正看一张塔罗牌，并完成第一次自己的塔罗观察。</p>
      <div class="first-experience">
        ${getLessonCover(lessons[0])}
        <div>
          <h3>今日目标</h3>
          <p>学会先看见牌面，再慢慢理解含义。你不需要答对，只需要开始观察。</p>
        </div>
      </div>
      <button class="primary" data-next-step="learn">开始</button>
    </section>
  `;
}

function day1LearnHtml() {
  return `
    <section class="lesson-screen">
      <p class="eyebrow">学习</p>
      <h2>塔罗从观察开始</h2>
      <div class="lesson-blocks">
        <div class="lesson-block">
          <strong>先不要背牌义</strong>
          <p>塔罗更像一套图像语言。第一步是看见画面里发生了什么。</p>
        </div>
        <div class="lesson-block question">
          <strong>观察三问</strong>
          <p>我看见了什么？我有什么感觉？这个画面像在讲什么故事？</p>
        </div>
        <div class="lesson-block">
          <strong>今天的标准</strong>
          <p>只要你的想法来自牌面细节，就是有效的塔罗观察。</p>
        </div>
      </div>
      <button class="primary" data-next-step="practice">进入练习</button>
    </section>
  `;
}

function day1PracticeHtml(session) {
  const card = cards.find((item) => item.id === "fool");
  const value = session.answers.practice || "";
  return `
    <section class="lesson-screen">
      <p class="eyebrow">练习</p>
      <h2>观察愚人牌</h2>
      <p class="muted-copy">不要查牌义。只写下你看到的 3 个画面细节。</p>
      <div class="exercise-cards single">${practiceCardHtml(card)}</div>
      <div class="field">
        <label for="practiceAnswer">我注意到...</label>
        <textarea id="practiceAnswer" placeholder="例如：人物站在悬崖边；旁边有一只小狗；天空很亮。">${escapeHtml(value)}</textarea>
      </div>
      <button class="primary" id="submitDay1Practice">${session.completedSteps.includes("practice") ? "已保存，继续" : "提交练习"}</button>
    </section>
  `;
}

function day1ApplyHtml(session) {
  const firstCard = getDay1FirstCard();
  const answer = session.answers.apply || {};
  return `
    <section class="lesson-screen">
      <p class="eyebrow">应用</p>
      <h2>你的第一张塔罗牌</h2>
      <p class="muted-copy">这是你的第一次真实抽牌体验。不要担心准不准，先描述你看到的东西。</p>
      <div class="exercise-cards single">${practiceCardHtml(firstCard)}</div>
      <div class="field">
        <label for="applyNotice">第一眼看到什么？</label>
        <textarea id="applyNotice" placeholder="写下第一眼注意到的画面。">${escapeHtml(answer.notice || "")}</textarea>
      </div>
      <div class="field">
        <label for="applyEmotion">这张牌给你什么感觉？</label>
        <textarea id="applyEmotion" placeholder="轻松、紧张、好奇、沉重都可以。">${escapeHtml(answer.emotion || "")}</textarea>
      </div>
      <div class="field">
        <label for="applyMessage">如果它描述你的学习旅程，它可能在说什么？</label>
        <textarea id="applyMessage" placeholder="例如：我正在开始一件新事。">${escapeHtml(answer.message || "")}</textarea>
      </div>
      <button class="primary" id="submitDay1Apply">${session.completedSteps.includes("apply") ? "已保存，继续" : "提交应用"}</button>
    </section>
  `;
}

function day1FeedbackHtml(session) {
  const firstCard = cards.find((card) => card.id === session.firstCardId) || cards[0];
  const practice = session.answers.practice || "";
  const apply = session.answers.apply || {};
  return `
    <section class="lesson-screen">
      <p class="eyebrow">反馈</p>
      <h2>你已经完成第一次塔罗观察</h2>
      <div class="feedback reference">
        <strong>你的练习观察</strong>
        <p>${escapeHtml(practice) || "还没有填写练习观察。"}</p>
      </div>
      <div class="feedback reference">
        <strong>参考观察：愚人牌</strong>
        <ul>
          <li>人物站在悬崖边，像是即将出发。</li>
          <li>他抬头看向远方，画面有轻松和冒险感。</li>
          <li>小狗、包袱和白花都暗示天真、提醒和新的开始。</li>
        </ul>
      </div>
      <div class="feedback correct">
        <strong>你的第一张牌：${firstCard.name}</strong>
        <p>你第一眼看到：${escapeHtml(apply.notice || "")}</p>
        <p>你感受到：${escapeHtml(apply.emotion || "")}</p>
        <p>你给自己的学习提示：${escapeHtml(apply.message || "")}</p>
      </div>
      <div class="skill-check">
        <h3>你已经掌握了</h3>
        <p>✓ 你观察了真实牌面</p>
        <p>✓ 你把图像和感觉连接起来</p>
        <p>✓ 你完成了第一次自己的塔罗表达</p>
      </div>
      <button class="primary" id="completeDay1">完成今日课程</button>
    </section>
  `;
}

function day2IntroHtml() {
  return `
    <section class="lesson-screen">
      <p class="eyebrow">课程导入</p>
      <h2>塔罗不是 78 张随机牌</h2>
      <p>今天你会把整副牌放进一个清楚的结构里。理解这张地图后，后面的学习会轻很多。</p>
      <div class="deck-map-preview">
        <div><strong>78</strong><span>总牌数</span></div>
        <div><strong>22</strong><span>大阿尔卡那</span></div>
        <div><strong>56</strong><span>小阿尔卡那</span></div>
      </div>
      <button class="primary" data-day2-next-step="learn">开始</button>
    </section>
  `;
}

function day2LearnHtml() {
  const majorExamples = ["fool", "emperor", "hermit"].map((id) => cards.find((card) => card.id === id));
  const minorExamples = ["cups3", "pentacles8", "swords5"].map((id) => cards.find((card) => card.id === id));
  return `
    <section class="lesson-screen">
      <p class="eyebrow">学习</p>
      <h2>先观察，再命名</h2>
      <p class="muted-copy">先不要急着背“大牌”“小牌”。先看两组牌面，感受它们像在讲不同层级的事情。</p>
      <div class="day2-compare">
        <div>
          <strong>第一组</strong>
          <div class="day2-compare-cards">
            ${majorExamples.map(day2CompareCardHtml).join("")}
          </div>
        </div>
        <div>
          <strong>第二组</strong>
          <div class="day2-compare-cards">
            ${minorExamples.map(day2CompareCardHtml).join("")}
          </div>
        </div>
      </div>
      <div class="lesson-blocks">
        <div class="lesson-block question">
          <strong>你注意到了什么？</strong>
          <p>第一组更像人物、阶段、原型或人生转折；第二组更像正在发生的事件、行动和日常经验。</p>
        </div>
        <div class="lesson-block question">
          <strong>现在再给它们命名</strong>
          <p>22 张大阿尔卡那代表人生主题；56 张小阿尔卡那代表日常生活里的具体状态。</p>
        </div>
        <div class="lesson-block">
          <strong>完整结构</strong>
          <p>一副维特塔罗有 78 张牌：22 张大阿尔卡那，56 张小阿尔卡那。56 张小牌分成 4 个牌组，每组 14 张。</p>
        </div>
      </div>
      <button class="primary" data-day2-next-step="practice">进入练习</button>
    </section>
  `;
}

function day2CompareCardHtml(card) {
  return `
    <div class="day2-compare-card">
      <div class="practice-card-image">
        ${card.image?.kind === "rws" ? `<img src="${card.image.src}" alt="${card.name}" loading="lazy" />` : symbolicCardHtml(card)}
      </div>
      <span>${card.name}</span>
    </div>
  `;
}

function day2PracticeHtml(session) {
  const answer = session.answers.practice || {};
  return `
    <section class="lesson-screen">
      <p class="eyebrow">练习</p>
      <h2>补完整副牌结构</h2>
      <p class="muted-copy">不用背牌义，先把这张地图记住。</p>
      <div class="structure-grid">
        ${structureInputHtml("total", "总牌数", answer.total)}
        ${structureInputHtml("major", "大阿尔卡那", answer.major)}
        ${structureInputHtml("minor", "小阿尔卡那", answer.minor)}
        ${structureInputHtml("suits", "小牌牌组数", answer.suits)}
        ${structureInputHtml("perSuit", "每组牌数", answer.perSuit)}
      </div>
      <button class="primary" id="submitDay2Practice">${session.completedSteps.includes("practice") ? "已保存，继续" : "提交练习"}</button>
    </section>
  `;
}

function structureInputHtml(id, label, value) {
  return `
    <label class="structure-input">
      <span>${label}</span>
      <input id="day2-${id}" inputmode="numeric" value="${escapeHtml(value || "")}" placeholder="?" />
    </label>
  `;
}

function day2ApplyHtml(session) {
  const answer = session.answers.apply || {};
  const applyCards = ["fool", "emperor", "hermit", "cups3", "pentacles8", "swords5"].map((id) => cards.find((card) => card.id === id));
  return `
    <section class="lesson-screen">
      <p class="eyebrow">应用</p>
      <h2>先凭感觉分成两组</h2>
      <p class="muted-copy">不要查牌义，也不要靠牌名。只看画面：哪一组更像人生章节？哪一组更像日常片段？</p>
      <div class="deck-placement-list">
        ${applyCards.map((card, index) => `
          <div class="deck-placement-item">
            ${day2ApplyCardHtml(card, index)}
            <label>
              <span>案例牌 ${String.fromCharCode(65 + index)} 给你的感觉更像什么？</span>
              <select data-day2-card="${card.id}">
                <option value="">请选择</option>
                <option value="major" ${answer[card.id] === "major" ? "selected" : ""}>像人生章节 / 重大主题</option>
                <option value="minor" ${day2ApplyAnswerValue(answer[card.id]) === "minor" ? "selected" : ""}>像日常片段 / 具体处境</option>
              </select>
            </label>
          </div>
        `).join("")}
      </div>
      <button class="primary" id="submitDay2Apply">${session.completedSteps.includes("apply") ? "已保存，继续" : "提交应用"}</button>
    </section>
  `;
}

function day2ApplyCardHtml(card, index) {
  return `
    <div class="practice-card day2-apply-card" aria-label="案例牌 ${String.fromCharCode(65 + index)}">
      <div class="practice-card-image">
        ${card.image?.kind === "rws" ? `<img src="${card.image.src}" alt="案例牌 ${String.fromCharCode(65 + index)}" loading="lazy" />` : symbolicCardHtml(card)}
      </div>
      <strong>案例牌 ${String.fromCharCode(65 + index)}</strong>
      <span>先感受画面层级</span>
    </div>
  `;
}

function day2FeedbackHtml(session) {
  const practice = session.answers.practice || {};
  const apply = session.answers.apply || {};
  const practiceCorrect = day2PracticeIsCorrect(practice);
  const applyCorrect = day2ApplyIsCorrect(apply);
  return `
    <section class="lesson-screen">
      <p class="eyebrow">反馈</p>
      <h2>塔罗有一张清楚的地图</h2>
      <div class="feedback ${practiceCorrect ? "correct" : "incorrect"}">
        <strong>结构练习</strong>
        <p>${practiceCorrect ? "答对了。" : "有几项需要再看一眼。"}</p>
        <ul>
          <li>总牌数：78</li>
          <li>大阿尔卡那：22</li>
          <li>小阿尔卡那：56</li>
          <li>小阿尔卡那：4 个牌组</li>
          <li>每个牌组：14 张</li>
        </ul>
      </div>
      <div class="feedback ${applyCorrect ? "correct" : "incorrect"}">
        <strong>模式揭示</strong>
        <p>${applyCorrect ? "你抓到这两组牌的层级差异了。" : "没关系，重点不是一次答对，而是看见两组画面的差异。"}</p>
        <ul>
          <li>案例牌 A（愚人）→ 大阿尔卡那：像一个新阶段的开始。</li>
          <li>案例牌 B（皇帝）→ 大阿尔卡那：像秩序、责任和掌控这样的原型主题。</li>
          <li>案例牌 C（隐士）→ 大阿尔卡那：像独处、寻找和内在成长的阶段。</li>
          <li>案例牌 D（圣杯三）→ 小阿尔卡那：像朋友相聚、庆祝这样的日常场景。</li>
          <li>案例牌 E（星币八）→ 小阿尔卡那：像练习技能、重复打磨这样的具体行动。</li>
          <li>案例牌 F（宝剑五）→ 小阿尔卡那：像争执、沟通摩擦这样的具体事件。</li>
        </ul>
      </div>
      <div class="feedback reference">
        <strong>你可以这样感受差异</strong>
        <p>大阿尔卡那像“人生的一章”：开始、崩塌、选择、成长、转变。小阿尔卡那像“这一章里的某一天”：一次聚会、一段练习、一场沟通、一个现实任务。</p>
      </div>
      <div class="deck-map-answer">
        <h3>今日结构总结</h3>
        <p class="summary-lead">一副维特塔罗 = 78 张牌</p>
        <div class="deck-summary-grid">
          <div>
            <strong>大阿尔卡那：22 张</strong>
            <span>代表人生主题、重要阶段和深层课题。</span>
          </div>
          <div>
            <strong>小阿尔卡那：56 张</strong>
            <span>代表日常事件、情绪、行动和现实处境。</span>
          </div>
          <div>
            <strong>56 张小牌 = 4 个牌组</strong>
            <span>权杖、圣杯、宝剑、星币。每组 14 张。今天只记结构，含义第 4 天再学。</span>
          </div>
        </div>
      </div>
      <div class="skill-check">
        <h3>你已经掌握了</h3>
        <p>✓ 你知道一副牌不是随机的 78 张牌</p>
        <p>✓ 你能区分大阿尔卡那和小阿尔卡那</p>
        <p>✓ 你知道小阿尔卡那由 4 个牌组组成，每组 14 张</p>
        <p>✓ 你开始能感受到：大牌像人生章节，小牌像日常片段</p>
      </div>
      <button class="primary" id="completeDay2">完成今日课程</button>
    </section>
  `;
}

function day2PracticeIsCorrect(answer) {
  return String(answer.total) === "78" &&
    String(answer.major) === "22" &&
    String(answer.minor) === "56" &&
    String(answer.suits) === "4" &&
    String(answer.perSuit) === "14";
}

function day2ApplyIsCorrect(answer) {
  const correct = {
    fool: "major",
    emperor: "major",
    hermit: "major",
    cups3: "minor",
    pentacles8: "minor",
    swords5: "minor"
  };
  return Object.entries(correct).every(([id, value]) => day2ApplyAnswerValue(answer[id]) === value);
}

function day2ApplyAnswerValue(value) {
  return ["wands", "cups", "swords", "pentacles"].includes(value) ? "minor" : value;
}

function bindDay1PlayerEvents(step) {
  document.querySelectorAll("[data-next-step]").forEach((button) => {
    button.addEventListener("click", () => {
      markDay1StepComplete(step);
      setDay1Step(button.dataset.nextStep);
    });
  });
  document.querySelector("#submitDay1Practice")?.addEventListener("click", submitDay1Practice);
  document.querySelector("#submitDay1Apply")?.addEventListener("click", submitDay1Apply);
  document.querySelector("#completeDay1")?.addEventListener("click", completeDay1);
}

function bindDay2PlayerEvents(step) {
  document.querySelectorAll("[data-day2-next-step]").forEach((button) => {
    button.addEventListener("click", () => {
      markDay2StepComplete(step);
      setDay2Step(button.dataset.day2NextStep);
    });
  });
  document.querySelector("#submitDay2Practice")?.addEventListener("click", submitDay2Practice);
  document.querySelector("#submitDay2Apply")?.addEventListener("click", submitDay2Apply);
  document.querySelector("#completeDay2")?.addEventListener("click", completeDay2);
}

function submitDay1Practice() {
  const input = document.querySelector("#practiceAnswer");
  const value = input.value.trim();
  if (!value) {
    input.focus();
    input.classList.add("input-error");
    return;
  }
  const session = getDay1Session();
  session.answers.practice = value;
  if (!session.completedSteps.includes("practice")) session.completedSteps.push("practice");
  session.currentStep = "apply";
  saveDay1Session(session);
  render();
}

function submitDay2Practice() {
  const answer = {
    total: document.querySelector("#day2-total").value.trim(),
    major: document.querySelector("#day2-major").value.trim(),
    minor: document.querySelector("#day2-minor").value.trim(),
    suits: document.querySelector("#day2-suits").value.trim(),
    perSuit: document.querySelector("#day2-perSuit").value.trim()
  };
  const empty = Object.entries(answer).find(([, value]) => !value);
  if (empty) {
    document.querySelector(`#day2-${empty[0]}`).focus();
    document.querySelector(`#day2-${empty[0]}`).classList.add("input-error");
    return;
  }
  const session = getDay2Session();
  session.answers.practice = answer;
  session.answers.practiceFeedback = {
    correct: day2PracticeIsCorrect(answer)
  };
  if (!session.completedSteps.includes("practice")) session.completedSteps.push("practice");
  session.currentStep = "apply";
  saveDay2Session(session);
  render();
}

function submitDay1Apply() {
  const notice = document.querySelector("#applyNotice").value.trim();
  const emotion = document.querySelector("#applyEmotion").value.trim();
  const message = document.querySelector("#applyMessage").value.trim();
  if (!notice || !emotion || !message) {
    [document.querySelector("#applyNotice"), document.querySelector("#applyEmotion"), document.querySelector("#applyMessage")]
      .find((input) => !input.value.trim())
      ?.focus();
    return;
  }
  const session = getDay1Session();
  session.answers.apply = { notice, emotion, message };
  if (!session.completedSteps.includes("apply")) session.completedSteps.push("apply");
  session.currentStep = "feedback";
  saveDay1Session(session);
  render();
}

function submitDay2Apply() {
  const selects = Array.from(document.querySelectorAll("[data-day2-card]"));
  const answer = Object.fromEntries(selects.map((select) => [select.dataset.day2Card, select.value]));
  const empty = selects.find((select) => !select.value);
  if (empty) {
    empty.focus();
    empty.classList.add("input-error");
    return;
  }
  const session = getDay2Session();
  session.answers.apply = answer;
  session.answers.applyFeedback = {
    correct: day2ApplyIsCorrect(answer)
  };
  if (!session.completedSteps.includes("apply")) session.completedSteps.push("apply");
  session.currentStep = "feedback";
  saveDay2Session(session);
  render();
}

function completeDay1() {
  const session = getDay1Session();
  if (!session.completedSteps.includes("feedback")) session.completedSteps.push("feedback");
  session.feedbackViewed = true;
  session.completedAt = new Date().toISOString();
  session.currentStep = "completion";
  state.doneTasks.day1 = { course: true, observe: true, practice: true };
  state.lessonDay = 1;
  saveDay1Session(session);
  render();
}

function completeDay2() {
  const session = getDay2Session();
  if (!session.completedSteps.includes("feedback")) session.completedSteps.push("feedback");
  session.feedbackViewed = true;
  session.completedAt = new Date().toISOString();
  session.currentStep = "completion";
  state.doneTasks.day2 = { course: true, observe: true, practice: true };
  state.lessonDay = 2;
  saveDay2Session(session);
  render();
}

function bindCardPreviewEvents() {
  document.querySelectorAll("[data-preview-card]").forEach((button) => {
    button.addEventListener("click", () => openCardPreview(button.dataset.previewCard));
  });
}

function renderDay1Completion() {
  const session = getDay1Session();
  const firstCard = cards.find((card) => card.id === session.firstCardId) || cards[0];
  app.innerHTML = `
    <section class="completion-page">
      <div class="completion-badge">🎉</div>
      <p class="eyebrow">今日课程完成</p>
      <h2>你完成了第一次塔罗体验</h2>
      <p>今天你不是“读完一课”，而是真的观察了一张牌。</p>
      <div class="completion-stats">
        <div><strong>1 天</strong><span>连续学习</span></div>
        <div><strong>1 / 7</strong><span>第 1 周进度</span></div>
      </div>
      <div class="completion-quote">
        <span>今日第一张牌</span>
        <strong>${firstCard.name}</strong>
      </div>
      <div class="completion-quote">
        <span>今日金句</span>
        <strong>“塔罗不是替你决定未来，而是帮助你观察现实。”</strong>
      </div>
      <div class="button-row">
        <button class="primary" id="backDay1Home">返回首页</button>
        <button class="secondary" id="reviewDay1">复习课程</button>
      </div>
    </section>
  `;
  document.querySelector("#backDay1Home").addEventListener("click", () => {
    session.currentStep = "home";
    saveDay1Session(session);
    render();
  });
  document.querySelector("#reviewDay1").addEventListener("click", () => {
    session.currentStep = "intro";
    saveDay1Session(session);
    render();
  });
}

function renderDay2Completion() {
  const session = getDay2Session();
  app.innerHTML = `
    <section class="completion-page">
      <div class="completion-badge">🎉</div>
      <p class="eyebrow">今日课程完成</p>
      <h2>你看懂了塔罗的基础地图</h2>
      <p>78 张牌不再是一堆随机图像，而是有结构的学习系统。</p>
      <div class="completion-stats">
        <div><strong>2 天</strong><span>连续学习</span></div>
        <div><strong>2 / 7</strong><span>第 1 周进度</span></div>
      </div>
      <div class="completion-quote">
        <span>今日金句</span>
        <strong>“先看结构，再学单张牌，78 张牌会变得有秩序。”</strong>
      </div>
      <div class="button-row">
        <button class="primary" id="backDay2Home">返回首页</button>
        <button class="secondary" id="reviewDay2">复习课程</button>
      </div>
    </section>
  `;
  document.querySelector("#backDay2Home").addEventListener("click", () => {
    session.currentStep = "home";
    saveDay2Session(session);
    render();
  });
  document.querySelector("#reviewDay2").addEventListener("click", () => {
    session.currentStep = "intro";
    saveDay2Session(session);
    render();
  });
}

function stageMapHtml() {
  return `
    <section class="section lesson-card stage-map">
      <div class="section-title">
        <div>
          <p class="eyebrow">阶段一</p>
          <h2>认识塔罗</h2>
        </div>
        <span class="small">${completedLessonCount()} / ${lessons.length}</span>
      </div>
      <div class="week-progress" aria-label="第一周进度">
        ${lessons.map((lesson) => {
          const status = courseDayState(lesson);
          return `
            <button class="progress-node ${status}" data-lesson="${lesson.day}" ${status === "locked" ? "disabled" : ""}>
              <span>第 ${lesson.day} 天</span>
              <strong>${status === "completed" ? "✓" : status === "current" ? "当前" : "未开始"}</strong>
            </button>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function weekLearningPathHtml() {
  return `
    <details class="section lesson-card learning-path">
      <summary>第一周学习路径</summary>
      <div class="overview-list">
        ${lessons.map((lesson) => `
          <button class="overview-item ${courseDayState(lesson)}" data-lesson="${lesson.day}" ${courseDayState(lesson) === "locked" ? "disabled" : ""}>
            <span>第 ${lesson.day} 天</span>
            <strong>${lesson.title}</strong>
            <em>${courseDayState(lesson) === "completed" ? "已完成" : courseDayState(lesson) === "current" ? "当前" : "未开始"}</em>
          </button>
        `).join("")}
      </div>
    </details>
  `;
}

function completedLessonCount() {
  return Math.max(state.lessonDay - 1, 0) + (isLessonComplete(getLesson()) ? 1 : 0);
}

function learningStreak() {
  return completedLessonCount();
}

function taskStatus(done) {
  return `<span class="check">${done ? "✓" : ""}</span>`;
}

function courseTaskHtml(lesson, done) {
  const blocks = lesson.blocks?.length ? lesson.blocks : [{ type: "knowledge", title: "课程内容", text: lesson.intro }];
  return `
    <article class="task-card ${done.course ? "done" : ""}">
      <div class="task-card-head">
        ${taskStatus(done.course)}
        <div>
          <h3>课程阅读</h3>
          <p>读完课程内容后，点击完成阅读。</p>
        </div>
      </div>
      <div class="lesson-blocks">
        ${blocks.map((block) => `
          <div class="lesson-block ${block.type}">
            <strong>${block.title || "想一想"}</strong>
            <p>${block.text}</p>
          </div>
        `).join("")}
      </div>
      <button class="primary" id="completeCourse">${done.course ? "已完成" : "完成阅读"}</button>
    </article>
  `;
}

function exerciseTaskHtml(id, title, exercise, value, done) {
  const feedback = getLessonWork()[`${id}Feedback`];
  const isRecognition = exercise?.type === "recognition";
  return `
    <article class="task-card ${done ? "done" : ""}">
      <div class="task-card-head">
        ${taskStatus(done)}
        <div>
          <h3>${title}</h3>
          <p>${exercise?.prompt || ""}</p>
        </div>
      </div>
      ${exerciseCardsHtml(exercise)}
      ${isRecognition ? recognitionInputHtml(id, exercise, value) : openInputHtml(id, value)}
      <button class="primary" data-submit-task="${id}">${done ? "已提交" : "提交"}</button>
      ${feedbackHtml(feedback)}
    </article>
  `;
}

function exerciseCardsHtml(exercise) {
  if (!exercise?.cards?.length) return "";
  const layout = exercise.cards.length === 1 ? "single" : exercise.cards.length <= 4 ? "multi" : "scroll";
  return `
    <div class="exercise-cards ${layout}" aria-label="练习卡牌">
      ${exercise.cards.map((id) => {
        const card = cards.find((item) => item.id === id);
        if (!card) return "";
        return practiceCardHtml(card);
      }).join("")}
    </div>
  `;
}

function openInputHtml(id, value) {
  return `
    <div class="field">
      <label for="${id}Input">写下你的想法，不需要标准答案。</label>
      <textarea id="${id}Input" data-task-input="${id}" placeholder="写在这里...">${escapeHtml(value || "")}</textarea>
    </div>
  `;
}

function recognitionInputHtml(id, exercise, value) {
  return `
    <div class="choice-grid" data-choice-group="${id}">
      ${exercise.options.map((option) => {
        const selected = Array.isArray(value) ? value.includes(option.value) : value === option.value;
        return `
          <label class="choice-option ${selected ? "selected" : ""}">
            <input
              type="${exercise.multiple ? "checkbox" : "radio"}"
              name="${id}Choice"
              value="${option.value}"
              ${selected ? "checked" : ""}
            />
            <span>${option.label}</span>
          </label>
        `;
      }).join("")}
    </div>
  `;
}

function feedbackHtml(feedback) {
  if (!feedback) return "";
  const tone = feedback.correct === true ? "correct" : feedback.correct === false ? "incorrect" : "reference";
  return `
    <div class="feedback ${tone}">
      <strong>${feedback.title}</strong>
      <p>${feedback.text}</p>
      ${feedback.points?.length ? `<ul>${feedback.points.map((point) => `<li>${point}</li>`).join("")}</ul>` : ""}
    </div>
  `;
}

function takeawayHtml(value) {
  return `
    <article class="task-card optional">
      <div class="task-card-head">
        <span class="optional-mark">可选</span>
        <div>
          <h3>今日收获</h3>
          <p>用自己的话记录今天最重要的一点。</p>
        </div>
      </div>
      <div class="field">
        <label for="takeawayInput">不知道写什么也没关系，可以跳过。</label>
        <textarea id="takeawayInput" placeholder="例如：我今天知道了大牌更像人生主题。">${escapeHtml(value || "")}</textarea>
      </div>
      <button class="secondary" id="saveTakeaway">${value ? "已保存，继续修改" : "保存今日收获"}</button>
    </article>
  `;
}

function renderCompletion(lesson) {
  const streak = learningStreak();
  const completed = completedLessonCount();
  app.innerHTML = `
    <section class="completion-page">
      <div class="completion-badge">🎉</div>
      <p class="eyebrow">今日课程完成</p>
      <h2>恭喜完成第 ${lesson.day} 天</h2>
      <div class="completion-stats">
        <div><strong>${streak} 天</strong><span>连续学习</span></div>
        <div><strong>${completed} / ${lessons.length}</strong><span>第 1 周进度</span></div>
      </div>
      <div class="completion-quote">
        <span>今日金句</span>
        <strong>“${lesson.quote || "塔罗不是预测未来，而是帮助你观察现实。"}”</strong>
      </div>
      <div class="button-row">
        <button class="primary" id="continueTomorrow">继续明天学习</button>
        <button class="secondary" id="reviewLesson">返回首页</button>
      </div>
    </section>
  `;
  document.querySelector("#continueTomorrow").addEventListener("click", () => {
    state.lessonDay = Math.min(lesson.day + 1, lessons.length);
    state.showCompletion = false;
    save();
    render();
  });
  document.querySelector("#reviewLesson").addEventListener("click", () => {
    state.showCompletion = false;
    render();
  });
}

function completeTask(task) {
  const lesson = getLesson();
  const key = getLessonKey(lesson);
  state.doneTasks[key] = state.doneTasks[key] || {};
  state.doneTasks[key][task] = true;
  state.showCompletion = isLessonComplete(lesson);
  save();
  render();
}

function submitTask(task) {
  const lesson = getLesson();
  const exercise = task === "observe" ? lesson.observationExercise : lesson.practiceExercise;
  const isRecognition = exercise?.type === "recognition";
  const value = isRecognition ? getRecognitionValue(task, exercise) : document.querySelector(`[data-task-input="${task}"]`)?.value.trim() || "";
  if ((Array.isArray(value) && value.length === 0) || (!Array.isArray(value) && !value)) {
    const input = document.querySelector(`[data-task-input="${task}"]`) || document.querySelector(`[data-choice-group="${task}"]`);
    input?.focus?.();
    input?.classList.add("input-error");
    return;
  }
  const key = getLessonKey(lesson);
  state.lessonWork[key] = state.lessonWork[key] || {};
  state.lessonWork[key][task] = value;
  state.lessonWork[key][`${task}Feedback`] = buildExerciseFeedback(exercise, value);
  state.doneTasks[key] = state.doneTasks[key] || {};
  state.doneTasks[key][task] = true;
  state.showCompletion = isLessonComplete(lesson);
  save();
  render();
}

function getRecognitionValue(task, exercise) {
  const checked = Array.from(document.querySelectorAll(`input[name="${task}Choice"]:checked`)).map((input) => input.value);
  return exercise.multiple ? checked : checked[0] || "";
}

function buildExerciseFeedback(exercise, value) {
  if (exercise.type === "recognition") {
    const answer = Array.isArray(value) ? [...value].sort() : [value].filter(Boolean);
    const correct = [...exercise.correct].sort();
    const isCorrect = answer.length === correct.length && answer.every((item, index) => item === correct[index]);
    return {
      correct: isCorrect,
      title: isCorrect ? "答对了" : "再看一眼",
      text: exercise.explanation
    };
  }
  return {
    correct: null,
    title: "参考观察",
    text: "开放观察没有标准答案。你可以把自己的想法和下面这些参考点对照一下。",
    points: exercise.reference || []
  };
}

function saveTakeaway() {
  const input = document.querySelector("#takeawayInput");
  const value = input?.value.trim() || "";
  const lesson = getLesson();
  const key = getLessonKey(lesson);
  state.lessonWork[key] = state.lessonWork[key] || {};
  state.lessonWork[key].takeaway = value;
  save();
  render();
}

function openCardPreview(cardId) {
  const card = cards.find((item) => item.id === cardId);
  if (!card) return;
  const existing = document.querySelector(".card-preview-modal");
  existing?.remove();
  document.body.insertAdjacentHTML("beforeend", `
    <div class="card-preview-modal" role="dialog" aria-modal="true" aria-label="${card.name} 大图">
      <div class="card-preview-panel">
        <button class="icon-button preview-close" data-close-preview aria-label="关闭">×</button>
        <div class="card-preview-image">
          ${card.image?.kind === "rws" ? `<img src="${card.image.src}" alt="${card.name}" />` : symbolicCardHtml(card)}
        </div>
        <h2>${card.name}</h2>
        <p>${cardTypeLabel(card)} · ${suitLabel(card)}</p>
      </div>
    </div>
  `);
  document.querySelector("[data-close-preview]")?.addEventListener("click", closeCardPreview);
  document.querySelector(".card-preview-modal")?.addEventListener("click", (event) => {
    if (event.target.classList.contains("card-preview-modal")) closeCardPreview();
  });
}

function closeCardPreview() {
  document.querySelector(".card-preview-modal")?.remove();
}

function renderDaily() {
  const cached = state.dailyCard?.date === todayKey() ? state.dailyCard.card : null;
  const existing = cached?.id ? cards.find((card) => card.id === cached.id) : null;
  const card = existing || randomCard();
  if (!existing) {
    state.dailyCard = { date: todayKey(), card };
    save();
  }

  app.innerHTML = `
    <section class="draw-area">
      <div class="draw-card">${cardArt(card)}</div>
      <div class="panel">
        <h2>今日牌：${card.name}</h2>
        <p>${card.uprightMeaning}</p>
        <div class="keywords">
          ${card.keywords.map((word) => `<span class="keyword">${word}</span>`).join("")}
        </div>
      </div>
      <button class="primary" id="redraw">重新抽一张</button>
    </section>

    <section class="section lesson-card">
      <h2>今日提醒</h2>
      <p>${dailyAdvice(card)}</p>
    </section>

    <section class="section lesson-card">
      <h2>晚间复盘</h2>
      <p>今天什么时候最能感受到“${card.keywords[0]}”？它提醒你明天可以调整什么？</p>
    </section>
  `;

  document.querySelector("#redraw").addEventListener("click", () => {
    state.dailyCard = { date: todayKey(), card: randomCard() };
    save();
    render();
  });
}

function dailyAdvice(card) {
  const advice = {
    fool: "今天适合给自己一点尝试空间，但不要完全不做准备。",
    magician: "把手上的资源列出来，选择一件最小的事先开始。",
    priestess: "先观察，不急着表态。你的直觉可能已经注意到某个细节。",
    empress: "照顾好身体和情绪，创造力需要被滋养。",
    tower: "如果某件事已经不稳，今天适合承认它，而不是继续硬撑。",
    cups3: "主动和支持你的人连接，轻松交流会带来能量。",
    swords5: "争论前先问自己：我想解决问题，还是只想赢？",
    pentacles8: "重复练习不是无聊，是你正在积累真正的能力。"
  };
  return advice[card.id] || card.growthMeaning;
}

function renderAsk() {
  app.innerHTML = `
    <section class="panel">
      <div class="field">
        <label for="topic">问题类型</label>
        <select id="topic">
          <option>自我成长</option>
          <option>感情关系</option>
          <option>事业工作</option>
          <option>学习考试</option>
          <option>金钱现实</option>
          <option>选择题</option>
        </select>
      </div>
      <div class="field">
        <label for="spread">牌阵</label>
        <select id="spread">
          <option value="one">单张牌：快速建议</option>
          <option value="three">三张牌：现状 / 阻碍 / 建议</option>
        </select>
      </div>
      <div class="field">
        <label for="question">你的问题</label>
        <textarea id="question" placeholder="例如：我接下来如何更好地学习塔罗？"></textarea>
      </div>
      <button class="primary" id="askBtn">抽牌并解读</button>
    </section>
    <div id="askResult"></div>
  `;

  document.querySelector("#askBtn").addEventListener("click", () => {
    const question = document.querySelector("#question").value.trim() || "我现在需要看清什么？";
    const spread = document.querySelector("#spread").value;
    const picked = spread === "one" ? [randomCard()] : [randomCard(), randomCard(), randomCard()];
    const result = buildReading(question, spread, picked);
    state.readings.unshift({ date: todayKey(), question, cards: picked.map((c) => c.name) });
    state.readings = state.readings.slice(0, 10);
    save();
    document.querySelector("#askResult").innerHTML = result;
  });
}

function buildReading(question, spread, picked) {
  const labels = spread === "one" ? ["建议"] : ["现状", "阻碍", "建议"];
  const safeQuestion = escapeHtml(question);
  const cardRows = picked
    .map((card, index) => `
      <div class="card-item">
        ${miniCardHtml(card)}
        <div>
          <h3>${labels[index]}：${card.name}</h3>
          <p>${card.uprightMeaning}</p>
          <div class="keywords">${card.keywords.map((word) => `<span class="keyword">${word}</span>`).join("")}</div>
        </div>
      </div>
    `)
    .join("");

  const core = picked.map((card) => card.growthMeaning).join(" ");

  return `
    <section class="reading-result">
      <h3>整体感觉</h3>
      <p>围绕“${safeQuestion}”，这组牌更像是在提醒你：先看清当下状态，再把注意力放回自己能采取的行动上。</p>
      <h3>抽到的牌</h3>
      <div class="card-list">${cardRows}</div>
      <h3>核心提醒</h3>
      <p>${core}</p>
      <h3>行动建议</h3>
      <ul>
        <li>先写下你最在意的一个点，不要同时处理所有情绪。</li>
        <li>选择一个今天就能完成的小动作，让问题从脑内回到现实。</li>
        <li>如果牌面让你不舒服，把它当作提醒，而不是最终判决。</li>
      </ul>
    </section>
  `;
}

function renderLibrary() {
  const types = ["全部", "大阿尔卡那", "小阿尔卡那"];
  const filtered = cards.filter((card) => {
    const typeOk =
      state.filter === "全部" ||
      (state.filter === "大阿尔卡那" && card.arcana === "major") ||
      (state.filter === "小阿尔卡那" && card.arcana === "minor");
    const text = `${card.name}${card.englishName}${card.keywords.join("")}${suitLabel(card)}`;
    return typeOk && text.toLowerCase().includes(state.query.toLowerCase());
  });

  app.innerHTML = `
    <input class="search" id="search" placeholder="搜索牌名或关键词" value="${escapeHtml(state.query)}" />
    <div class="section chip-row">
      ${types.map((type) => `<button class="chip ${state.filter === type ? "active" : ""}" data-filter="${type}">${type}</button>`).join("")}
    </div>
    <section class="card-list">
      ${filtered.length ? filtered.map(cardListItem).join("") : `<div class="empty">没有找到相关卡牌</div>`}
    </section>
    <div id="cardDetail"></div>
  `;

  document.querySelector("#search").addEventListener("input", (event) => {
    state.query = event.target.value;
    renderLibrary();
  });
  document.querySelectorAll("[data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.filter = btn.dataset.filter;
      renderLibrary();
    });
  });
  document.querySelectorAll("[data-card]").forEach((btn) => {
    btn.addEventListener("click", () => showCardDetail(btn.dataset.card));
  });
}

function cardListItem(card) {
  return `
    <button class="card-item" data-card="${card.id}">
      ${miniCardHtml(card)}
      <div>
        <h3>${card.name}</h3>
        <p>${cardTypeLabel(card)} · ${suitLabel(card)} · ${card.memoryTip}</p>
        <div class="keywords">${card.keywords.map((word) => `<span class="keyword">${word}</span>`).join("")}</div>
      </div>
    </button>
  `;
}

function showCardDetail(id) {
  const card = cards.find((item) => item.id === id);
  document.querySelector("#cardDetail").innerHTML = `
    <section class="section lesson-card">
      <h2>${card.name}</h2>
      <p>${cardTypeLabel(card)} · ${suitLabel(card)}</p>
      <h3>正位</h3>
      <p>${card.uprightMeaning}</p>
      <h3>逆位</h3>
      <p>${card.reversedMeaning}</p>
      <h3>不同场景</h3>
      <ul>
        <li>感情：${card.loveMeaning}</li>
        <li>事业：${card.careerMeaning}</li>
        <li>金钱：${card.moneyMeaning}</li>
        <li>成长：${card.growthMeaning}</li>
      </ul>
    </section>
  `;
  document.querySelector("#cardDetail").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderProfile() {
  const completedDays = Object.values(state.doneTasks).filter((day) => {
    return ["course", "observe", "practice"].every((task) => day[task]);
  }).length;
  const learnedCards = Math.min(state.lessonDay + 1, cards.length);

  app.innerHTML = `
    <section class="grid-2">
      <div class="metric">
        <strong>${state.lessonDay}</strong>
        <span>当前学习天数</span>
      </div>
      <div class="metric">
        <strong>${completedDays}</strong>
        <span>完整打卡天数</span>
      </div>
      <div class="metric">
        <strong>${learnedCards}</strong>
        <span>已接触卡牌</span>
      </div>
      <div class="metric">
        <strong>${state.readings.length}</strong>
        <span>问牌记录</span>
      </div>
    </section>

    <section class="section lesson-card">
      <h2>你的学习阶段</h2>
      <p>你正在完成第一周：认识塔罗。这个阶段的重点不是背牌，而是建立结构感和观察习惯。</p>
    </section>

    <section class="section">
      <div class="section-title">
        <h2>最近问牌</h2>
        <span class="small">最多显示 10 条</span>
      </div>
      <div class="card-list">
        ${
          state.readings.length
            ? state.readings.map((item) => `
              <div class="panel">
                <h3>${item.question}</h3>
                <p>${item.cards.join("、")} · ${item.date}</p>
              </div>
            `).join("")
            : `<div class="empty">还没有问牌记录</div>`
        }
      </div>
    </section>
  `;
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => setView(tab.dataset.view));
});

document.querySelector("#resetBtn").addEventListener("click", () => {
  localStorage.removeItem("tarot.lessonDay");
  localStorage.removeItem("tarot.doneTasks");
  localStorage.removeItem("tarot.lessonWork");
  localStorage.removeItem("tarot.lessonSessions");
  localStorage.removeItem("tarot.dailyCard");
  localStorage.removeItem("tarot.readings");
  state.lessonDay = 1;
  state.doneTasks = {};
  state.lessonWork = {};
  state.lessonSessions = {};
  state.dailyCard = null;
  state.readings = [];
  render();
});

render();

const state = {
  view: "learn",
  lessonDay: Number(localStorage.getItem("tarot.lessonDay") || 1),
  doneTasks: JSON.parse(localStorage.getItem("tarot.doneTasks") || "{}"),
  lessonWork: JSON.parse(localStorage.getItem("tarot.lessonWork") || "{}"),
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
  localStorage.setItem("tarot.dailyCard", JSON.stringify(state.dailyCard));
  localStorage.setItem("tarot.readings", JSON.stringify(state.readings));
}

function cardArt(card, className = "tarot-card") {
  return `
    <div class="${className}" aria-label="${card.name}">
      ${
        card.imageUrl
          ? `<img class="card-image" src="${card.imageUrl}" alt="${card.name}" loading="lazy" />`
          : `
            <div class="card-sky"></div>
            <div class="card-symbol">${card.symbol}</div>
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
      ${card.imageUrl ? `<img src="${card.imageUrl}" alt="${card.name}" loading="lazy" />` : `<span>${card.symbol}</span>`}
    </div>
  `;
}

function practiceCardHtml(card) {
  return `
    <button class="practice-card" data-preview-card="${card.id}" type="button">
      <div class="practice-card-image">
        ${card.imageUrl ? `<img src="${card.imageUrl}" alt="${card.name}" loading="lazy" />` : symbolicCardHtml(card)}
      </div>
      <strong>${card.name}</strong>
      <span>${card.type}</span>
    </button>
  `;
}

function symbolicCardHtml(card) {
  return `
    <div class="symbolic-card">
      <div class="symbolic-sky"></div>
      <div class="symbolic-mark">${card.symbol}</div>
      <div class="symbolic-ground"></div>
      <small>${card.name}</small>
    </div>
  `;
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
    <div class="learning-art lesson-visual day-${lesson.day}" aria-label="Lesson visual">
      ${visuals[lesson.day] || visuals[1]}
      <div class="learning-art-label">Lesson ${lesson.day}</div>
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
    ask: "AI 问牌",
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
  const lesson = getLesson();
  if (state.showCompletion && isLessonComplete(lesson)) {
    renderCompletion(lesson);
    return;
  }
  const done = getLessonDone(lesson);
  const work = getLessonWork(lesson);
  const completed = ["course", "observe", "practice"].filter((task) => done[task]).length;
  const percent = Math.round((completed / 3) * 100);

  app.innerHTML = `
    <section class="hero">
      <div>
        <h2>第 ${lesson.day} 天：${lesson.title}</h2>
        <p>${lesson.goal}</p>
        <div class="button-row">
          <button class="secondary" id="prevDay">上一课</button>
          <button class="secondary" id="nextDay">下一天</button>
        </div>
      </div>
      ${getLessonCover(lesson)}
    </section>

    ${stageMapHtml()}

    <section class="section">
      <div class="section-title">
        <h2>今日进度</h2>
        <span class="small">${completed}/3 · ${lesson.minutes} 分钟</span>
      </div>
      <div class="progress" style="--value:${percent}%"><span></span></div>
    </section>

    <section class="section task-list" aria-label="Lesson tasks">
      ${courseTaskHtml(lesson, done)}
      ${exerciseTaskHtml("observe", "观察练习", lesson.observationExercise, work.observe, done.observe)}
      ${exerciseTaskHtml("practice", "小练习", lesson.practiceExercise, work.practice, done.practice)}
      ${takeawayHtml(work.takeaway)}
    </section>

    ${weekLearningPathHtml()}
  `;

  document.querySelector("#prevDay").addEventListener("click", () => {
    state.lessonDay = Math.max(state.lessonDay - 1, 1);
    state.showCompletion = false;
    save();
    render();
  });
  document.querySelector("#nextDay").addEventListener("click", () => {
    state.lessonDay = Math.min(state.lessonDay + 1, lessons.length);
    state.showCompletion = false;
    save();
    render();
  });
  document.querySelectorAll("[data-lesson]").forEach((el) => {
    el.addEventListener("click", () => {
      state.lessonDay = Number(el.dataset.lesson);
      state.showCompletion = false;
      save();
      render();
    });
  });
  document.querySelector("#completeCourse").addEventListener("click", () => completeTask("course"));
  document.querySelectorAll("[data-submit-task]").forEach((button) => {
    button.addEventListener("click", () => submitTask(button.dataset.submitTask));
  });
  document.querySelector("#saveTakeaway")?.addEventListener("click", saveTakeaway);
  document.querySelectorAll("[data-preview-card]").forEach((button) => {
    button.addEventListener("click", () => openCardPreview(button.dataset.previewCard));
  });
  document.querySelector("[data-close-preview]")?.addEventListener("click", closeCardPreview);
  document.querySelector(".card-preview-modal")?.addEventListener("click", (event) => {
    if (event.target.classList.contains("card-preview-modal")) closeCardPreview();
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
      <div class="week-progress" aria-label="Week progress">
        ${lessons.map((lesson) => {
          const complete = isLessonComplete(lesson);
          const active = lesson.day === state.lessonDay;
          return `
            <button class="progress-node ${active ? "active" : ""} ${complete ? "complete" : ""}" data-lesson="${lesson.day}">
              <span>Day ${lesson.day}</span>
              <strong>${active ? "当前" : complete ? "✓" : "未开始"}</strong>
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
      <summary>Week Learning Path</summary>
      <div class="overview-list">
        ${lessons.map((lesson) => `
          <button class="overview-item ${lesson.day === state.lessonDay ? "active" : ""}" data-lesson="${lesson.day}">
            <span>Day ${lesson.day}</span>
            <strong>${lesson.title}</strong>
            <em>${isLessonComplete(lesson) ? "Completed" : "Open lesson"}</em>
          </button>
        `).join("")}
      </div>
    </details>
  `;
}

function completedLessonCount() {
  return lessons.filter((lesson) => isLessonComplete(lesson)).length;
}

function learningStreak() {
  let count = 0;
  for (const lesson of lessons) {
    if (!isLessonComplete(lesson)) break;
    count += 1;
  }
  return count;
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
    <div class="exercise-cards ${layout}" aria-label="Practice cards">
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
      <h2>恭喜完成 Day ${lesson.day}</h2>
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
          ${card.imageUrl ? `<img src="${card.imageUrl}" alt="${card.name}" />` : symbolicCardHtml(card)}
        </div>
        <h2>${card.name}</h2>
        <p>${card.en} · ${card.type}</p>
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
  const existing = state.dailyCard?.date === todayKey() ? state.dailyCard.card : null;
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
        <p>${card.upright}</p>
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
  return advice[card.id] || card.growth;
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
          <p>${card.upright}</p>
          <div class="keywords">${card.keywords.map((word) => `<span class="keyword">${word}</span>`).join("")}</div>
        </div>
      </div>
    `)
    .join("");

  const core = picked.map((card) => card.growth).join(" ");

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
    const typeOk = state.filter === "全部" || card.type === state.filter;
    const text = `${card.name}${card.en}${card.keywords.join("")}`;
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
        <h3>${card.name} · ${card.en}</h3>
        <p>${card.type} · ${card.tip}</p>
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
      <p>${card.en} · ${card.type}</p>
      <h3>正位</h3>
      <p>${card.upright}</p>
      <h3>逆位</h3>
      <p>${card.reversed}</p>
      <h3>不同场景</h3>
      <ul>
        <li>感情：${card.love}</li>
        <li>事业：${card.career}</li>
        <li>金钱：${card.money}</li>
        <li>成长：${card.growth}</li>
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
  localStorage.removeItem("tarot.dailyCard");
  localStorage.removeItem("tarot.readings");
  state.lessonDay = 1;
  state.doneTasks = {};
  state.lessonWork = {};
  state.dailyCard = null;
  state.readings = [];
  render();
});

render();

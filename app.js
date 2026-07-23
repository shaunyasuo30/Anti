/**
 * TSA Practice Test – App Engine
 * Handles routing, quiz logic, timer, scoring, and localStorage persistence.
 *
 * True/False rules:
 *   - Each T/F question has multiple statements
 *   - Student must mark EACH statement as Đúng or Sai
 *   - ALL statements must be correct to earn the point
 *   - One wrong sub-answer → entire question = 0 points
 */

(function () {
  'use strict';

  // ─── State ────────────────────────────────────────────────────
  const state = {
    currentScreen: 'home',
    currentExam: null,
    currentQuestion: 0,
    answers: {},
    // For true-false: answers[idx] = { 0: true/false, 1: true/false, ... }
    // For multiple-choice: answers[idx] = "a"/"b"/...
    // For fill-in: answers[idx] = "204"
    timerInterval: null,
    timeRemaining: 0,
    quizStarted: false,
    quizSubmitted: false,
  };

  // ─── DOM helpers ──────────────────────────────────────────────
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const screens = {
    home: $('#screen-home'),
    quiz: $('#screen-quiz'),
    result: $('#screen-result'),
  };

  // ─── LocalStorage ─────────────────────────────────────────────
  const STORAGE_KEY = 'tsa_practice_results';

  function safeParseJSON(str) {
    try { return JSON.parse(str); } catch (_) { return null; }
  }

  function loadResults() {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = safeParseJSON(raw);
    return parsed || {};
  }

  function saveResult(examId, result) {
    const all = loadResults();
    if (!all[examId]) all[examId] = [];
    all[examId].push({ ...result, date: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  }

  function getBestScore(examId) {
    const all = loadResults();
    if (!all[examId] || !all[examId].length) return null;
    return all[examId].reduce((best, r) => r.score > best.score ? r : best, all[examId][0]);
  }

  // ─── Router ───────────────────────────────────────────────────
  function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');
    state.currentScreen = name;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ─── Home Screen ──────────────────────────────────────────────
  function renderHome() {
    const list = $('#exam-list');
    list.innerHTML = '';

    EXAMS.forEach(exam => {
      const best = getBestScore(exam.id);
      const card = document.createElement('div');
      card.className = 'exam-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.id = `exam-card-${exam.id}`;

      let historyHtml = '';
      if (best) {
        const pct = Math.round((best.score / best.total) * 100);
        const badge = pct >= 80 ? 'good' : pct >= 50 ? 'mid' : 'low';
        historyHtml = `
          <div class="exam-card__history">
            <span class="exam-card__history-badge exam-card__history-badge--${badge}">
              ✦ Điểm cao nhất: ${best.score}/${best.total} (${pct}%)
            </span>
          </div>`;
      }

      card.innerHTML = `
        <div class="exam-card__header">
          <div class="exam-card__info">
            <div class="exam-card__badge">${exam.source}</div>
            <div class="exam-card__title">${exam.title}</div>
            <div class="exam-card__subtitle">${exam.subtitle}</div>
          </div>
          <div class="exam-card__arrow">→</div>
        </div>
        <div class="exam-card__meta">
          <div class="exam-card__meta-item"><span class="icon">📝</span> ${exam.questions.length} câu hỏi</div>
          <div class="exam-card__meta-item"><span class="icon">⏱️</span> ${exam.timeLimit} phút</div>
          <div class="exam-card__meta-item"><span class="icon">⭐</span> ${exam.totalMarks} điểm</div>
        </div>
        ${historyHtml}`;

      card.addEventListener('click', () => startQuiz(exam));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); startQuiz(exam); }
      });
      list.appendChild(card);
    });

    showScreen('home');
  }

  // ─── Quiz ─────────────────────────────────────────────────────
  function startQuiz(exam) {
    state.currentExam = exam;
    state.currentQuestion = 0;
    state.answers = {};
    state.quizSubmitted = false;
    state.quizStarted = true;
    state.timeRemaining = exam.timeLimit * 60;

    renderQuiz();
    startTimer();
    showScreen('quiz');
  }

  function renderQuiz() {
    const exam = state.currentExam;
    const qIdx = state.currentQuestion;
    const q = exam.questions[qIdx];

    // Header
    $('#quiz-progress-text').innerHTML = `Câu <span>${qIdx + 1}</span> / ${exam.questions.length}`;
    $('#quiz-progress-bar').style.width = `${((qIdx + 1) / exam.questions.length) * 100}%`;

    renderNavDots();
    renderPassage(exam);
    renderQuestion(q, qIdx);
    renderQuizActions(qIdx, exam.questions.length);
  }

  // ─── Passage ──────────────────────────────────────────────────
  function renderPassage(exam) {
    let html = '';
    exam.passage.split('\n').forEach(p => { if (p.trim()) html += `<p>${p.trim()}</p>`; });

    if (exam.table) {
      html += '<table class="data-table"><thead><tr>';
      exam.table.headers.forEach(h => html += `<th>${h}</th>`);
      html += '</tr></thead><tbody>';
      exam.table.rows.forEach(row => {
        html += '<tr>';
        row.forEach(cell => html += `<td>${cell}</td>`);
        html += '</tr>';
      });
      html += '</tbody></table>';
    }
    if (exam.passageAfterTable) html += `<p>${exam.passageAfterTable}</p>`;
    $('#passage-text').innerHTML = html;
  }

  // ─── Question Rendering ───────────────────────────────────────
  function renderQuestion(q, idx) {
    const container = $('#question-container');
    const typeLabels = {
      'true-false':      { text: 'Đúng / Sai', cls: 'tf' },
      'multiple-choice': { text: 'Trắc nghiệm', cls: 'mc' },
      'fill-in':         { text: 'Điền đáp án', cls: 'fill' },
    };
    const typeInfo = typeLabels[q.type] || typeLabels['multiple-choice'];

    let bodyHtml = '';

    // ── TRUE-FALSE: multiple statements ──
    if (q.type === 'true-false') {
      bodyHtml = renderTrueFalse(q, idx);
    }
    // ── FILL-IN ──
    else if (q.type === 'fill-in') {
      const val = state.answers[idx] || '';
      const submitted = state.quizSubmitted;
      let inputCls = '';
      if (submitted) inputCls = val.trim() === q.correctAnswer ? 'correct' : 'incorrect';

      bodyHtml = `
        <div class="fill-input-wrapper">
          <input type="text" class="fill-input ${inputCls}" id="fill-input-${idx}"
                 placeholder="Nhập đáp án của bạn..."
                 value="${val}" ${submitted ? 'disabled' : ''} autocomplete="off" />
        </div>`;
    }
    // ── MULTIPLE CHOICE ──
    else {
      bodyHtml = '<div class="options-list">';
      q.options.forEach(opt => {
        let cls = 'option-item';
        if (state.answers[idx] === opt.value) cls += ' selected';
        if (state.quizSubmitted) {
          cls += ' disabled';
          if (opt.value === q.correctAnswer) cls += ' correct';
          else if (state.answers[idx] === opt.value && opt.value !== q.correctAnswer) cls += ' incorrect';
        }
        bodyHtml += `
          <div class="${cls}" data-value="${opt.value}" role="button" tabindex="0">
            <div class="option-marker">${opt.value}</div>
            <div class="option-label">${opt.label}</div>
          </div>`;
      });
      bodyHtml += '</div>';
    }

    // Explanation
    let explanationHtml = '';
    if (state.quizSubmitted && q.explanation) {
      explanationHtml = `
        <div class="explanation-box">
          <div class="explanation-box__title">💡 Giải thích</div>
          ${q.explanation}
        </div>`;
    }

    container.innerHTML = `
      <div class="question-card" id="question-${idx}">
        <div>
          <span class="question-card__number">${idx + 1}</span>
          <span class="question-card__type question-card__type--${typeInfo.cls}">${typeInfo.text}</span>
        </div>
        <div class="question-card__text">${q.text}</div>
        ${bodyHtml}
        ${explanationHtml}
      </div>`;

    // Attach events
    if (!state.quizSubmitted) {
      if (q.type === 'fill-in') {
        const inp = $(`#fill-input-${idx}`);
        inp.addEventListener('input', e => { state.answers[idx] = e.target.value; renderNavDots(); });
        setTimeout(() => inp.focus(), 100);
      } else if (q.type === 'multiple-choice') {
        container.querySelectorAll('.option-item').forEach(el => {
          el.addEventListener('click', () => selectOption(idx, el.dataset.value));
          el.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectOption(idx, el.dataset.value); }
          });
        });
      }
      // True-false toggle buttons
      if (q.type === 'true-false') {
        container.querySelectorAll('.tf-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            if (state.quizSubmitted) return;
            const sIdx = parseInt(btn.dataset.s, 10);
            const val = btn.dataset.val === 'true';

            if (!state.answers[idx]) state.answers[idx] = {};
            state.answers[idx][sIdx] = val;

            const row = document.getElementById(`tf-stmt-${idx}-${sIdx}`);
            if (row) {
              row.querySelectorAll('.tf-btn').forEach(b => {
                if (b.dataset.val === (val ? 'true' : 'false')) {
                  b.classList.add('tf-btn--selected');
                } else {
                  b.classList.remove('tf-btn--selected');
                }
              });
            }

            renderNavDots();
          });
        });
      }
    }
  }

  // ─── True/False: Multi-statement with toggle buttons ─────────
  function renderTrueFalse(q, qIdx) {
    const userAnswers = state.answers[qIdx] || {}; // { 0: true, 1: false, ... }

    let html = '<div class="tf-statements">';

    q.statements.forEach((stmt, sIdx) => {
      const userVal = userAnswers[sIdx]; // true, false, or undefined
      const submitted = state.quizSubmitted;
      const correctVal = stmt.answer;

      // Determine state of each toggle
      let trueClass = 'tf-btn';
      let falseClass = 'tf-btn';

      if (userVal === true) trueClass += ' tf-btn--selected';
      else if (userVal === false) falseClass += ' tf-btn--selected';

      if (submitted) {
        trueClass += ' tf-btn--disabled';
        falseClass += ' tf-btn--disabled';

        // Highlight correct answer
        if (correctVal === true) trueClass += ' tf-btn--correct';
        else falseClass += ' tf-btn--correct';

        // Highlight wrong user answer
        if (userVal !== undefined && userVal !== correctVal) {
          if (userVal === true) trueClass += ' tf-btn--incorrect';
          else falseClass += ' tf-btn--incorrect';
        }
      }

      html += `
        <div class="tf-statement" id="tf-stmt-${qIdx}-${sIdx}">
          <div class="tf-statement__text">${stmt.text}</div>
          <div class="tf-statement__buttons">
            <button class="${trueClass}" data-q="${qIdx}" data-s="${sIdx}" data-val="true">Đúng</button>
            <button class="${falseClass}" data-q="${qIdx}" data-s="${sIdx}" data-val="false">Sai</button>
          </div>
        </div>`;
    });

    html += '</div>';

    // Add warning note about scoring ONLY if there are multiple statements
    if (q.statements.length > 1) {
      html += `<div class="tf-note">⚠️ Phải trả lời đúng <strong>tất cả</strong> các phát biểu mới được điểm.</div>`;
    }

    return html;
  }

  function selectOption(qIdx, value) {
    if (state.quizSubmitted) return;
    state.answers[qIdx] = value;
    
    // Update DOM directly instead of full re-render
    const options = document.querySelectorAll(`#question-${qIdx} .option-item`);
    options.forEach(opt => {
      if (opt.dataset.value === value) {
        opt.classList.add('selected');
      } else {
        opt.classList.remove('selected');
      }
    });
    
    renderNavDots();
  }

  // ─── Check if a question is answered ──────────────────────────
  function isAnswered(q, idx) {
    const ans = state.answers[idx];
    if (ans === undefined || ans === '') return false;

    if (q.type === 'true-false') {
      // Must have answered ALL statements
      if (typeof ans !== 'object') return false;
      return q.statements.every((_, sIdx) => ans[sIdx] !== undefined);
    }

    return true;
  }

  // ─── Check answer correctness ─────────────────────────────────
  function checkAnswer(q, userAnswer) {
    if (userAnswer === undefined || userAnswer === '') return false;

    if (q.type === 'true-false') {
      if (typeof userAnswer !== 'object') return false;
      // ALL statements must be answered correctly
      return q.statements.every((stmt, sIdx) => userAnswer[sIdx] === stmt.answer);
    }

    if (q.type === 'fill-in') {
      return String(userAnswer).trim() === String(q.correctAnswer).trim();
    }

    // multiple-choice
    return String(userAnswer).trim() === String(q.correctAnswer).trim();
  }

  // ─── Nav Dots ─────────────────────────────────────────────────
  function renderNavDots() {
    const nav = $('#question-nav');
    nav.innerHTML = '';
    const exam = state.currentExam;

    exam.questions.forEach((q, i) => {
      const dot = document.createElement('button');
      dot.className = 'question-nav__dot';
      dot.textContent = i + 1;
      dot.id = `nav-dot-${i}`;

      if (i === state.currentQuestion) dot.classList.add('active');
      if (isAnswered(q, i)) dot.classList.add('answered');

      if (state.quizSubmitted) {
        dot.classList.remove('answered');
        dot.classList.add(checkAnswer(q, state.answers[i]) ? 'correct-dot' : 'incorrect-dot');
      }

      dot.addEventListener('click', () => goToQuestion(i));
      nav.appendChild(dot);
    });
  }

  // ─── Quiz Actions ─────────────────────────────────────────────
  function renderQuizActions(qIdx, total) {
    const actions = $('#quiz-actions');
    const isFirst = qIdx === 0;
    const isLast = qIdx === total - 1;

    let html = `<button class="btn btn--secondary" ${isFirst ? 'disabled' : ''} id="btn-prev">← Câu trước</button>`;

    if (state.quizSubmitted) {
      html += `<button class="btn btn--primary" id="btn-view-result">📊 Xem kết quả</button>`;
    } else if (isLast) {
      html += `<button class="btn btn--success" id="btn-submit">✓ Nộp bài</button>`;
    } else {
      html += `<button class="btn btn--primary" id="btn-next">Câu sau →</button>`;
    }

    actions.innerHTML = html;

    const prevBtn = $('#btn-prev');
    const nextBtn = $('#btn-next');
    const submitBtn = $('#btn-submit');
    const resultBtn = $('#btn-view-result');

    if (prevBtn && !prevBtn.disabled) prevBtn.addEventListener('click', () => goToQuestion(qIdx - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToQuestion(qIdx + 1));
    if (submitBtn) submitBtn.addEventListener('click', showSubmitConfirm);
    if (resultBtn) resultBtn.addEventListener('click', showResult);
  }

  function goToQuestion(idx) {
    if (idx < 0 || idx >= state.currentExam.questions.length) return;
    state.currentQuestion = idx;
    renderQuiz();
  }

  // ─── Timer ────────────────────────────────────────────────────
  function startTimer() {
    clearInterval(state.timerInterval);
    updateTimerDisplay();
    state.timerInterval = setInterval(() => {
      state.timeRemaining--;
      updateTimerDisplay();
      if (state.timeRemaining <= 0) { clearInterval(state.timerInterval); submitQuiz(); }
    }, 1000);
  }

  function updateTimerDisplay() {
    const el = $('#quiz-timer');
    const mins = Math.floor(state.timeRemaining / 60);
    const secs = state.timeRemaining % 60;
    el.querySelector('.timer-value').textContent =
      `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    el.classList.remove('warning', 'danger');
    if (state.timeRemaining <= 60) el.classList.add('danger');
    else if (state.timeRemaining <= 180) el.classList.add('warning');
  }

  function stopTimer() { clearInterval(state.timerInterval); }

  // ─── Submit ───────────────────────────────────────────────────
  function showSubmitConfirm() {
    const exam = state.currentExam;
    const answered = exam.questions.filter((q, i) => isAnswered(q, i)).length;
    const total = exam.questions.length;
    const unanswered = total - answered;

    const modal = $('#submit-modal');
    $('#modal-text').textContent = unanswered > 0
      ? `Bạn đã trả lời ${answered}/${total} câu. Còn ${unanswered} câu. Bạn có chắc muốn nộp bài?`
      : `Bạn đã trả lời tất cả ${total} câu. Nộp bài ngay?`;

    modal.classList.add('active');
    $('#modal-cancel').onclick = () => modal.classList.remove('active');
    $('#modal-confirm').onclick = () => { modal.classList.remove('active'); submitQuiz(); };
  }

  function submitQuiz() {
    state.quizSubmitted = true;
    stopTimer();
    renderQuiz();
    saveResult(state.currentExam.id, computeScore());
  }

  function computeScore() {
    const exam = state.currentExam;
    let correct = 0, incorrect = 0, skipped = 0;

    exam.questions.forEach((q, i) => {
      if (!isAnswered(q, i)) skipped++;
      else if (checkAnswer(q, state.answers[i])) correct++;
      else incorrect++;
    });

    return {
      score: correct,
      total: exam.questions.length,
      correct, incorrect, skipped,
      timeUsed: (exam.timeLimit * 60) - state.timeRemaining,
    };
  }

  // ─── Result Screen ───────────────────────────────────────────
  function showResult() {
    const result = computeScore();
    const pct = Math.round((result.score / result.total) * 100);

    // Ring animation
    const circumference = 2 * Math.PI * 70;
    const offset = circumference - (pct / 100) * circumference;
    const ring = $('#ring-fill');

    ring.classList.remove('green', 'amber', 'red');
    ring.classList.add(pct >= 70 ? 'green' : pct >= 40 ? 'amber' : 'red');
    ring.style.strokeDasharray = circumference;
    ring.style.strokeDashoffset = circumference;
    setTimeout(() => { ring.style.strokeDashoffset = offset; }, 200);

    // Text
    $('#result-score-num').textContent = result.score;
    $('#result-score-total').textContent = `trên ${result.total} câu`;

    const messages = [
      [100, '🎉 Xuất sắc!', 'Bạn đã trả lời đúng tất cả các câu hỏi!'],
      [80, '🌟 Rất tốt!', 'Kết quả ấn tượng, hãy tiếp tục phát huy!'],
      [60, '👍 Khá tốt!', 'Còn vài chỗ cần cải thiện.'],
      [40, '💪 Cố gắng thêm!', 'Hãy xem lại giải thích và thử lại.'],
      [0, '📚 Cần ôn tập!', 'Đọc lại bài và thử lại nhé!'],
    ];
    const [, msg, sub] = messages.find(([threshold]) => pct >= threshold);
    $('#result-message').textContent = msg;
    $('#result-sub').textContent = sub;

    // Stats
    $('#stat-correct').textContent = result.correct;
    $('#stat-incorrect').textContent = result.incorrect;
    const m = Math.floor(result.timeUsed / 60);
    const s = result.timeUsed % 60;
    $('#stat-time').textContent = `${m}:${String(s).padStart(2, '0')}`;

    // Review
    renderReview();

    showScreen('result');
  }

  function renderReview() {
    const container = $('#review-list');
    container.innerHTML = '';
    const exam = state.currentExam;

    exam.questions.forEach((q, i) => {
      const userAns = state.answers[i];
      const correct = checkAnswer(q, userAns);
      const answered = isAnswered(q, i);

      const icon = !answered ? '⊘' : correct ? '✓' : '✗';
      const statusCls = !answered ? 'skipped' : correct ? 'correct' : 'incorrect';

      let answersHtml = '';

      if (q.type === 'true-false') {
        answersHtml = renderTrueFalseReview(q, userAns, answered);
      } else if (q.type === 'fill-in') {
        const display = !answered ? 'Chưa trả lời' : userAns;
        if (correct) {
          answersHtml = `<div class="review-item__answer">
            <span class="review-item__answer-label review-item__answer-label--match">✓ Đáp án:</span>
            <span>${q.correctAnswer}</span></div>`;
        } else {
          answersHtml = `
            <div class="review-item__answer">
              <span class="review-item__answer-label review-item__answer-label--user">✗ Bạn nhập:</span>
              <span>${display}</span></div>
            <div class="review-item__answer">
              <span class="review-item__answer-label review-item__answer-label--correct">✓ Đáp án đúng:</span>
              <span>${q.correctAnswer}</span></div>`;
        }
      } else {
        // Multiple choice
        const userOpt = q.options.find(o => o.value === userAns);
        const correctOpt = q.options.find(o => o.value === q.correctAnswer);
        const userDisplay = !answered ? 'Chưa trả lời' : `${String(userAns).toUpperCase()}. ${userOpt?.label || ''}`;
        const correctDisplay = `${q.correctAnswer.toUpperCase()}. ${correctOpt?.label || ''}`;

        if (correct) {
          answersHtml = `<div class="review-item__answer">
            <span class="review-item__answer-label review-item__answer-label--match">✓ Đáp án:</span>
            <span>${correctDisplay}</span></div>`;
        } else {
          answersHtml = `
            <div class="review-item__answer">
              <span class="review-item__answer-label review-item__answer-label--user">✗ Bạn chọn:</span>
              <span>${userDisplay}</span></div>
            <div class="review-item__answer">
              <span class="review-item__answer-label review-item__answer-label--correct">✓ Đáp án đúng:</span>
              <span>${correctDisplay}</span></div>`;
        }
      }

      const item = document.createElement('div');
      item.className = 'review-item';
      item.innerHTML = `
        <div class="review-item__header">
          <div class="review-item__status review-item__status--${statusCls}">${icon}</div>
          <div class="review-item__q-num">Câu ${i + 1}</div>
        </div>
        <div class="review-item__text">${q.text}</div>
        <div class="review-item__answers">${answersHtml}</div>
        ${q.explanation ? `<div class="explanation-box" style="margin-top:12px">
          <div class="explanation-box__title">💡 Giải thích</div>${q.explanation}</div>` : ''}`;

      container.appendChild(item);
    });
  }

  function renderTrueFalseReview(q, userAns, answered) {
    let html = '<div class="tf-review-list">';

    q.statements.forEach((stmt, sIdx) => {
      const correctVal = stmt.answer;
      const userVal = answered && userAns ? userAns[sIdx] : undefined;
      const isRight = userVal === correctVal;

      const correctLabel = correctVal ? 'Đúng' : 'Sai';
      const userLabel = userVal === undefined ? 'Chưa trả lời' : (userVal ? 'Đúng' : 'Sai');

      html += `
        <div class="tf-review-item ${isRight ? 'tf-review-item--correct' : 'tf-review-item--incorrect'}">
          <div class="tf-review-item__text">${stmt.text}</div>
          <div class="tf-review-item__result">
            <span class="tf-review-tag ${isRight ? 'tf-review-tag--correct' : 'tf-review-tag--incorrect'}">
              ${isRight ? '✓' : '✗'} Bạn: ${userLabel}
            </span>
            ${!isRight ? `<span class="tf-review-tag tf-review-tag--answer">→ Đáp án: ${correctLabel}</span>` : ''}
          </div>
        </div>`;
    });

    html += '</div>';
    return html;
  }

function createFallingPetals() {
  const container = document.querySelector('.flower-bg');
  if (!container) return;
  const spawn = () => {
    const petal = document.createElement('div');
    petal.className = 'petal';
    // Random size (16px to 38px)
    const size = Math.random() * 22 + 16;
    petal.style.width = `${size}px`;
    petal.style.height = `${size * 1.25}px`;
    petal.style.left = `${Math.random() * 100}%`;
    // Duration between 4.5s and 9s
    const dur = Math.random() * 4.5 + 4.5;
    petal.style.animation = `fallPetal ${dur}s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite`;
    container.appendChild(petal);
    setTimeout(() => petal.remove(), dur * 1000);
  };
  // Initial burst
  for (let i = 0; i < 60; i++) spawn();
  // Continuous spawn for dense falling petals
  setInterval(spawn, 250);
}

  // ─── Passage Toggle ───────────────────────────────────────────
  function bindPassageToggle() {
    const toggle = $('#passage-toggle');
    const card = $('#passage-card');
    if (toggle && card && !toggle._bound) {
      toggle._bound = true;
      toggle.addEventListener('click', () => card.classList.toggle('expanded'));
    }
  }

  // ─── Global Navigation ────────────────────────────────────────
  function initGlobalNav() {
    document.addEventListener('click', e => {
      // Back button
      if (e.target.closest('#btn-back-home')) {
        if (state.quizStarted && !state.quizSubmitted) {
          const modal = $('#submit-modal');
          $('#modal-text').textContent = 'Bạn có chắc muốn thoát? Tiến trình làm bài sẽ bị mất.';
          modal.classList.add('active');
          const confirmBtn = $('#modal-confirm');
          confirmBtn.textContent = 'Thoát';
          $('#modal-cancel').onclick = () => { modal.classList.remove('active'); confirmBtn.textContent = 'Nộp bài'; };
          confirmBtn.onclick = () => { modal.classList.remove('active'); confirmBtn.textContent = 'Nộp bài'; stopTimer(); renderHome(); };
        } else {
          stopTimer();
          renderHome();
        }
      }
      if (e.target.closest('#btn-retry')) startQuiz(state.currentExam);
      if (e.target.closest('#btn-go-home')) { stopTimer(); renderHome(); }
    });
  }

  // ─── Keyboard shortcuts ───────────────────────────────────────
  function initKeyboard() {
    document.addEventListener('keydown', e => {
      if (state.currentScreen !== 'quiz' || state.quizSubmitted) return;
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      const q = state.currentExam.questions[state.currentQuestion];

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); goToQuestion(state.currentQuestion + 1); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); goToQuestion(state.currentQuestion - 1); }

      if (q.type === 'multiple-choice' && ['a','b','c','d'].includes(e.key.toLowerCase())) {
        const opt = q.options.find(o => o.value === e.key.toLowerCase());
        if (opt) selectOption(state.currentQuestion, opt.value);
      }
    });
  }

  // ─── Init ─────────────────────────────────────────────────────
  function init() {
    renderHome();
    initGlobalNav();
    initKeyboard();
    createFallingPetals();

    // Watch for passage toggle
    const obs = new MutationObserver(bindPassageToggle);
    obs.observe(document.body, { childList: true, subtree: true });
    bindPassageToggle();
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();
})();

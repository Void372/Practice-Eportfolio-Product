/* app.js - builds every page from the data in data.js.
   There is no server and nothing is stored: all scores disappear when the page closes. */

// ---------- small helpers ----------
function esc(text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
// Wraps the command term inside a sentence in <mark> so students learn to spot it.
function highlight(text, termName) {
  const re = new RegExp('\\b(' + termName + ')\\b', 'i');
  return esc(text).replace(re, '<mark class="term">$1</mark>');
}
function shuffle(list) {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function findTerm(id) { return TERMS.find(t => t.id === id); }
function nextOf(id) { const i = TERMS.findIndex(t => t.id === id); return TERMS[(i + 1) % TERMS.length]; }
function prevOf(id) { const i = TERMS.findIndex(t => t.id === id); return TERMS[(i - 1 + TERMS.length) % TERMS.length]; }

const ICONS = {
  logo: '<svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h7a3 3 0 0 1 3 3v11a2 2 0 0 0-2-2H4z"/><path d="M20 5h-3a3 3 0 0 0-3 3"/><path d="M20 5v12h-4"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h7a3 3 0 0 1 3 3v11a2 2 0 0 0-2-2H4z"/><path d="M20 5h-6"/><path d="M20 5v12h-6"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="#136f3e" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l4 4 10-10"/></svg>',
  warn: '<svg viewBox="0 0 24 24" fill="none" stroke="#8a4b00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l10 18H2z"/><path d="M12 10v5"/><path d="M12 18v.5"/></svg>',
  question: '<svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7"/><path d="M12 17v.5"/></svg>',
  page: '<svg viewBox="0 0 24 24" fill="none" stroke="#136f3e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h9l4 4v14H6z"/><path d="M9 12h7M9 16h7M9 8h3"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="#8a4b00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>'
};

// ---------- navigation bar and footer (the same on every page) ----------
function buildChrome() {
  const page = document.body.dataset.page;
  const links = [
    ['index.html', 'Home', 'home'],
    ['practice.html', 'Practise', 'practice'],
    ['how-to-use.html', 'How to use', 'how']
  ];
  const nav = links.map(l => '<a href="' + l[0] + '"' + (l[2] === page ? ' aria-current="page"' : '') + '>' + l[1] + '</a>').join('');
  document.getElementById('site-header').innerHTML =
    '<nav class="nav" aria-label="Main"><a class="logo" href="index.html">' + ICONS.logo + 'MYP Command Terms</a><div class="nav-links">' + nav + '</div></nav>';
  document.getElementById('site-footer').innerHTML =
    'A free resource for MYP 2 Integrated Humanities students. No login needed and nothing you do here is saved.';
}

// ---------- homepage ----------
function buildHome() {
  document.getElementById('grid').innerHTML = TERMS.map(t =>
    '<li><a class="term-card" href="term.html?t=' + t.id + '"><span class="name">' + esc(t.name) + '</span><span class="plain">' + esc(t.plain) + '</span></a></li>'
  ).join('');
}

// ---------- term page ----------
function card(cls, id, icon, title, body) {
  return '<section class="card ' + cls + '" id="' + id + '" aria-labelledby="' + id + '-h"><h2 id="' + id + '-h">' + icon + title + '</h2>' + body + '</section>';
}
function buildTerm() {
  const id = new URLSearchParams(location.search).get('t');
  const t = findTerm(id);
  const root = document.getElementById('term-root');
  if (!t) {
    root.innerHTML = '<div class="card blue"><h2>Term not found</h2><p>Go back to the <a href="index.html">homepage</a> and pick a command term from the grid.</p></div>';
    return;
  }
  document.title = t.name + ' - MYP Command Terms';
  const prev = prevOf(t.id), next = nextOf(t.id);
  const model = t.model.map(m => '<div class="model-row"><p class="seg">' + esc(m.t) + '</p><p class="tag">' + esc(m.tag) + '</p></div>').join('');
  root.innerHTML =
    '<p class="crumbs"><a href="index.html">All terms</a> &rsaquo; ' + esc(t.name) + '</p>' +
    '<header class="term-header"><p class="label">Command term</p><h1>' + esc(t.name) + '</h1><p class="plainline">' + esc(t.plain) + '</p></header>' +
    '<nav class="jumpbar" aria-label="Jump to a section"><a class="btn secondary" href="#learn">Learn</a><a class="btn secondary" href="#example">Example</a><a class="btn secondary" href="#practise">Practise</a></nav>' +
    card('blue', 'learn', ICONS.book, 'Definition', '<p>' + esc(t.definition) + '</p>') +
    card('green', 'does', ICONS.check, 'What you need to do', '<ol>' + t.does.map(d => '<li>' + esc(d) + '</li>').join('') + '</ol>') +
    card('amber', 'mistake', ICONS.warn, 'Common mistake',
      '<p>' + esc(t.mistake) + '</p><p class="confused"><strong>Often confused with ' + esc(t.confused.term) + '.</strong> ' + esc(t.confused.diff) + '</p>') +
    card('blue', 'example', ICONS.question, 'Example question', '<p class="exq">' + highlight(t.example, t.name) + '</p>') +
    card('green', 'model', ICONS.page, 'Model answer (annotated)', '<p>Each part of the answer is matched to what the command term needs.</p>' + model) +
    card('amber', 'practise', ICONS.target, 'Practise: ' + esc(t.name), '<div id="quiz"></div>') +
    '<div class="pager"><a class="btn secondary" href="term.html?t=' + prev.id + '">&larr; ' + esc(prev.name) + '</a><a class="btn secondary" href="index.html">Back to all terms</a><a class="btn secondary" href="term.html?t=' + next.id + '">' + esc(next.name) + ' &rarr;</a></div>';
  const quiz = new Quiz(document.getElementById('quiz'), t.quiz.map(q => Object.assign({ term: t.name }, q)), {
    finishHtml: '<a class="btn" href="term.html?t=' + next.id + '">Next term: ' + esc(next.name) + '</a>'
  });
  quiz.start();
}

// ---------- quiz (used for the term quizzes and for the mixed practice page) ----------
function Quiz(container, questions, options) {
  this.container = container;
  this.questions = questions;
  this.options = options || {};
  this.i = 0;
  this.score = 0;
}
Quiz.prototype.start = function () {
  this.i = 0;
  this.score = 0;
  this.order = shuffle(this.questions);
  this.showQuestion();
};
Quiz.prototype.showQuestion = function () {
  const self = this;
  const q = this.order[this.i];
  // options are shuffled every time so the right answer is not always in the same place
  const opts = shuffle(q.opts.map((text, idx) => ({ text: text, right: idx === q.a })));
  const letters = ['A', 'B', 'C', 'D'];
  const weak = q.weak ? '<blockquote class="weak"><span class="weak-label">Weak answer</span>' + esc(q.weak) + '</blockquote>' : '';
  this.container.innerHTML =
    '<div class="quiz-meta"><span>Question ' + (this.i + 1) + ' of ' + this.order.length + '</span>' +
    (this.options.showTerm ? '<span class="chip">' + esc(q.term) + '</span>' : '') + '</div>' +
    '<p class="quiz-q">' + highlight(q.q, q.term) + '</p>' + weak +
    '<div class="options" role="group" aria-label="Answer choices">' +
    opts.map((o, n) => '<button type="button" class="opt" data-n="' + n + '"><span class="letter">' + letters[n] + '</span><span class="text">' + esc(o.text) + '</span></button>').join('') +
    '</div><div id="fb" role="status" aria-live="polite"></div><div class="actions" id="act"></div>';
  const buttons = this.container.querySelectorAll('.opt');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const chosen = opts[Number(btn.dataset.n)];
      buttons.forEach(function (b, n) {
        b.disabled = true;
        const verdict = document.createElement('span');
        verdict.className = 'verdict';
        if (opts[n].right) { b.classList.add('correct'); verdict.textContent = '\u2713 Correct answer'; b.querySelector('.text').prepend(verdict); }
        else if (b === btn) { b.classList.add('wrong'); verdict.textContent = '\u2717 Not quite'; b.querySelector('.text').prepend(verdict); }
      });
      if (chosen.right) self.score++;
      document.getElementById('fb').innerHTML =
        '<div class="feedback ' + (chosen.right ? 'good' : 'bad') + '"><strong>' + (chosen.right ? '\u2713 Correct' : '\u2717 Not quite') + '</strong>' + esc(q.why) + '</div>';
      const last = self.i === self.order.length - 1;
      const next = document.createElement('button');
      next.type = 'button';
      next.className = 'btn';
      next.textContent = last ? 'See my score' : 'Next question';
      next.addEventListener('click', function () { if (last) self.showScore(); else { self.i++; self.showQuestion(); } });
      document.getElementById('act').appendChild(next);
      next.focus();
    });
  });
};
Quiz.prototype.showScore = function () {
  const self = this;
  const n = this.order.length;
  let msg = 'Good start. Read the term again and try the quiz one more time.';
  if (this.score === n) msg = 'Excellent! You are ready to use this command term.';
  else if (this.score >= n - 1) msg = 'Nearly there. Check the question you missed and try again.';
  this.container.innerHTML =
    '<p class="quiz-meta">Your score</p><p class="score-big">' + this.score + ' / ' + n + '</p><p>' + msg + '</p>' +
    '<div class="actions"><button type="button" class="btn secondary" id="again">Try again</button>' + (this.options.finishHtml || '') + '</div>';
  document.getElementById('again').addEventListener('click', function () { self.start(); });
};

// ---------- mixed practice page ----------
function buildPractice() {
  const select = document.getElementById('scope');
  select.innerHTML = '<option value="all">All command terms</option>' + TERMS.map(t => '<option value="' + t.id + '">' + esc(t.name) + '</option>').join('');
  const box = document.getElementById('practice-quiz');
  function begin() {
    let pool = [];
    TERMS.forEach(function (t) {
      if (select.value === 'all' || select.value === t.id) t.quiz.forEach(q => pool.push(Object.assign({ term: t.name }, q)));
    });
    // 8 random questions from all terms, or every question for one term
    pool = select.value === 'all' ? shuffle(pool).slice(0, 8) : pool;
    new Quiz(box, pool, { showTerm: true, finishHtml: '<a class="btn secondary" href="index.html">Back to all terms</a>' }).start();
  }
  document.getElementById('begin').addEventListener('click', begin);
  begin();
}

// ---------- start the right builder for this page ----------
document.addEventListener('DOMContentLoaded', function () {
  buildChrome();
  const page = document.body.dataset.page;
  if (page === 'home') buildHome();
  if (page === 'term') buildTerm();
  if (page === 'practice') buildPractice();
});

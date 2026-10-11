// Run with:  node tests/check_content.js
// Checks data.js against the content specifications (Spec 1 and Spec 2).
const fs = require('fs'), path = require('path');
eval(fs.readFileSync(path.join(__dirname, '..', 'data.js'), 'utf8') + ';global.TERMS = TERMS;');
const words = s => s.trim().split(/\s+/).length;
let problems = [], total = 0, apply = 0, maxWords = 0, maxWhere = '';
TERMS.forEach(t => {
  ['id','name','plain','definition','does','mistake','confused','example','model','quiz'].forEach(k => { if (!t[k]) problems.push(t.id + ' missing ' + k); });
  if (words(t.plain) > 20) problems.push(t.id + ': plain words over 20');
  if (t.does.length > 3) problems.push(t.id + ': more than 3 "what to do" points');
  const blocks = [t.definition, t.mistake, t.confused.diff, t.example, ...t.does, ...t.model.map(m => m.t), ...t.quiz.map(q => q.q), ...t.quiz.map(q => q.why), ...t.quiz.flatMap(q => q.opts)];
  blocks.forEach(b => { if (words(b) > maxWords) { maxWords = words(b); maxWhere = t.id; } if (words(b) > 60) problems.push(t.id + ': block over 60 words'); });
  if (t.quiz.length < 3) problems.push(t.id + ': fewer than 3 questions');
  if (!t.quiz.some(q => q.fresh)) problems.push(t.id + ': no unfamiliar-context question');
  if (!t.quiz.some(q => q.type === 'spot')) problems.push(t.id + ': no spot-the-mistake question');
  t.quiz.forEach(q => { total++; if (q.kind === 'apply') apply++; });
});
console.log('Terms:', TERMS.length);
console.log('Questions:', total, '| application questions:', apply, '(' + Math.round(100 * apply / total) + '%)');
console.log('Longest text block (words):', maxWords, 'in', maxWhere);
console.log(problems.length ? 'PROBLEMS:\n' + problems.join('\n') : 'All content checks passed.');

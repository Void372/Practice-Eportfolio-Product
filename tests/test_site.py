"""Browser test for the MYP 2 Command Terms website.
Setup (once):   pip install playwright   then   python -m playwright install chromium
Run:            python tests/test_site.py
It opens every page at laptop, tablet and phone sizes, checks for sideways scrolling,
small tap targets and script errors, and completes every term quiz."""
import pathlib
from playwright.sync_api import sync_playwright

BASE = pathlib.Path(__file__).resolve().parent.parent.as_uri() + '/'
SIZES = {'laptop': (1366, 800), 'tablet': (768, 1000), 'phone': (375, 740)}
PAGES = ['index.html', 'term.html?t=analyse', 'practice.html', 'how-to-use.html']
problems, errors = [], []

with sync_playwright() as p:
    b = p.chromium.launch()
    for name, (w, h) in SIZES.items():
        page = b.new_context(viewport={'width': w, 'height': h}).new_page()
        page.on('pageerror', lambda e: errors.append(str(e)))
        for f in PAGES:
            page.goto(BASE + f)
            if page.evaluate('document.documentElement.scrollWidth') > page.evaluate('document.documentElement.clientWidth') + 1:
                problems.append(f'{name}: sideways scrolling on {f}')
            small = page.evaluate("[...document.querySelectorAll('a.btn,button,.nav-links a,.logo,.term-card')].filter(e=>e.offsetParent&&e.getBoundingClientRect().height<43.5).length")
            if small: problems.append(f'{name}: {small} tap targets under 44px on {f}')
        page.goto(BASE + 'index.html')
        cols = page.evaluate("getComputedStyle(document.getElementById('grid')).gridTemplateColumns.split(' ').length")
        print(f'{name}: {cols} card columns, {page.locator(".term-card").count()} term cards')

    page = b.new_context(viewport={'width': 1366, 'height': 800}).new_page()
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.goto(BASE + 'index.html')
    for tid in page.evaluate('TERMS.map(t=>t.id)'):
        page.goto(BASE + f'term.html?t={tid}')
        n = page.evaluate('TERMS.find(t=>t.id==new URLSearchParams(location.search).get("t")).quiz.length')
        for _ in range(n):
            qtext = page.inner_text('.quiz-q')
            right = page.evaluate("""(qt)=>{const t=TERMS.find(t=>t.id==new URLSearchParams(location.search).get('t'));
                const q=t.quiz.find(q=>qt.replace(/\\s+/g,' ').startsWith(q.q.slice(0,25)));return q.opts[q.a];}""", qtext)
            page.locator('.opt', has_text=right[:40]).first.click()
            if page.locator('.feedback.good').count() != 1: problems.append(f'{tid}: correct answer not marked correct')
            page.locator('#act .btn').click()
        if f'/ {n}' not in page.inner_text('.score-big') or not page.inner_text('.score-big').startswith(str(n)):
            problems.append(f'{tid}: expected full marks')
        print(f'quiz {tid}: {page.inner_text(".score-big")}')
    b.close()

print('Script errors:', errors or 'none')
print('PROBLEMS:' if problems else 'All browser checks passed.', *problems, sep='\n')

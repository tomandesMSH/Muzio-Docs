// Zvýraznění aktivní sekce v navigaci
const navLinks = document.querySelectorAll('.nav-list a');
const sections = document.querySelectorAll('main section[id]');

function updateActive() {
  let current = sections[0]?.id;
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 120) current = section.id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}
window.addEventListener('scroll', updateActive, { passive: true });
updateActive();

// Světlý / tmavý režim (stejně jako v aplikaci Muzio)
const root = document.documentElement;
const themeButtons = document.querySelectorAll('[data-theme-toggle]');

function isDark() {
  const forced = root.getAttribute('data-theme');
  if (forced) return forced === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function renderThemeButtons() {
  const dark = isDark();
  themeButtons.forEach((btn) => {
    btn.textContent = dark ? '☀️ Světlý režim' : '🌙 Tmavý režim';
    btn.setAttribute('aria-label', dark ? 'Přepnout na světlý režim' : 'Přepnout na tmavý režim');
  });
}

try {
  const saved = localStorage.getItem('muzio-docs-theme');
  if (saved === 'dark' || saved === 'light') root.setAttribute('data-theme', saved);
} catch (e) { /* úložiště nedostupné */ }

themeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('muzio-docs-theme', next); } catch (e) { /* ignore */ }
    renderThemeButtons();
  });
});
renderThemeButtons();

// Mobilní menu
const menuBtn = document.querySelector('[data-menu-toggle]');
menuBtn?.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
navLinks.forEach((link) => {
  link.addEventListener('click', () => document.body.classList.remove('nav-open'));
});

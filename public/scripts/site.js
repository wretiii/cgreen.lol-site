(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const mobileToggle = document.querySelector('[data-mobile-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');

  const updateThemeLabel = () => {
    if (!themeToggle) return;
    const isLight = root.dataset.theme === 'light';
    themeToggle.textContent = isLight ? 'Dark' : 'Light';
    themeToggle.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} theme`);
  };

  themeToggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    if (next === 'light') root.dataset.theme = 'light';
    else delete root.dataset.theme;
    localStorage.setItem('theme', next);
    updateThemeLabel();
  });

  mobileToggle?.addEventListener('click', () => {
    const isOpen = menu?.classList.toggle('open') ?? false;
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
    mobileToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  updateThemeLabel();
})();

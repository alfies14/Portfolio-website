// Theme management for dark/light mode
(function() {
  const themeKey = 'portfolio-theme';
  
  function getTheme() {
    const saved = localStorage.getItem(themeKey);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  
  function setTheme(theme) {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem(themeKey, theme);
  }
  
  function toggleTheme() {
    const current = getTheme();
    const newTheme = current === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    return newTheme;
  }
  
  // Initialize theme on load
  setTheme(getTheme());
  
  // Expose toggle function globally
  window.toggleTheme = toggleTheme;
  window.getTheme = getTheme;
})();


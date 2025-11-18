// Theme Toggle Component - Vanilla JS version of React component
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
    updateToggleUI(theme === 'dark');
  }
  
  function toggleTheme() {
    const current = getTheme();
    const newTheme = current === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    return newTheme;
  }
  
  function updateToggleUI(isDark) {
    // Update desktop toggle
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
      const slider = toggle.querySelector('.theme-slider');
      const moonIcon = slider?.querySelector('.moon-icon');
      const sunIcon = slider?.querySelector('.sun-icon');
      const staticSun = toggle.querySelector('.sun-icon-static');
      const staticMoon = toggle.querySelector('.moon-icon-static');
      
      if (isDark) {
        // Dark mode: Moon on slider (left), Sun static (right)
        toggle.className = 'flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300 bg-zinc-950 border border-zinc-800 relative';
        if (slider) slider.className = 'theme-slider flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300 transform translate-x-0 bg-zinc-800 absolute';
        if (moonIcon) moonIcon.classList.remove('hidden');
        if (sunIcon) sunIcon.classList.add('hidden');
        if (staticSun) staticSun.classList.remove('hidden');
        if (staticMoon) staticMoon.classList.add('hidden');
      } else {
        // Light mode: Sun on slider (right), Moon static (left)
        toggle.className = 'flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300 bg-white border border-zinc-200 relative';
        if (slider) slider.className = 'theme-slider flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300 transform translate-x-8 bg-gray-200 absolute';
        if (moonIcon) moonIcon.classList.add('hidden');
        if (sunIcon) sunIcon.classList.remove('hidden');
        if (staticSun) staticSun.classList.add('hidden');
        if (staticMoon) staticMoon.classList.remove('hidden');
      }
    }
    
    // Update mobile toggle
    const toggleMobile = document.getElementById('themeToggleMobile');
    if (toggleMobile) {
      const sliderMobile = toggleMobile.querySelector('.theme-slider-mobile');
      const moonIconMobile = sliderMobile?.querySelector('.moon-icon-mobile');
      const sunIconMobile = sliderMobile?.querySelector('.sun-icon-mobile');
      const staticSunMobile = toggleMobile.querySelector('.sun-icon-static-mobile');
      const staticMoonMobile = toggleMobile.querySelector('.moon-icon-static-mobile');
      
      if (isDark) {
        toggleMobile.className = 'flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300 bg-zinc-950 border border-zinc-800 relative';
        if (sliderMobile) sliderMobile.className = 'theme-slider-mobile flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300 transform translate-x-0 bg-zinc-800 absolute';
        if (moonIconMobile) moonIconMobile.classList.remove('hidden');
        if (sunIconMobile) sunIconMobile.classList.add('hidden');
        if (staticSunMobile) staticSunMobile.classList.remove('hidden');
        if (staticMoonMobile) staticMoonMobile.classList.add('hidden');
      } else {
        toggleMobile.className = 'flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300 bg-white border border-zinc-200 relative';
        if (sliderMobile) sliderMobile.className = 'theme-slider-mobile flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300 transform translate-x-8 bg-gray-200 absolute';
        if (moonIconMobile) moonIconMobile.classList.add('hidden');
        if (sunIconMobile) sunIconMobile.classList.remove('hidden');
        if (staticSunMobile) staticSunMobile.classList.add('hidden');
        if (staticMoonMobile) staticMoonMobile.classList.remove('hidden');
      }
    }
  }
  
  // Expose functions globally - ensure they're always available
  window.toggleTheme = function() {
    try {
      const newTheme = toggleTheme();
      updateToggleUI(newTheme === 'dark');
      return newTheme;
    } catch (error) {
      console.error('Error toggling theme:', error);
      // Fallback: just toggle the class
      const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      const newTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
      localStorage.setItem(themeKey, newTheme);
      updateToggleUI(newTheme === 'dark');
      return newTheme;
    }
  };
  window.getTheme = getTheme;
  window.setTheme = setTheme;
  window.updateThemeToggle = updateToggleUI;
  
  // Initialize theme and UI when DOM is ready
  function initTheme() {
    const currentTheme = getTheme();
    // Make sure the theme class is set
    if (!document.documentElement.classList.contains('light') && !document.documentElement.classList.contains('dark')) {
      setTheme(currentTheme);
    } else {
      // Sync the class with stored theme
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(currentTheme);
      updateToggleUI(currentTheme === 'dark');
    }
  }
  
  // Run immediately if DOM is ready, otherwise wait
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    // Small delay to ensure DOM is fully ready
    setTimeout(initTheme, 0);
  }
})();


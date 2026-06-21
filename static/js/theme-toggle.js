document.addEventListener("DOMContentLoaded", () => {
    const theme = (() => {
      if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
      return 'light';
    })();
  
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  
    window.localStorage.setItem('theme', theme);
  
    const handleToggleClick = () => {
      const element = document.documentElement;
      const isDark = element.getAttribute("data-theme") === "dark";
      const newTheme = isDark ? "light" : "dark";
      element.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    }
  
    const themeToggles = document.querySelectorAll('.theme-toggle');
    themeToggles.forEach(toggle => toggle.addEventListener('click', handleToggleClick));
});

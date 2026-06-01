import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import {useTheme} from '../Global/theme/ThemeProvide';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');

    window.dispatchEvent(new Event('themeChanged'));
  }, [dark]);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-graphite/10 bg-white/75 text-ink shadow-glass backdrop-blur-xl transition hover:-translate-y-1 dark:border-white/15 dark:bg-ink/70 dark:text-white"
      aria-label="Toggle color theme"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}


export const currentTheme = () => {
  const savedTheme = localStorage.getItem('theme');

  return (
    savedTheme ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light')
  );
};
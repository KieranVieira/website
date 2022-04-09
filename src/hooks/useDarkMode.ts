import { useEffect, useState } from "react";

const STORAGE_KEY = 'kvDarkMode';
enum Theme {
  DARK = 'dark',
  LIGHT = 'light'
}

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(true);

  const changeDarkMode = (newState: boolean) => {
    const action = newState ? 'add' : 'remove';

    window.document.documentElement.classList[action]('dark');
    localStorage.setItem(STORAGE_KEY, newState ? Theme.DARK : Theme.LIGHT)
    setDarkMode(newState);
  }

  useEffect(() => {
    const theme = localStorage.getItem(STORAGE_KEY);

    changeDarkMode(theme ? theme === Theme.DARK : true);
  }, [darkMode])

  return {
   darkMode,
   setDarkMode: changeDarkMode
  }
};
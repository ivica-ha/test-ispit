import React, { useEffect, useState } from 'react';
import useDocumentBodyClass from '../../hooks/useDocumentBodyClass';
import './style.scss';

const dark = 'Dark';
const light = 'Light';
const defaultTheme = localStorage.getItem('theme') || light;

const ThemeToggler = () => {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    if (theme === dark) setTheme(light);
    if (theme === light) setTheme(dark);
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useDocumentBodyClass(theme);

  return (
    <div className='d-flex'>
      <label className='switch p-relative'>
        <input
          onChange={toggleTheme}
          checked={theme === dark}
          type='checkbox'
        />
        <span className='slider round'></span>
      </label>
      <span>{theme} theme</span>
    </div>
  );
};

export default ThemeToggler;

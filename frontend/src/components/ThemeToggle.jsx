'use client';
import React, { useState, useEffect } from 'react';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div onClick={() => setDarkMode(!darkMode)} className="flex items-center">
      {darkMode ? <BsSunFill className="text-white icon-hover" size={27} /> : <FaMoon className="text-white icon-hover" size={25} />}
    </div>
  )
};

export default ThemeToggle;
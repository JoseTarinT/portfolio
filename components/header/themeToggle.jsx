"use client";
import React from "react";
import { useTheme } from "../../context/themeContext";
import styles from "./header.module.css";

export const ThemeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();
  console.log("🚀 ~ ThemeToggle ~ isDarkMode:", isDarkMode);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  console.log("🚀 ~ toggleTheme ~ toggleTheme:", toggleTheme);
  return (
    <button onClick={toggleTheme} className={styles.themeToggle}>
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
};

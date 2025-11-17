"use client";
import React from "react";
import { useTheme } from "../../context/themeContext";
import styles from "./header.module.css";

export const ThemeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <button onClick={toggleTheme} className={styles.themeToggle}>
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
};

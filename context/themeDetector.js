"use client";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeDetector({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(null);

  // Run only on client
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setIsDarkMode(stored === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  // Apply theme to HTML tag and persist
  useEffect(() => {
    if (isDarkMode === null) return;
    const html = document.documentElement;
    const theme = isDarkMode ? "dark" : "light";
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDarkMode]);

  // Listen for OS theme changes
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) setIsDarkMode(e.matches);
    };
    mq.addEventListener?.("change", handleChange);
    return () => mq.removeEventListener?.("change", handleChange);
  }, []);

  if (isDarkMode === null) {
    return null; // ⛔ prevents hydration mismatch
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

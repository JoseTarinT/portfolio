"use client";
import { useContext } from "react";
import { ThemeContext } from "./themeDetector";

export const useTheme = () => useContext(ThemeContext);

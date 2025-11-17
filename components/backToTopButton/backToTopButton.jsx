"use client";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./backToTopButton.module.css";

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button className={styles.backToTop} onClick={scrollToTop}>
        <FaArrowUp size={20} />
      </button>
    )
  );
};

import React from "react";
import styles from "./project.module.css";

export const Project = ({ name, description, url }) => {
  return (
    <div className={styles.cardContent}>
      <div className={styles.card}>
        <h1 className={styles.projectName}>{name}</h1>
        <a href={url} target="_blank" className={styles.url}>
          View Project
        </a>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

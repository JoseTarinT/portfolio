import React from "react";
import styles from "./experience.module.css";

export const Experience = ({
  company = "",
  position = "",
  description = "",
  achievements = "",
  technologies = "",
}) => {
  const descriptionPoints = description
    .split(/(?<!\d)\.(?!\s*(?:js|\d))/i)
    .map((point) => point.trim());
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.company}>
        <h4>{company}</h4>
      </div>
      <div className={styles.position}>
        <h4>{position}</h4>
      </div>
      <div className={styles.description}>
        <ul>
          {descriptionPoints.map((point, index) =>
            point ? <li key={index}>{point}.</li> : null
          )}
        </ul>
      </div>
      {achievements !== "" ? (
        <div className={styles.achievements}>
          <p>{achievements}</p>
        </div>
      ) : null}
      <div className={styles.technologies}>
        <p>
          <span>Technologies: </span>
          {technologies}
        </p>
      </div>
    </div>
  );
};

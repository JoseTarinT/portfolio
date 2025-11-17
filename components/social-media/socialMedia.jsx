import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "./socialMedia.module.css";

export const SocialMedia = () => {
  return (
    <div className={styles.mediaIcons}>
      <a
        href="https://github.com/JoseTarinT"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={30} color="var(--foreground)" />
      </a>
      <a
        href="https://www.linkedin.com/in/jose-luis-tarin-tera/"
        target="_blank"
      >
        <FaLinkedin size={30} color="var(--foreground)" />
      </a>
      <a href="mailto:josel.tarint@gmail.com">
        <FaEnvelope size={30} color="var(--foreground)" />
      </a>
    </div>
  );
};

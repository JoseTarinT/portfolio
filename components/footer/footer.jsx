import styles from "./footer.module.css";
import JTLogo from "../../public/JTLogo";
import { SocialMedia } from "../social-media/socialMedia";

export const Footer = () => {
  return (
    <footer className={styles.contact}>
      <div className={styles.logoContact}>
        <JTLogo size={84} className={styles.logo} />
      </div>
      <div className={styles.contactLinks}>
        <SocialMedia />
      </div>
      <div className={styles.copyright}>
        <p>© 2025 Jose Tarin. All rights reserved.</p>
      </div>
    </footer>
  );
};

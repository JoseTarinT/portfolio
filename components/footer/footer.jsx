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
        <p className={styles.stack}>
          Custom-built website, designed and developed by Jose Tarin. <br />
          Built with Next.js using JavaScript and styled-components. Deployed on
          Vercel.
        </p>
        <p>© 2025 Jose Tarin. All rights reserved.</p>
      </div>
    </footer>
  );
};

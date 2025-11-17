import { SocialMedia } from "@/components/social-media/socialMedia";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <main className={styles.main}>
      <section className={styles.contact}>
        <h1 className={styles.contactMe}>Contact me!</h1>
        <p className={styles.p}>
          I’d be happy to hear from you! Whether you want to collaborate, ask a
          question or just connect, feel free to reach out.
        </p>
        <div className={styles.socialMedia}>
          <SocialMedia />
        </div>
      </section>
    </main>
  );
}

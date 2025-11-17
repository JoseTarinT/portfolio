import styles from "./page.module.css";

export default function Projects() {
  return (
    <main className={styles.main}>
      <section className={styles.projects}>
        <h1 className={styles.comingSoon}>Coming soon</h1>
        <p className={styles.p}>
          I’m currently working on several personal projects that will be
          showcased here. I look forward to sharing them soon. Stay tuned!
        </p>
      </section>
    </main>
  );
}

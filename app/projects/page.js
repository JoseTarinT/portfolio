import styles from "./page.module.css";
import { Project } from "@/components/projectComponent/project";

export default function Projects() {
  return (
    <main className={styles.main}>
      <h1 className={styles.projectsTitle}>Projects</h1>
      <section className={styles.projects}>
        <Project
          name="TaskFlow"
          description={
            <>
              TaskFlow is a full-stack web application that allows users to
              manage tasks with authentication. It features a secure backend API
              with JWT-based authentication and a modern Next.js frontend with
              client-side data fetching, state management, and protected routes.
              Users can create, view, update, and complete tasks in a
              personalized dashboard. <br /> COMING SOON
            </>
          }
        />
        <Project
          name="ChatRule"
          description="An intelligent chatbot powered by a Large Language Model (LLM) that allows users to define custom rules for handling structured data. For example, contracts can be automatically classified and routed based on conditions such as contract type or country. The system demonstrates how AI can be combined with rule-based logic to automate decision-making and streamline business workflows. Currently in beta."
          url={"https://ai-assistant-kohl-six.vercel.app/chat"}
        />
        <Project
          name="Protected Beaches Merimbula"
          description="A full-stack web application designed to help identify and explore beaches protected from strong winds in Merimbula. The platform features an interactive frontend built with HTML, CSS, and JavaScript, while the backend is powered by Node.js, handling data processing and API logic. The project focuses on usability, performance, and real-world environmental data presentation."
          url={"https://josetarint.github.io/protected-beaches/index.html"}
        />
      </section>
    </main>
  );
}

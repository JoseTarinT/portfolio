import { Experience } from "@/components/experience/experience";
import styles from "./page.module.css";
import { SocialMedia } from "@/components/social-media/socialMedia";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <div className={styles.introContent}>
          <div className={styles.introName}>
            <h1 className={styles.name}>Jose Tarin</h1>
            <h2 className={styles.role}>Full-Stack Software Developer</h2>
          </div>
          <div className={styles.introResume}>
            <p className={styles.resumeText}>
              I&apos;ve worked on building reliable, high performance web
              applications across diverse industries with a background in
              microservices, serverless architectures and CI/CD release
              pipelines. Focused on solving complex problems, learning new
              technologies and creating customer focused applications that align
              with business goals. A strong team player who thrives in agile
              environments, contributing to sprint planning, stand-ups and
              retrospectives.
            </p>
          </div>
          <SocialMedia />
        </div>
      </section>
      <section id="experience" className={styles.experience}>
        <div className={styles.experienceTitle}>
          <h2>Work Experience</h2>
        </div>
        <Experience
          company="ABC (Australian Broadcasting Corporation) - News Website Team
              Sydney, NSW"
          position="Software Developer - October 2024 – Present"
          description="Develop and maintain core features for a high traffic news platform using Next.js, GraphQL, TypeScript, HTML, and CSS, ensuring optimal performance, responsiveness and accessibility across devices.
Integrate ABC live news into Apple News via Apple News API using TypeScript, automating editorial content delivery and expanding distribution with structured and reusable templates.
Design and deploy serverless functions with AWS Lambda while orchestrating event-driven workflows using SQS, DynamoDB and CloudWatch for monitoring and logging.
Collaborate with designers to implement pixel perfect UI updates that align with brand guidelines and meet WCAG 2.0 accessibility standards.
Participate in code reviews, architectural discussions, sprint rituals and the CI/CD release process for deployments to staging and production.
Technologies: Next.js, React, TypeScript, GraphQL, Apple News API, AWS (Lambda, SQS, DynamoDB, CloudWatch), Figma, GitLab, Bitbucket, CI/CD, Datadog."
          achievements="Key Achievements – Apple News Integration
Delivered real-time election and breaking news coverage through Apple News integration, addressing a strategic content gap where competitors had dominated live blogs.
Integration led to Apple News featuring the live blog on its homepage (including video stream), driving 30% of total debate traffic to the website.
The live blogs reached 2.3 million viewers within 2 months, and ABC saw an 11% uplift in user loyalty on Apple News within the first post launch."
          technologies="Next.js, React, TypeScript, GraphQL, Apple News API, AWS (Lambda, SQS, DynamoDB, CloudWatch), Figma, GitLab, Bitbucket, CI/CD, Datadog."
        />
        <Experience
          company={
            "SERVICE NSW (Conversational AI Team)                                                                                       Sydney, NSW"
          }
          position={"Junior Software Developer - July 2022 - October 2024"}
          description="Collaborated with cross-functional team to develop high-performance, user-friendly applications using React.js, Node.js, and Python.
Developed and maintained scalable APIs, optimizing data flow between frontend and backend.
Improved and maintained ServiceNSW’s first ever AI Virtual Assistant, built on a microservice architecture, enabling customers to have their questions answered 24/7, reducing load on call centres and enhancing customer experience.
Built and maintained an event-driven system, allowing real time communication with a conversational AI chatbot via RESTful APIs and WebSockets.
Led the frontend development of a Retrieval Augmented Generation (RAG) application in React and created Python API endpoints to streamline call center operations for specific information retrieval, reducing call times by 70% and enhancing agent productivity for the Bonds & Tenancy team.
Led improvements in both ends of the internal Automation Tool, increasing performance and team productivity.
Wrote and optimized SQL queries in BigQuery to analyze and report conversational data.
Used Git and GitLab for version control and code collaboration, ensuring code quality and team alignment."
          technologies="GCP (Dialogflow CX, BigQuery), AWS (DynamoDB, S3), Docker, Node.js, Express, Redis, Cloud Foundry, React.js, RabbitMQ, WebSockets, GitLab, Object-Oriented Programming."
        />
      </section>
      {/* <section className={styles.contactSection}>
        <Contact />
      </section> */}
    </main>
  );
}

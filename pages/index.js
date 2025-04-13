import Head from "next/head";
import Link from "next/link";
import { Geist } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geist = Geist({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={geist.className}>
      <Head>
        <title>Redux vs Context API Comparison</title>
        <meta name="description" content="Compare Redux and Context API implementations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.container}>
        <h1>Understanding State Management in React</h1>
        
        <section className={styles.section}>
          <h2>View Implementations</h2>
          <div className={styles.linkContainer}>
            <Link href="/redux" className={styles.demoLink}>
              View Redux Implementation
            </Link>
            <Link href="/context" className={styles.demoLink}>
              View Context Implementation
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Redux</h2>
          <div className={styles.conceptBox}>
            <h3>Pros:</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>Centralized state management</li>
              <li className={styles.listItem}>Powerful dev tools for debugging</li>
              <li className={styles.listItem}>Middleware support for side effects</li>
              <li className={styles.listItem}>Predictable state updates</li>
              <li className={styles.listItem}>Great for large applications</li>
            </ul>
            <h3>Cons:</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>More boilerplate code</li>
              <li className={styles.listItem}>Steeper learning curve</li>
              <li className={styles.listItem}>Additional package dependency</li>
              <li className={styles.listItem}>Might be overkill for small apps</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Context API</h2>
          <div className={styles.conceptBox}>
            <h3>Pros:</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>Built into React</li>
              <li className={styles.listItem}>Simpler implementation</li>
              <li className={styles.listItem}>Less boilerplate</li>
              <li className={styles.listItem}>Perfect for small to medium apps</li>
              <li className={styles.listItem}>Easy to understand</li>
            </ul>
            <h3>Cons:</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>No built-in state management</li>
              <li className={styles.listItem}>Less performant for frequent updates</li>
              <li className={styles.listItem}>Limited dev tools</li>
              <li className={styles.listItem}>Can become messy in large apps</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
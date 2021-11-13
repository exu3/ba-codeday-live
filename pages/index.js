import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CodeDay Bay Area LIVE</title>
        <meta name="description" content="CodeDay is here!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://codeday.org/ba" className={styles.codedayTitle}>
            CodeDay
          </a>
        </h1>

        <p className={styles.description}>Let&apos;s goooooooo</p>

        <div className={styles.grid}>
          <Link href="/wifi">
            <a className={styles.card}>
              <h2>WiFi &rarr;</h2>
              <p>Internet. Wahooooooooo</p>
            </a>
          </Link>

          <a href="https://codeday.org/ba" className={styles.card}>
            <h2>Schedule &rarr;</h2>
            <p>See the event schedule.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

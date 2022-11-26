import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Dashboard from "./dashboard";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meetmo Task</title>
        <meta name="description" content="Developed by KrishnaRao" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h4>MeetMo react flow L2 task</h4>
      </main>
      <Dashboard />
    </div>
  );
}

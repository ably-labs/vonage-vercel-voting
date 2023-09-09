import Head from 'next/head';
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';

const VotingComponent = dynamic(() => import('../components/VotingComponent'), { ssr: false });

export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ablyrealtime" />
        <meta name="twitter:creator" content="@thisisjfrank" />
        <meta property="og:url" content="https://sms-vote.vercel.app/" />
        <meta property="og:title" content="Which biscuit is best?" />
        <meta property="og:description" content="Text A, B, C or D to vote!" />
        <meta property="og:image" content="https://sms-vote.vercel.app/images/tw.png" />
      </Head>
      <main className={styles.main}>
      <header className={styles.header}>
        <img src="/images/smsvote.svg" alt="sms vote" className={styles.logo}/>
        <h1 className={styles.title}>Text: (+44) 7451270716<br />to vote</h1>
      </header>
        <VotingComponent />
      </main>

      <footer className={styles.footer}>
        <p className={styles.powered}>Powered by</p>
        <a className={styles.vercel} href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">Vercel</a>
          <span className={styles.plus}>+</span>
        <a className={styles.vonage} href="https://www.vonage.co.uk/" target="_blank" rel="noopener noreferrer">
          Vonage
        </a>
          <span className={styles.plus}>+</span>
        <a className={styles.ably} href="https://ably.com/" target="_blank" rel="noopener noreferrer">
          Ably
        </a>
        <a className={styles.github} href="https://github.com/ably-labs/vonage-vercel-voting">Fork it on Github</a>
      </footer>
    </div>
  )
}


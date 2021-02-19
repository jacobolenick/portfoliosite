import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jacob Olenick | ReactJS Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I'm <a href="https://twitter.com/jacobolenick">Jacob Olenick</a>
        </h1>

        <p className={styles.description}>
          I'm a ReactJS, React Native Developer{' '}
          <a href='https://www.github.com/jacobolenick' code className={styles.code}>Check out my GitHub</a>
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/jacobolenick/TaskApp" className={styles.card}>
            <h3>Task App &rarr;</h3>
            <p>Keep track of your tasks for the day. Built with ReactJS.</p>
          </a>

          <a href="https://github.com/jacobolenick/NUCAMPSITE" className={styles.card}>
            <h3>NuCamp Camp Site &rarr;</h3>
            <p>Our bootcamp project</p>
          </a>

          <a
            href="https://twitter.com/jacobolenick"
            className={styles.card}
          >
            <h3>Twitter &rarr;</h3>
            <p>I post coding realted stuff about my journer.</p>
          </a>

          <a
            href="https://linkedin.com/in/jacobmolenick"
            className={styles.card}
          >
            <h3>Linkedin &rarr;</h3>
            <p>
              Follow me on Linkedin to stay up to date.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Looking for Jr ReactJS Developer position{' '}
          
        </a>
      </footer>
    </div>
  )
}

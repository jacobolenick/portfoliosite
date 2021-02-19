import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>✌️ Jacob Olenick | ReactJS Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I'm <a href="https://twitter.com/jacobolenick">Jacob Olenick ✌️
          </a>
        </h1>

  

        <p className={styles.description}>
          I'm a ReactJS, React Native Developer{' '}
          <br/>
          <a href='https://www.github.com/jacobolenick' code className={styles.code}>Check out my GitHub 👨‍💻 </a>
      
        </p>
    

        <div className={styles.grid}>
        <p className={styles.about}>
        I'm a Full-Stack ReactJS & React Native developer from Las Vegas, NV. I've been passionate about technology my entire life and have been working as a professional UX/UI Designer for over 3 years. I've made the switch into Software Development and attended NuCamp Coding Bootcamp.</p>

          <a href="https://github.com/jacobolenick/TaskApp" className={styles.card}>
            <h3>Task App ✏️ &rarr;</h3>
            <p>Keep track of your tasks for the day. Built with ReactJS.</p>
          </a>

          <a href="https://github.com/jacobolenick/NUCAMPSITE" className={styles.card}>
            <h3>NuCamp Camp Site ⛺️ &rarr;</h3>
            <p>Our bootcamp project we built through the duration of the course</p>
          </a>

          <a
            href="https://twitter.com/jacobolenick"
            className={styles.card}
          >
            <h3>Twitter 🐦 &rarr;</h3>
            <p>I post coding related stuff about my journey.</p>
          </a>

          <a
            href="https://linkedin.com/in/jacobmolenick"
            className={styles.card}
          >
            <h3>Linkedin 🔗 &rarr;</h3>
            <p>
              Follow me on Linkedin to stay up to date.
            </p>
          </a>

          <a
            href="https://instagram.com/coffeeprogrammer"
            className={styles.card}
          >
            <h3>Instagram 📸 &rarr;</h3>
            <p>Follow me as I share photo's of my desk and coding journey</p>
          </a>

          <a
            href="https://medium.com/@jacobolenick"
            className={styles.card}
          >
            <h3>Thoughts 📓 &rarr;</h3>
            <p>
              I write about programming and tech stuff
            </p>
          </a>

      
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="olenickjacob@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          click here to reach out to hire me for a Jr ReactJS Developer position 💡 {' '}
          
        </a>
      </footer>
    </div>
  )
}

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image'


export default function Home() {
  return (
 
      <div className={styles.container}>
        <Head>
          <title>✌️ Jacob Olenick | Front-End & Mobile App Developer</title>
          <link rel="icon" href="/reactmemoji.svg" />
          <meta name="keywords" content="Front-End and Mobile app Developer"></meta>
          {/* <meta property="og:Image" content={jake.png}/> */}
          
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Hi, I'm <a href="https://twitter.com/jacobolenick">Jacob Olenick ✌️
          </a>
          </h1>




          <p className={styles.description}>
            I'm a Front-End & Mobile app Developer.{' '}
            <br />
            <br />
            <a href='https://www.github.com/jacobolenick' code className={styles.code}>Check out my GitHub 👨‍💻 </a>

          </p>


          <div className={styles.grid}>


            <Image
              src="/image/jake.png"
              alt="Picture of the author"
              width={190}
              height={190}
            />
            <p className={styles.about}>
              I'm a Front-End React & React Native developer. I've been passionate about technology my entire life and have been working as a professional UX/UI Designer for over 3 years. I've made the switch into Software Development and attended NuCamp Coding Bootcamp.</p>


            <h2 className={styles.h2}>
              Projects </h2>


            <div className={styles.projects}>
              <a href="https://nikewebsiteecomm.netlify.app" className={styles.card}>
                <h3>Nike Closet 👟 &rarr;</h3>
                <p>E-Commerce Front-end Nike website built in ReactJS.</p>
              </a>

              <a href="https://jolly-mirzakhani-f8c6f5.netlify.app/" className={styles.card}>
                <h3>Coding Tunez 🎧 &rarr;</h3>
                <p>Music player for coding build with Javascript</p>
              </a>

              <a href="https://github.com/jacobolenick/nucampapp" className={styles.card}>
                <h3>NuCamp Mobile App ⛺️ &rarr;</h3>
                <p>Still building - Built using React Native</p>
              </a>

              <a href="https://github.com/jacobolenick/NUCAMPSITE" className={styles.card}>
                <h3>NuCamp Ground ⛺️ &rarr;</h3>
                <p>Our bootcamp project we worked on. Built with ReactJS</p>
              </a>

  

            </div>


            <h2 className={styles.h2}>
              Links
        </h2>

            <div className={styles.projects}>
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


          </div>
        </main>

        <footer className={styles.footer}>
          <a href="mailto: jacob@thatwebstudio.com">
            click here to reach out to hire me for a Jr Front-End Developer position 💡 {' '}</a>
        </footer>
      </div>
  )
}
  


import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import hero from '../public/images/hero.png'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
            <div className={styles.logo}> more<span className={styles.orange}>llo</span> </div>
            <a href="">GET IN TOUCH</a>
        </nav>
        <div className={styles.coins1}>
            <img src='/images/dollar_coin2.png' className={styles.coin1} alt="Vercel Logo"/>
            <img className={styles.coin2} src='/images/dollar_coin1.png' alt="Vercel Logo"/>
        </div>
        <main className={styles.main}>
        <img width={'200'} className={styles.coin3} src='/images/dollar_coin3.png'  alt="Vercel Logo"/>
          <Image priority className={styles.image} src={hero} layout='responsive'  alt="Vercel Logo"/>
          <div className='hero'>
            <h1 className={styles.title}>
            Ideate, Fund, <span>Launch</span>
            </h1>
            <p className={styles.description}>
            We at Morello believe in founders that innovate the process of value creation to value transfer utilizing blockchain technology.
            </p>
          </div>
        </main>
      </header>
      <footer className={styles.footer}>
        <div>
          <h2>Get in touch </h2>
          <a href="mailto:idea@brailie.dev">hello@morello.fund</a>
        </div>
        <small className={styles.copy_large}>&copy; 2022 morello. All Right Reserved</small>
        <a className={styles.orange} href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
        <small className={styles.copy_mobile}>&copy; 2022 morello. All Right Reserved</small>
      </footer>
    </div>
  )
}

export default Home

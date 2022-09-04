import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => (
  <div className={styles.grid}>
    <a href="/test-errors/rng?error=1" className={styles.card}>
      <h2>RNG page (403)</h2>
      <p>See 403 response here</p>
    </a>

    <a href="/test-errors/rng" className={styles.card}>
      <h2>RNG page (No error)</h2>
      <p>See normal response here</p>
    </a>

    <a href="/test-errors/sum?x=1&y=test" className={styles.card}>
      <h2>Sum page (400)</h2>
      <p>See 400 response here</p>
    </a>

    <a href="/test-errors/sum?x=1&y=2" className={styles.card}>
      <h2>Sum page (No Error)</h2>
      <p>See normal response here</p>
    </a>
  </div>
)

export default Home

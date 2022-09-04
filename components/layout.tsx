import * as React from "react"
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
    <div className={styles.container}>
      <Head>
        <title>Next Error pages</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Error Pages!
        </h1>
        {children}
      </main>
    </div>
)

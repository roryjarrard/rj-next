import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rory J</title>
        <meta name='description' content="Rory's Site" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.container}>
        <h2>Welcome!</h2>
      </div>
    </>
  )
}

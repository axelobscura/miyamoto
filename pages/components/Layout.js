import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Layout({children}) {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>MIYAMOTO - EARTHQUAKE STRUCTURAL ENGINEERS</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Gemunu+Libre:wght@200;800&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
      </Head>

      {children}

      <footer className={styles.footer}>
        <img src="/logo.jpg" alt="MIYAMOTO - EARTHQUAKE STRUCTURAL ENGINEERS" title="MIYAMOTO - EARTHQUAKE STRUCTURAL ENGINEERS" style={{
          'width':'300px'
        }} />
        <p>PROPUESTA DE DESARROLLO DE AZUL.MX</p>
      </footer>
    </div>
  )
}

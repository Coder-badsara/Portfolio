import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Umesh Badsara - Backend Developer Portfolio</title>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

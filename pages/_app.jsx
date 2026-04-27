import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Umesh Badsara - Backend Developer Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

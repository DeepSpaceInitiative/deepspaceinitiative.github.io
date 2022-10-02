import 'public/assets/css/main.css'
import Layout from '../components/layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  const child = <Component {...pageProps} />
  return (
    <>
      <Head>
        <title>My new cool app</title>
      </Head>
      <Layout children={child}/>
    </>
  )
}
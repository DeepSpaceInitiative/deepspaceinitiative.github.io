import 'public/assets/css/main.css'
import Layout from '../components/layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createTheme, NextUIProvider } from '@nextui-org/react';

export default function MyApp({ Component, pageProps }: AppProps) {
  const child = <Component {...pageProps} />

  const theme = createTheme({
    type: "dark",
    theme: {
      colors: {
        link: '$white'
      },
      space: {},
      fonts: {}
    }
  })

  return (
    <>
      <Head>
        <title>Deep Space Initiative</title>
      </Head>
      <NextUIProvider theme={theme}>
        <Layout children={child}/>
      </NextUIProvider >
    </>
  )
}
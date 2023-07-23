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
    <div>
      <Head key={1}>
        <title>Deep Space Initiative</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <NextUIProvider theme={theme}>
        <Layout children={child}/>
      </NextUIProvider >
    </div>
  )
}
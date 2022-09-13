import '../public/assets/css/main.css'
import Layout from '../components/layout'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  const child = <Component {...pageProps} />
  return (
    <Layout children={child}/>
  )
}
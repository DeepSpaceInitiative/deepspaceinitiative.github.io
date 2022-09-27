import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Deep Space Initiative</title>
        <Script src="assets/js/jquery.min.js"/>
        <Script src="assets/js/jquery.poptrox.min.js"/>
        <Script src="assets/js/jquery.scrolly.min.js"/>
        <Script src="assets/js/jquery.scrollex.min.js"/>
        <Script src="assets/js/browser.min.js"/>
        <Script src="assets/js/breakpoints.min.js"/>
        <Script src="assets/js/util.js"/>
        <Script src="assets/js/main.js"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

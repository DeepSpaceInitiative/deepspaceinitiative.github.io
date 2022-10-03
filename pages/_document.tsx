import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { CssBaseline } from '@nextui-org/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {CssBaseline.flush()}
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

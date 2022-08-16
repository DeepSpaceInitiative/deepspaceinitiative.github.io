import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'

export default function Navbar() {
  return (
    <>
    {/* Header */}
    <Head>
    <header id="header" className="main dark">
      <h1>
        <Link href='/index'><a>DEEP SPACE INITIATIVE</a></Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link href='/about_us'><a>ABOUT US</a></Link>
          </li>
          <li>
            <Link href='/research'><a>RESEARCH</a></Link>
          </li>
          <li>
            <Link href='/news'><a>NEWS</a></Link>
          </li>
          <li>
            <Link href='/careers'><a>CAREERS</a></Link>
          </li>
          {/*						<li><Link href='/merch'><a>MERCH</a></Link></li>*/}
        </ul>
      </nav>
    </header>
    <Script src="assets/js/jquery.min.js"/>
    <Script src="assets/js/jquery.poptrox.min.js"/>
    <Script src="assets/js/jquery.scrolly.min.js"/>
    <Script src="assets/js/jquery.scrollex.min.js"/>
    <Script src="assets/js/browser.min.js"/>
    <Script src="assets/js/breakpoints.min.js"/>
    <Script src="assets/js/util.js"/>
    <Script src="assets/js/main.js"/>
    </Head>
  </>
  );
}
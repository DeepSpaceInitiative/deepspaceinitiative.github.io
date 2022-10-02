import Image from 'next/image'
import Link from 'next/link'
import mainImage from 'public/images/home_images/main.jpg'
import AHP1Image from 'public/images/home_images/AHP1.jpg'
import home21Image from 'public/images/home_images/home21.jpg'
import STSImage from 'public/images/home_images/STS.jpg'

export default function Home() {
  return (
    <>
  {/* Intro */}
  <section id="intro" className="main style1 dark fullscreen">
    <Image
        src={mainImage}
        layout='fill'
        objectFit='cover'
    />
    <div className="content">  
      <br /> <br /> <br />
      <h2>DEEP SPACE INITIATIVE</h2>
      <p>
        Increasing accessibility and opportunity for space research all over the
        world
      </p>
      <Link href="/about_us">
        <a><button>LEARN MORE</button></a>
      </Link>
    </div>
  </section>
  {/* One */}
  <section id="one" className="main right style2 dark fullscreen">
    <Image
        src={AHP1Image}
        layout='fill'
        objectFit='cover'
    />    
    <div className="content box style2">
      <header>
        <h2>ASTRONAUT HEALTH &amp; PERFORMANCE</h2>
      </header>
      <Link href="/research">
        <a><button className='explore'>EXPLORE</button></a>
      </Link>
    </div>
  </section>
  {/* Two */}
  <section id="two" className="main style2 left dark fullscreen">
    <Image
        src={home21Image}
        layout='fill'
        objectFit='cover'
    />
    <div className="content box style2">
      <header>
        <h2>
          SPACE <br /> ARCHITECTURE
        </h2>
      </header>
      <Link href="/research">
        <a>
          <button className='explore'>EXPLORE</button>
        </a>
      </Link>
    </div>
  </section>
  {/* Three */}
  <section id="three" className="main style2 right dark fullscreen">
    <Image
        src={STSImage}
        layout='fill'
        objectFit='cover'
    />
    <div className="content box style2">
      <header>
        <h2>SPACE TRANSPORTATION SYSTEMS</h2>
      </header>
      <Link href="/research">
        <a>
          <button className='explore'>EXPLORE</button>
        </a>
      </Link>
    </div>
  </section>
  <section id="careers" className="main style1 dark fullscreen">
    <div className="content">
      <header>
        <h2>CONTACT US</h2>
        <br />
      </header>
      <p>
        WE ARE ALWAYS LOOKING FOR MOTIVATED AND PASSIONATE SPACE ENTHUSIASTS
      </p>
      <p>UNSOLICITED APPLICANTS ARE VERY WELCOME </p>
      <p>SEND US YOUR CV &amp; A SHORT DESCRIPTION OF HOW YOU CAN HELP DSI! </p>
      <br /> <br />
      <Link href="mailto:admin@deepspaceinitiative.org" passHref={true}>
        <a><p>admin@deepspaceinitiative.org</p></a>
      </Link>
    </div>
  </section>
  </>

  )
}

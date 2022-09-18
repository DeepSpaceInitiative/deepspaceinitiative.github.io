import Link from 'next/link'

export default function Home() {
  return (
    <>
  {/* Intro */}
  <section id="intro" className="main style1 dark fullscreen">
    <div className="absolute -z-10">
        <img
            src="images/home_images/main.jpg"
            className="image fit"
        />
    </div>
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
    <div className="absolute -z-10">
        <img
            src="images/home_images/AHP1.jpg"
            className="image fit"
        />
    </div>
    <div className="content box style2">
      <header>
        <h2>ASTRONAUT HEALTH &amp; PERFORMANCE</h2>
      </header>
      <Link href="/research">
        <a><button>EXPLORE</button></a>
      </Link>
    </div>
  </section>
  {/* Two */}
  <section id="two" className="main style2 left dark fullscreen">
    <div className="absolute -z-10">
        <img
            src="images/home_images/home21.jpg"
            className="image fit"
        />
    </div>
    <div className="content box style2">
      <header>
        <h2>
          SPACE <br /> ARCHITECTURE
        </h2>
      </header>
      <Link href="/research">
        <a>
          <button>EXPLORE</button>
        </a>
      </Link>
    </div>
  </section>
  {/* Three */}
  <section id="three" className="main style2 right dark fullscreen">
    <div className="absolute -z-10">
        <img
            src="images/home_images/STS.jpg"
            className="image fit"
        />
    </div>
    <div className="content box style2">
      <header>
        <h2>SPACE TRANSPORTATION SYSTEMS</h2>
      </header>
      <Link href="/research">
        <a>
          <button>EXPLORE</button>
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
      <p>DeepSpaceInitiative@gmail.com</p>
    </div>
  </section>
  </>

  )
}

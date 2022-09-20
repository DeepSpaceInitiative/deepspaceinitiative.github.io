import astroImage from 'public/images/fulls/astro.jpg'
import SAImage from 'public/images/fulls/SA.jpeg'
import rocketImage from 'public/images/fulls/rocket.jpeg'
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getResearchProgramByID, getResearchProgram } from '../../services/research_program_service'

export default function About() {
  return (
    <>
    <section id="news" className="main style1 dark fullscreen">
      <div className="content">
        <header>
          <h2>RESEARCH PROJECTS</h2>
        </header>
        <p>Enabling deep space exploration for the benefit of all Humankind</p>
        <a href="#careers" className="button style2">
          More
        </a>
      </div>
    </section>
    <section id="careers">
      <div className="row">
        <div className="leftcolumn">
          <div className="card">
            <h2>Astronaut Health &amp; Performance</h2> <br />
            <p style={{textAlign:'justify'}}>
              The challenges of Human Spaceflight remain of great concern, and
              need to be managed before being able to venture beyond Earth’s
              magnetosphere. The effects of microgravity on the cardiovascular
              system, central nervous system, bone mechanics, myology, and the
              vestibular system are not yet completely understood. Current
              available countermeasures are not sufficient to assure that
              astronauts will be able to adequately perform the necessary tasks
              upon landing on Mars after prolonged exposure to microgravity. Even
              extended duration exposures to 1/6th g on the Moon are of concern.
              Other important factors to consider are the effects of exposure to
              solar radiation including heavy ions that are present in galactic
              cosmic rays. Determining the&nbsp; time course and magnitude of
              harmful and potentially life-threatening effects is of utmost
              importance to inform and prioritise countermeasure development.
            </p>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="fakeimg">
            <Image
              src={astroImage}
              layout='responsive'
              objectFit='cover'
              className="image fit"
              title="Astronaut Health & Performance"
              alt=""
            />
          </div>
        </div>
      </div>
      <br /> <br />
      <div className="row">
        <div className="leftcolumn">
          <div className="fakeimg">
            <Image
              src={SAImage}
              layout='responsive'
              objectFit='cover'
              className="image fit"
              title="Space Architecture"
              alt=""
            />
          </div>
        </div>
        <div className="rightcolumn">
          <div className="card">
            <h2>Space Architecture</h2> <br />
            <p style={{textAlign:'justify'}}>
              According to the AIAA Space Architecture Technical Committee, Space
              Architecture “encompasses architectural design of living and working
              environments in space related facilities, habitats, and
              vehicles”.&nbsp;To sustain future deep space missions, an
              understanding of the requirements for habitation systems both during
              long-duration space travel and upon landing on different celestial
              bodies is of utmost importance in order to develop effective
              solutions. Reducing dependencies on Earth for supplies will be
              crucial as we venture farther within our solar system. This is
              essential in maximising efficiency and supporting mission
              objectives. Additionally, it is important to recognise the
              significance of robust monitoring and communication systems within
              the facility in increasing safety and performance of
              astronauts.&nbsp;
            </p>
          </div>
        </div>
      </div>
      <br /> <br />
      <div className="row">
        <div className="leftcolumn">
          <div className="card">
            <h2>Space Transportation Systems</h2> <br />
            <p style={{textAlign:'justify'}}>
              Although we have been able to send rovers and other functionally
              smart spacecraft to the edge of our solar system, human spaceflight
              beyond LEO comes with added difficulties that we have yet to fully
              resolve. This undertaking requires a foundational understanding of
              the requirements for Deep Space Transportation Systems. That
              includes designing spacecraft that can accommodate efficient
              propulsion systems for long duration space travel, as well as
              choosing materials capable of protecting all living beings aboard
              the vehicle from galactic cosmic rays and solar radiation. This
              begins with defining the phases of interplanetary deep space mission
              operations, consolidating state-of-the-art protective materials for
              extreme environments, assessing current energy/power generation
              systems, and finally understanding which propulsion systems could be
              most efficient for this endeavour.
            </p>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="fakeimg">
            <Image
              src={rocketImage}
              layout='responsive'
              objectFit='cover'
              className="image fit"
              title="Space Transportation Systems"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  let blogsID = await getResearchProgramByID()
  return {
    paths: blogsID.map(item =>  { return {params: {slug: item.id.toString()}}}),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async(context) => {
  const researchProgramID = context.params.slug as string 
  const researchProgram = await getResearchProgram(researchProgramID)
  return {
    props: { researchProgram: researchProgram },
  }
}
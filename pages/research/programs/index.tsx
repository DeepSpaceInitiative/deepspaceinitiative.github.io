import { GetStaticProps } from 'next'
import Link from 'next/link'
import { getResearchPrograms, ResearchProgramItem } from '../../../services/research_program_service'

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      blogs: await getResearchPrograms(),
    },
    revalidate: 86400 // one day in seconds (to avoid hitting contentful with so many req)
  }
}

export default function ResearchPrograms(props: { blogs: ResearchProgramItem[] }) {
  return (
    <>
    <section id="careers" className="main style2 dark fullscreen">
      <div className="content">
        <header>
          <h2 className="text-center">RESEARCH PROGRAMS</h2>
          <h3 className="text-center">Enabling deep space exploration for the benefit of all Humankind</h3>
          <br />
        </header>
        <div>
          { researchProgramsRows(props.blogs) }
        </div>
      </div>
    </section>
    </>
  )
}

function researchProgramsRows(researchPrograms: ResearchProgramItem[]) {
  return researchPrograms.map((researchProgram) =>
    <div key={researchProgram.id}> 
      <Link href={`/research/programs/${encodeURIComponent(researchProgram.id)}`}>
        <a>
          <h2 className="title underline text-center">{researchProgram.title}</h2>
          <h3 className="text-center">{researchProgram.subtitle}</h3>
        </a>
      </Link>
      <br/><br/><br/><br/><br/>
    </div>
  )
}

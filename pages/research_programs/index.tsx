import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { getResearchPrograms, ResearchProgramItem } from '../../services/research_program_service'

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
          <h2>RESEARCH PROGRAMS</h2>
          <h3>Enabling deep space exploration for the benefit of all Humankind</h3>
          <br />
        </header>
        <div className="gallery">
          { researchProgramsRows(props.blogs) }
        </div>
      </div>
    </section>
    </>
  )
}

const renderOptions: Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <iframe
            src={node.data.target.fields.embedUrl}
            width={560}
            height={315}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },
  },
};

function researchProgramsRows(researchPrograms: ResearchProgramItem[]) {
  return researchPrograms.map((researchProgram) =>
    <div className="article" key={researchProgram.id}> 
      <Link href={`/research_programs/${encodeURIComponent(researchProgram.id)}`}>
        <a>
          <h2 className="title underline">{researchProgram.title}</h2>
          {documentToReactComponents(researchProgram.description as Document, renderOptions)}
        </a>
      </Link>
      <br/><br/><br/><br/><br/>
    </div>
  )
}

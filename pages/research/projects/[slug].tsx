import { GetStaticPaths, GetStaticProps } from 'next'
import { getResearchProject, getResearchProjectByID, ResearchProject } from '../../../services/research_projects_service'
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'

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

export default function ResearchProjectsPage(props: { researchProgram: ResearchProject }) {
  return (<>
    <section id="news" className="main style1 dark fullscreen">
      <div className="content">
        <header>
          <h2>{props.researchProgram.thesis}</h2>
        </header>
        <br />
        {documentToReactComponents(props.researchProgram.paper as Document, renderOptions)}
        <br />
      </div>
    </section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let researchProjectsID = await getResearchProjectByID()
  return {
    paths: researchProjectsID.map(item => { return { params: { slug: item.id.toString() } } }),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async(context) => {
  const researchProgramID = context.params.slug as string 
  const researchProgram = await getResearchProject(researchProgramID)
  return {
    props: { researchProgram: researchProgram },
  }
}

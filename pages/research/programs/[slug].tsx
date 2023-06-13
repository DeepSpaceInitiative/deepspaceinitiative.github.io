import { GetStaticPaths, GetStaticProps } from 'next'
import { getResearchProgramByID, getResearchProgram, ResearchProgram } from '../../../services/research_program_service'
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'
import Link from 'next/link'

const renderOptions: Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <iframe
            src={node.data.target.fields.embedUrl}
            className="w-full aspect-video"
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

export default function ResearchProgramPage(props: { researchProgram: ResearchProgram }) {
  return (<>
    <section id="news" className="main style1 dark fullscreen">
      <div className="content">
        <header>
          <h2>{props.researchProgram.title}</h2>
        </header>
        <br />
        {documentToReactComponents(props.researchProgram.description as Document, renderOptions)}
        <br />
        {applyNowSectionIfPossible(props.researchProgram)}
        <br />
        {showSubmittedProjectsIfAny(props.researchProgram)}
      </div>
    </section>
    </>
  );
}

const showSubmittedProjectsIfAny = (researchProgram: ResearchProgram) => {
  if (!(researchProgram.projects?.length > 0)) {
    return (<></>);
  }
  return (<>
    <h3>Completed projects in 2022</h3>
    <span className='p-10'>
      {researchProgram.projects.map(project =>
        (<>
          <p>
            <Link href={`/research/projects/${project.sys.id}`}>
              {project.fields.thesis.toString()}
            </Link>
          </p>
        </>)
      )}
    </span>
  </>)
}

const applyNowSectionIfPossible = (researchProgram: ResearchProgram) => {
  const today = new Date();
  const isAfterApplicationStartDate = new Date(researchProgram.applicationStartDate) < today
  const isBeforeApplicationEndDate = new Date(researchProgram.applicationEndDate) > today
  const isDuringApplicationDuration = isAfterApplicationStartDate && isBeforeApplicationEndDate
  if (isDuringApplicationDuration) {
    return (<>
      <Link href={researchProgram.applicationLink}>
          <a><button className='explore'>APPLY HERE</button></a>
      </Link>
    </>)
  }
}


export const getStaticPaths: GetStaticPaths = async () => {
  let blogsID = await getResearchProgramByID()
  return {
    paths: blogsID.map(item => { return { params: { slug: item.id.toString() } } }),
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

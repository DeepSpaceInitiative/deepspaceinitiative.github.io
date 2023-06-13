import { GetStaticProps } from 'next'
import { getResearchTopics, ResearchTopicItem } from 'services/research_topics_service'
import { BLOCKS, Document } from '@contentful/rich-text-types'
import Image from 'next/image'
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer'

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      topics: await getResearchTopics(),
    },
    revalidate: 86400 // one day in seconds (to avoid hitting contentful with so many req)
  }
}

export default function ResearchTopics(props: { topics: ResearchTopicItem[] }) {
  return (
    <div>
      <section id="careers" className="main style2 dark fullscreen">
        <div className="content">
          <header>
            <h2 className="text-center">RESEARCH TOPICS</h2>
            <h3 className="text-center">Enabling deep space exploration for the benefit of all Humankind</h3>
            <br />
          </header>
        </div>
      </section>
      <div>
        { researchTopicsRows(props.topics) }
      </div>
    </div>
  )
}

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

function researchTopicsRows(researchTopics: ResearchTopicItem[]) {
  return researchTopics.map((researchTopic) =>
    <section id="careers">
      <div className="row">
        <div className="leftcolumn">
          <div className="card">
            <h2>{researchTopic.title}</h2> <br />
            {documentToReactComponents(researchTopic.description as Document, renderOptions)}
          </div>
        </div>
        <div className="rightcolumn">
          <div className="fakeimg">
            <Image
              src={"https:" + researchTopic.image.fields.file.url}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit='cover'
              className="image fit"
              title="Astronaut Health & Performance"
              alt=""
            />
          </div>
        </div>
      </div>
      <br /> <br />
    </section>
  )
}

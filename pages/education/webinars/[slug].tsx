import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer"
import { BLOCKS, Document } from "@contentful/rich-text-types"
import { GetStaticPaths, GetStaticProps } from 'next';
import { getWebinar, getWebinarListItemsID, Webinar } from '../../../services/webinars_service';

const renderOptions: Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <iframe
            className="w-full aspect-video"
            src={node.data.target.fields.embedUrl}
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

export default function WebinarPage(props: { blog: Webinar }) {
  return (
    <section id="news" className="main style3 dark fullscreen">
      <div className="content">
        <header>
          <h2>{props.blog.title}</h2>
          <h3>By: {props.blog.authorName}</h3>
        </header>
        <br />
        {documentToReactComponents(props.blog.content as Document, renderOptions)}
        <br />
      </div>
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let blogsID = await getWebinarListItemsID()
  return {
    paths: blogsID.map(item =>  { return {params: {slug: item.id.toString()}}}),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async(context) => {
  const blogID = context.params.slug as string 
  const blog = await getWebinar(blogID)
  return {
    props: { blog: blog },
  }
}

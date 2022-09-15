import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link"
import { BlogListItem, getBlogListItems } from "../../services/blogs_service"

export default function Blogs(props: { blogs: BlogListItem[] }) {
  return (
    <>
    <section id="careers" className="main style2 dark fullscreen">
      <div className="content">
        <header>
          <h2>NEWS</h2>
          <br />
        </header>
        <div className="gallery">
          { blogRows(props.blogs) }
        </div>
      </div>
    </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      blogs: await getBlogListItems(),
    },
    revalidate: 86400 // one day in seconds (to avoid hitting contentful with so many req)
  }
}

function blogRows(blogs: BlogListItem[]) {
  return blogs.map((blog) =>
    <div className="article" key={blog.id}> 
      <Link href={`/blogs/${encodeURIComponent(blog.id)}`}>
        <a>
          <img
            style={{float:"inline-start", borderStyle:'outset', borderBlockColor:'#ffffff', borderWidth:'1px', margin:'20px'}}
            src={"https:" + blog.blogImage.fields.file.url}
            alt={blog.blogImage.fields.description}
            className="image"
          />
          <h2 className="title">{blog.title}</h2>
          <h3 className="title">By: { blog.authorName }</h3>
        </a>
      </Link>
      <br/><br/><br/><br/><br/>
    </div>
  )
}
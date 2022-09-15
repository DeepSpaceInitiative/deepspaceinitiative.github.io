import { GetServerSideProps } from "next"
import Link from "next/link"
import { BlogListItem, getBlogListItems } from "../services/blogs_service"

export default function Blogs(props: { blogs: BlogListItem[] }) {
  return (
    <>
    <div className="main style2 dark fullscreen">
      <div className="gallery">
        { blogRows(props.blogs) }
      </div>
    </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      blogs: await getBlogListItems(),
    },
  }
}

function blogRows(blogs: BlogListItem[]) {
  return blogs.map((blog) =>
    <div className="article" key={blog.id}> 
      <Link href={ "/blogs/" + blog.id }>
        <a>
          <img
            src={"https:" + blog.blogImage.fields.file.url}
            alt={blog.blogImage.fields.description}
            className="image"
          />
          <h2 className="title">{blog.title}</h2>
          <h3 className="title">By: { blog.authorName }</h3>
        </a>
      </Link>
    </div>
  )
}

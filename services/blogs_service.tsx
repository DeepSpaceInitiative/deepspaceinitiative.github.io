import Contentful, { Entry } from "contentful";
import { client } from "./client";
import { TeamMember } from "./team_service";

interface InternalBlog { 
  title: Contentful.EntryFields.Text,
  description: Contentful.EntryFields.Text,
  blogImage: Contentful.Asset,
  author: Contentful.Entry<TeamMember>
}

export interface BlogListItem { 
  id: string,
  title: Contentful.EntryFields.Text,
  description: Contentful.EntryFields.Text,
  blogImage: Contentful.Asset,
  authorProfileImage: Contentful.Asset,
  authorName: Contentful.EntryFields.Text,
}

export const getBlogListItems = async (): Promise<BlogListItem[]> => 
  client
    .getEntries<InternalBlog>({
      content_type: 'blog',
      order: 'sys.createdAt',
    })
    .then(result => {
      return result.items.map(blogItem => {
        return { 
          id: blogItem.sys.id, 
          authorProfileImage: blogItem.fields.author.fields.profileImage, 
          authorName: blogItem.fields.author.fields.firstName + " " + blogItem.fields.author.fields.lastName,
          ...blogItem.fields 
        } 
      })
    })

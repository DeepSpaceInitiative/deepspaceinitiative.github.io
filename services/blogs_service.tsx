import Contentful, { Entry } from "contentful";
import { client } from "./client";
import { TeamMember } from "./team_service";

interface InternalBlogListItem { 
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

interface InternalBlog { 
  title: Contentful.EntryFields.Text,
  description: Contentful.EntryFields.Text,
  blogImage: Contentful.Asset,
  content: Contentful.EntryFields.RichText,
  author: Contentful.Entry<TeamMember>
}

export interface Blog { 
  id: string,
  title: Contentful.EntryFields.Text,
  description: Contentful.EntryFields.Text,
  blogImage: Contentful.Asset,
  content: Contentful.EntryFields.RichText,
  authorProfileImage: Contentful.Asset,
  authorName: Contentful.EntryFields.Text,
}

export const getBlogListItems = async (): Promise<BlogListItem[]> => 
  client
    .getEntries<InternalBlogListItem>({
      content_type: 'blog',
      order: 'sys.createdAt',
    })
    .then(result =>
      result.items.map(blogItem => {
        return { 
          id: blogItem.sys.id, 
          authorProfileImage: blogItem.fields.author.fields.profileImage, 
          authorName: blogItem.fields.author.fields.firstName + " " + blogItem.fields.author.fields.lastName,
          ...blogItem.fields 
        } 
      })
    )

export interface BlogListItemsID {
  id: String
}

export const getBlogListItemsID = async (): Promise<BlogListItemsID[]> => 
  client
    .getEntries({
      content_type: 'blog',
      select: 'sys.id'
    })
    .then(result =>
      result.items.map(blogItem => {
        return { 
          id: blogItem.sys.id
        } 
      })
    )

export const getBlog = async (id: string): Promise<Blog> => 
  client
    .getEntry<InternalBlog>(id)
    .then(result => {
      return { 
          id: result.sys.id, 
          authorProfileImage: result.fields.author.fields.profileImage, 
          authorName: result.fields.author.fields.firstName + " " + result.fields.author.fields.lastName,
          ...result.fields 
        } 
      })

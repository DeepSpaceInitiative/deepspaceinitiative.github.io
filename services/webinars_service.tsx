import Contentful, { Entry } from "contentful";
import { client } from "./client";
import { TeamMember } from "./team_service";


interface InternalWebinarListItem { 
  title: Contentful.EntryFields.Text,
  description: Contentful.EntryFields.Text,
  image: Contentful.Asset,
  author: Contentful.Entry<TeamMember>
}

export interface WebinarListItem { 
  id: string,
  title: Contentful.EntryFields.Text,
  description: Contentful.EntryFields.Text,
  image: Contentful.Asset,
  authorProfileImage: Contentful.Asset,
  authorName: Contentful.EntryFields.Text,
}

interface InternalWebinar { 
  title: Contentful.EntryFields.Text,
  description: Contentful.EntryFields.Text,
  image: Contentful.Asset,
  content: Contentful.EntryFields.RichText,
  author: Contentful.Entry<TeamMember>
}

export interface Webinar { 
  id: string,
  title: Contentful.EntryFields.Text,
  description: Contentful.EntryFields.Text,
  image: Contentful.Asset,
  content: Contentful.EntryFields.RichText,
  authorProfileImage: Contentful.Asset,
  authorName: Contentful.EntryFields.Text,
}

export const getWebinarListItems = async (): Promise<WebinarListItem[]> => 
  client
    .getEntries<InternalWebinarListItem>({
      content_type: 'webinar',
      order: '-fields.publishedAt',
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

export interface WebinarListItemsID {
  id: String
}

export const getWebinarListItemsID = async (): Promise<WebinarListItemsID[]> => 
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

export const getWebinar = async (id: string): Promise<Webinar> => 
  client
    .getEntry<InternalWebinar>(id)
    .then(result => {
      return { 
          id: result.sys.id, 
          authorProfileImage: result.fields.author.fields.profileImage, 
          authorName: result.fields.author.fields.firstName + " " + result.fields.author.fields.lastName,
          ...result.fields 
        } 
      })

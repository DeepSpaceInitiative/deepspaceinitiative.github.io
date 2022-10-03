import Contentful, { Entry } from "contentful";
import { client } from "./client";

interface InternalResearchProgramItem { 
  title: Contentful.EntryFields.Text,
  subtitle: Contentful.EntryFields.Text,
}

export interface ResearchProgramItem { 
  id: string,
  title: Contentful.EntryFields.Text,
  subtitle: Contentful.EntryFields.Text,
}

export const getResearchPrograms = async (): Promise<ResearchProgramItem[]> => 
  client
    .getEntries<InternalResearchProgramItem>({
      content_type: 'researchProgram',
      order: '-fields.applicationStartDate',
    })
    .then(result =>
      result.items.map(researchProgram => {
        return { 
          id: researchProgram.sys.id, 
          ...researchProgram.fields 
        } 
      })
    )

export interface ResearchProgramItemsID {
  id: String
}

export const getResearchProgramByID = async (): Promise<ResearchProgramItemsID[]> => 
  client
    .getEntries({
      content_type: 'researchProgram',
      select: 'sys.id'
    })
    .then(result =>
      result.items.map(blogItem => {
        return { 
          id: blogItem.sys.id
        } 
      })
    )

interface InternalResearchProgram { 
  title: Contentful.EntryFields.Text,
  description: Contentful.EntryFields.RichText,
  projects: Contentful.Entry<InternalResearchProject>[]
}

interface InternalResearchProject {}

export interface ResearchProgram { 
  id: string,
  title: string,
  description: Contentful.EntryFields.RichText,
  projects: Contentful.Entry<ResearchProject>[],
}

export interface ResearchProject {}

export const getResearchProgram = async (id: string): Promise<ResearchProgram> => 
  client
    .getEntry<InternalResearchProgram>(id)
    .then(result => {
      return { 
          id: result.sys.id, 
          ...result.fields,
        }
      })

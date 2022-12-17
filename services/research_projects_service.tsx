import Contentful, { Entry } from "contentful";
import { client } from "./client";
import { TeamMember } from "./team_service";

export interface ResearchProjectItemsID {
  id: String
}

export const getResearchProjectByID = async (): Promise<ResearchProjectItemsID[]> => 
  client
    .getEntries({
      content_type: 'researchProject',
      select: 'sys.id'
    })
    .then(result =>
      result.items.map(blogItem => {
        return { 
          id: blogItem.sys.id
        } 
      })
    )

interface InternalResearchProject {
  thesis: string,
  supervisor: TeamMember,
  team: TeamMember[],
  paper: Contentful.EntryFields.RichText
}

export interface ResearchProject {
  id: string,
  thesis: string,
  supervisor: TeamMember,
  team: TeamMember[],
  paper: Contentful.EntryFields.RichText
}

export const getResearchProject = async (id: string): Promise<ResearchProject> => 
  client
    .getEntry<InternalResearchProject>(id)
    .then(result => {
      return { 
          id: result.sys.id, 
          ...result.fields,
        }
      }
    )

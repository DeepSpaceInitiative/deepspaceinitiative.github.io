import Contentful, { Entry } from "contentful";
import { client } from "./client";

interface InternalResearchTopicItem { 
  title: Contentful.EntryFields.Text,
  description: Contentful.EntryFields.RichText,
  image: Contentful.Asset
}

export interface ResearchTopicItem { 
  id: string,
  title: Contentful.EntryFields.Text,
  description: Contentful.EntryFields.RichText,
  image: Contentful.Asset
}

export const getResearchTopics = async (): Promise<ResearchTopicItem[]> => 
  client
    .getEntries<InternalResearchTopicItem>({
      content_type: 'researchTopic',
      order: 'sys.createdAt',
    })
    .then(result =>
      result.items.map(researchTopic => {
        return { 
          id: researchTopic.sys.id, 
          ...researchTopic.fields 
        } 
      })
    )

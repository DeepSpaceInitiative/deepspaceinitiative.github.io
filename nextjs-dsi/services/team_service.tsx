import Contentful, { Entry } from "contentful";
import { client } from "./client";

export interface TeamMember { 
  id: string,
  firstName: Contentful.EntryFields.Text,
  lastName: Contentful.EntryFields.Text,
  title: Contentful.EntryFields.Text,
  bio: Contentful.EntryFields.RichText,
  profileImage: Contentful.Asset,
}

type Organization = {
  members: Entry<TeamMember>[]
}

export const getTeamMembers = async (): Promise<TeamMember[]> => 
  client
    .getEntry<Organization>("7FQbpFmwuuzZztk6lNXKK9")
    .then(result => result.fields.members.map(member => { return { id: member.sys.id, ...member.fields } }))

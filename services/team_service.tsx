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

export const getCoreTeamMembers = async (): Promise<TeamMember[]> => 
  client
    .getEntry<Organization>("7FQbpFmwuuzZztk6lNXKK9")
    .then(result => result.fields.members.map(member => { return { id: member.sys.id, ...member.fields } }))


export const getAdvisors = async (): Promise<TeamMember[]> => 
  client
    .getEntry<Organization>("3zI2vZJfVCl1H9f2aXyhad")
    .then(result => result.fields.members.map(member => { return { id: member.sys.id, ...member.fields } }))

export const getSupervisors = async (): Promise<TeamMember[]> => 
  client
    .getEntry<Organization>("3Z3RZtAF02jDkdqmumny8h")
    .then(result => result.fields.members.map(member => { return { id: member.sys.id, ...member.fields } }))
  
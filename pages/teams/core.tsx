import { GetStaticProps } from "next"
import { getCoreTeamMembers, Organization, TeamMember } from "../../services/team_service"
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { Block, Document } from '@contentful/rich-text-types'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { EntryFields } from "contentful"

export default function Home(props: { organization: Organization }) {
  return (
    <>
    <section id="about_us" className="flex flex-col h-full text-white text-center space-y-3 p-10">
      <div>
        <h2 className="p-6">ABOUT US</h2>
        <div className="grid flex-grid lg:grid-cols-3 spacing-y-1">
          <div className="row card">
            <h2>WHO WE ARE</h2>
            <p>
              {documentToReactComponents(props.organization.whoAreWe as Document, {})}
            </p>
          </div>
          <div className="row card">
            <h2>WHAT WE DO</h2>
            <p>
            {documentToReactComponents(props.organization.whatDoWeDo as Document, {})}
            </p>
          </div>
          <div className="row card">
            <h2>WHY JOIN US</h2>
            <p>
            {documentToReactComponents(props.organization.whyJoinUs as Document, {})}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="p-6">THE TEAM</h2>
        <div className="grid flex-grid lg:grid-cols-3">
          { memberRows(props.organization.members) }
        </div>
        <div/>
      </div>
    </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      organization: await getCoreTeamMembers(),
    },
    revalidate: 86400 // one day in seconds (to avoid hitting contentful with so many req)
  }
}

function memberRows(members: TeamMember[]) {
  return members.map(member =>
    <div className="card row space-y-1 p-2" key={member.id}>
      <img
        src={"https:" + member.profileImage.fields.file.url}
        alt={member.profileImage.fields.description}
        className="w-full h-80 object-cover"
      />
      <h2>{ member.firstName.toUpperCase() + " " + member.lastName.toUpperCase() }</h2>
      <p className="title">{member.title}</p>
      <p>
        { 
          documentToPlainTextString(member.bio as Block) 
        }
      </p>
    </div>
  )
}
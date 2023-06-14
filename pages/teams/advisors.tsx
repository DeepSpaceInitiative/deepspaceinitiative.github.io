import { GetStaticProps } from "next"
import Link from "next/link";
import { getAdvisors, TeamMember } from "../../services/team_service"
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { Block } from '@contentful/rich-text-types'

export default function Home(props: { members: TeamMember[] }) {
  return <>
  <section id="about_us" className="flex flex-col h-full text-white text-center space-y-3 p-10">
    <div>
      <h2 className="p-6">OUR ADVISORS</h2>
      <p className="p-6">
      If you have expertise in Astronaut Health & Performance, Space Architecture, or Space Transportation Systems, with at least 5 years of experience, and are interested in mentoring a research team, please don't hesitate to reach out. Email us your resume and a short description of your ongoing or previous research to 
      <Link href="mailto:admin@deepspaceinitiative.org" passHref={true}>
        <p> admin@deepspaceinitiative.org</p>
      </Link>
      </p>
      {/* <div className="grid flex-grid lg:grid-cols-3">
        { memberRows(props.members) }
      </div> */}
    </div>
  </section>
  </>;
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   return {
//     props: {
      // members: await getAdvisors(),
//     },
//     revalidate: 86400 // one day in seconds (to avoid hitting contentful with so many req)
//   }
// }

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

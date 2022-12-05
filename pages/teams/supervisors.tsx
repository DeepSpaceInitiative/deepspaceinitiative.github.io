import { GetStaticProps } from "next"
import { getSupervisors, TeamMember } from "../../services/team_service"
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { Block } from '@contentful/rich-text-types'
import Link from "next/link"

export default function Home(props: { members: TeamMember[] }) {
  return (
    <>
    <section id="about_us" className="flex flex-col h-full text-white text-center space-y-3 p-10">
      <div>
        <h2 className="p-6">OUR SUPERVISORS</h2>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfS5DghLB0TBSwcQFw0TX5QnKzEu_tt4TQOqsSjZGqNUnLOVQ/viewform">
          <a><button className='explore'>APPLY HERE</button></a>
        </Link>
      </div>
      <div>
        <div className="grid flex-grid lg:grid-cols-3">
          { memberRows(props.members) }
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
      members: [],//await getSupervisors(),
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

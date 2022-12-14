import { GetStaticProps } from "next"
import { getSupervisors, TeamMember } from "../../services/team_service"
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { Block } from '@contentful/rich-text-types'
import Link from "next/link"

export default function Home(props: { members: TeamMember[] }) {
  return (
    <>
    <section id="about_us" className="flex flex-col h-full text-white text-center space-y-3 p-10">
      <div className="content">
        <header>
          <h2 className="p-6">OUR SUPERVISORS</h2>
        </header>
        <p>
        We are eager to begin accepting applications for Research Supervisors for our upcoming ANDROMEDA research program!
        </p>
        <br/>
        <p>
        ANDROMEDA is the Deep Space Initiative's yearlong research program. Members work in teams or individually on research questions across three topics - Astronaut Health & Performance, Space Transportation Systems, and Space Architecture. Selected ANDROMEDA researchers may be new to the field or to research in general. 
        </p>
        <br/>
        <p>
        As research supervisor, you would guide the ANDROMEDA research individuals/teams through the research process. The main focus is on research methodology, technical writing, and organization.
        </p>
        <br/>
        <p>
        Because your role as supervisor will focus on the research process, you do not need to be an expert in the research topics. You will be assessed on your motivation to be a research supervisor, your passion for guiding research projects, and your research experience in any field.
        </p>
        <br/>
        <p>
        Application deadline: December 25, 2022 at 23:59 CET
        </p>
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

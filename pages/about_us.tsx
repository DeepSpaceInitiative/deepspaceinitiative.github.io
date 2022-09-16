import { GetStaticProps } from "next"
import { getTeamMembers, TeamMember } from "../services/team_service"
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { Block } from '@contentful/rich-text-types'

export default function Home(props: { members: TeamMember[] }) {
  return (
    <>
    <section id="about_us" className="main style3 dark fullscreen">
      <div className="content">
        <header>
          <h2>ABOUT US</h2>
          <br />
        </header>
        <div className="column">
          <div className="card">
            <div className="container">
              <h2>WHO WE ARE</h2> <br />
              <p>
                A core team of passionate engineers, scientists, and researchers,
                along with a fleet of experts in the field of space exploration.
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="container">
              <h2>WHAT WE DO</h2> <br />
              <p>
                Our goal is to enable deep space exploration while bringing more
                opportunity and accessibility for everyone around the world.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="container">
              <h2>WHY JOIN US</h2> <br />
              <p>
                Work on real spaceflight challenges and gain skills in critical
                thinking, problem definition, and solution development within a
                multi-disciplinary environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="crew">
      <div className="row">
        <header style={{ textAlign: "center" }}>
          <h2>THE TEAM</h2>
        </header>
      </div>
      { memberRows(props.members) }
      <div/>
    </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      members: await getTeamMembers(),
    },
    revalidate: 86400 // one day in seconds (to avoid hitting contentful with so many req)
  }
}

function memberRows(members: TeamMember[]) {
  return chunks(members, 3).map((membersRow: TeamMember[]) =>
    <div className="row" key={membersRow.map(member => member.id).join("")}> 
      { membersRow.map(member => {
        return <div className="column" key={member.id}>
          <div className="card">
            <img
              src={"https:" + member.profileImage.fields.file.url}
              alt={member.profileImage.fields.description}
              className="cardimg"
            />
            <div className="container">
              <h2>{ member.firstName.toUpperCase() + " " + member.lastName.toUpperCase() }</h2>
              <p className="title">{member.title}</p>
              <p>
                { 
                  documentToPlainTextString(member.bio as Block) 
                }
              </p>
            </div>
          </div>
        </div>
      })
    }
    </div>
  )
}

function chunks<T>(arr: T[], n: number): T[][] {
  var result: T[][] = []
  for (var i = 0; i < arr.length; i += n) {
    result.push(arr.slice(i, i + n))
  }
  return result
}

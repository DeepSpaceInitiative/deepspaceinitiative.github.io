export default function Home() {
  return (
    <>
  <section id="about_us" className="main style3 dark fullscreen">
    <div className="content">
      <header>
        {/*	<h2 style="font-size: 4em;">ABOUT US</h2> <br> */}
        <h2>ABOUT US</h2>
        <br />
      </header>
      <div className="column_3">
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
      <div className="column_3">
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
      <div className="column_3">
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
    {/*				<p align="justify">DSI aims to increase diversity and representation of minorities within the industry by providing*/}
    {/*					more opportunities with less constraints, as well as making space research more accessible to*/}
    {/*					scientists all over the world. </p>*/}
    {/*				<p align="justify">In the first phase, members within teams are given the opportunity to build a strong foundational*/}
    {/*					understanding of the topic in order to define research questions. In the second phase, small*/}
    {/*					sub-teams are identified and each sub-team works on solving a specific research question within that*/}
    {/*					topic. It is a goal of DSI to provide funding for hands-on experimental work through grants,*/}
    {/*					partnerships, fundraising, and donations. This will provide an opportunity to at least one member*/}
    {/*					per team to conduct experiments in institutional labs or ground analog stations.</p>*/}
    <div className="row">
      <header style={{ textAlign: "center" }}>
        <h2>THE TEAM</h2>
      </header>
    </div>
    <div className="row">
      <div className="column_3">
        <div className="card">
          <img src="images/crew/sara1.jpg" alt="sara" className="cardimg" />
          <div className="container">
            <h2>SARA SABRY</h2>
            <p className="title"> Executive Director &amp; Founder </p>
            <p>
              Incoming PhD Student in Aerospace Sciences at UND, Mechanical
              &amp; Biomedical Engineer, Analog Astronaut.
            </p>
            {/*						<p>example@example.com</p>*/}
            {/*						<p><button class="button">Contact</button></p>*/}
          </div>
        </div>
      </div>
      <div className="column_3">
        <div className="card">
          <img
            src="images/crew/jennifer-fogarty.jpg"
            alt="jennifer"
            className="cardimg"
          />
          <div className="container">
            <h2>JENNIFER FOGARTY</h2>
            <p className="title">Technical Director</p>
            <p>
              Chief Scientific Officer at TRISH Baylor College of Medicine,
              former NASA Chief Scientist.
            </p>
            {/*						<p>example@example.com</p>*/}
            {/*						<p><button class="button">Contact</button></p>*/}
          </div>
        </div>
      </div>
      <div className="column_3">
        <div className="card">
          <img src="images/crew/todd.jpg" alt="todd" className="cardimg" />
          <div className="container">
            <h2>TODD BOEHM</h2>
            <p className="title">Business Director</p>
            <p>President of Business Edge Resources.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="column_3">
        <div className="card">
          <img src="images/crew/Wik.jpg" alt="wiktoria" className="cardimg" />
          <div className="container">
            <h2>WIKTORIA DZIADULA</h2>
            <p className="title">Head of Logistics</p>
            <p>
              PhD student in Architecture in Extreme Environments, Analog
              Astronaut.{" "}
            </p>
            {/*						<p>example@example.com</p>*/}
            {/*						<p><button class="button">Contact</button></p>*/}
          </div>
        </div>
      </div>
      <div className="column_3">
        <div className="card">
          <img src="images/crew/kyran.jpeg" alt="kyran" className="cardimg" />
          <div className="container">
            <h2>KYRAN GRATTAN</h2>
            <p className="title">Legal Director</p>
            <p>
              Space Lawyer and Associate Director at Breakthrough Initiatives.{" "}
            </p>
            {/*						<p>example@example.com</p>*/}
            {/*						<p><button class="button">Contact</button></p>*/}
          </div>
        </div>
      </div>
      <div className="column_3">
        <div className="card">
          <img src="images/crew/smitcrop.jpg" alt="smit" className="cardimg" />
          <div className="container">
            <h2>SMIT PATEL</h2>
            <p className="title">Coms Lead &amp; Program Manager</p>
            <p>Aerospace Engineering Graduate Student.</p>
            {/*						<p>example@example.com</p>*/}
            {/*						<p><button class="button">Contact</button></p>*/}
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="column">
        <div className="card">
          <img
            src="images/crew/george-salazar.jpg"
            alt="george"
            className="cardimg"
          />
          <div className="container">
            <h2>GEORGE SALAZAR</h2>
            <p className="title">Advisor</p>
            <p>
              NASA Chief Engineer, Human Computing Interface Technical
              Discipline Lead.
            </p>
            {/*						<p>example@example.com</p>*/}
            {/*						<p><button class="button">Contact</button></p>*/}
          </div>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <img
            src="images/crew/maki-habib.JPG"
            alt="maki"
            className="cardimg"
          />
          <div className="container">
            <h2>MAKI HABIB</h2>
            <p className="title">Advisor</p>
            <p>
              Professor of Robotics and Mechatronics at The American University
              in Cairo.
            </p>
            {/*						<p>example@example.com</p>*/}
            {/*						<p><button class="button">Contact</button></p>*/}
          </div>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <img
            src="images/crew/pablo-photo.jpg"
            alt="pablo"
            className="cardimg"
          />
          <div className="container">
            <h2>PABLO DE LEON</h2>
            <p className="title">Advisor</p>
            <p>
              Professor at The University of North Dakota, Director of the Human
              Spaceflight Lab.
            </p>
            {/*						<p>example@example.com</p>*/}
            {/*						<p><button class="button">Contact</button></p>*/}
          </div>
        </div>
      </div>
      <div className="column">
        <div className="card">
          <img src="images/crew/larry.jpeg" alt="larry" className="cardimg" />
          <div className="container">
            <h2>LARRY TOUPS</h2>
            <p className="title">Advisor</p>
            <p>Professor &amp; former NASA Space Architect. </p>
            {/*						<p>example@example.com</p>*/}
            {/*						<p><button class="button">Contact</button></p>*/}
          </div>
        </div>
      </div>
    </div>
    {/*		<div class="row">*/}
    {/*			<header>*/}
    {/*				<h2>COMS TEAM</h2>*/}
    {/*			</header>*/}
    {/*		</div>*/}
    {/*		<div class="row">*/}
    {/*			<div class="column">*/}
    {/*				<div class="card">*/}
    {/*					<img src="images/crew/astronaut.jpg" alt="george" class="cardimg">*/}
    {/*					<div class="container">*/}
    {/*						<h2>Smit</h2>*/}
    {/*						<p class="title">Placeholder</p>*/}
    {/*						<p>Placeholder</p>*/}
    {/*						&lt;!&ndash;						<p>example@example.com</p>&ndash;&gt;*/}
    {/*						&lt;!&ndash;						<p><button class="button">Contact</button></p>&ndash;&gt;*/}
    {/*					</div>*/}
    {/*				</div>*/}
    {/*			</div>*/}
    {/*			<div class="column">*/}
    {/*				<div class="card">*/}
    {/*					<img src="images/crew/astronaut.jpg" alt="maki" class="cardimg">*/}
    {/*					<div class="container">*/}
    {/*						<h2>Brooke</h2>*/}
    {/*						<p class="title">Placeholder</p>*/}
    {/*						<p>Placeholder</p>*/}
    {/*						&lt;!&ndash;						<p>example@example.com</p>&ndash;&gt;*/}
    {/*						&lt;!&ndash;						<p><button class="button">Contact</button></p>&ndash;&gt;*/}
    {/*					</div>*/}
    {/*				</div>*/}
    {/*			</div>*/}
    {/*		</div>*/}
    {/*		<div class="row">*/}
    {/*			<header>*/}
    {/*				<h2>MEMBERS</h2>*/}
    {/*				<p>We are accepting application starting May 4th!</p>*/}
    {/*			</header>*/}
    {/*		</div>*/}
    {/*		<div class="row">*/}
    {/*			<header>*/}
    {/*				<h2>PARTNERS</h2>*/}
    {/*			</header>*/}
    {/*		</div>*/}
    {/*		<div class="row">*/}
    {/*			<div class="column">*/}
    {/*				<div class="card">*/}
    {/*					<img src="images/crew/astronaut.jpg" alt="george" class="cardimg">*/}
    {/*					<div class="container">*/}
    {/*						<p class="title">Partner 1</p>*/}
    {/*						&lt;!&ndash;						<p>example@example.com</p>&ndash;&gt;*/}
    {/*						&lt;!&ndash;						<p><button class="button">Contact</button></p>&ndash;&gt;*/}
    {/*					</div>*/}
    {/*				</div>*/}
    {/*			</div>*/}
    {/*			<div class="column">*/}
    {/*				<div class="card">*/}
    {/*					<img src="images/crew/astronaut.jpg" alt="george" class="cardimg">*/}
    {/*					<div class="container">*/}
    {/*						<p class="title">Partner 2</p>*/}
    {/*						&lt;!&ndash;						<p>example@example.com</p>&ndash;&gt;*/}
    {/*						&lt;!&ndash;						<p><button class="button">Contact</button></p>&ndash;&gt;*/}
    {/*					</div>*/}
    {/*				</div>*/}
    {/*			</div>*/}
    {/*		</div>*/}
  </section>
  </>

  )
}
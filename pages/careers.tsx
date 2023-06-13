import Link from "next/link";

export default function Careers() {
  return (
    <>
  <section id="careers" className="main style1 dark fullscreen">
  <div className="content">
    <header>
      <h2>CAREERS</h2>
      <br />
    </header>
    {/* 			<a href="https://forms.gle/hTRginKHtJvJg5om6">CLICK HERE TO SUBMIT YOUR APPLICATION.</a> */}
    <br /> <br /> <br /> <br /> <br /> <br /> <br />
    {/*	<p>  We are excited to announce that we are now accepting applications!! </p> 
			<p> Our research department is now open, and will be accepting membership positions for our three-month (12 weeks) intensive research program. </p>
			<p>You will be able to submit your answers until June 1st. Upon completion of the review process, you will be notified via email on June 6th, and the results will be posted on our website! </p> 
			<p>Abstracts for each research project have been accepted at this year’s International Astronautical Congress (IAC) in Paris, and upon selection, you will have the opportunity to work on the manuscript along with your team and mentor! </p>
			<br> <br> <br> <br> <br> <br> <br> */}
    <p> Information about our Andromida program will be announced soon </p>
    <Link href="mailto:admin@deepspaceinitiative.org" passHref={true}>
      <a><p>For additional questions, contact admin@deepspaceinitiative.org</p></a>
    </Link>
  </div>
</section>

  </>

  )
}
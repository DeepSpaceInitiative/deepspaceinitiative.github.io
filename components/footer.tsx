export default function Footer() {
  return ( 
    <>
{/* Footer */}
<footer id="footer">
{/* Icons */}
<ul className="icons">
  {/*						<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>*/}
  {/*						<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>*/}
  <li>
    <a
      href="https://www.instagram.com/deepspaceinitiative/"
      className="icon brands fa-instagram"
    >
      <span className="label">Instagram</span>
    </a>
  </li>
  <li>
    <a
      href="https://www.linkedin.com/company/deep-space-initiative/"
      className="icon brands fa-linkedin-in"
    >
      <span className="label">LinkedIn</span>
    </a>
  </li>
  <li>
    <a
      href="https://www.youtube.com/channel/UCJkzi5VWejU7DQ5V3zo24AQ"
      className="icon brands fa-youtube"
    >
      <span className="label">YouTube</span>
    </a>
  </li>
  {/*						<li><a href="#" class="icon brands fa-pinterest"><span class="label">Pinterest</span></a></li>*/}
</ul>
{/* Menu */}
<ul className="menu">
  <li>© DEEP SPACE INITIATIVE</li>
  <li>
    <a href="https://html5up.net">Design</a>
  </li>
</ul>
</footer>
</>
  );
}
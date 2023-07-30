import Image from "next/legacy/image";
import Link from "next/link";
import navLogo from 'public/images/nav_logo.png'

export default function Footer() {
  return (
    <>
{/* Footer */}
<footer>
  <div className="text-white md:p-12 justify-center"> 
    <div className="flex items-start justify-center p-4"> 
      <Link href="/" legacyBehavior>
        <div className="w-40 h-auto">
          <Image
            alt="DEEP SPACE INITIATIVE logo" 
            src={navLogo}
            layout="responsive" 
            objectFit="contain"
            priority={true}
          />
        </div>
      </Link>
      <div className="w-full"/>
      {/* Icons */}
      <div className="flex md:items-center md:justify-end justify-center md:w-1/2 w-full">
        <a
          href="https://www.instagram.com/deepspaceinitiative/"
          className="pr-20 icon brands fa-instagram"
        >
          <span className="label">Instagram</span>
        </a>
        <a
          href="https://www.linkedin.com/company/deep-space-initiative/"
          className="pr-20 icon brands fa-linkedin-in"
        >
          <span className="label">LinkedIn</span>
        </a>
        <a
          href="https://www.youtube.com/channel/UCJkzi5VWejU7DQ5V3zo24AQ"
          className="icon brands fa-youtube"
        >
          <span className="label">YouTube</span>
        </a>
      </div>
    </div>
  </div>
</footer>
</>
  );
}
import Image from "next/legacy/image";
import Link from "next/link";
import logoImage from 'public/images/nav_logo.svg'

export default function Footer() {
  return (
    <>
{/* Footer */}
<footer>
  <div className="md:flex-col flex text-white md:p-12 p-2 justify-center"> 
    <div className="md:flex flex-col items-center"> 
      <div className="md:w-1/2 w-full h-full">
        <div className="md:w-40 w-full h-full">
          <Link href="/" legacyBehavior>
            <Image 
              alt="DEEP SPACE INITIATIVE logo" 
              src={logoImage}
              layout='responsive'
              objectFit='contain'
              priority={true}
            />
          </Link>
        </div>
      </div>
      {/* Icons */}
      <div className="flex md:items-center md:justify-end justify-center md:w-1/2 w-full pb-4">
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
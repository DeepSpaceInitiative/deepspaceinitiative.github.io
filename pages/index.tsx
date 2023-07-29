import Image from "next/legacy/image"
import Link from 'next/link'
import mainImage from 'public/images/home_images/main.jpg'
import backgroundImage from 'public/images/home_images/home_background.png'
import researchImage from 'public/images/home_images/research.png'
import educationImage from 'public/images/home_images/education.jpg'
import legalImage from 'public/images/home_images/legal.jpg'

export default function Home() {
  return <>
{/* Intro */}
<section id="intro" className="main style1 dark fullscreen">
  <Image
      src={mainImage}
      layout='fill'
      objectFit='cover'
      priority={true}
      alt="Background Image"
  />
</section>
<div className="relative w-full h-full flex-col justify-between text-white">
  <div className="flex flex-col w-full overflow-y-scroll z-20 bg-transparent">
    <div className="absolute w-full h-full z-10">
      <Image
        src={backgroundImage}
        layout='responsive'
        objectFit='contain'
        priority={true}
        alt="Background Image"
      />
    </div>
    <div className="w-full h-full flex-col items-start justify-center pr-12 pl-12 pt-2">
      <div className="h-1/2 w-1/2">
        <h2 className="font-bold text-left">Our Vision</h2>
        <p className="text-left">
        Our goal is to enable deep space exploration while bringing more opportunity and accessibility for everyone around the world.
        </p>
      </div>
      <div className="h-80"/>
      <div className="h-64"/>
      <div className="h-full pb-32">
        <h2 className="font-bold text-center">Departments</h2>
        <p className="text-left">
        When setting up DSI we’ve explored the most pressing challenges to break into Space. Which is why narrowed down the first horizon of DSI around Research, Education and Legal. This is just our first step, tomorrow space will be truly unlimited.
        </p>
      </div>
    </div>

    {/* One */}
    <div className="w-full h-full flex z-20">
      <div className="w-1/2">
        <Image
            src={researchImage}
            layout='responsive'
            objectFit='contain'
            priority={true}
        />
        </div>
      <div className="w-1/2 h-full items-start p-8 flex-col">
        <div className="w-full h-1/2 flex-col items-center">
          <h2 className="text-left font-bold">Research</h2>
          <p className="text-left font-medium">Men</p>
        </div>
        <div className="w-full h-full pt-20">
          <Link href="/research">
            <button className='border-white border bg-black font-bold'>Learn More ></button>
          </Link>
        </div>
      </div>
    </div>

    {/* Two */}
    <div className="w-full h-full flex z-20">
      <div className="w-1/2 h-full items-start p-8 flex-col">
        <div className="w-full h-1/2 flex-col items-center">
          <h2 className="text-left font-bold">Education</h2>
          <p className="text-left font-medium">Enabling deep space exploration for the benefit of all Humankind</p>
        </div>
        <div className="w-full h-full pt-20">
          <Link href="/research">
            <button className='border-white border bg-black font-bold'>Learn More ></button>
          </Link>
        </div>
      </div>
      <div className="w-1/2 h-full aspect-auto">
        <Image
            src={educationImage}
            layout='responsive'
            objectFit='contain'
            priority={true}
        />
      </div>
      
    </div>

    {/* Three */}
    <div className="w-full h-full flex z-20">
      <div className="w-1/2 h-full aspect-auto">
        <Image
            src={legalImage}
            layout='responsive'
            objectFit='contain'
            priority={true}
        />
      </div>
      <div className="w-1/2 h-full items-start p-8 flex-col">
        <div className="w-full h-1/2 flex-col items-center">
          <h2 className="text-left font-bold">Legal</h2>
          <p className="text-left font-medium">Enabling deep space exploration for the benefit of all Humankind</p>
        </div>
        <div className="w-full h-full pt-20">
          <Link href="/research">
            <button className='border-white border bg-black font-bold'>Learn More ></button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
</>;
}

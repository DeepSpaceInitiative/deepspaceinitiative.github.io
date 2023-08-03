import { motion } from 'framer-motion';
import Image from "next/legacy/image"
import Link from 'next/link'
import mainImage from 'public/images/home_images/main.jpg'
import backgroundImage from 'public/images/home_images/home_background.png'
import researchImage from 'public/images/home_images/research.jpg'
import educationImage from 'public/images/home_images/education.jpg'
import legalImage from 'public/images/home_images/legal.jpg'
import { GetStaticProps } from 'next';

export default function Home() {
  return <>
<div className="relative w-full h-screen flex-col justify-between overflow-hidden">
  <motion.div 
       initial={{ opacity: 0, scale: 1 }}
       animate={{ opacity: 1, scale: 1.2 }}
       transition={{ duration: 3 }}
       className="absolute inset-0"
    >
    <Image
        src={mainImage}
        layout='fill'
        objectFit='cover'
        priority={true}
        alt="Background Image"
    />
  </motion.div>
</div>
<div className="relative w-full h-full flex-col justify-between text-white pb-16">
  <div className="flex flex-col w-full overflow-y-scroll z-20 bg-transparent">
    <div className="absolute w-full h-full z-10">
      <Image
        src={backgroundImage}
        layout='responsive'
        objectFit='contain'
        priority={true}
      />
    </div>
    <div className="w-full h-full flex-col items-start justify-center pr-12 pl-12 pt-2">
      <div className="h-1/2 sm:w-1/2 w-full">
        <h2 className="font-bold sm:text-left text-center">Our Vision</h2>
        <p className="sm:text-left text-center">
        Our goal is to enable deep Space exploration while bringing more opportunity and accessibility for everyone around the world.
        </p>
      </div>
      <div className="sm:h-80 h-20"/>
      <div className="sm:h-64"/>
      <div className="h-full pb-32">
        <h2 className="font-bold text-center">Departments</h2>
        <p className="sm:text-left text-center">
        When setting up DSI we’ve explored the most pressing challenges to break into Space. Which is why narrowed down the first horizon of DSI around Research, Education and Legal. This is just our first step, tomorrow Space will be truly unlimited.
        </p>
      </div>
    </div>

    {/* One */}
    <div className="w-full h-full sm:flex z-20">
      <div className="sm:w-1/2 w-full">
        <Image
            src={researchImage}
            layout='responsive'
            objectFit='contain'
            priority={true}
        />
        </div>
      <div className="sm:w-1/2 w-full h-full sm:items-start items-center sm:p-8 p-2 sm:flex-col flex">
        <div className="w-full h-1/2 flex-col items-center">
          <h2 className="text-left font-bold">Research</h2>
        </div>
        <div className="w-full h-full sm:pt-20">
          <Link href="/research/topics">
            <button className='border-white border bg-black font-bold'>Learn More {">"}</button>
          </Link>
        </div>
      </div>
    </div>

    {/* Two */}
    <div className="w-full h-full sm:flex z-20">
      <div className="sm:w-1/2 w-full sm:h-full hidden md:block sm:items-start items-center sm:p-8 p-2 sm:flex-col flex">
        <div className="w-full h-1/2 flex-col items-center">
          <h2 className="text-left font-bold">Education</h2>
          <p className="text-left font-medium">Enabling deep Space exploration for the benefit of all Humankind</p>
        </div>
        <div className="w-full h-full sm:pt-20">
          <Link href="/education/webinars/7tI3shjYB7vL6xIlWQWfUo">
            <button className='border-white border bg-black font-bold'>Learn More {">"}</button>
          </Link>
        </div>
      </div>
      <div className="sm:w-1/2 w-full">
        <Image
            src={educationImage}
            layout='responsive'
            objectFit='contain'
            priority={true}
        />
      </div>
      <div className="sm:w-1/2 w-full sm:h-full md:hidden sm:items-start items-center sm:p-8 p-2 sm:flex-col flex">
        <div className="w-full h-1/2 flex-col items-center">
          <h2 className="text-left font-bold">Education</h2>
          <p className="text-left font-medium">Enabling deep Space exploration for the benefit of all Humankind</p>
        </div>
        <div className="w-full h-full sm:pt-20">
          <Link href="/education/webinars/7tI3shjYB7vL6xIlWQWfUo">
            <button className='border-white border bg-black font-bold'>Learn More {">"}</button>
          </Link>
        </div>
      </div>
    </div>

    {/* Three */}
    {/* <div className="w-full h-full sm:flex z-20">
      <div className="sm:w-1/2 w-full">
        <Image
            src={legalImage}
            layout='responsive'
            objectFit='contain'
            priority={true}
        />
      </div>
      <div className="sm:w-1/2 w-full h-full sm:items-start items-center sm:p-8 p-2 sm:flex-col flex">
        <div className="w-full h-1/2 flex-col items-center">
          <h2 className="text-left font-bold">Legal</h2>
          <p className="text-left font-medium">Enabling deep Space exploration for the benefit of all Humankind</p>
        </div>
        <div className="w-full h-full sm:pt-20">
          <Link href="/research">
            <button className='border-white border bg-black font-bold'>Learn More {">"}</button>
          </Link>
        </div>
      </div>
    </div> */}
  </div>
</div>
</>;
}

export const getStaticProps: GetStaticProps = async(context) => {
  return {
    props: { relativeNavBar: true },
  }
}

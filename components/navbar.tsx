import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const makeNavigationItem = (props: {title: string, link: string}) => {
    return <>
        <li>  
          <Link href={props.link}>
            <button
              className="p-0-0 text-white rounded-md outline-none hover:bg-black"
              onClick={() => setNavbar(!navbar)}
            >
              <a className="text-white">{props.title.toUpperCase()}</a>
            </button>
          </Link>
        </li>
    </>
  }

  return (
    <nav className="w-full bg-black shadow sticky top-0 z-50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between md:block">
            <Link href='/'>
              <a><h1 className='text-white font-bold'>DEEP SPACE INITIATIVE</h1></a>
            </Link>
            <div className="md:hidden">
              <button
                className="p-auto text-white bg-black hover:bg-black rounded-md outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                  >
                      <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                          fill="white"
                          stroke="white"
                      />
                  </svg>
                ) : (
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                  >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="white"
                          stroke="white"
                          d="M4 6h16M4 12h16M4 18h16"
                      />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x- md:space-y-0">
              {makeNavigationItem({title: "about us", link: "/about_us"})}
              {makeNavigationItem({title: "research", link: "/research_programs"})}
              {makeNavigationItem({title: "news", link: "/blogs"})}
              {makeNavigationItem({title: "careers", link: "/careers"})}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
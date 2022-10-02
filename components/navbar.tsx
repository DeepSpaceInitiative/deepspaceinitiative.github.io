import { Button, Navbar } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { initCollapse } from "./Collapse";
import { initDropdown } from "./Dropdown";

const makeNavigationItem = (props: {title: string, link: string}) => {
  const router = useRouter();
  const styles = {
    active: "py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 text-white  transition-all leading-8",
    normal: "cursor-pointer py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent transition-all"
  };
  return (<Link href={props.link}>
            <span className={router.pathname == props.link ? styles.active : styles.normal}>{props.title.toUpperCase()}</span>
        </Link>);
}
initCollapse();
initDropdown();
export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  // return (<Navbar
  //   fluid={true}
  //   rounded={true}
  // >
  //   <Navbar.Brand href="/">
  //     <span className="self-center text-xl font-semibold whitespace-nowrap text-white">DEEP SPACE INITIATIVE</span>
  //   </Navbar.Brand>
  //   <Navbar.Collapse>
  //     <Navbar.Link
  //       href="/navbars"
  //       active={true}
  //     >
  //       Home
  //     </Navbar.Link>
  //     <Navbar.Link href="/navbars">
  //       About
  //     </Navbar.Link>
  //     <Navbar.Link href="/navbars">
  //       Services
  //     </Navbar.Link>
  //     <Navbar.Link href="/navbars">
  //       Pricing
  //     </Navbar.Link>
  //     <Navbar.Link href="/navbars">
  //       Contact
  //     </Navbar.Link>
  //   </Navbar.Collapse>
  // </Navbar>
  // );

  return (<nav className="bg-white px-2 sm:px-4 py-2.5 rounded bg-black">
  <div className="relative container flex flex-wrap justify-between items-center mx-auto">
      <Link href='/'>
  <span className="flex items-center cursor-pointer">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">DEEP SPACE INITIATIVE</span>
              </span>
            </Link>
        
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto absolute md:static z-10 top-10 left-0 bg-black ml-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 align-baseline">
        <li>{makeNavigationItem({title: "about us", link: "/about_us"})}</li>
        <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex justify-between items-center pr-4 pl-3 w-full">
            {makeNavigationItem({title: "research", link: "/research_programs"})} <svg className="ml-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
            <div id="dropdownNavbar" className="hidden z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                </ul>
                <div className="py-1">
                  <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                </div>
            </div>
        </li>
        <li>{makeNavigationItem({title: "news", link: "/blogs"})}</li>
        <li>{makeNavigationItem({title: "careers", link: "/careers"})} </li>
      </ul>
    </div>
  </div>
</nav> ); 

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
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
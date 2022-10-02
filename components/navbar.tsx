import { Navbar } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NavBar() {
  const makeNavigationItem = (props: {title: string, link: string, index: number}) => {
    const router = useRouter();
    return <Link href={props.link}>
     <Navbar.Link 
      isActive={router.pathname == props.link} 
      href={props.link}
      onClick={() => HandleSideMenu(false, props.index)}>
        <span>{props.title}</span>
      </Navbar.Link>
    </Link>
  }
  const [navbar, _] = useState(false);
  interface NavItem {
    title: string
    link: string
  }
  const router = useRouter();
  const navItems: NavItem[] = [
    {title: "ABOUT US", link: "/about_us"},
    {title: "RESEARCH", link: "/research_programs"},
    {title: "NEWS", link: "/blogs"},
    {title: "CAREERS", link: "/careers"}
  ]
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
	const [activeMenu, setActiveMenu] = useState(undefined as number | undefined)
	const menuItems = [
		{ label: 'Menu Link 1', link: '#lorem2' },
		{ label: 'Menu Link 2', link: '#lorem3' },
	]

	// Required
	// this is how we enable again scroll after closing Navbar.Collapse
	// when we dont click the Navbar.Toggle button
	useEffect(() => {
		document.body.style.overflow = null
		isSideMenuOpen && (document.body.style.overflow = 'hidden')
	}, [isSideMenuOpen])

  // Flag is just to know if we are navigating from Navbar.Collapse or CollapseItem links
	// any other place should not toggle the state of Navbar.Collapse
	// pass the flag={true} to toggle side menu
	const HandleSideMenu = (flag = false, index: number | undefined = undefined) => {
		setActiveMenu(index)
		flag && setIsSideMenuOpen(!isSideMenuOpen)
		isSideMenuOpen && setIsSideMenuOpen(false)
	}

  return (<Navbar
    isCompact
    disableBlur
    variant="sticky"
  >
    <Navbar.Content>
      <Navbar.Link href="/">
        <Link href="/">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">DEEP SPACE INITIATIVE</span>
        </Link>
      </Navbar.Link>
    </Navbar.Content>
    <Navbar.Content enableCursorHighlight="true" hideIn="xs">
      {makeNavigationItem({title: "ABOUT US", link: "/about_us", index: 0})}
      {makeNavigationItem({title: "RESEARCH", link: "/research_programs", index: 1})}
      {makeNavigationItem({title: "NEWS", link: "/blogs", index: 2})}
      {makeNavigationItem({title: "CAREERS", link: "/careers", index: 3})}
    </Navbar.Content>
    <Navbar.Collapse isOpen={isSideMenuOpen}>
      {navItems.map((item, index) => (
        <Navbar.CollapseItem 
          key={item.link} 
          isActive={router.pathname == item.link}
          onClick={() => HandleSideMenu(true, index)}
        >
          <Link
            color="inherit"
            href={item.link}
          >
            {item.title}
          </Link>
        </Navbar.CollapseItem>
      ))}
    </Navbar.Collapse>
    <Navbar.Brand showIn="xs">
      <Navbar.Toggle 
        aria-label="toggle navigation" 
        isSelected={isSideMenuOpen}
				onChange={() => HandleSideMenu(true, activeMenu)}/>
    </Navbar.Brand>
  </Navbar>
  );
}

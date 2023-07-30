import { Dropdown, Navbar } from "@nextui-org/react";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import navLogo from 'public/images/nav_logo.png';

export default function NavBar() {
  const router = useRouter();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
	const [activeMenu, setActiveMenu] = useState(undefined as string | undefined)
  const [selectedDropdown, _] = useState(new Set([""]));

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
	const HandleSideMenu = (flag = false, index: string | undefined = undefined) => {
		setActiveMenu(index)
		flag && setIsSideMenuOpen(!isSideMenuOpen)
		isSideMenuOpen && setIsSideMenuOpen(false)
	}

  const makeNavigationItem = (props: {title: string, link: string}) => {
    const isActive = router.pathname == props.link
    return <Link href={props.link} legacyBehavior>
      <Navbar.Link 
      isActive={isActive}
      href={props.link}
      onClick={() => HandleSideMenu(false, props.link)}>
        <span style={{fontWeight: 'bold'}}>{props.title}</span>
      </Navbar.Link>
    </Link>
  }

  const collapsableItems  = () => {
    const navItems = [
      {title: "CORE TEAM", link: "/teams/core"}, 
      {title: "ADVISORS", link: "/teams/advisors"},
      {title: "SUPERVISORS", link: "/teams/supervisors"},
      {title: "RESEARCH TOPICS", link: "/research/topics"},
      {title: "RESEARCH PROGRAMS", link: "/research/programs"},
      {title: "WEBINARS", link: "/education/webinars/7tI3shjYB7vL6xIlWQWfUo"},
      {title: "NEWS", link: "/blogs"},
      {title: "CAREERS", link: "/careers"}
    ]
    return navItems.map((item, index) => {
      const isActive = router.pathname == item.link
      return <Navbar.CollapseItem 
        key={item.link} 
        isActive={isActive}
        onClick={() => HandleSideMenu(true, item.link)}
      >
        <Link href={item.link} legacyBehavior style={{fontWeight: 'bold'}}>
          {item.title}
        </Link>
      </Navbar.CollapseItem>
    });
  }

  const makeDropDownItem = (props: {title: string, link: string, description: string}) => {
    const isActive = router.pathname == props.link
    return (
      <Dropdown.Item key={props.link} description={props.description} showFullDescription>
          <Link href={props.link} legacyBehavior style={{fontWeight: 'bold'}}>
            <Navbar.Link 
              isActive={isActive} 
              href={props.link}
            >
              <span style={{fontWeight: 'bold'}}>{props.title}</span>
            </Navbar.Link>
          </Link>
        </Dropdown.Item>
    );
  }

  const makeDropDown = (props: {
    section: {title: string}, 
    dropdownItems: {title: string, link: string, description: string}[]
  }) => {
    return <Dropdown isBordered type="listbox">
      <Navbar.Item>
        <Dropdown.Button
          ripple={false}
          css={{
            px: 0,
            dflex: "center",
            svg: { pe: "none" },
          }}
        >
          <span style={{fontWeight: 'bold'}}>{props.section.title}</span>
        </Dropdown.Button>
      </Navbar.Item>
      <Dropdown.Menu 
        aria-label="Single selection actions"
        selectionMode="single"
        selectedKeys={selectedDropdown}
        onAction ={(route) => { if (router.toString() != router.pathname) { router.push(route.toString()) }}}
        css={{
          $$dropdownMenuWidth: "340px",
          $$dropdownItemHeight: "70px",
          "& .nextui-dropdown-item": {
            py: "$4",
            // dropdown item left icon
            svg: {
              color: "$secondary",
              mr: "$4",
            },
            // dropdown item title
            "& .nextui-dropdown-item-content": {
              w: "100%",
            },
          },
        }}
      >
        {props.dropdownItems.map(dropdownItem => makeDropDownItem(dropdownItem))}
      </Dropdown.Menu>
    </Dropdown>
  }

  return <Navbar variant="static">
      <Navbar.Content >
        <Navbar.Link>
          <Link href="/" legacyBehavior>
            <div className="w-24 h-24 pt-6">
              <Image
                className="w-1 h-auto"
                alt="DEEP SPACE INITIATIVE logo" 
                src={navLogo}
                layout="responsive" 
                objectFit="contain"
                priority={true}
              />
            </div>
          </Link>
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content enableCursorHighlight="true" hideIn="xs">
        {makeDropDown({
          section: {title: "ABOUT US"}, 
          dropdownItems: [
            {title: "CORE TEAM", link: "/teams/core", description: ""}, 
            {title: "ADVISORS", link: "/teams/advisors", description: ""},
            {title: "SUPERVISORS", link: "/teams/supervisors", description: ""}
          ]}
        )}
        {makeDropDown({
          section: {title: "RESEARCH"}, 
          dropdownItems: [
            {title: "TOPICS", link: "/research/topics", description: "Explore available topics"}, 
            {title: "PROGRAMS", link: "/research/programs", description: "Join our research teams by appplying to available programs"}
          ]}
        )}
        {makeDropDown({
          section: {title: "EDUCATION"}, 
          dropdownItems: [
            {title: "WEBINARS", link: "/education/webinars/7tI3shjYB7vL6xIlWQWfUo", description: "Explore previous webinars"},
          ]}
        )}
        {makeNavigationItem({title: "NEWS", link: "/blogs"})}
        {makeNavigationItem({title: "CAREERS", link: "/careers"})}
      </Navbar.Content>
      <Navbar.Collapse isOpen={isSideMenuOpen}>
        {collapsableItems()}
      </Navbar.Collapse>
      <Navbar.Brand showIn="xs">
        <Navbar.Toggle 
          aria-label="toggle navigation" 
          isSelected={isSideMenuOpen}
          onChange={() => HandleSideMenu(true, activeMenu)}/>
      </Navbar.Brand>
    </Navbar>
}

import Navbar from './navbar'
import Footer from './footer'
import { ReactNode } from 'react'

type Props = {
  relativeNavBar: boolean;
  children: ReactNode;
};

const Layout = ({ children, relativeNavBar }: Props) => {
  if (relativeNavBar) {
    return <>
      <div className={relativeNavBar ? "relative": ""}>
        <div className="fixed left-0 z-50 w-full bg-transparent">
          <Navbar />
        </div>
        <div>{children}</div>
        <Footer />
      </div>
    </>
  } else {
    return <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  }
}

export default Layout;
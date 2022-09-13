import Navbar from './navbar'
import Footer from './footer'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout;
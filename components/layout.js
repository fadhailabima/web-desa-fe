import Navbar from './navbar.js'
import Footer from './footer'
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

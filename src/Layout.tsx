import Header from './components/LayoutComponents/Header'
import Footer from './components/LayoutComponents/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout

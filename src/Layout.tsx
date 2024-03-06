import Header from './components/LayoutComponents/Header'
import Footer from './components/LayoutComponents/Footer'
import { Outlet } from 'react-router-dom'
import { Toaster } from './components/ui/toaster'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster />
      <Footer />
    </>
  )
}

export default Layout

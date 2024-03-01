import Gallery from '../components/Gallery/Gallery'
import Hero from '../components/MainPageComponents/Hero'
import Statistics from '../components/MainPageComponents/Statistics'
import Testimonials from '../components/MainPageComponents/Testimonials'
import Features from '../components/MainPageComponents/Features'

const MainPage = () => {
  return (
    <main>
      <Hero />
      <Statistics />
      <Gallery />
      <Features />
      <Testimonials />
    </main>
  )
}

export default MainPage

import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Services } from './components/Services'
import { Territories } from './components/Territories'
import { Gallery } from './components/Gallery'
import { Approach } from './components/Approach'
import { BrandSignature } from './components/ui/Logo'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Territories />
        <Gallery />
        <BrandSignature />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

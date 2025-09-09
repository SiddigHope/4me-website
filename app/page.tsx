'use client'

// import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Values from './components/Values'
import Partners from './components/Partners'
// import PartnersPage from './components/PartnersPage'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Values/>
      <About />
      <Partners/>
      <Footer />
    </main>
  )
}
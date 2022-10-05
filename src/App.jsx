import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Achievement from './components/achievement/Achievement'
// import Youtube_Blogs from './components/youtube_Blogs/Youtube_Blogs'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Achievement/>
    {/* <Youtube_Blogs/> */}
    <Contact/>
    <Footer/>
    </>
  )
}

export default App

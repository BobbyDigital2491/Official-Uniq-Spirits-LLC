import React from 'react'
import Seo from '../components/Seo'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Nav2 from '../components/Nav2'

const contact = () => {
  return (
    <div className='bg-black'>
        <Seo title={"U'NiQ Spirits"} 
      description={"Welcome to U'NiQ Spirits."} 
      image={"public/monkey.png"} 
      url={"CH91.com"}  />
      <Nav2/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default contact


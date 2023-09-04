import React from 'react'
import Seo from '../components/Seo'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import AHero from '../components/AHero'
import Nav2 from '../components/Nav2'
import NineOne from '../components/NineOne'
import NineTwo from '../components/NineTwo'

const about = () => {
  return (
    <div>
      <Seo title={"U'NiQ Spirits"} 
      description={"About Us."} 
      image={"UNIQ.jpg"} 
      url={"drinkuniq.com"}  />
      <Nav2/>
     
      <AHero/>
      <NineOne/>
      <Gallery/>
      <NineTwo/>
      <Footer/>
      
    </div>
  )
}

export default about


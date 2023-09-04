/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Nav from '../components/Nav'
import Seo from '../components/Seo'
import About from '../components/About'
import NineOne from '../components/NineOne'
import NineTwo from '../components/NineTwo'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import AHero from '../components/AHero'

const about = () => {
  return (
    <div className='bg-black'>
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

/* eslint-disable @next/next/no-img-element */
import React from 'react'

const AHero = () => {
  return (
    <div>
      <section className="bg-white dark:bg-black">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-white">
        
        <span className="font-serif italic font-normal text-8xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-yellow-900 ">About<span className='text-red-500'>Us</span></span>
            <p className="mb-4">
              Welcome to the world of U&apos;NiQ Craft Wine, where passion meets craftsmanship
              in every bottle. We are a vibrant and dynamic winery dedicated to redefining the 
              art of winemaking. With a blend of tradition and innovation, we strive to create 
              an extraordinary experience for wine enthusiasts and connoisseurs alike.
              </p>
            
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="Shop.jpg" alt="office content 1"/>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="Shelf.jpeg" alt="office content 2"/>
        </div>
    </div>
</section>    
    </div>
  )
}

export default AHero

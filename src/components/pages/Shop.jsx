import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../popular/popular'
import Offer from '../Offer/Offer'
import NewCollections from '../NewCollectons/NewCollections'
import NewLetter from '../NewLetter/NewLetter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollections/>
      <NewLetter/>
    </div>
  )
}

export default Shop
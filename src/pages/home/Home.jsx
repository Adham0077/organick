import React from 'react'
import { Hero } from './Hero'
import { MinHero } from './MinHero'
import { Farmer } from './Farmer'
import { Product } from './Product'
import { Customer } from './Customer'

export const Home = () => {
  return (
    <div>
        <Hero />
        <MinHero />
        <Farmer />
        <Product />
        <Customer />
    </div>
  )
}

import React from 'react'
import { MinBannerAll } from '../../components/MinBannerAll'
import baner from "../../assets/aboute-svg/AbouteBan.png"
import { Success } from './Success'
import { Offer } from './Offer'
import { Market } from './Market'
import { Expert } from './Expert'

export const About = () => {
  return (
    <div>
      <MinBannerAll banerImg={baner} title={"Aboute Us"} />
      <Success />
      <Market />
      <Expert />
      <Offer />
    </div>
  )
}

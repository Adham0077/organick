import React from 'react'
import hero from "../../assets/home-img-svg/Hero.png"
import { Button } from '../../components/Button'

export const Hero = () => {
    return (
        <div className='relative'>
            <img className='w-full' src={hero} alt="img" />
            <div className='w-[530px] absolute left-[462px] top-1/2 -translate-1/2'>
                <h3 className='font-third-family text-MainGreen font-normal text-4xl'>
                    100% Natural Food
                </h3>
                <h1 className='text-[70px] font-bold mb-6 mt-2'>
                    Choose the best healthier way of life
                </h1>
                <Button text={"Explore Now"} bgcolor='bg-MainYellow' textcolor='text-main' />
            </div>
        </div>
    );
}

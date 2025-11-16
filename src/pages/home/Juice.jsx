import React from 'react'
import img1 from '../../assets/home-img-svg/Juice1.png'
import img2 from '../../assets/home-img-svg/Juice2.png'
import img3 from '../../assets/home-img-svg/Juice3.png'
import { Button } from '../../components/Button'

export const Juice = () => {
    return (
        <>
            <div className='bg-[#f1f8f4] py-45'>
                <div className='flex gap-10'>
                    <div className='w-[612px] h-[563px] flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover'
                        style={{ backgroundImage: `url(${img1})` }}>
                        <Button text={"Organic Juice"} bgcolor={'bg-white'} textcolor={'bg-main'} />
                    </div>

                    <div className='w-[612px] h-[563px] flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover'
                        style={{ backgroundImage: `url(${img2})` }}>
                        <Button text={"Organic Food"} bgcolor={'bg-white'} textcolor={'bg-main'} />
                    </div>

                    <div className='w-[612px] h-[563px] flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover'
                        style={{ backgroundImage: `url(${img3})` }}>
                        <Button text={"Nuts Cookis"} bgcolor={'bg-white'} textcolor={'bg-main'} />
                    </div>
                </div>
            </div>
        </>
    )
}

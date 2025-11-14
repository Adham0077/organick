import React from 'react'
import minhero1 from "../../assets/home-img-svg/MinHero1.png"
import minhero2 from "../../assets/home-img-svg/MinHero2.png"


export const MinHero = () => {
  return (
    <div className="container">
        <div className="flex justify-between mt-[154px] mb-[190px]">
            <div className='relative'>
                <img className='w-[682px] h-[367px]' src={minhero1} alt="img" />
                <div className='w-[277px] absolute left-[189px] top-1/2 -translate-1/2'>
                    <h3 className='font-third-family text-white font-normal text-4xl'>Natural!!</h3>
                    <h2 className='text-[40px] text-white font-bold mt-1'>Get Garden Fresh Fruits</h2>
                </div>
            </div>
            <div className='relative'>
                <img className='w-[682px] h-[367px]' src={minhero2} alt="img" />
                <div className='w-[277px] absolute left-[189px] top-1/2 -translate-1/2'>
                    <h3 className='font-third-family text-MainGreen font-normal text-4xl'>Offer!!</h3>
                    <h2 className='text-[40px] font-bold mt-1'>Get 10% off on Vegetables</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

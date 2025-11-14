import React from 'react'
import FarmerImg from "../../assets/home-img-svg/Farmer.png"
import { FarmerIcon1 } from '../../assets/home-img-svg/FarmerIcon1'
import { FarmerIcon2 } from '../../assets/home-img-svg/FarmerIcon2'
import { Button } from '../../components/Button'

export const Farmer = () => {
    return (
        <div className='relative'>
            <img src={FarmerImg} alt="img" />
            <div className='w-[700px] absolute right-[210px] top-1/2 -translate-y-1/2'>
                <h3 className='font-third-family text-MainGreen font-normal text-4xl'>About Us</h3>
                <h2 className='w-[530px] text-[50px] font-bold mt-2 mb-3'>We Believe in Working Accredited Farmers</h2>
                <p className='text-[18px] font-normal text-MainGrey mb-[46px]'>
                    Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </p>
                <ul className='flex gap-5'>
                    <li><FarmerIcon1 /></li>
                    <li>
                        <h4 className='text-[25px] font-bold'>Organic Foods Only</h4>
                        <p className='w-[444px] text-[18px] font-normal text-MainGrey'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    </li>
                </ul>
                <ul className='flex gap-5 mt-[30px] mb-[46px]'>
                    <li><FarmerIcon2 /></li>
                    <li>
                        <h4 className='text-[25px] font-bold'>Organic Foods Only</h4>
                        <p className='w-[444px] text-[18px] font-normal text-MainGrey'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    </li>
                </ul>
                <Button text={"Shop Now"} />
            </div>
        </div>
    )
}

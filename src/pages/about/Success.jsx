import React from 'react'
import Img from "../../assets/aboute-svg/SuccessImg.png"
import { SuccessIcon1 } from '../../assets/aboute-svg/SuccessIcon1'
import { SuccessIcon2 } from '../../assets/aboute-svg/SuccessIcon2'
import { Button } from '../../components/Button'

export const Success = () => {
    return (
        <div className='flex items-center gap-6'>
            <div className='w-[900px] h-[900px]'>
                <img src={Img} alt="img" />
            </div>
            <div className='w-[700px]'>
                <h3 className='font-third-family text-MainGreen font-normal text-4xl'>About Us</h3>
                <h2 className='w-[530px] text-[50px] font-extrabold mt-2 mb-3'>We do Creative Things for Success</h2>
                <p className='text-[18px] font-normal text-MainGrey mb-[46px]'>
                    Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </p>
                <p className='text-[18px] font-normal text-MainGrey mb-[46px]'>
                    Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </p>
                <div className='flex gap-[65px] mt-[30px] mb-[46px]'>
                    <ul className='flex gap-5 w-[302px]'>
                        <li><SuccessIcon1 /></li>
                        <li>
                            <h4 className='text-[25px] font-medium'>
                                Modern Agriculture Equipment
                            </h4>
                        </li>
                    </ul>
                    <ul className='flex gap-5 w-[302px]'>
                        <li><SuccessIcon2 /></li>
                        <li>
                            <h4 className='text-[25px] font-medium'>
                                No growth hormones are used
                            </h4>
                        </li>
                    </ul>
                </div>
                <Button text={"Explore More"} />
            </div>
        </div>
    )
}

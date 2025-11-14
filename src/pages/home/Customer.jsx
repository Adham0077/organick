import React from 'react'
import customer from "../../assets/home-img-svg/Customer.png"
import customerIcon from "../../assets/home-img-svg/CustomerIcon.png"
import { CustomerStar } from '../../assets/home-img-svg/CustomerStar'

export const Customer = () => {
    return (
        <div className='relative'>
            <img src={customer} alt="img" />
            <div className='w-[1108px] absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2'>
                <div className='w-[780px] text-center items-center mx-auto'>
                    <h3 className='font-third-family text-MainGreen font-normal text-center text-4xl'>Testimonial</h3>
                    <h2 className="text-[50px] font-bold text-center mb-6">What Our Customer Saying?</h2>
                    <img className='w-[115px] h-[115px] mx-auto mb-3' src={customerIcon} alt="icon" />
                    <div className='mx-auto inline-block'>
                        <CustomerStar />
                    </div>
                    <p className='text-[18px] font-normal text-MainGrey my-5'>
                        Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                    </p>
                    <h4 className='text-[25px] font-semibold'>Sara Taylor</h4>
                    <p className='text-[15px] font-normal text-MainGrey my-2'>Consumer</p>
                    <span className='border border-gray-300 block w-full my-[102px]'></span>
                </div>
                <ul className='flex justify-between'>
                    <li className='w-[211px] h-[211px] border-2 border-MainGreen bg-gray-200 text-center flex flex-col justify-center items-center rounded-full'>
                        <h4 className="text-[50px] font-bold">100%</h4>
                        <p className='text-[18px] font-normal text-MainGrey'>Organic</p>
                    </li>
                    <li className='w-[211px] h-[211px] border-2 border-MainGreen bg-gray-200 text-center flex flex-col justify-center items-center rounded-full'>
                        <h4 className="text-[50px] font-bold">285</h4>
                        <p className='text-[18px] font-normal text-MainGrey'>Active Product</p>
                    </li>
                    <li className='w-[211px] h-[211px] border-2 border-MainGreen bg-gray-200 text-center flex flex-col justify-center items-center rounded-full'>
                        <h4 className="text-[50px] font-bold">350+</h4>
                        <p className='text-[18px] font-normal text-MainGrey'>Organic Orchads</p>
                    </li>
                    <li className='w-[211px] h-[211px] border-2 border-MainGreen bg-gray-200 text-center flex flex-col justify-center items-center rounded-full'>
                        <h4 className="text-[50px] font-bold">25+</h4>
                        <p className='text-[18px] font-normal text-MainGrey'>Years of Farming</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

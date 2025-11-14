import React from 'react'
import { Logo } from '../../assets/Logo'
import { Link } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Search } from '../../assets/header-svg/Search'
import { Basket } from '../../assets/header-svg/Basket'

export const Header = () => {
    return (
        <div>
            <div className="container">
                <div className='flex justify-between items-center my-[69px]'>
                    <Link to={"/"}> <Logo /> </Link>
                    <Navbar />
                    <div className='flex gap-4 '>
                        <div className='flex bg-gray-100 rounded-4xl relative'>
                            <input className='pl-4 pr-16 rounded-4xl w-[370px]' type="text" />
                            <button className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full cursor-pointer">
                                <Search />
                            </button>
                        </div>
                        <div className='flex gap-3 pr-3 items-center border border-gray-300 rounded-4xl'>
                            <button className='cursor-pointer'>
                                <Basket />
                            </button>
                            <p className='text-[18px] font-semibold'>Cart (0)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

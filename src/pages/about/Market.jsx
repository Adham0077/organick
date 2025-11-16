import React from 'react';
import Img from '../../assets/aboute-svg/MarketImg.png'
import { MarketIcon1 } from '../../assets/aboute-svg/MarketIcon1';
import { MarketIcon2 } from '../../assets/aboute-svg/MarketIcon2';
import { MarketIcon3 } from '../../assets/aboute-svg/MarketIcon3';
import { MarketIcon4 } from '../../assets/aboute-svg/MarketIcon4';

export const services = [
    {
        id: 1,
        icon: <MarketIcon1 />,
        title: 'Return Policy',
        description: 'Simply dummy text of the printintypesetting industry.'
    },

    {
        id: 2,
        icon: <MarketIcon2 />,
        title: '100% Fresh',
        description: 'Simply dummy text of the printing and typesetting industry.'
    },
    {
        id: 3,
        icon: <MarketIcon3 />,
        title: 'Support 24/7',
        description: 'Simply dummy text of the printing and typesetting industry.'
    },
    {
        id: 4,
        icon: <MarketIcon4 />,
        title: 'Secured Payment',
        description: 'Simply dummy text of the printing and typesetting industry.'
    },
];

export const Market = () => {
    return (
        <div className="py-34 bg-gray-50">
            <div className="container px-24">
                <div className="grid grid-cols-2 gap-16 items-center mb-20">
                    <div>
                        <p className='text-4xl font-third-family text-MainGreen mb-2'>Why Choose us?</p>
                        <h2 className='text-[50px] font-extrabold mt-2 mb-3'>
                            We do not buy from the open market & traders.
                        </h2>
                        <p className="text-MainGrey mb-8">
                            Simply dummy text of the printing and typesetting. Lorem had ceased to been the industry's standard the 1500s, when an unknown
                        </p>

                        <div className="flex items-start mb-4">
                            <span className="
            inline-flex items-center py-4 px-6 bg-gray-200 rounded-full               
            text-sm font-semibold mr-3 whitespace-nowrap">
                                <div className="
            w-3 h-3 border-2 border-teal-500 rounded-full 
            flex items-center justify-center mr-2">
                                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                                </div>
                                100% Natural Product
                            </span>
                        </div>

                        <p className="text-sm text-MainGrey mb-2 ml-8">
                            Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing
                        </p>

                        <div className="flex items-start mb-4">
                            <span className="
            inline-flex items-center py-4 px-6 bg-gray-200 rounded-full               
            text-sm font-semibold mr-3 whitespace-nowrap">
                                <div className="
            w-3 h-3 border-2 border-teal-500 rounded-full 
            flex items-center justify-center mr-2">
                                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                                </div>
                                Increases resistance
                            </span>
                        </div>


                        <div className="flex items-start">

                            <div>


                                <p className="text-sm text-MainGrey mt-1 ml-8">
                                    Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative rounded-xl">
                        <img
                            src={Img}
                            alt="img"
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>
                </div>

                <div className="w-[1100px] mx-auto grid grid-cols-4 gap-1">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white w-[260px] p-8 rounded-xl border border-gray-100 text-center"
                        >
                            <div className="
                w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-lg 
                flex items-center justify-center text-3xl border">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                            <p className="text-sm text-MainGrey">{service.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

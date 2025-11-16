import React from 'react'
import pr1 from '../../assets/aboute-svg/Offer1.png'
import pr2 from '../../assets/aboute-svg/Offer2.png'
import pr3 from '../../assets/aboute-svg/Offer3.png'
import pr4 from '../../assets/aboute-svg/Offer4.png'


export const Offer = () => {
    const offers = [
        {
            id: 1,
            img: pr1,
            title: "Spicy"
        },
        {
            id: 2,
            img: pr2,
            title: "Nuts & Feesd"
        },
        {
            id: 3,
            img: pr3,
            title: "Fruits"
        },
        {
            id: 4,
            img: pr4,
            title: "Vegetable"
        }
    ]

    return (
        <div className='bg-main'>
            <div className='container py-45'>
                <div className='flex flex-col justify-center items-center'>

                    <p className='text-4xl font-third-family text-MainGreen mb-2'>About Us</p>
                    <h3 className='text-5xl font-extrabold text-white'>We Offer Organic For You</h3>

                </div>
                <div className="grid grid-cols-4 gap-4 mt-12 text-center text-white text-2xl font-medium">
                    {offers.map((item) => (
                        <div key={item.id}>
                            <div className='w-[324px] h-[314px] bg-white mb-3 rounded-2xl'>
                                <img src={item.img} alt="img" />
                            </div>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { organics } from '../../data/product'
import { Button } from '../../components/Button';
import { ProductCard } from '../../components/ProductCard';


export const Organic = () => {
    return (
        <>
            <div className='bg-main'>
                <div className='container py-50'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='text-4xl font-third-family text-MainGreen mb-2'>Offer</p>
                            <h3 className='text-5xl font-extrabold text-white'>We Offer Organic For You</h3>
                        </div>
                        <Button text={"View All Product"} bgcolor='bg-MainYellow' textcolor='text-main' />
                    </div>
                    <div className="grid grid-cols-4 gap-6 mt-12">
                        {organics.map((item) => (
                            <ProductCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

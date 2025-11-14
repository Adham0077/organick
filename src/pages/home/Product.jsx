import React from 'react'
import { ProductCard } from '../../components/ProductCard'
import { products } from '../../data/product'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export const Product = () => {
    return (
        <div className="container my-[200px]">
            <h3 className='font-third-family text-MainGreen font-normal text-center text-4xl'>Categories</h3>
            <h2 className="text-[50px] font-bold text-center mb-6">Our Products</h2>

            <div className="grid grid-cols-4 gap-4 mb-[113px]">
                {products.map(item => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
            <Link to={"/"} className=''>
                <Button text={"Load More"} classname='mx-auto' />
            </Link>
        </div>
    )
}

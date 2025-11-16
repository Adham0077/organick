import React from 'react'
import baner from "../../assets/shop-svg/ShopBan.png"
import { MinBannerAll } from '../../components/MinBannerAll'
import { products, fresh } from '../../data/product'
import { ProductCard } from '../../components/ProductCard'

export const Shop = () => {
    return (
        <div>
            <MinBannerAll banerImg={baner} title={"Shop"} />
            <div className="container grid grid-cols-4 gap-8 my-[90px]">
                {products.map(item => (
                    <ProductCard key={item.id} item={item} />
                ))}
                {fresh.map(item => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

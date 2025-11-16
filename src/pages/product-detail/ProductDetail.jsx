import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { products, organics } from '../../data/product';
import baner from "../../assets/product-detail-svg/Ban.png"
import { Button } from '../../components/Button';
import { MinBannerAll } from '../../components/MinBannerAll';

export const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    let selectedProduct = products.find((b) => b.id === Number(id));
    if (!selectedProduct) {
        selectedProduct = organics.find((b) => b.id === Number(id));
        if (!selectedProduct) {
            <h1>Not Found</h1>
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">
            <MinBannerAll banerImg={baner} title={"Shop Single"} />

            <div className="container px-4 py-16">
                <div className="grid grid-cols-2 gap-12">
                    <div className="relative">
                        <div className="bg-gray-50 rounded-lg p-6">
                            <span className="absolute top-4 left-4 bg-main text-white px-3 py-1 rounded text-sm font-medium">
                                {selectedProduct.category}
                            </span>
                            <img
                                src={selectedProduct.img}
                                alt={selectedProduct.name}
                                className="w-full h-96 object-contain"
                            />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-4xl font-bold mb-4">{selectedProduct.name}</h2>

                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-orange-400 text-2xl">
                                {'★'.repeat(selectedProduct.rating)}
                            </span>
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                            {selectedProduct.oldPrice && (
                                <span className="text-xl text-gray-400 line-through">
                                    ${selectedProduct.oldPrice.toFixed(2)}
                                </span>
                            )}
                            <span className="text-2xl font-bold text-MainGreen">
                                ${selectedProduct.price.toFixed(2)}
                            </span>
                        </div>

                        <p className="text-MainGrey leading-relaxed mb-8">
                            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                        </p>

                        <div className="flex items-center gap-4 mb-8">
                            <span className="font-bold text-[20px]">Quantity:</span>
                            <div className="flex items-center border border-gray-300 rounded-lg">
                                <span className="w-[134px] text-center border-x border-gray-300 py-7">1</span>
                            </div>
                            <Button text={"Add To Cart"} />

                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <div className="flex gap-4 justify-center">
                        <Button text={"Product Description"} textSize='text-[25px]' />
                        <Button text={"Additional Info"} textSize='text-[25px]' bgcolor='bg-[#eff6f1]' textcolor='text-main' />
                    </div>
                    <div className="py-8 flex justify-center">
                        <p className="text-MainGrey text-center leading-relaxed max-w-4xl">
                            Welcome to the world of natural and organic. Here you can discover the bounty of nature.
                            We have grown all the principles of health ecology, and care. We aim to give you the experience about the organic natural nutrition.
                            It offers about 8% protein, 15% of dietary fiber, B vitamins and dietary minerals in modest amounts.
                        </p>
                    </div>
                </div>

                <div className="mt-16">
                    <h3 className="text-5xl font-bold text-center mb-12">Related Products</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {products.filter(p => p.id !== selectedProduct.id).slice(0, 4).map((product) => (
                            <div
                                key={product.id}
                                onClick={() => {
                                    navigate(`/product/${product.id}`);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer group"
                            >
                                <div className="relative bg-gray-50 p-6">
                                    <span className="absolute top-3 left-3 bg-main text-white px-2 py-1 rounded text-xs font-medium">
                                        {product.category}
                                    </span>
                                    <img
                                        src={product.img}
                                        alt="img"
                                        className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold mb-2">{product.name}</h4>
                                    <div className="mb-2">
                                        <span className="text-orange-400">{'★'.repeat(product.rating)}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {product.oldPrice && (
                                            <span className="text-sm text-gray-400 line-through">
                                                ${product.oldPrice.toFixed(2)}
                                            </span>
                                        )}
                                        <span className="text-lg font-bold text-MainGreen">
                                            ${product.price.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
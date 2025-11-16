import React from "react";
import tabiat from '../../assets/home-img-svg/Store.png'

export const Store = () => {
    return (
        <div className="flex bg-white">
            <div className="max-w-6xl w-full grid grid-cols-2 items-center">

                <div className="w-[950px] h-[900px]">
                    <img
                        src={tabiat}
                        alt="img"
                        className="w-full h-full object-cover"
                    />
                </div>


                <div className="bg-white w-[759px] h-[703px] ml-[300px] rounded-2xl">
                    <div className="p-20">
                        <p className="text-MainGreen font-third-family mb-2 text-4xl">Eco Friendly</p>
                        <h2 className="text-5xl font-bold text-main mb-6 leading-snug">
                            Econs is a Friendly <br /> Organic Store
                        </h2>

                        <div className="space-y-6 text-MainGrey">
                            <div>
                                <h3 className="font-semibold text-main mb-2">Start with Our Company First</h3>
                                <p className="w-[550px]"> Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-main mb-2">Learn How to Grow Yourself</h3>
                                <p className="w-[550px]"> Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-main mb-2">Farming Strategies of Today</h3>
                                <p className="w-[550px]">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

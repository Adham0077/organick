import React from "react";
import img1 from '../../assets/home-img-svg/Disc1.png'
import img2 from '../../assets/home-img-svg/Disc2.png'
import { Button } from "../../components/Button";

export const Discover = () => {
    const data = [
        {
            id: 1,
            img: img1,
            author: "Rachi Card",
            title: "The Benefits of Vitamin D & How to Get It",
            description: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
        },
        {
            id: 2,
            img: img2,
            author: "Rachi Card",
            title: "Our Favourite Summertime Tommeto",
            description: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
        },
    ];

    return (
        <section className="container py-14">
            <div className="mx-auto px-4">

                <div className="flex justify-between items-center mb-10">
                    <div>
                        <p className="text-4xl font-normal text-MainGreen font-third-family mb-2">News</p>
                        <h1 className="text-5xl font-bold">
                            Discover weekly content about <br /> organic food, & more
                        </h1>
                    </div>
                    <Button text={"More News"} bgcolor="bg-white" textcolor="text-main" classname="border-2" />
                </div>

                <div className="grid grid-cols-2 gap-10">
                    {data.map((item) => (
                        <div key={item.id} className="relative">
                            <img
                                src={item.img}
                                alt="news"
                                className="w-[677px] h-[574px] object-cover rounded-2xl"
                            />
                            <div className="absolute left-1/2 -bottom-14 transform -translate-x-1/2 w-[85%] bg-white rounded-2xl shadow-md p-16">
                                <p className="text-sm text-MainGrey mb-2">By {item.author}</p>
                                <h2 className="font-bold text-2xl mb-2">
                                    {item.title}
                                </h2>
                                <p className="text-MainGrey text-sm mb-4">
                                    {item.description}
                                </p>
                                <Button text={"Read More"} bgcolor="bg-MainYellow" textcolor="text-main" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

import React, { useState } from 'react'
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { IoIosStats } from 'react-icons/io'
import AddToCartButton from "../../../common/AddToCartButton";
import { TfiStar } from "react-icons/tfi";
import Materials from "../../data/materials.js";
import { useNavigate, Link } from "react-router-dom";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'


const NewArrivalSlider = () => {
    const navigate = useNavigate();
    const gotoLiked = () => {
        navigate("/Liked");
    };



    const [activeIndex, setActiveIndex] = useState(0);

    const handlePreviousClick = () => {
        setActiveIndex((prevIndex) => prevIndex - 1);
    };

    const handleNextClick = () => {
        setActiveIndex((prevIndex) => prevIndex + 1);
    };

    const isFirstSet = activeIndex === 0;
    const isLastSet = activeIndex === Math.ceil(Materials.length / 8) - 1;


    return (
        <div className='relative ' >
            <div className="flex flex-col  w-full justify-center  items-center container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                        New Arrivals
                    </h1>
                </div>
                <div className='flex w-full justify-center '>
                    <div
                        className=" flex items-center justify-center"
                    >
                        <div className="w-7 h-7 hover:bg-red-600 cursor-pointer hover:text-white rounded-full flex justify-center items-center " onClick={handlePreviousClick}
                            style={{ visibility: isFirstSet ? " " : "" }}><BsChevronCompactLeft/> </div>
                    </div>
                    <div
                        className="relative w-5/6 h-3/4 overflow-hidden flex items-center justify-center"
                    >
                        <div className="flex transition-all space-x-8 w-full duration-500 ease-in-out"
                            style={{ transform: `translateX(-${activeIndex * 25.6}%)` }}>
                            {Materials.slice(0, 8).map((Item) => (
                                <div key={Item.id} className= "flex flex-col w-full justify-start h-full " >
                                    <div className="relative block w-full   group h-96">
                                        <Link to={`/Products/${Item.id}`} >
                                            <img

                                                className="absolute inset-0 object-cover w-full h-96 group-hover:opacity-100 cursor-pointer"
                                                src={Item.image}
                                            /></Link>
                                        <div className="relative ">
                                            <div className="transition-all transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                                <div className="absolute top-2 right-4 flex flex-col space-y-4">
                                                    <div className=" bg-white rounded-full text-3xl flex hover:bg-black duration-500 hover:text-white cursor-pointer justify-center items-center text-gray-700 w-10 h-10" onClick={() => gotoLiked()}><AiOutlineHeart /></div>
                                                    <div className=" bg-white rounded-full text-3xl flex hover:bg-black duration-500 hover:text-white cursor-pointer justify-center items-center text-gray-700 w-10 h-10" ><IoIosStats /></div>
                                                    <div className=" bg-white rounded-full text-3xl flex hover:bg-black duration-500 hover:text-white cursor-pointer justify-center items-center text-gray-700 w-10 h-10"><AiOutlineSearch /></div>
                                                </div>
                                                <AddToCartButton Item={Item} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex w-[238px] flex-col">
                                        <p className="text-gray-900 text-sm  tracking-widest title-font mb-1">
                                            {Item.name}
                                        </p>
                                        <p className="text-gray-900 mt-1">${Item.price}</p>
                                        <ul className="mt-1 flex">
                                            <li>
                                                <TfiStar />
                                            </li>
                                            <li>
                                                <TfiStar />
                                            </li>
                                            <li>
                                                <TfiStar />
                                            </li>
                                            <li>
                                                <TfiStar />
                                            </li>
                                            <li>
                                                <TfiStar />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        className="  w-10  flex items-center justify-center"

                        onClick={handleNextClick}
                        style={{ visibility: isLastSet ? "hidden" : "visible" }}
                    >
                        <div className="w-7 h-7 hover:bg-red-600 cursor-pointer hover:text-white rounded-full flex justify-center items-center "><BsChevronCompactRight/> </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NewArrivalSlider
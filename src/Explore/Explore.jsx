import React from 'react'
import LHSArrow from '../assets/LHS Arrow.png'
import RHSArrow from '../assets/RHS Arrow.png'
import Bangkok from '../assets/Bangkok.png'
import Sydney from '../assets/Sydney.png'
import Toronto from '../assets/Torento.png'
import { MdOutlineStarRate } from "react-icons/md";
import Roadplate from '../assets/RoadPlate.png'
const Explore = () => {
    return (
        <div className='container mx-auto mt-[150px] mb-[150px]'>
            <div className='flex justify-between items-center mb-[60px]'>
                <div>
                    <h3 className='text-blue-950 text-xl font-bold font-Osan'>Find Properties</h3>
                    <h3 className=' text-black text-5xl font-bold font-Man capitalize leading-[68px] mt-[30px]'>Explore Our Cities</h3>
                </div>
                <div className=' items-end flex'>
                    <img src={LHSArrow} alt="" className='w-[50px] h-[50px]' />
                    <img src={RHSArrow} alt="" className='w-[50px] h-[50px]' />
                </div>
            </div>
            <div className='flex justify-between'>
                <div>
                    <img src={Bangkok} alt="" />
                    <div className='flex items-center justify-between w-[420px]'>
                        <div>
                            <h2 className='text-orange-600 text-xl font-bold font-Man capitalize leading-[68px]'>Fortune Condo Town</h2>
                            <div className='flex items-center'>
                                <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px]' />
                                <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px]' />
                                <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px]' />
                                <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px]' />
                                <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px]' />
                                <p className='text-blue-950 text-lg font-medium ml-2'>4.5</p>
                            </div>
                        </div>
                        <div className='relative'>
                            <img src={Roadplate} alt="" />
                            <p className='absolute top-[15%] left-[30%]  text-white text-base font-medium font-Man'>240 / Sqft</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={Sydney} alt="" />
                    <div className='flex items-center justify-between w-[420px]'>
                        <div>
                            <h2 className='text-orange-600 text-xl font-bold font-Man capitalize leading-[68px]'>Farmhouse For Buy</h2>
                            <div className='flex items-center'>
                                <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px]' />
                                <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px]' />
                                <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px]' />
                                <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px]' />
                                <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px]' />
                                <p className='text-blue-950 text-lg font-medium ml-2'>4.5</p>
                            </div>
                        </div>
                        <div className='relative'>
                            <img src={Roadplate} alt="" />
                            <p className='absolute top-[15%] left-[30%]  text-white text-base font-medium font-Man'>800 / Sqft</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={Toronto} alt="" />
                    <div className='flex items-center justify-between w-[420px]'>
                        <div>
                            <h2 className='text-orange-600 text-xl font-bold font-Man capitalize leading-[68px]'>Apartment For Sale</h2>
                            <div className='flex items-center'>
                                <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px]' />
                                <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px]' />
                                <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px]' />
                                <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px]' />
                                <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px]' />
                                <p className='text-blue-950 text-lg font-medium ml-2'>4.5</p>
                            </div>
                        </div>
                        <div className='relative'>
                            <img src={Roadplate} alt="" />
                            <p className='absolute top-[15%] left-[30%]  text-white text-base font-medium font-Man'>180 / Sqft</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore

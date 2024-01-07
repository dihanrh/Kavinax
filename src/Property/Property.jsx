import React from 'react'
import Property1 from '../assets/Property1.png'
import Property2 from '../assets/Property2.png'
import Property3 from '../assets/Property3.png'
import Property4 from '../assets/Property4.png'
import Property5 from '../assets/Property5.png'
import Property6 from '../assets/Property6.png'
import ArrowsIconPropertyWhite from '../assets/ArrowsIconProperty.png'
import ArrowsIconPropertyOrange from '../assets/ArrowsIconPropertyOrange.png'
import { RiHotelBedFill } from "react-icons/ri";
import { FaBath } from "react-icons/fa6";
import { FaParking } from "react-icons/fa";
const Property = () => {
    return (
        <div className='mt-[150px] container mx-auto mb-[57px]'>
            <div className='text-center'>
                <h3 className='text-blue-950 text-xl font-bold font-Osan'>Our Property</h3>
                <h3 className=' text-black text-5xl font-bold font-Man capitalize leading-[68px] mt-[30px] mb-[20px]'>Our Explore Property</h3>
            </div>
            
           <div className='grid grid-cols-3'>
           <div className='w-[420px] mt-[40px] shadow-md p-[20px]'>
                <img src={Property1} alt="" />
                <div className='my-[20px] flex justify-between items-center relative'>
                    <div className='flex'>
                        <p className='text-[#FF5017] text-xl font-bold font-Man leading-loose'>Ready Resort for Sell</p>
                        <p className='w-[127px] h-8 absolute top-0 right-[-5.5%] px-[23px] bg-orange-600 justify-center items-center gap-2.5 inline-flex text-gray-50 text-base font-bold font-Man leading-loose'>2,525.00$</p>
                    </div>
                </div>
                <p className='my-[25px] text-black text-opacity-75 text-base font-normal font-Man leading-7'>Duis aute irure dolor in reprehenderit into volupjl tate velit esse cillum dolore eu fugiat.</p>
                <div className='border-b border-t border-black border-opacity-75  justify-between flex py-[25px]'>
                    <div className='flex items-center'>
                        <RiHotelBedFill className='bg-orange-600 text-white w-[21px] p-[3px] h-[21px] rounded-full' />
                        <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>Beds : 3</p>
                    </div>
                    <div className='flex items-center'>
                        <FaBath className='bg-orange-600 text-white w-[21px] p-[3px] h-[21px] rounded-full' />
                        <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>Bathss : 4</p>
                    </div>
                    <div className='flex items-center'>
                        <FaParking className='bg-orange-600 text-white w-[21px] p-[3px] h-[21px] rounded-full' />
                        <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>Parking : 1</p>
                    </div>
                </div>
                <div className='mt-[25px] justify-between items-center flex'>
                    <p className='text-justify text-orange-600 text-base font-medium font-Man'>View Details</p>
                    <img src={ArrowsIconPropertyOrange} alt="" />
                </div>
            </div>
            
            <div className='w-[420px] mt-[40px] shadow-md p-[20px]'>
                <img src={Property1} alt="" />
                <div className='my-[20px] flex justify-between items-center relative'>
                    <div className='flex'>
                        <p className='text-[#FF5017] text-xl font-bold font-Man leading-loose'>Office Space</p>
                        <p className='w-[127px] h-8 absolute top-0 right-[-5.5%] px-[23px] bg-orange-600 justify-center items-center gap-2.5 inline-flex text-gray-50 text-base font-bold font-Man leading-loose'>2,525.00$</p>
                    </div>
                </div>
                <p className='my-[25px] text-black text-opacity-75 text-base font-normal font-Man leading-7'>Duis aute irure dolor in reprehenderit into volupjl tate velit esse cillum dolore eu fugiat.</p>
                <div className='border-b border-t border-black border-opacity-75  justify-between flex py-[25px]'>
                    <div className='flex items-center'>
                        <RiHotelBedFill className='bg-orange-600 text-white w-[21px] p-[3px] h-[21px] rounded-full' />
                        <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>Beds : Na</p>
                    </div>
                    <div className='flex items-center'>
                        <FaBath className='bg-orange-600 text-white w-[21px] p-[3px] h-[21px] rounded-full' />
                        <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>Bathss : 2</p>
                    </div>
                    <div className='flex items-center'>
                        <FaParking className='bg-orange-600 text-white w-[21px] p-[3px] h-[21px] rounded-full' />
                        <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>Parking : 1</p>
                    </div>
                </div>
                <div className='mt-[25px] justify-between items-center flex'>
                    <p className='text-justify text-orange-600 text-base font-medium font-Man'>View Details</p>
                    <img src={ArrowsIconPropertyOrange} alt="" />
                </div>
            </div>

            <div className='w-[420px] mt-[40px] shadow-md p-[20px]'>
                <img src={Property1} alt="" />
                <div className='my-[20px] flex justify-between items-center relative'>
                    <div className='flex'>
                        <p className='text-[#FF5017] text-xl font-bold font-Man leading-loose'>Luxury Condo</p>
                        <p className='w-[127px] h-8 absolute top-0 right-[-5.5%] px-[23px] bg-orange-600 justify-center items-center gap-2.5 inline-flex text-gray-50 text-base font-bold font-Man leading-loose'>2,525.00$</p>
                    </div>
                </div>
                <p className='my-[25px] text-black text-opacity-75 text-base font-normal font-Man leading-7'>Duis aute irure dolor in reprehenderit into volupjl tate velit esse cillum dolore eu fugiat.</p>
                <div className='border-b border-t border-black border-opacity-75  justify-between flex py-[25px]'>
                    <div className='flex items-center'>
                        <RiHotelBedFill className='bg-orange-600 text-white w-[21px] p-[3px] h-[21px] rounded-full' />
                        <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>Beds : 7</p>
                    </div>
                    <div className='flex items-center'>
                        <FaBath className='bg-orange-600 text-white w-[21px] p-[3px] h-[21px] rounded-full' />
                        <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>Bathss : 5</p>
                    </div>
                    <div className='flex items-center'>
                        <FaParking className='bg-orange-600 text-white w-[21px] p-[3px] h-[21px] rounded-full' />
                        <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>Parking : 2</p>
                    </div>
                </div>
                <div className='mt-[25px] justify-between items-center flex'>
                    <p className='text-justify text-orange-600 text-base font-medium font-Man'>View Details</p>
                    <img src={ArrowsIconPropertyOrange} alt="" />
                </div>
            </div>

            <div className='w-[420px] mt-[40px] shadow-md p-[20px]'>
                <img src={Property1} alt="" />
                <div className='my-[20px] flex justify-between items-center relative'>
                    <div className='flex'>
                        <p className='text-[#FF5017] text-xl font-bold font-Man leading-loose'>Modern Villa</p>
                        <p className='w-[127px] h-8 absolute top-0 right-[-5.5%] px-[23px] bg-orange-600 justify-center items-center gap-2.5 inline-flex text-gray-50 text-base font-bold font-Man leading-loose'>2,525.00$</p>
                    </div>
                </div>
                <p className='my-[25px] text-black text-opacity-75 text-base font-normal font-Man leading-7'>Duis aute irure dolor in reprehenderit into volupjl tate velit esse cillum dolore eu fugiat.</p>
                <div className='border-b border-t border-black border-opacity-75  justify-between flex py-[25px]'>
                    <div className='flex items-center'>
                        <RiHotelBedFill className='bg-orange-600 text-white w-[21px] p-[3px] h-[21px] rounded-full' />
                        <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>Beds : 12</p>
                    </div>
                    <div className='flex items-center'>
                        <FaBath className='bg-orange-600 text-white w-[21px] p-[3px] h-[21px] rounded-full' />
                        <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>Bathss : 10</p>
                    </div>
                    <div className='flex items-center'>
                        <FaParking className='bg-orange-600 text-white w-[21px] p-[3px] h-[21px] rounded-full' />
                        <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>Parking : 5</p>
                    </div>
                </div>
                <div className='mt-[25px] justify-between items-center flex'>
                    <p className='text-justify text-orange-600 text-base font-medium font-Man'>View Details</p>
                    <img src={ArrowsIconPropertyOrange} alt="" />
                </div>
            </div>

            <div className='w-[420px] mt-[40px] shadow-md p-[20px]'>
                <img src={Property1} alt="" />
                <div className='my-[20px] flex justify-between items-center relative'>
                    <div className='flex'>
                        <p className='text-[#FF5017] text-xl font-bold font-Man leading-loose'>Luxury Condo</p>
                        <p className='w-[127px] h-8 absolute top-0 right-[-5.5%] px-[23px] bg-orange-600 justify-center items-center gap-2.5 inline-flex text-gray-50 text-base font-bold font-Man leading-loose'>2,525.00$</p>
                    </div>
                </div>
                <p className='my-[25px] text-black text-opacity-75 text-base font-normal font-Man leading-7'>Duis aute irure dolor in reprehenderit into volupjl tate velit esse cillum dolore eu fugiat.</p>
                <div className='border-b border-t border-black border-opacity-75  justify-between flex py-[25px]'>
                    <div className='flex items-center'>
                        <RiHotelBedFill className='bg-orange-600 text-white w-[21px] p-[3px] h-[21px] rounded-full' />
                        <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>Beds : 7</p>
                    </div>
                    <div className='flex items-center'>
                        <FaBath className='bg-orange-600 text-white w-[21px] p-[3px] h-[21px] rounded-full' />
                        <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>Bathss : 5</p>
                    </div>
                    <div className='flex items-center'>
                        <FaParking className='bg-orange-600 text-white w-[21px] p-[3px] h-[21px] rounded-full' />
                        <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>Parking : 2</p>
                    </div>
                </div>
                <div className='mt-[25px] justify-between items-center flex'>
                    <p className='text-justify text-orange-600 text-base font-medium font-Man'>View Details</p>
                    <img src={ArrowsIconPropertyOrange} alt="" />
                </div>
            </div>

            <div className='w-[420px] mt-[40px] shadow-md p-[20px]'>
                <img src={Property1} alt="" />
                <div className='my-[20px] flex justify-between items-center relative'>
                    <div className='flex'>
                        <p className='text-[#FF5017] text-xl font-bold font-Man leading-loose'>Office Space</p>
                        <p className='w-[127px] h-8 absolute top-0 right-[-5.5%] px-[23px] bg-orange-600 justify-center items-center gap-2.5 inline-flex text-gray-50 text-base font-bold font-Man leading-loose'>2,525.00$</p>
                    </div>
                </div>
                <p className='my-[25px] text-black text-opacity-75 text-base font-normal font-Man leading-7'>Duis aute irure dolor in reprehenderit into volupjl tate velit esse cillum dolore eu fugiat.</p>
                <div className='border-b border-t border-black border-opacity-75  justify-between flex py-[25px]'>
                    <div className='flex items-center'>
                        <RiHotelBedFill className='bg-orange-600 text-white w-[21px] p-[3px] h-[21px] rounded-full' />
                        <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>Beds : Na</p>
                    </div>
                    <div className='flex items-center'>
                        <FaBath className='bg-orange-600 text-white w-[21px] p-[3px] h-[21px] rounded-full' />
                        <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>Bathss : 2</p>
                    </div>
                    <div className='flex items-center'>
                        <FaParking className='bg-orange-600 text-white w-[21px] p-[3px] h-[21px] rounded-full' />
                        <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>Parking : 1</p>
                    </div>
                </div>
                <div className='mt-[25px] justify-between items-center flex'>
                    <p className='text-justify text-orange-600 text-base font-medium font-Man'>View Details</p>
                    <img src={ArrowsIconPropertyOrange} alt="" />
                </div>
            </div>

            

           </div>
        </div>
    )
}

export default Property

import React from 'react'
import { MdOutlineStarRate } from "react-icons/md";
import Client1 from '../assets/Client1.png'
import Client2 from '../assets/Client2.png'
import Client3 from '../assets/Client3.png'
const Clients = () => {
    return (
        <div className='mt-[150px] container mx-auto mb-[57px]'>
            <div className='text-center'>
                <h3 className='text-blue-950 text-xl font-bold font-Osan'>Testimonials</h3>
                <h3 className=' text-black text-5xl font-bold font-Man capitalize leading-[68px] mt-[30px]'>Clients Feedback</h3>
            </div>
            <div className='mt-[120px] flex justify-between'>
                <div className='w-[420px] h-[306px] rounded-[15px] shadow bg-[#F8FAFA] py-[40px] pl-[35px] pr-[40px] relative'>
                    <div className='bg-white rounded-full w-[150px] h-[150px] absolute top-[-25%] left-[-1%]'></div>
                    <img src={Client1} alt="" className='absolute top-[-22%] left-[1.2%]' />
                    <div className='flex justify-end'>
                        <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px] text-orange-600' />
                        <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px] text-orange-600' />
                        <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px] text-orange-600' />
                        <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px] text-orange-600' />
                        <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px] text-orange-600' />
                    </div>
                    <p className='w-[351px] h-[84px] text-black text-opacity-75 text-[17px] font-normal font-Osan leading-[30px] mt-[35px] mb-[25px]'>Dramatically supply transparent deliverab before & you backward comp internal or "organic" sources. </p>
                    <h3 className='text-blue-950 text-2xl font-bold font-Osan'>Courtney Henry</h3>
                    <p className='text-orange-600 text-base font-normal font-Osan mt-[18px]'>Sr. UX/UI Designer</p>
                </div>
                <div className='w-[420px] h-[306px] rounded-[15px] shadow bg-[#F8FAFA] py-[40px] pl-[35px] pr-[40px] relative'>
                    <div className='bg-white rounded-full w-[150px] h-[150px] absolute top-[-25%] left-[-1%]'></div>
                    <img src={Client2} alt="" className='absolute top-[-22%] left-[1.2%]' />
                    <div className='flex justify-end'>
                        <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px] text-orange-600' />
                        <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px] text-orange-600' />
                        <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px] text-orange-600' />
                        <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px] text-orange-600' />
                        <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px] text-orange-600' />
                    </div>
                    <p className='w-[351px] h-[84px] text-black text-opacity-75 text-[17px] font-normal font-Osan leading-[30px] mt-[35px] mb-[25px]'>Dramatically supply transparent deliverab before & you backward comp internal or "organic" sources. </p>
                    <h3 className='text-blue-950 text-2xl font-bold font-Osan'>Leslie Alexander</h3>
                    <p className='text-orange-600 text-base font-normal font-Osan mt-[18px]'>Bank Of America</p>
                </div>
                <div className='w-[420px] h-[306px] rounded-[15px] shadow bg-[#F8FAFA] py-[40px] pl-[35px] pr-[40px] relative'>
                    <div className='bg-white rounded-full w-[150px] h-[150px] absolute top-[-25%] left-[-1%]'></div>
                    <img src={Client3} alt="" className='absolute top-[-22%] left-[1.2%]' />
                    <div className='flex justify-end'>
                        <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px] text-orange-600' />
                        <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px] text-orange-600' />
                        <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px] text-orange-600' />
                        <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px] text-orange-600' />
                        <MdOutlineStarRate className='w-[21px] h-[20px] mx-[10px] text-orange-600' />
                    </div>
                    <p className='w-[351px] h-[84px] text-black text-opacity-75 text-[17px] font-normal font-Osan leading-[30px] mt-[35px] mb-[25px]'>Dramatically supply transparent deliverab before & you backward comp internal or "organic" sources. </p>
                    <h3 className='text-blue-950 text-2xl font-bold font-Osan'>Madge Marvin</h3>
                    <p className='text-orange-600 text-base font-normal font-Osan mt-[18px]'>Web Developer</p>
                </div>
            </div>
        </div>
    )
}

export default Clients

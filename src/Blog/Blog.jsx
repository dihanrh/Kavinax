import React from 'react'
import LHSArrow from '../assets/LHS Arrow.png'
import RHSArrow from '../assets/RHS Arrow.png'
import { FaCalendarAlt } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { FaCommentDots } from "react-icons/fa";
import Blog1 from '../assets/Blog1.png'
import Blog2 from '../assets/Blog2.png'
import Blog3 from '../assets/Blog3.png'
import { IoMdTime } from "react-icons/io";
import BlogPeople1 from '../assets/Blogpeople1.png'
import BlogPeople2 from '../assets/Blogpeople2.png'
import BlogPeople3 from '../assets/Blogpeople3.png'
import { IoMdAddCircle } from "react-icons/io";
const Blog = () => {
    return (
        <div className='container mx-auto mt-[150px] mb-[150px]'>
            <div className='flex justify-between items-center mb-[60px]'>
                <div>
                    <h3 className='text-blue-950 text-xl font-bold font-Osan'>Blog & News</h3>
                    <h3 className=' text-black text-5xl font-bold font-Man capitalize leading-[68px] mt-[30px]'>Our Latest Blog & News</h3>
                </div>
                <div className=' items-end flex'>
                    <img src={LHSArrow} alt="" className='w-[50px] h-[50px]' />
                    <img src={RHSArrow} alt="" className='w-[50px] h-[50px]' />
                </div>
            </div>
            <div className='mt-[60px] flex justify-between'>
                <div className='w-[421px] shadow-md'>
                    <img src={Blog1} alt="" />
                    <div className='my-[25px] mx-[20px] flex justify-between items-center'>
                        <div className='flex'>
                            <FaCalendarAlt className='text-[#FF5017] w-[15px] h-[17px]' />
                            <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>05 Dec 2022</p>
                        </div>
                        <div className='flex'>
                            <IoEye className='text-[#FF5017] w-[25px] h-[17px]' />
                            <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>1000</p>
                        </div>
                        <div className='flex'>
                            <FaCommentDots className='text-[#FF5017] w-[19px] h-[17px]' />
                            <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>12 Comments</p>
                        </div>
                    </div>
                    <p className='mx-[20px] text-orange-600 text-2xl font-semibold font-Man underline capitalize'>7 home trends that will shape your house</p>
                    <p className='mx-[20px] my-[25px] text-black text-opacity-75 text-base font-normal font-Man leading-7'>Duis aute irure dolor in reprehenderit into volupjl tate velit esse cillum dolore eu fugiat nulla partr iatur sunt in culp qui officia deserunt mollit</p>
                    <div className='border-b border-t border-black border-opacity-75 mx-[20px] justify-between flex py-[25px]'>
                        <div className='flex items-center'>
                            <img src={BlogPeople1} alt="" />
                            <p className='ml-[15px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>David Smith</p>
                        </div>
                        <div className='flex items-center'>
                            <IoMdTime className='text-neutral-700' />
                            <p className='ml-[15px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>2 minutes ago</p>
                        </div>
                    </div>
                    <div className='my-[25px] mx-[20px] justify-between items-center flex'>
                        <p className='text-justify text-orange-600 text-base font-medium font-Man'>Read More</p>
                        <IoMdAddCircle className='text-[#FF5017]' />
                    </div>
                </div>
                <div className='w-[421px] shadow-md'>
                    <img src={Blog2} alt="" />
                    <div className='my-[25px] mx-[20px] flex justify-between items-center'>
                        <div className='flex'>
                            <FaCalendarAlt className='text-[#FF5017] w-[15px] h-[17px]' />
                            <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>06 Dec 2022</p>
                        </div>
                        <div className='flex'>
                            <IoEye className='text-[#FF5017] w-[25px] h-[17px]' />
                            <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>2000</p>
                        </div>
                        <div className='flex'>
                            <FaCommentDots className='text-[#FF5017] w-[19px] h-[17px]' />
                            <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>13 Comments</p>
                        </div>
                    </div>
                    <p className='mx-[20px] text-orange-600 text-2xl font-semibold font-Man underline capitalize'>Renovating a Living Room? Experts Share Their Secrets</p>
                    <p className='mx-[20px] my-[25px] text-black text-opacity-75 text-base font-normal font-Man leading-7'>Duis aute irure dolor in reprehenderit into volupjl tate velit esse cillum dolore eu fugiat nulla partr iatur sunt in culp qui officia deserunt mollit</p>
                    <div className='border-b border-t border-black border-opacity-75 mx-[20px] justify-between flex py-[25px]'>
                        <div className='flex items-center'>
                            <img src={BlogPeople2} alt="" />
                            <p className='ml-[15px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>John Doe</p>
                        </div>
                        <div className='flex items-center'>
                            <IoMdTime className='text-neutral-700' />
                            <p className='ml-[15px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>3 minutes ago</p>
                        </div>
                    </div>
                    <div className='my-[25px] mx-[20px] justify-between items-center flex'>
                        <p className='text-justify text-orange-600 text-base font-medium font-Man'>Read More</p>
                        <IoMdAddCircle className='text-[#FF5017]' />
                    </div>
                </div>
                <div className='w-[421px] shadow-md'>
                    <img src={Blog3} alt="" />
                    <div className='my-[25px] mx-[20px] flex justify-between items-center'>
                        <div className='flex'>
                            <FaCalendarAlt className='text-[#FF5017] w-[15px] h-[17px]' />
                            <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>07 Dec 2022</p>
                        </div>
                        <div className='flex'>
                            <IoEye className='text-[#FF5017] w-[25px] h-[17px]' />
                            <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>3000</p>
                        </div>
                        <div className='flex'>
                            <FaCommentDots className='text-[#FF5017] w-[19px] h-[17px]' />
                            <p className='ml-[10px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>14 Comments</p>
                        </div>
                    </div>
                    <p className='mx-[20px] text-orange-600 text-2xl font-semibold font-Man underline capitalize'>Recent Commercial Real Estate Transactions</p>
                    <p className='mx-[20px] my-[25px] text-black text-opacity-75 text-base font-normal font-Man leading-7'>Duis aute irure dolor in reprehenderit into volupjl tate velit esse cillum dolore eu fugiat nulla partr iatur sunt in culp qui officia deserunt mollit</p>
                    <div className='border-b border-t border-black border-opacity-75 mx-[20px] justify-between flex py-[25px]'>
                        <div className='flex items-center'>
                            <img src={BlogPeople3} alt="" />
                            <p className='ml-[15px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>William Seklo</p>
                        </div>
                        <div className='flex items-center'>
                            <IoMdTime className='text-neutral-700' />
                            <p className='ml-[15px] text-justify text-neutral-700 text-base font-normal font-Man capitalize'>4 minutes ago</p>
                        </div>
                    </div>
                    <div className='my-[25px] mx-[20px] justify-between items-center flex'>
                        <p className='text-justify text-orange-600 text-base font-medium font-Man'>Read More</p>
                        <IoMdAddCircle className='text-[#FF5017]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog

import React from 'react'
import LHSArrow from '../assets/LHS Arrow.png'
import RHSArrow from '../assets/RHS Arrow.png'
import BuyPropertyImg from '../assets/BuyPropertyImg.png'
import SellPropertyImg from '../assets/SellPropertyImg.png'
import RentPropertyImg from '../assets/RentPropertyImg.png'
import HomeIcon from '../assets/HomeIcon.png'
const Service = () => {
    return (
        <>
            <div className='container mx-auto mb-[130px]'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h3 className='text-blue-950 text-xl font-bold font-Osan'>Our Services</h3>
                        <h3 className=' text-black text-5xl font-bold font-Man capitalize leading-[68px] mt-[30px]'>Our Main Focus</h3>
                    </div>
                    <div className=' items-end flex'>
                        <img src={LHSArrow} alt="" className='w-[50px] h-[50px]' />
                        <img src={RHSArrow} alt="" className='w-[50px] h-[50px]' />
                    </div>
                </div>
                <div className='mt-[60px] flex justify-between'>
                    <div className='bg-[#FCFCFC]'>
                        <img src={BuyPropertyImg} alt="" />
                        <div className='mt-[20px]'>
                            <div className='flex justify-center items-center'>
                                <img src={HomeIcon} alt="" />
                                <h4 className='text-blue-950 text-xl font-bold font-Osan ml-[20px]'>Buy a property</h4>
                            </div>
                            <p className='text-black text-opacity-75 text-base font-normal font-Man leading-7 text-center mt-[33px]'>Lorem ipsum dolor sit amet consectetur adipisin<br />cing elit sed do eiusmod tempor incididunt utlrul<br /> labore et dolore magna aliqua.</p>
                            <div className='text-center'>
                            <p className='text-orange-600 text-base font-normal font-Man  leading-7 border border-orange-600 mt-[45px] inline-block px-5'>Find a home</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#FCFCFC]'>
                        <img src={SellPropertyImg} alt="" />
                        <div className='mt-[20px]'>
                            <div className='flex justify-center items-center'>
                                <img src={HomeIcon} alt="" />
                                <h4 className='text-blue-950 text-xl font-bold font-Osan ml-[20px]'>Sell a property</h4>
                            </div>
                            <p className='text-black text-opacity-75 text-base font-normal font-Man leading-7 text-center mt-[33px]'>Lorem ipsum dolor sit amet consectetur adipisin<br />cing elit sed do eiusmod tempor incididunt utlrul<br /> labore et dolore magna aliqua.</p>
                            <div className='text-center'>
                            <p className='text-orange-600 text-base font-normal font-Man  leading-7 border border-orange-600 mt-[45px] inline-block px-5'>Find a home</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#FCFCFC]'>
                        <img src={RentPropertyImg} alt="" />
                        <div className='mt-[20px]'>
                            <div className='flex justify-center items-center'>
                                <img src={HomeIcon} alt="" />
                                <h4 className='text-blue-950 text-xl font-bold font-Osan ml-[20px]'>Rent a property</h4>
                            </div>
                            <p className='text-black text-opacity-75 text-base font-normal font-Man leading-7 text-center mt-[33px]'>Lorem ipsum dolor sit amet consectetur adipisin<br />cing elit sed do eiusmod tempor incididunt utlrul<br /> labore et dolore magna aliqua.</p>
                            <div className='text-center'>
                            <p className='text-orange-600 text-base font-normal font-Man  leading-7 border border-orange-600 mt-[45px] inline-block px-5'>Find a home</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Service

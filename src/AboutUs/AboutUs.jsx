import React from 'react'
import AboutBg from '../assets/AboutUs_Bg.png'
import CorrectSign from '../assets/CorrectSign.png'
import Icon from '../assets/Icon.png'
import CEOImg from '../assets/CEOpng.png'
import CEOPhone from '../assets/Ph_Icon.png'
const AboutUs = () => {
    return (
        <div className='my-[130px]'>
            <div className='container mx-auto flex'>
                <div>
                    <img src={AboutBg} alt="" className='w-[900px] h-[850px]' />
                </div>
                <div className='ml-[50px]'>
                    <h3 className='text-blue-950 text-xl font-bold font-Osan mt-[66px]'>About Us</h3>
                    <h1 className='text-black text-5xl font-bold font-Man leading-[68px] mt-[30px]'>We Specialize In Quality<br />Home Renovations</h1>
                    <p className='w-[645px] text-black text-opacity-75 text-base font-normal font-Man leading-7 mt-[30px] mb-[30px]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div>
                        <div className='flex mb-[26px]'>
                            <img src={CorrectSign} alt="" />
                            <p className='ml-[20px] text-black text-xl font-medium font-Man capitalize leading-7'>Outstanding property</p>
                        </div>
                        <div className='flex mb-[26px]'>
                            <img src={CorrectSign} alt="" />
                            <p className='ml-[20px] text-black text-xl font-medium font-Man capitalize leading-7'>Provide the Best Services For Users</p>
                        </div>
                        <div className='flex mb-[26px]'>
                            <img src={CorrectSign} alt="" />
                            <p className='ml-[20px] text-black text-xl capitalize font-medium font-Man  leading-7'>Modern city location & ecceptional lifestyle</p>
                        </div>
                        <div className='flex'>
                            <img src={CorrectSign} alt="" />
                            <p className='ml-[20px] text-black text-xl font-medium font-Man capitalize leading-7'>Professional & experienced human resources</p>
                        </div>
                    </div>
                    <p className='mt-[30px] mb-[60px] w-[645px] text-black text-opacity-75 text-base font-normal font-Man capitalize leading-7'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>


                    <div className='flex w-[645px] justify-between items-center'>
                        <button className='w-[200px] h-[57.01px] px-7 py-4 bg-blue-950 justify-start items-center gap-3 inline-flex text-justify text-gray-50 text-base font-semibold font-Man capitalize leading-7'>Explore More
                            <img src={Icon} alt="" />
                        </button>
                        <div className='flex items-center'>
                            <div>
                                <img src={CEOImg} alt="" className='mr-[10px]'/>
                            </div>
                            <div>
                                <p className='text-orange-600 text-[15px] font-bold font-Man capitalize'>David Smith <span className='text-black text-[13px] font-normal font-Man capitalize'>( CEO Of Kavinax Property )</span></p>
                                <div className='flex mt-[10px] items-center'>
                                    <img src={CEOPhone} alt="" />
                                    <div className='ml-[10px]'>
                                        <p className='text-black text-base font-normal font-Man capitalize leading-7'>Call For Booking Appointment</p>
                                        <p className='text-black text-base font-normal font-Man capitalize leading-7'>Date : <span className='text-orange-600 text-base font-bold font-Man capitalize leading-7'>+435 6789 4321</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs

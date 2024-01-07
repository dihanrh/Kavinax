import React from 'react'
import WorkBg from '../assets/Workpng.png'
import WorkArt from '../assets/WorkingArt.png'
import WorkHomeArt from '../assets/WorkHome.png'
import WorkAppoinmentArt from '../assets/WorkAppoinment.png'
import WorkPaymentArt from '../assets/WorkPayment.png'
import WorkServiceArt from '../assets/WorkService.png'
const Works = () => {
  return (
    <div>
      <div className='relative'>
                <img src={WorkBg} alt="" />
                <div className='absolute top-[8%] z-[10] w-full'>
                <h3 className='text-gray-50 text-xl font-bold font-Osan text-center'>Working Process</h3>

                    <h3 className=' text-gray-50 text-5xl font-bold font-Man mt-[25px] text-center'>How Do We Works</h3>

                    <div className='w-[1320px] h-[415px] mx-auto mt-[10px] pt-[20px] flex justify-between'>
                        <div>
                            <div className='relative'>
                                <img src={WorkArt} alt=""/>
                                <p className=' absolute top-[40%] left-[13.5%] text-center w-[228.61px] h-[73.01px] text-gray-50 text-base font-normal font-Man leading-7'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                <img src={WorkHomeArt} alt="" className='absolute bottom-[-10%] left-[32%]'/>
                            </div>
                            <p className='text-gray-50 text-base font-bold font-Man leading-loose text-center mt-[30px]'>Choose Your Property</p>
                        </div>
                        <div>
                            <div className='relative'>
                                <img src={WorkArt} alt=""/>
                                <p className=' absolute top-[40%] left-[13.5%] text-center w-[228.61px] h-[73.01px] text-gray-50 text-base font-normal font-Man leading-7'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                <img src={WorkAppoinmentArt} alt="" className='absolute bottom-[-10%] left-[33%]'/>
                            </div>
                            <p className='text-gray-50 text-base font-bold font-Man leading-loose text-center mt-[30px]'>Make Appointment</p>
                        </div>
                        <div>
                            <div className='relative'>
                                <img src={WorkArt} alt=""/>
                                <p className=' absolute top-[40%] left-[13.5%] text-center w-[228.61px] h-[73.01px] text-gray-50 text-base font-normal font-Man leading-7'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                <img src={WorkPaymentArt} alt="" className='absolute bottom-[-10%] left-[33%]'/>
                            </div>
                            <p className='text-gray-50 text-base font-bold font-Man leading-loose text-center mt-[30px]'>Make Payment</p>
                        </div>
                        <div>
                            <div className='relative'>
                                <img src={WorkArt} alt=""/>
                                <p className=' absolute top-[40%] left-[13.5%] text-center w-[228.61px] h-[73.01px] text-gray-50 text-base font-normal font-Man leading-7'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                <img src={WorkServiceArt} alt="" className='absolute bottom-[-10%] left-[32%]'/>
                            </div>
                            <p className='text-gray-50 text-base font-bold font-Man leading-loose text-center mt-[30px]'>Enjoy Property Services</p>
                        </div>
                    </div>

                </div>

            </div>
    </div>
  )
}

export default Works

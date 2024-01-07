import React from 'react'
import OrangeCorrectSign from '../assets/OrangeCorrectSign.png'
import Icon from '../assets/Icon.png'
import ChooseBg from '../assets/ChooseBg.png'

const Choose = () => {
    return (
        <div className='container mx-auto mt-[300px]'>
            <div className='my-[130px]'>
                <div className='container mx-auto flex'>
                    <div>
                        <img src={ChooseBg} alt="" />
                    </div>
                    <div className='ml-[50px]'>
                        <h3 className='text-blue-950 text-xl font-bold font-Osan'>Find More Choose</h3>
                        <h1 className='text-black text-5xl font-bold font-Man leading-[68px] mt-[30px]'>Why You Choose Our<br />Kavinax Property</h1>
                        <p className='w-[645px] text-black text-opacity-75 text-[16px] font-normal font-Man leading-7 my-[30px]'>Excepteur sint occaecat cupidatat non proident,sunt inculpk qui officia deserunt mollit anim id est laborum.sed do eiusmod.</p>
                        <div className='flex mb-[30px] justify-between'>
                            <div>
                                <div className='flex mb-[12px]'>
                                    <img src={OrangeCorrectSign} alt="" />
                                    <p className='ml-[20px] text-black text-xl font-medium font-Man capitalize leading-7'>Trusted By Thousands</p>
                                </div>
                                <p className='w-[274px] text-black text-opacity-75 text-base font-normal font-Man leading-7'>Donec sit amet urna libero Quisque efficitur nulla et odio hendrerit.</p>
                            </div>
                            <div>
                                <div className='flex mb-[12px]'>
                                    <img src={OrangeCorrectSign} alt="" />
                                    <p className='ml-[20px] text-black text-xl font-medium font-Man capitalize leading-7'>Private Security</p>
                                </div>
                                <p className='w-[274px] text-black text-opacity-75 text-base font-normal font-Man leading-7'>Donec sit amet urna libero Quisque efficitur nulla et odio hendrerit</p>
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div>
                                <div className='flex mb-[12px]'>
                                    <img src={OrangeCorrectSign} alt="" />
                                    <p className='ml-[20px] text-black text-xl font-medium font-Man capitalize leading-7'>Evaluate Property</p>
                                </div>
                                <p className='w-[274px] text-black text-opacity-75 text-base font-normal font-Man leading-7'>Donec sit amet urna libero Quisque efficitur nulla et odio hendrerit </p>
                            </div>
                            <div>
                                <div className='flex mb-[12px]'>
                                    <img src={OrangeCorrectSign} alt="" />
                                    <p className='ml-[20px] text-black text-xl font-medium font-Man capitalize leading-7'>Find A Goo Side</p>
                                </div>
                                <p className='w-[274px] text-black text-opacity-75 text-base font-normal font-Man leading-7'>Donec sit amet urna libero Quisque efficitur nulla et odio hendrerit </p>
                            </div>
                        </div>

                        <button className='w-[200px] h-[40.01px] px-7 py-4 bg-blue-950 justify-start items-center gap-3 inline-flex text-justify text-gray-50 text-base font-semibold font-Man capitalize leading-7 mt-[25px]'>Explore More
                            <img src={Icon} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choose

import React from 'react'
import BannerIL from '../assets/bannner_1.png'
import BannerImg from '../assets/banner.png'
import SearchPro from '../assets/Search.png'
import LHSArrow from '../assets/LHS Arrow.png'
import RHSArrow from '../assets/RHS Arrow.png'
const Banner = () => {
    return (
        <>
            <div className='relative'>
                <div className='absolute top-[350px] justify-between z-[10] flex w-[1900px]'>
                    <img src={LHSArrow} alt="" className=' text-left' />
                    <img src={RHSArrow} alt="" className='text-right'/>
                </div>
                <div className='absolute top-0 left-0 z-[5]'>
                    <img src={BannerIL} alt="" />
                </div>
                <div className='absolute top-0 right-0'>
                    <img src={BannerImg} alt="" />
                </div>
                <div className="w-[600.16px] z-[10] text-gray-50 text-[64px] font-bold font-Osan leading-[80px] absolute top-[100px] left-[180px]">Discover Most<br />Suitable Property</div>

                <div className='text-gray-50 text-lg font-normal font-Man leading-loose  absolute top-[400px] left-[180px] z-[10]'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmt<br /> mod tempor incididunt ut labore et dolore magna aliqua.</div>

                <div className='w-[400px] h-[63px] bg-[#FF5017] absolute top-[500px] left-[180px] z-[10] border-none'>
                    <div className='flex mt-[25px] ml-[20px]'>

                        <p className='text-gray-50 text-lg font-normal font-Man leading-loose mr-[30px]'>Sell</p>
                        <div className='relative mr-[30px]'>
                        <p className='text-[#FF5017] text-lg font-semibold h-[60px] pt-[25px] px-[5px] font-Man leading-loose  absolute top-[-25px] left-0 rounded-b bg-white'>Rent</p>
                        </div>
                        <p className='text-gray-50 text-lg font-normal font-Man leading-loose ml-[35px]'>Buy</p>
                    </div>
                </div>
                <div className='w-[1100px] h-[106px] bg-[#FF5017] absolute top-[563px] left-[180px] z-[10] border-none'>
                    <div className='flex mt-[15px] mx-[20px] justify-between'>
                        <div>
                            <p className='text-gray-50 text-lg font-normal font-Man leading-loose mr-[30px]'>Type</p>
                            <select id="" className='h-[33px] mr-[30px] text-black'>
                                    <option value="select">Property Type</option>
                                    <option value="Option1">Option1</option>
                                    <option value="Option2">Option2</option>
                                    <option value="Option3">Option3</option>
                                    <option value="Option4">Option4</option>
                                </select>
                        </div>
                        <div>
                            <p className='text-gray-50 text-lg font-normal font-Man leading-loose mr-[30px]'>Your Location</p>
                            <select id="" className='h-[33px] mr-[30px] text-black'>
                                    <option value="select">Your Location</option>
                                    <option value="select">Property Type</option>
                                    <option value="Option1">Option1</option>
                                    <option value="Option2">Option2</option>
                                    <option value="Option3">Option3</option>
                                    <option value="Option4">Option4</option>
                                </select>
                        </div>
                        <div>
                            <p className='text-gray-50 text-lg font-normal font-Man leading-loose mr-[30px]'>Bed/Bathrooms</p>
                            <select id="" className='h-[33px] mr-[30px] text-black'>
                            <option value="select">Bed/Bathrooms</option>
                                    <option value="Option1">Option1</option>
                                    <option value="Option2">Option2</option>
                                    <option value="Option3">Option3</option>
                                    <option value="Option4">Option4</option>
                                </select>
                        </div>
                        <div>
                            <p className='text-gray-50 text-lg font-normal font-Man leading-loose mr-[30px]'>Price</p>
                            <select id="" className='h-[33px] mr-[30px] text-black'>
                                    <option value="select">Price</option>
                                    <option value="Option1">Option1</option>
                                    <option value="Option2">Option2</option>
                                    <option value="Option3">Option3</option>
                                    <option value="Option4">Option4</option>
                                </select>
                        </div>
                        <div className='h-[52.34px] flex mt-[18px]'>
                           <input type="text" placeholder='Search' className='w-[158.68px] h-[52.34px] py-2 px-5 '/>
                          <img src={SearchPro} alt="" className='h-[52.34px]' />
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Banner

import React from 'react'
import NewsLetterBg from '../assets/NewsLetterBg.png'
import { CgMail } from "react-icons/cg";

const NewsLetter = () => {
    return (
        <div className='container mx-auto my-[150px]'>
            <div className='w-full h-[443px] bg-primary relative'>
                <img src={NewsLetterBg} alt="" className='h-[443px]' />
                <div className='absolute top-[25%] left-[30%]'>
                    <h1 className='text-gray-50 text-5xl font-bold font-Man capitalize'>Subscribe For Newsletter</h1>
                    <p className='w-[506.04px] h-[39.79px] text-center text-gray-50 text-base font-normal font-Man leading-7 mt-[25px] mb-[35px]'>Be the first one to know  about discounts, offers and events. Unsubscribe whenever you like.</p>
                    <div className='relative'>
                        <input type="email" placeholder='Enter your email' className='w-[533px] h-[80px] text-center text-black text-base font-normal font-Man leading-7 py-[26px] pl-[15px] pr-[103px]  placeholder:text-left'/>
                        <button className='w-[155.06px] h-[62.02px] p-[25px] bg-orange-600 rounded-sm justify-center items-center gap-2.5 inline-flex text-white text-sm font-medium font-Man absolute top-[11%] right-[10%]'>Subscribe Now</button>
                    </div>
                </div>
                <div className='bg-white rounded-full w-[150px] h-[150px] absolute top-[-15%] left-[45%]'></div>
                <div className='absolute top-[-12.5%] left-[45.7%] bg-primary rounded-full w-[130px] h-[130px]'></div>

                <CgMail className='absolute top-[-8%] left-[47.6%] w-[69px] h-[80px] text-white' />
            </div>
        </div>
    )
}

export default NewsLetter

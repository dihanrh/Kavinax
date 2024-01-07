import React from 'react'
import LHSArrow from '../assets/LHS Arrow.png'
import RHSArrow from '../assets/RHS Arrow.png'
import Appartmen from '../assets/categories1.png'
import DuplexHouse from '../assets/categories2.png'
import Office from '../assets/categories3.png'

const Categories = () => {
  return (
    <>
    <div className='container mt-[950px] mx-auto'>
      <div className='flex justify-between items-center'>
        <h3 className=' text-blue-950 text-5xl font-bold font-Osan leading-[68px]'>Browse By Categories</h3>
        <div className=' items-end flex'>
        <img src={LHSArrow} alt="" className='w-[50px] h-[50px]' />
        <img src={RHSArrow} alt="" className='w-[50px] h-[50px]'/>
        </div>
      </div>
      <div className='mt-[50px] flex justify-between'>
        <div className='flex'>
            <img src={Appartmen} alt="" />
            <div className='ml-[16px] my-[39px]'>
                <h4 className='text-blue-950 text-xl font-bold font-Man leading-7'>Appartment</h4>
                <p className='text-black text-base font-normal font-Man leading-7'>Lorem ipsum dolor sitam<br />consectetur elit.</p>
                <p className='text-blue-950 text-base font-normal font-Man leading-7'>22 Property</p>
            </div>
        </div>
        <div className='flex'>
            <img src={DuplexHouse} alt="" />
            <div className='ml-[16px] my-[39px]'>
                <h4 className='text-blue-950 text-xl font-bold font-Man leading-7'>Duplex House</h4>
                <p className='text-black text-base font-normal font-Man leading-7'>Lorem ipsum dolor sitam<br />consectetur elit.</p>
                <p className='text-blue-950 text-base font-normal font-Man leading-7'>25 Property</p>
            </div>
        </div>
        <div className='flex'>
            <img src={Office} alt="" />
            <div className='ml-[16px] my-[39px]'>
                <h4 className='text-blue-950 text-xl font-bold font-Man leading-7'>Office</h4>
                <p className='text-black text-base font-normal font-Man leading-7'>Lorem ipsum dolor sitam<br />consectetur elit.</p>
                <p className='text-blue-950 text-base font-normal font-Man leading-7'>30 Property</p>
            </div>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Categories

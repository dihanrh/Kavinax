import React from 'react'
import Logo from '../assets/Logo.png'

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between items-center py-[40px]'>
            <img src={Logo} alt="" />
            <div className='flex text-blue-950 text-base font-medium font-Man'>
                <p className='hover:text-[#FF5017] hover:font-bold cursor-pointer hover:underline hover:underline-[#FF5017]'>Home</p>
                <p className='mx-[55px] hover:text-[#FF5017] hover:font-bold cursor-pointer hover:underline hover:underline-[#FF5017]'>About Us</p>
                <p className='hover:text-[#FF5017] hover:font-bold cursor-pointer hover:underline hover:underline-[#FF5017]'>Property</p>
                <p className='mx-[55px] hover:text-[#FF5017] hover:font-bold cursor-pointer hover:underline hover:underline-[#FF5017]'>Pages</p>
                <p className='hover:text-[#FF5017] hover:font-bold cursor-pointer hover:underline hover:underline-[#FF5017]'>Blog</p>
                <p className='ml-[55px] hover:text-[#FF5017] hover:font-bold cursor-pointer hover:underline hover:underline-[#FF5017]'>Contact</p>
            </div>
            <div>
                <button className=' font-normal mr-[25px]'>Sign In</button>
                <button className='w-[135px] h-[50px] bg-[#FF5017] rounded-sm border-none text-white'>Add Property</button>
            </div>
        </div>
    )
}

export default Navbar

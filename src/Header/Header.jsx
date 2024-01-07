import React from 'react'
import Location from '../assets/location.png'
import Gmail from '../assets/Email Icon.png'
import Phone from '../assets/Phone.png'
import Facebook from '../assets/Facebook.png'
import Insta from '../assets/instagram.png'
import Twit from '../assets/Twitter.png'
import Linkdin from '../assets/Linkdin.png'
import Youtube from '../assets/Youtube.png'

const Header = () => {
    return (
        <div className='bg-primary font-Man py-[20px]'>
            <div className="container mx-auto">
                <div className="header flex justify-between">
                    <div className="flex">
                        <div className="location flex items-center">
                        <img src={Location} alt="" />
                            <p className='ml-[15px] text-[16px] text-gray-50'>7124 Landmark Tower,New York</p>
                        </div>
                        <div className="gmail flex items-center ml-[37px]">
                        <img src={Gmail} alt="" />
                            <p className='ml-[15px] text-[16px] text-gray-50'>support@yourdomain.com</p>
                        </div>
                        <div className="contact flex items-center ml-[33px]">
                            <img src={Phone} alt="" />
                            <p className='ml-[15px] text-[16px] text-gray-50'>+61383766284</p>
                        </div>
                    </div>
                    <div className="social_media flex">
                        <a href=""><img src={Facebook} alt="" className=''/></a>
                        <a href=""><img src={Insta} alt="" className='mx-[20px]'/></a>
                        <a href=""><img src={Twit} alt="" /></a>
                        <a href=""><img src={Linkdin} alt="" className='mx-[20px]'/></a>
                        <a href=""><img src={Youtube} alt="" /></a>
                    </div>
                </div>
                <div>

                </div>
            </div>

        </div>
    )
}

export default Header

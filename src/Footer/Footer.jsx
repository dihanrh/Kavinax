import React from 'react'
import Logo2 from '../assets/Logo2.png'
import Facebook from '../assets/Facebook.png'
import Insta from '../assets/instagram.png'
import Twit from '../assets/Twitter.png'
import Linkdin from '../assets/Linkdin.png'
import Youtube from '../assets/Youtube.png'
import ArrowVector from '../assets/ArrowVector.png'
import FooterBg from '../assets/FooterImg.png'
import Location from '../assets/location.png'
import Gmail from '../assets/Email Icon.png'
import Phone from '../assets/Phone.png'
import FooterArt from '../assets/FooterCard.png'
const Footer = () => {
    return (
        <>
            <div className='bg-primary w-full h-[460px] pt-[110px]'>
                <div className='container mx-auto flex justify-between'>
                    <div>
                        <img src={Logo2} alt="" />
                        <p className='w-[328.91px] h-[76.17px] text-gray-50 text-base font-normal font-Man leading-7 my-[35px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <div className="social_media flex">
                            <a href=""><img src={Facebook} alt="" className='' /></a>
                            <a href=""><img src={Insta} alt="" className='mx-[20px]' /></a>
                            <a href=""><img src={Twit} alt="" /></a>
                            <a href=""><img src={Linkdin} alt="" className='mx-[20px]' /></a>
                            <a href=""><img src={Youtube} alt="" /></a>
                        </div>
                    </div>
                    <div>
                        <h2 className=' text-gray-50 text-2xl font-bold font-Man mb-[10px]'>Quick Links</h2>
                        <div className='flex my-[30px]'>
                            <img src={ArrowVector} alt="" />
                            <p className='text-orange-600 text-base font-normal font-Man ml-[10px]'>About Us</p>
                        </div>
                        <div className='flex my-[30px]'>
                            <img src={ArrowVector} alt="" />
                            <p className='text-white text-base font-normal font-Man ml-[10px]'>Property</p>
                        </div>
                        <div className='flex my-[30px]'>
                            <img src={ArrowVector} alt="" />
                            <p className='text-white text-base font-normal font-Man ml-[10px]'>Our Agents</p>
                        </div>
                        <div className='flex my-[30px]'>
                            <img src={ArrowVector} alt="" />
                            <p className='text-white text-base font-normal font-Man ml-[10px]'>Careers</p>
                        </div>
                        <div className='flex my-[30px]'>
                            <img src={ArrowVector} alt="" />
                            <p className='text-white text-base font-normal font-Man ml-[10px]'>Contact</p>
                        </div>
                    </div>
                    <div>
                        <h2 className=' text-gray-50 text-2xl font-bold font-Man mb-[10px]'>Recent Post</h2>
                        <img src={FooterBg} alt="" className='mt-[40px]' />
                    </div>
                    <div>
                        <h2 className=' text-gray-50 text-2xl font-bold font-Man mb-[10px]'>Contact Us</h2>
                        <div className='mt-[40px]'>
                            <div>
                                <div className="contact flex items-center">
                                    <img src={Phone} alt="" />
                                    <div className='ml-[15px]'>
                                        <p className='text-gray-50 text-sm font-normal font-Man'>Phone</p>
                                        <p className='text-gray-50 text-base font-normal font-Man'>+44 (0) 20 9994 7740</p>
                                    </div>
                                </div>
                                <div className="gmail flex items-center mt-[30px]">
                                    <img src={Gmail} alt="" />
                                    <div className='ml-[15px]'>
                                        <p className='text-gray-50 text-sm font-normal font-Man'>Email</p>
                                        <p className='text-gray-50 text-base font-normal font-Man'>support@yourdomain.com</p>
                                    </div>
                                </div>
                                <div className="location flex items-center mt-[30px]">
                                    <img src={Location} alt="" />
                                    <div className='ml-[15px]'>
                                        <p className='text-gray-50 text-sm font-normal font-Man'>Address</p>
                                        <p className='text-gray-50 text-base font-normal font-Man'>7124 Landmark Tower,New York</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-full h-[100px] bg-[#FF5017]'>
                <div className='container mx-auto pt-[30.56px] flex justify-between items-center'>
                    <div className="text-gray-50 text-base font-normal font-Man leading-relaxed">©2022 <span className="text-gray-50 text-base font-bold font-Man underline leading-relaxed">Kavinax Property.</span> All Rights Reserved.</div>
                    <img src={FooterArt} alt="" />
                </div>
            </div>
        </>
    )
}

export default Footer

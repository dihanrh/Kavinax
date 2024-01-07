import React from 'react'
import Tutorialbg from '../assets/Tutorial.png'
import PlayBtn from '../assets/Play.png'
import TutorialArt from '../assets/TutorialArt.png'
const Tutorial = () => {
    return (
        <>
            <div className='relative'>
                <img src={Tutorialbg} alt="" />
                <div className='absolute top-[15%] z-[10] w-full'>
                    <img src={PlayBtn} alt="" className='mx-auto' />
                    <h3 className=' text-gray-50 text-5xl font-bold font-Man mt-[25px] text-center'>Watch Our Video Tutorial</h3>

                    <div className='w-[1320px] h-[415px] bg-[#F8FAFA] mx-auto mt-[115px] pt-[73px] px-[30px] flex justify-between'>
                        <div>
                            <div className='relative'>
                                <img src={TutorialArt} alt=""/>
                                <p className=' absolute top-[40%] left-[20.5%] text-center text-orange-600 text-[32px] font-bold font-Man'>98700 +</p>
                            </div>
                            <p className='text-center text-blue-950 text-2xl font-semibold font-Man mt-[30px]'>Properties Listed</p>
                        </div>
                        <div>
                            <div className='relative'>
                                <img src={TutorialArt} alt=""/>
                                <p className=' absolute top-[40%] left-[22.5%] text-center text-orange-600 text-[32px] font-bold font-Man'>48751 +</p>
                            </div>
                            <p className='text-blue-950 text-2xl font-semibold font-Man mt-[30px] text-center'>Properties Sold</p>
                        </div>
                        <div>
                            <div className='relative'>
                                <img src={TutorialArt} alt=""/>
                                <p className=' absolute top-[40%] left-[22.5%] text-center text-orange-600 text-[32px] font-bold font-Man'>67845 +</p>
                            </div>
                            <p className='text-blue-950 text-2xl font-semibold font-Man mt-[30px] text-center'>Satisfied clients</p>
                        </div>
                        <div>
                            <div className='relative'>
                                <img src={TutorialArt} alt=""/>
                                <p className=' absolute top-[40%] left-[38%] text-center text-orange-600 text-[32px] font-bold font-Man'>10 +</p>
                            </div>
                            <p className='text-blue-950 text-2xl font-semibold font-Man mt-[30px] text-center'>Realtor Awards</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Tutorial

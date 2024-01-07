import React from 'react'
import Agent1 from '../assets/Agent1png.png'
import Agent2 from '../assets/Agent2.png'
import Agent3 from '../assets/Agent3.png'

const Agents = () => {
  return (
    <div className='mt-[150px] container mx-auto mb-[57px]'>
        <div className='text-center'>
      <h3 className='text-blue-950 text-xl font-bold font-Osan'>Our Agents</h3>
        <h3 className=' text-black text-5xl font-bold font-Man capitalize leading-[68px] mt-[30px]'>Meet Our Agents</h3>
        </div>
        <div className='mt-[60px] flex justify-between'>
            <img src={Agent1} alt="" />
            <img src={Agent2} alt="" />
            <img src={Agent3} alt="" />
        </div>
    </div>
  )
}

export default Agents

import React from 'react'
import Section3Image from "./Images/motionarteffect-img8.png"

const Section3 = () => {
  return (
    <div className='mt-[200px] w-full lg:h-[286] text-[#6F6F6F] flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-4 justify-center items-center  bg-[#02022c] rounded-lg w-fullx h-[200px] p-5 mb-10 '>
        <p className='text-[#EEE5FF] text-[25px] h-[25]'>Supported by All Popular Browsers</p>
        <p className='text-[#EEE5FFBD] text-[18px] '>Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
       <img src={Section3Image} width={441} height={48} className='z-[11000]'/>

        </div>

        <div className=' mt-[80px] mb-[80px] flex flex-col gap-4 justify-center items-center w-[690px]'>
            <p className='text-[35px] text-[#EEE5FF]'>An All-Round Plugin With Powerful Features</p>
            <p className='text-[#EEE5FFBD] text-center '>Whether you're a seasoned web designer o
            r just starting out, Motion Art for Element
            or seamlessly integrates with the Elementor 
            platform, providing you with a seamless and
             intuitive experience.</p>
        </div>
    </div>
  )
}

export default Section3
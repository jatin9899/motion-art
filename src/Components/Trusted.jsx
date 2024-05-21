import React from 'react'
import trustedImage1 from "./Images/motionarteffect-img2.png"
import trustedImage2 from "./Images/motionarteffect-img1.png"
import trustedImage3 from "./Images/motionarteffect-img3.png"
import star from "./Images/motionarteffect-img4.png"
import { FaArrowRightLong } from "react-icons/fa6";
import trustImage4 from "./Images/motionarteffect-img5.png"

const Trusted = () => {
  return (
    <div className='w-full mt-6 '>
        <p className='text-center tex-[22px] text-[#EEE5FF] mb-11'>Trusted by thousands of users around the world</p>

        <div className='flex flex-row justify-evenly'>
            <div className='flex flex-row w-[300px] h-[88px] gap-5'>
                <img src={trustedImage1}/>
                <div className='flex flex-col gap-2  '>
                    <img src={star} width={200} height={100}/>
                    <p className='text-white'>4.5 Score, 9 REviews</p>
                </div>
            </div>
            <div  className='flex flex-row w-[300px] h-[88px] gap-5'>
                <img src={trustedImage2} />
                <div className='flex flex-col gap-2  '>
                    <img src={star}/>
                    <p className='text-white'>4.5 Score, 9 REviews</p>
                </div>
            </div>
            <div  className='flex flex-row w-[300px] h-[88px] gap-5'>
                <img src={trustedImage3} />
                <div className='flex flex-col gap-2  '>
                    <img src={star}/>
                    <p className='text-white'>4.5 Score, 9 REviews</p>
                </div>
            </div>
           
        </div>
        <div className='w-full mt-12 md:flex md:flex-row md:justify-center md:gap-6 sm:flex-col items-center'>
      <div className='flex flex-col gap-4 text-center w-[1000px] justify-center items-center'>
        <p className='text-white text-3xl'>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</p>
        <p className='text-gray-300 text-base'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
        <div className='z-[1000000] text-lg font-bold text-white px-7 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-indigo-800 w-[331px]'>
          <button className='text-lg text-white flex items-center justify-center rounded-lg gap-8 '>
            Purchase From Envato <FaArrowRightLong className='ml-1 ' />
          </button>
        </div>
      </div>  
      <div>
        <img src={trustImage4} alt='trustImage4' width={248} height={246} />
      </div>
    </div>
    </div>
  )
}

export default Trusted
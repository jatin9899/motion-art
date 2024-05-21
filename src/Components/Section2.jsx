import React from 'react'
import Sectiom2Image from './Images/motionarteffect-img11.png'
import Section2Image2 from './Images/motionarteffect-img10.png'

const Section2 = () => {
  return (
    <div className='w-full h-[1063.46] mt-[100px] relative md:[2000] '>
      <div className='h-[661.75px] w-[600px] text-center mx-auto ' >
         <p className='mx-auto text-[#EEE5FF] text-[35px]'>Apply On Any Section Or Enable For <span className='flex flex-row justify-center'>Whole Page</span></p>

      </div>
      <div className='flex lg:flex-row absolute mt-[-530px] gap-8 text-white sm:felx-col md:flex-col  '>
        <div className='flex flex-col gap-3 w-[581] h-[543] ml-[100px] bg-[#02022c] rounded-lg m-3 p-9 md:w-50% md:text-center'>
          <p className='text-[25px]'>Apply On Section</p>
          <p className='text-[18px] text-[#EEE5FFBD] md:text-center'>Apply on section is a game-changer, offering an unparalleled way to manag
          e applications directly from your website. </p>
          <img src={Sectiom2Image} width={518} height={335} />
        </div>

        <div className=' mr-[100px] bg-[#02022c] rounded-lg m-3 p-9 flex flex-col gap-3 w-[581] h-[543] mt-[60px] md:w-50% md:text-center'>
        <p className='text-[25px]'>Apply On Section</p>
        <p className='text-[18px] text-[#EEE5FFBD]'>Take your website to new heights with Motion Art for Elementor. Embrace the
         power of motion and animation.</p>
         <img src={Section2Image2} width={518} height={335} />
        </div>
      </div>
    </div>
  )
}

export default Section2
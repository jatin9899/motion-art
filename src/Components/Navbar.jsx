import React from 'react';
import image1 from "./Images/motionarteffect-img2.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  

  return (
    <div className='h-auto bg-[#262626] flex flex-col md:flex-row justify-between items-center px-5 py-3 '>
      <div className='flex items-center mb-3 md:mb-0 flex-grow '> {/* Add flex-grow class here */}
        <Link to="/" className='flex items-center text-white'>
          <img src={image1} height={60} width={60} className='mr-2 z-[10000]' alt='logo' />
          <p className='text-[12px] font-medium'>envto<span className='text-green-300 z-[10000]'>market</span></p>
        </Link>
      </div>
      <div className='bg-[#82B440] px-4 py-2 rounded-md hover:bg-[#7cc819] z-[10000]' >
        {/* Attach the click event handler to the button */}
        <button className='text-white'>Buy Now</button>
      </div>
    </div>
  );
};

export default Navbar;

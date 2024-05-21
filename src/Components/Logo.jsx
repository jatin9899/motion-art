import React from 'react';
import logoimage from './Images/MotionArtEffect-logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className='bg-[#050522] flex flex-row justify-between h-[120px]'>
      <img src={logoimage} height={48.35} width={206.6} className='pt-7 pb-2 ml-5 w-[220px] z-[10000]' />
      <div className='hidden md:block z-[1000000]'> {/* Hide the button on medium and small screens */}
        <Link to="/Purchase">
          <button className='z-[10000] text-[18px] text-[#0D0517] h-[60px] mr-7 mt-8 items-baseline py-[5px] px-[10px] bg-white rounded-md hover:bg-transparent hover:text-white hover:border-white border border-transparent transition duration-500 w-[250px]'>Purchase Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Logo;

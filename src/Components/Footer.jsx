import React from 'react'

const Footer = () => {
  return (
    <div className='flex p-5 items-center justify-between bg-gradient-to-r from-orange-500 to-indigo-800 text-[#EEE5FFBD]'>
        <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
        <div className='flex gap-4'>
            <a href='/'>Documentation</a>
            <a  href='/'>Support</a>
        </div>
    </div>
  )
}

export default Footer
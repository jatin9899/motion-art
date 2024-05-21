import React from 'react';
import image1 from "./Images/motionarteffect-img9.png";
import image2 from "./Images/motionarteffect-img6.png";
import image3 from "./Images/motionarteffect-img7.png";

const CardSection = () => {

    const data = [
        {
            img: image1,
            heading: 'Light Weight',
            Para: 'Motion Art for Elementor is designed to be lightweight.',
          
        },
        {
            img: image2,
            heading: '100% Responsive',
            Para: 'Create a consistent visual experience across all devices.',
           
          
        },
        {
            img: image3,
            heading: 'User Friendly Interface',
            Para: 'Ensure a smooth experience for both applicants and administrators.',
       
        }
    ];

    const Card = ({ img, heading, Para, Para1, headingStyle }) => (
        <div className="z-[1000000] bg-[#17043abd] max-w-xs rounded-2xl overflow-hidden shadow-lg mx-2 mb-4 p-1 transform transition duration-300 ease-in-out hover:scale-105 mb-[150px] ">
            <img className="w-48 h-48" src={img} alt={heading} />
            <div className="px-6 py-4">
                <div className='text-[35px] text-[#EEE5FF]'>{heading}</div>
                <p className='text-[18px] text-[#EEE5FFBD]'>{Para}</p>

            </div>
        </div>
    );

    return (
        <div className="container mx-auto ">
            <div className="flex flex-wrap justify-evenly ">
                {data.map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </div>
        </div>
    );
}

export default CardSection;

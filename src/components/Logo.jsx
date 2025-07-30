/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import image from '../assets/images.png';

function Logo() {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <img
        src={image}
        alt="Logo"
        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
      />
      <span className="text-lg sm:text-xl md:text-2xl font-semibold text-black">
        Mega Blog
      </span>
    </div>
  );
}

export default Logo;

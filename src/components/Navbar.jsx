import React from 'react';
import appleImg from '../assets/apple_831329.png';
import { searchImg, bagImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-black text-white">
      <nav className="flex w-full screen-max-width items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={appleImg} alt="Apple" width={20} height={24} className="cursor-pointer" />
        </a>

        {/* Navigation Links */}
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <a
              key={nav}
              href={`#${nav.toLowerCase()}`}
              className="px-5 text-sm font-medium text-gray-300 hover:text-white transition-all cursor-pointer"
            >
              {nav}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 max-sm:justify-end max-sm:flex-1">
          {/* Search Icon */}
          <button 
            aria-label="Search" 
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-800 transition-all"
          >
            <img src={searchImg} alt="Search" width={20} height={20} />
          </button>

          {/* Cart Icon */}
          <button 
            aria-label="Cart" 
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-800 transition-all relative"
          >
            <img src={bagImg} alt="Cart" width={20} height={20} />
            {/* Notification Badge */}
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

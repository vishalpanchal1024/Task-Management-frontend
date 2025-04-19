import React from 'react';
import { FiMenu, FiSearch, FiBell, FiSettings, FiChevronDown } from 'react-icons/fi';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-4 md:px-6 bg-gradient-to-r from-white to-gray-50">
        {/* Left section */}
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-2 mr-3 text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
            aria-label="Toggle sidebar"
          >
            <FiMenu size={24} />
          </button>
         
        </div>


        {/* Right section */}
        <div className="flex items-center gap-3 md:gap-4">
          <button
            className="relative p-2 text-gray-600 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
            aria-label="Notifications"
          >
            <FiBell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button
            className="p-2 text-gray-600 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
            aria-label="Settings"
          >
            <FiSettings size={20} />
          </button>

          {/* User profile */}
          <div className="flex items-center gap-3 ml-2">
            <button className="flex items-center p-0.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="User profile"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

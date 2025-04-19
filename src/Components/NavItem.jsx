import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ icon, label, active = false, route }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-item">
      <Link to={route} className=''>
        <button
          onClick={toggleDropdown}
          className={`flex items-center w-full px-4 py-2 text-left [&.active]:bg-gradient-to-tl from-[#3f3b3b] to-[#FFF] transition-colors rounded-lg ${
            active ? 'bg-gray-200 text-white' : 'text-gray-200 hover:bg-gray-1  00 hover:text-white'
          }`}
        >
          <span className="inline-flex items-center justify-center mr-3 text-blue-500 p-1 bg-white rounded-xl">{icon}</span>
          <span className="flex-1 font-medium text-gray-800">{label}</span>
        </button>
      </Link>
    </div>
  );
};

export default NavItem;

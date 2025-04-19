import React from 'react';
import { FiX } from 'react-icons/fi';
import { RiCalendar2Line, RiDashboardLine, RiSettings3Line, RiTaskLine, RiUser3Line } from 'react-icons/ri';
import NavItem from '@Component/NavItem';

const items = [
    { icon: RiDashboardLine, label: 'Home', active: true , route:"/" },
    { icon: RiTaskLine, label: 'Tasks', route:"/tasks"  },
    { icon: RiCalendar2Line, label: 'Calender' , route:"/calendar" },
    { icon: RiUser3Line, label: 'Users' , route:"/users" },
    { icon: RiSettings3Line, label: 'Settings', route:"/settings"  },
];




const Sidebar = ({ isOpen, isMobile, toggleSidebar }) => {


  const renderNavSection = ( items) => (
    <>
     
      {items.map((item, index) => (
        <NavItem
          key={`${item.label}-${index}`}
          icon={<item.icon size={20} />}
          label={item.label}
          active={item.active}
          route={item.route}
        />
      ))}
    </>
  );

  return (
    <>
    
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 z-20 bg-white bg-opacity-50 backdrop-blur-sm transition-opacity lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen w-64
          bg-white text-white 
          transition-transform duration-300 ease-in-out
          border-r border-gray-700
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          
        `}
      >
        {(
          <div className="flex items-center justify-between p-4  border-gray-700 bg-white">
            <span className="text-lg font-semibold bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent">
              Tasky
            </span>
            <button
              onClick={toggleSidebar}
              className="p-2 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-600 lg:hidden"
              aria-label="Close sidebar"
            >
              <FiX size={20} />
            </button>
          </div>
        )}

        <div className="h-full overflow-y-auto py-5 px-2 custom-scrollbar">
          <nav className="space-y-2">
            
            {renderNavSection( items)}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NewspaperIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import { IoSchoolSharp ,IoPeople} from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  const [activeItem, setActiveItem] = useState("News");
  const navigate = useNavigate();

  const menuItems = [
    { id: 'news', label: 'News', icon: NewspaperIcon, route: '/newsmanager' },
    { id: 'testimonials', label: 'Testimonials', icon: ChatBubbleBottomCenterTextIcon, route: '/testimonialmanager' },
    { id: 'college', label: 'College', icon: IoSchoolSharp , route: '/collegemanager' },
    { id: 'studentinfo', label: 'Student Information', icon: IoPeople , route: '/studentinfo' }
  ];

  const handleNavigation = (item) => {
    setActiveItem(item.label);
    navigate(item.route);
  };
  

  return (
    <nav className="h-full w-70 bg-blue-950 text-gray-300">
      {/* Brand Section */}
      <div className="px-6 py-8 border-b border-white/10">
        <h1 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
          <button>
            <Link to="/admin-page">Expert Educational Consultancy</Link>
          </button>
          
        </h1>
      </div>

      {/* Navigation Items */}
      <div className="px-3 py-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="relative">
              <motion.button
                onClick={() => handleNavigation(item)}
                className={`relative w-full flex items-center gap-3 px-4 py-3.5 my-2
                  rounded-lg text-sm font-medium
                  transition-all duration-200
                  bg-blue-900/20 hover:bg-blue-900/30
                  ${
                    activeItem === item.label
                      ? "bg-blue-900/40 text-white shadow-lg"
                      : "text-gray-300 hover:text-white"
                  }
                `}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeItem === item.label && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                <Icon className="w-5 h-5" />
                {item.label}
              </motion.button>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default AdminNavbar;

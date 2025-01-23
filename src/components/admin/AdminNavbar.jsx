import React, { useState } from "react"
import { motion } from "framer-motion"
import { NewspaperIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline"

const AdminNavbar = () => {
  const [activeItem, setActiveItem] = useState("News")

  const menuItems = [
    { id: "news", label: "News", icon: NewspaperIcon },
    { id: "testimonials", label: "Testimonials", icon: ChatBubbleBottomCenterTextIcon },
  ]

  return (
    <nav className="h-screen w-64 bg-blue-950 text-gray-300">
      {/* Brand Section */}
      <div className="px-6 py-8 border-b border-white/10">
        <h1 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
          Expert Educational Consultancy
        </h1>
      </div>

      {/* Navigation Items */}
      <div className="px-3 py-4">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.id} className="relative">
              <motion.button
                onClick={() => setActiveItem(item.label)}
                className={`
                  relative w-full flex items-center gap-3 px-4 py-3.5 my-2
                  rounded-lg text-sm font-medium
                  transition-all duration-200
                  bg-blue-900/20 hover:bg-blue-900/30
                  ${
                    activeItem === item.label ? "bg-blue-900/40 text-white shadow-lg" : "text-gray-300 hover:text-white"
                  }
                `}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Active Indicator */}
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
          )
        })}
      </div>
    </nav>
  )
}

export default AdminNavbar



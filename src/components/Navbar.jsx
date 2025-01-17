import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Home", section: null },
  { id: 2, title: "About Us", section: "aboutUsRef" },
  { id: 3, title: "Why Us", section: "whyUsRef" },
  { id: 4, title: "Testimonials", section: "testimonialsRef" },
];

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="relative z-20 bg-slate-600 text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        <div>
          <h1 className="font-bold text-2xl">Expert Educational Consultancy</h1>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <button
                  onClick={() => menu.section && scrollToSection(menu.section)}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  {menu.title}
                </button>
              </li>
            ))}
            <button className="primary-btn">Sign In</button>
          </ul>
        </div>
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import SignInButton from "./SignInButton";

const NavbarMenu = [
  { id: 1, title: "About Us", section: "aboutUs" },
  { id: 2, title: "Why Us", section: "whyUs" },
  { id: 3, title: "Testimonials", section: "testimonials" },
];

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className=" fixed top-0 w-full  z-20 bg-slate-700 hover:bg-black text-white rounded-b-2xl ">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl mx-3">Expert Educational Consultancy</h1>
        </div>
        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <button
                  onClick={() => scrollToSection(menu.section)}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  {menu.title}
                </button>
              </li>
            ))}
               <SignInButton /> 
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

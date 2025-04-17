
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import axios from "axios";

const NavbarMenu = [
  { id: 1, title: "About Us", section: "aboutUsRef" },
  { id: 2, title: "Why Us", section: "whyUsRef" },
  { id: 3, title: "Testimonials", section: "testimonialsRef" },
  { id: 4, title: "Contact Us", section: "footRef" },
];

const Navbar = ({ scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [sessionExists, setSessionExists] = useState(false);
  const navigate = useNavigate();
  const [firstName,setName]=useState("")
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(27, 34, 75, 0)", "rgba(27, 34, 75, 0.95)"]
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  const checkSession = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/user/getUser", {
        withCredentials: true,
      });
      if (response.status === 200) {
        console.log("Session exists:", response.data);
        setName(response.data.data.firstName)
        setSessionExists(true);
      }
    } catch (error) {
      console.error("Error checking session:", error);
      setSessionExists(false);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NavbarMenu.map((menu) => menu.section).filter(Boolean);
      const scrollPosition = window.scrollY + 100;
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetStarted = () => {
    if (sessionExists) {
      navigate("/dashboard");
    } else {
      navigate("/sign-in");
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
      style={{ backgroundColor, backdropFilter: backdropBlur }}
    >
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative z-10"
          >
            <h1 className="font-bold text-xl md:text-2xl bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
              Expert Educational Consultancy
            </h1>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {NavbarMenu.map((menu) => (
                <motion.li
                  key={menu.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: menu.id * 0.1 }}
                >
                  <button
                    onClick={() => menu.section && scrollToSection(menu.section)}
                    className={`relative px-2 py-1 text-sm font-medium transition-all duration-300 hover:text-yellow-400 ${
                      activeSection === menu.section ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    <span className="relative z-10">{menu.title}</span>
                    <motion.span
                      className="absolute inset-0 bg-white/5 rounded-lg -z-0"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    {activeSection === menu.section && (
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-yellow-400 w-full"
                        layoutId="activeSection"
                      />
                    )}
                  </button>
                </motion.li>
              ))}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-5 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-sm text-white rounded-lg transition-shadow duration-200 hover:shadow-lg hover:shadow-blue-500/25"
                onClick={handleGetStarted}
              >
                {sessionExists===true ? <>{`Hi, ${firstName} here Click to navigate to dashboard`}</>:<>Get Started!</>}
              </motion.button>
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden relative z-10 p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <motion.span
                className="absolute inset-0 text-white"
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              >
                <IoMdMenu className="w-full h-full" />
              </motion.span>
              <motion.span
                className="absolute inset-0 text-white"
                animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
              >
                <IoMdClose className="w-full h-full" />
              </motion.span>
            </div>
          </motion.button>

          {/* Mobile Menu */}
          <motion.div
            className="lg:hidden fixed inset-0 z-40 bg-[#1B224B]/98 backdrop-blur-xl"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? "0%" : "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="flex flex-col h-full pt-20 px-6">
              <ul className="flex flex-col gap-4">
                {NavbarMenu.map((menu) => (
                  <motion.li
                    key={menu.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: menu.id * 0.1 }}
                  >
                    <button
                      onClick={() => {
                        menu.section && scrollToSection(menu.section);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full text-left py-3 text-lg font-medium transition-colors ${
                        activeSection === menu.section ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      {menu.title}
                    </button>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <button
                    className="w-full mt-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
                    onClick={() => {
                      handleGetStarted();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                                     {sessionExists===true ? <>{`Hi, ${firstName} here Click to navigate to dashboard`}</>:<>Get Started!</>}

                    
                  </button>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

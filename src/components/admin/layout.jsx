// import { useState } from "react";
// import { useLocation, Link, Routes, Route } from "react-router-dom";
// import { motion } from "framer-motion";
// import axios from "axios";
// import { Home, LogOut } from "lucide-react";
// import { NewspaperIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
// import { IoSchoolSharp, IoPeople } from "react-icons/io5";
// import AdminPage from "./adminPages/AdminPage";
// import NewsManager from "./adminPages/NewsManager";
// import StudentManager from "./adminPages/studentInfo"
// import TestimonialManager from "./adminPages/TestimonialManager";
// import CollegeManager from "./adminPages/collegeManager";
// import { Menu } from "lucide-react";

// const AdminLayout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const location = useLocation();

//   const handleSignout = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/auth/signout");
//       console.log(response);
//     } catch (error) {
//       console.log("This is the error at signout", error);
//     }
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const menuItems = [
//     { path: "/admin-page", icon: <Home size={20} />, label: "Admin Dashboard" },
//     { path: "/admin-page/news", icon: <NewspaperIcon width={20} />, label: "News" },
//     { path: "/admin-page/students", icon: <IoPeople size={20} />, label: "Students" },
//     { path: "/admin-page/colleges", icon: <IoSchoolSharp size={20} />, label: "Colleges" },
//     { path: "/admin-page/testimonials", icon: <ChatBubbleBottomCenterTextIcon width={20} />, label: "Testimonials" }
//   ];

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <motion.aside
//         className={`${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 fixed md:static inset-y-0 left-0 w-64 bg-gradient-to-b from-blue-900 to-blue-800 text-white shadow-xl transition-transform duration-300 ease-in-out z-30 md:z-auto`}
//         initial={{ x: -250 }}
//         animate={{ x: 0 }}
//         exit={{ x: -250 }}
//         transition={{ duration: 0.3 }}
//       >
//         <div className="px-6 py-8 border-b border-blue-700/50">
//           <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
//             Expert Educational
//             <span className="block mt-1 text-sm font-normal text-blue-200">Consultancy</span>
//           </h1>
//         </div>
//         <nav className="mt-8 px-4">
//           <ul className="space-y-2">
//             {menuItems.map((item) => (
//               <li key={item.path}>
//                 <Link
//                   to={item.path}
//                   className={`flex items-center gap-3 px-4 py-3 rounded-lg transition duration-200 ${
//                     location.pathname === item.path ? "bg-blue-700/50 text-white" : "text-blue-100 hover:bg-blue-700/30"
//                   }`}
//                   onClick={() => setIsSidebarOpen(false)}
//                 >
//                   {item.icon}
//                   <span>{item.label}</span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//           <div  className="p-3 mt-40">
//           <button
//             onClick={handleSignout}
//             className="flex items-center mt-80 justify-center gap-2 w-full px-4 py-3 bg-red-500/10 text-red-300 rounded-lg hover:bg-red-500/20 transition duration-200"
//           >
//             <LogOut size={20} />
//             <span>Sign Out</span>
//           </button>
//           </div>
        
        
//       </motion.aside>

//       {/* Main Content */}
//       <main className="flex-1 min-h-screen bg-gray-50">
//         <div className="md:hidden p-4 bg-white shadow-sm">
//           <button
//             onClick={toggleSidebar}
//             className="p-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition duration-200"
//           >
//             {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//         <div className="p-6 overflow-hidden">
//           <Routes>
//             <Route path="/" element={<AdminPage />} />
//             <Route path="/news" element={<NewsManager />} />
//             <Route path="/students" element={<StudentManager />} />
//             <Route path="/colleges" element={<CollegeManager />} />
//             <Route path="/testimonials" element={<TestimonialManager />} />
//           </Routes>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminLayout;

import { useState } from "react"
import { useLocation, Link, Routes, Route } from "react-router-dom"
import { motion } from "framer-motion"
import axios from "axios"
import { Home, LogOut, X } from "lucide-react"
import { NewspaperIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline"
import { IoSchoolSharp, IoPeople } from "react-icons/io5"
import AdminPage from "./adminPages/AdminPage"
import NewsManager from "./adminPages/NewsManager"
import StudentManager from "./adminPages/studentInfo"
import TestimonialManager from "./adminPages/TestimonialManager"
import CollegeManager from "./adminPages/collegeManager"
import { Menu } from "lucide-react"

// const AdminLayout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
//   const location = useLocation()

//   const handleSignout = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/auth/signout")
//       console.log(response)
//     } catch (error) {
//       console.log("This is the error at signout", error)
//     }
//   }

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen)
//   }

//   const menuItems = [
//     { path: "/admin-page", icon: <Home size={20} />, label: "Admin Dashboard" },
//     { path: "/admin-page/news", icon: <NewspaperIcon width={20} />, label: "News" },
//     { path: "/admin-page/students", icon: <IoPeople size={20} />, label: "Students" },
//     { path: "/admin-page/colleges", icon: <IoSchoolSharp size={20} />, label: "Colleges" },
//     { path: "/admin-page/testimonials", icon: <ChatBubbleBottomCenterTextIcon width={20} />, label: "Testimonials" },
//   ]

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 relative">
//       {/* Sidebar */}
//       <motion.aside
//         className={`${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-blue-900 to-blue-800 text-white shadow-xl transition-transform duration-300 ease-in-out z-30 overflow-y-auto`}
//         initial={{ x: -250 }}
//         animate={{ x: 0 }}
//         exit={{ x: -250 }}
//         transition={{ duration: 0.3 }}
//       >
//         <div className="px-6 py-8 border-b border-blue-700/50">
//           <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
//             Expert Educational
//             <span className="block mt-1 text-sm font-normal text-blue-200">Consultancy</span>
//           </h1>
//         </div>
//         <nav className="mt-8 px-4">
//           <ul className="space-y-2">
//             {menuItems.map((item) => (
//               <li key={item.path}>
//                 <Link
//                   to={item.path}
//                   className={`flex items-center gap-3 px-4 py-3 rounded-lg transition duration-200 ${
//                     location.pathname === item.path ? "bg-blue-700/50 text-white" : "text-blue-100 hover:bg-blue-700/30"
//                   }`}
//                   onClick={() => setIsSidebarOpen(false)}
//                 >
//                   {item.icon}
//                   <span>{item.label}</span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//         <div className="p-3 mt-40">
//           <button
//             onClick={handleSignout}
//             className="flex items-center mt-80 justify-center gap-2 w-full px-4 py-3 bg-red-500/10 text-red-300 rounded-lg hover:bg-red-500/20 transition duration-200"
//           >
//             <LogOut size={20} />
//             <span>Sign Out</span>
//           </button>
//         </div>
//       </motion.aside>

//       {/* Main Content */}
//       <main className="flex-1 ml-0 md:ml-64 min-h-screen bg-gray-50 overflow-y-auto">
//         <div className="md:hidden p-4 bg-white shadow-sm sticky top-0 z-20">
//           <button
//             onClick={toggleSidebar}
//             className="p-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition duration-200"
//           >
//             {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//         <div className="p-6 overflow-hidden">
//           <Routes>
//             <Route path="/" element={<AdminPage />} />
//             <Route path="/news" element={<NewsManager />} />
//             <Route path="/students" element={<StudentManager />} />
//             <Route path="/colleges" element={<CollegeManager />} />
//             <Route path="/testimonials" element={<TestimonialManager />} />
//           </Routes>
//         </div>
//       </main>
//     </div>
//   )
// }

// export default AdminLayout


const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()

  const handleSignout = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/auth/signout")
      console.log(response)
    } catch (error) {
      console.log("This is the error at signout", error)
    }
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const menuItems = [
    { path: "/admin-page", icon: <Home size={20} />, label: "Admin Dashboard" },
    { path: "/admin-page/news", icon: <NewspaperIcon width={20} />, label: "News" },
    { path: "/admin-page/students", icon: <IoPeople size={20} />, label: "Students" },
    { path: "/admin-page/colleges", icon: <IoSchoolSharp size={20} />, label: "Colleges" },
    { path: "/admin-page/testimonials", icon: <ChatBubbleBottomCenterTextIcon width={20} />, label: "Testimonials" },
  ]

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Sidebar */}
      <motion.aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-blue-900 to-blue-800 text-white shadow-xl transition-transform duration-300 ease-in-out z-40 overflow-y-auto`}
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        exit={{ x: -250 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-8 border-b border-blue-700/50">
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
            Expert Educational
            <span className="block mt-1 text-sm font-normal text-blue-200">Consultancy</span>
          </h1>
        </div>
        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition duration-200 ${
                    location.pathname === item.path ? "bg-blue-700/50 text-white" : "text-blue-100 hover:bg-blue-700/30"
                  }`}
                  onClick={() => {
                    setIsSidebarOpen(false)
                  }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-3 mt-40">
          <button
            onClick={handleSignout}
            className="flex items-center mt-80 justify-center gap-2 w-full px-4 py-3 bg-red-500/10 text-red-300 rounded-lg hover:bg-red-500/20 transition duration-200"
          >
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        </div>
      </motion.aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 md:ml-64 min-h-screen bg-gray-50 overflow-y-auto transition-all duration-300 ease-in-out">
        <div className="md:hidden p-4 bg-white shadow-sm sticky top-0 z-50">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition duration-200"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="p-6 overflow-hidden">
          <Routes>
            <Route path="/" element={<AdminPage />} />
            <Route path="/news" element={<NewsManager />} />
            <Route path="/students" element={<StudentManager />} />
            <Route path="/colleges" element={<CollegeManager />} />
            <Route path="/testimonials" element={<TestimonialManager />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default AdminLayout


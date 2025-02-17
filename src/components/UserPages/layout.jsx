

// import { useState } from "react"
// import { useLocation } from "react-router-dom"
// import axios from "axios"
// import { Routes, Route, Link } from "react-router-dom"
// import UserDashboardHome from "./userDashBoard/UserDashboardHome"
// import Colleges from "./userDashBoard/Colleges"
// import UpdateProfile from "./userDashBoard/UpdateProfile"
// import { Menu, X } from "lucide-react"

// const Layout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
//   const location = useLocation() // Track current route

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

//   return (
//     <div className="flex flex-col space-x-0 md:flex-row min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside
//         className={`${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 fixed md:static inset-y-0 left-0 w-80 bg-gray-800 text-white p-4 transition-transform duration-300 ease-in-out z-30 md:z-auto`}
//       >
//         <div className="px-4 py-6 border-b border-white/10">
//           <h1 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
//             Expert Educational Consultancy
//           </h1>
//         </div>
//         <nav className="mt-6">
//           <ul className="space-y-4">
//             <li>
//               <Link
//                 to="/dashboard"
//                 className={`block py-2 px-4 rounded transition duration-200 ${
//                   location.pathname === "/dashboard"
//                     ? "bg-blue-500 text-white"
//                     : "hover:bg-gray-700"
//                 }`}
//                 onClick={() => setIsSidebarOpen(false)}
//               >
//                 🏠 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/dashboard/colleges"
//                 className={`block py-2 px-4 rounded transition duration-200 ${
//                   location.pathname === "/dashboard/colleges"
//                     ? "bg-blue-500 text-white"
//                     : "hover:bg-gray-700"
//                 }`}
//                 onClick={() => setIsSidebarOpen(false)}
//               >
//                 🎓 Colleges
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/dashboard/edit-profile"
//                 className={`block py-2 px-4 rounded transition duration-200 ${
//                   location.pathname === "/dashboard/edit-profile"
//                     ? "bg-blue-500 text-white"
//                     : "hover:bg-gray-700"
//                 }`}
//                 onClick={() => setIsSidebarOpen(false)}
//               >
//                 ✏️ Edit Profile
//               </Link>
//             </li>
//           </ul>
//         </nav> 
           
//           <div className=" flex flex-col items-center justify-center">
//           <button
//           onClick={handleSignout}
//           className="mt-8 w-fit bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200"
//         >
//            Sign Out!
//         </button>
            
//           </div>
        
//       </aside>

//       {/* Main Content */}
//       {/* <main className="flex flex-col h-screen w-full p-6 bg-slate-500 md:ml-64">
//         <div className="md:hidden mb-4">
//           <button
//             onClick={toggleSidebar}
//             className="text-white p-2 rounded bg-gray-800 hover:bg-gray-700 transition duration-200"
//           >
//             {isSidebarOpen ? <X size={24} /> : <Menu size={24} />} 
//           </button>
//         </div>
//         <div className="bg-gray-200 h-full rounded-lg p-1">
//           <Routes>
//             <Route path="/" element={<UserDashboardHome />} />
//             <Route path="colleges" element={<Colleges />} />
//             <Route path="edit-profile" element={<UpdateProfile />} />
//           </Routes>
//         </div>
//       </main> */}
//        {/* Main Content */}
//        <main className="flex-1 min-h-screen bg-gray-50">
//         <div className="md:hidden p-4 bg-white shadow-sm">
//           <button
//             onClick={toggleSidebar}
//             className="p-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition duration-200"
//           >
//             {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//         <div className="p-6">
//           <Routes>
//             <Route path="/" element={<UserDashboardHome />} />
//             <Route path="colleges" element={<Colleges />} />
//             <Route path="edit-profile" element={<UpdateProfile />} />
//           </Routes>
//         </div>
//       </main>
//     </div>
//   )
// }

// export default Layout

import { useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import { Routes, Route, Link } from "react-router-dom"
import UserDashboardHome from "./userDashBoard/UserDashboardHome"
import Colleges from "./userDashBoard/Colleges"
import UpdateProfile from "./userDashBoard/UpdateProfile"
import { Menu, X, Home, GraduationCap, UserCog, LogOut } from "lucide-react"

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()

  const handleSignout = async () => {
    try {
     // const response = await axios.get("http://localhost:5000/api/auth/signout")
     const respones= "heel"
      console.log(response)
    } catch (error) {
      console.log("This is the error at signout", error)
    }
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const menuItems = [
    { path: "/dashboard", icon: <Home size={20} />, label: "Home" },
    { path: "/dashboard/colleges", icon: <GraduationCap size={20} />, label: "Colleges" },
    { path: "/dashboard/edit-profile", icon: <UserCog size={20} />, label: "Edit Profile" },
  ]

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:static inset-y-0 left-0 w-64 bg-gradient-to-b from-blue-900 to-blue-800 text-white shadow-xl transition-transform duration-300 ease-in-out z-30 md:z-auto`}
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
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <button
            onClick={handleSignout}
            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-red-500/10 text-red-300 rounded-lg hover:bg-red-500/20 transition duration-200"
          >
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-h-screen bg-gray-50">
        <div className="md:hidden p-4 bg-white shadow-sm">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition duration-200"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="p-6">
          <Routes>
            <Route path="/" element={<UserDashboardHome />} />
            <Route path="/colleges" element={<Colleges />} />
            <Route path="/edit-profile" element={<UpdateProfile />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default Layout


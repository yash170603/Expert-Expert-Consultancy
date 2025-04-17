"use client"

import { useEffect, useState } from "react"
import { useLocation, useNavigate, Link, Routes, Route } from "react-router-dom"
import axios from "axios"
import { Home, LogOut, X, Menu } from "lucide-react"
import { NewspaperIcon, ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline"
import { IoSchoolSharp, IoPeople } from "react-icons/io5"
import AdminPage from "./adminPages/AdminPage"
import NewsManager from "./adminPages/NewsManager"
import StudentManager from "./adminPages/studentInfo"
import TestimonialManager from "./adminPages/TestimonialManager"
import CollegeManager from "./adminPages/collegeManager"
import toast from "react-hot-toast"

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const checkAdmin = async () => {
    try {
      const adminCheckResponse = await axios.post(
        "http://localhost:3001/api/admin/check-admin",
        {},
        { withCredentials: true },
      )

      if (adminCheckResponse.status === 200) {
        console.log("Admin is authenticated", adminCheckResponse)
      }
    } catch (error) {
      console.log("This is the error at admin check", error)
      if (error.response.status === 403 || error.response.status === 401) {
        console.log("The signed in user is not admin")
        toast.error("You are not authorized to access this page")
        setTimeout(() => {
          navigate("/")
        }, 2000)
      }
    }
  }

  useEffect(() => {
    checkAdmin()
  }, [])

  const handleSignout = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/admin-auth/logout", {
        withCredentials: true,
      })

      console.log("Signout response:", response.data)
      toast.success("Successfully signed out")

      setTimeout(() => {
        navigate("/admin")
      }, 1500)
    } catch (error) {
      console.error("Signout failed:", error?.response?.data || error.message)
      toast.error("Error signing out. Please try again.")
    }
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const menuItems = [
    { path: "/admin-page", icon: <Home size={20} />, label: "Admin Dashboard" },
    {
      path: "/admin-page/news",
      icon: <NewspaperIcon width={20} />,
      label: "News",
    },
    {
      path: "/admin-page/students",
      icon: <IoPeople size={20} />,
      label: "Students",
    },
    {
      path: "/admin-page/colleges",
      icon: <IoSchoolSharp size={20} />,
      label: "Colleges",
    },
    {
      path: "/admin-page/testimonials",
      icon: <ChatBubbleBottomCenterTextIcon width={20} />,
      label: "Testimonials",
    },
  ]

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black/50 z-20 transition-opacity duration-300 md:hidden ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative inset-y-0 left-0 z-30 w-64 bg-gradient-to-b from-blue-900 to-blue-800 text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo/Header */}
          <div className="px-6 py-6 border-b border-blue-700/50">
            <h1 className="text-xl font-bold text-white">
              Expert Educational
              <span className="block mt-1 text-sm font-normal text-blue-200">Consultancy</span>
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <ul className="space-y-1.5">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      location.pathname === item.path
                        ? "bg-blue-700/50 text-white font-medium"
                        : "text-blue-100 hover:bg-blue-700/30 hover:text-white"
                    }`}
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        setIsSidebarOpen(false)
                      }
                    }}
                  >
                    <span className="text-blue-300">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sign Out Button */}
          <div className="p-4 mt-auto border-t border-blue-700/30">
            <button
              onClick={handleSignout}
              className="flex items-center justify-center w-full gap-2 px-4 py-3 text-red-300 transition-colors duration-200 rounded-lg bg-red-500/10 hover:bg-red-500/20"
            >
              <LogOut size={18} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 w-full overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={toggleSidebar}
              className="p-2 text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle sidebar"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            {/* <div className="text-lg font-medium text-gray-700 md:ml-0 ml-4">
              {menuItems.find((item) => item.path === location.pathname)?.label || "Admin Dashboard"}
            </div> */}
            
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<AdminPage />} />
            <Route path="/news" element={<NewsManager />} />
            <Route path="/students" element={<StudentManager />} />
            <Route path="/colleges" element={<CollegeManager />} />
            <Route path="/testimonials" element={<TestimonialManager />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout

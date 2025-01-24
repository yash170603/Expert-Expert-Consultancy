import React from "react"
import AdminNavbar from "./AdminNavbar"

const AdminPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminNavbar />
      <main className="flex-1 p-8 bg-slate-700 overflow-auto">
        <h1 className="text-3xl  font-bold text-white mb-6">Welcome to Admin Dashboard</h1>
         
      </main>
    </div>
  )
}

export default AdminPage



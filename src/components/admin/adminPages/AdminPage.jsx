// import React from "react"
// import AdminNavbar from "./AdminNavbar"

// const AdminPage = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       <AdminNavbar />
//       <main className="flex-1 p-8 bg-slate-700 overflow-auto">
//         <h1 className="text-3xl  font-bold text-white mb-6">Welcome to Admin Dashboard</h1>
         
//       </main>
//     </div>
//   )
// }

// export default AdminPage



import React from "react"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { PieChart, Pie, Cell } from "recharts"

const AdminPage = () => {
  // Placeholder data for charts
  const barChartData = [
    { name: "AIIMS", students: 120 },
    { name: "JIPMER", students: 80 },
    { name: "CMC Vellore", students: 60 },
    { name: "AFMC", students: 40 },
    { name: "MAMC", students: 30 },
  ]

  const pieChartData = [
    { name: "Medicine", value: 400 },
    { name: "Surgery", value: 300 },
    { name: "Pediatrics", value: 200 },
    { name: "Gynecology", value: 100 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

  return (
    <div className="flex h-screen bg-gray-100">
    
      <main className="flex-1 p-8 bg-gradient-to-br from-slate-800 to-slate-900 overflow-auto">
        <h1 className="text-3xl font-bold text-white mb-6">NEET Consultancy Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Total Students</h2>
            <p className="text-3xl font-bold text-blue-600">1,234</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Avg. NEET Score</h2>
            <p className="text-3xl font-bold text-green-600">520</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Success Rate</h2>
            <p className="text-3xl font-bold text-purple-600">78%</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Ongoing Consultations</h2>
            <p className="text-3xl font-bold text-orange-600">89</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Top Colleges (by admitted students)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="students" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Popular Specializations</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Activities</h2>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-700">
              <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
              New student registration: Amit Patel
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
              Consultation completed: Priya Sharma
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></span>
              Mock test results updated for batch B22
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-4 h-4 bg-purple-500 rounded-full mr-3"></span>
              New college partnership: XYZ Medical College
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default AdminPage


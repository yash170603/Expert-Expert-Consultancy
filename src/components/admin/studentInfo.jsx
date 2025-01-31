"use client";

import { useState } from "react";
import AdminNavbar from "./AdminNavbar";

const students = [
  { id: 1, name: "Aryan Sharma", dob: "2002-05-15", contact: "9882309210", email: "aryan@example.com" },
  { id: 2, name: "Priya Verma", dob: "2001-09-22", contact: "8765432109", email: "priya@example.com" },
  { id: 3, name: "Rahul Mehta", dob: "2003-12-05", contact: "7654321098", email: "rahul@example.com" },
];

const StudentManager = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex h-full">
        {/* Left Sidebar */}
        <div className="w-1/6 bg-blue-950 text-white h-full p-4">
          <AdminNavbar />
        </div>

        {/* Right Section (Student List) */}
        <div className="flex-1 p-4">
          <h1 className="text-3xl font-bold text-center mb-6">Student Information</h1>

          {/* Student List */}
          <div className="bg-white shadow-md rounded-lg overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-blue-200 text-left">
                  <th className="px-6 py-4 min-w-[150px]">Name</th>
                  <th className="px-6 py-4 min-w-[150px]">Date of Birth</th>
                  <th className="px-6 py-4 min-w-[150px]">Contact No.</th>
                  <th className="px-6 py-4 min-w-[200px]">Email</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-t">
                    <td className="px-6 py-4">{student.name}</td>
                    <td className="px-6 py-4">{student.dob}</td>
                    <td className="px-6 py-4">{student.contact}</td>
                    <td className="px-6 py-4">{student.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentManager;

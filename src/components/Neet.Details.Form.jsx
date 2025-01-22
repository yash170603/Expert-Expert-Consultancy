


import React from "react"
import { useSignUp } from "./context/SignUpContext"

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
  "Andaman and Nicobar Islands",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Outside India",
]

const courseOptions = ["None", "MBBS", "BAMS", "BHMS", "BDS"]

const NeetDetails = () => {
  const { formData, updateFormData } = useSignUp()

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="neetScore">
          NEET Score:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="neetScore"
          type="number"
          value={formData.neetDetails.score}
          onChange={(e) => updateFormData("neetDetails", { score: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="neetRank">
          NEET Rank:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="neetRank"
          type="number"
          value={formData.neetDetails.rank}
          onChange={(e) => updateFormData("neetDetails", { rank: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
          Category:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="category"
          type="text"
          value={formData.neetDetails.category}
          onChange={(e) => updateFormData("neetDetails", { category: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preferredCourse">
          Preferred Course:
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="preferredCourse"
          value={formData.neetDetails.course}
          onChange={(e) => updateFormData("neetDetails", { course: e.target.value })}
        >
          {courseOptions.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="domicileState">
          Domicile State:
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="domicileState"
          value={formData.neetDetails.domicile}
          onChange={(e) => updateFormData("neetDetails", { domicile: e.target.value })}
        >
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default NeetDetails




import { useEffect, useState } from "react"
import axios from "axios"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, Check, Loader2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"

const courseOptions = ["None", "MBBS", "BAMS", "BHMS", "BDS"]
const quotaOptions = ["None", "OBC", "SC", "ST", "EWS"]
const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Lakshadweep", "Puducherry", "Andaman and Nicobar Islands",
  "Dadra and Nagar Haveli and Daman and Diu", "Outside India",
]

const UpdateProfile = () => {
  const [thisForm, setThisForm] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const [step, setStep] = useState(1) 
  useEffect(() => {
    fetcheduserData()
  }, [])

  const fetcheduserData = async () => {
    try {
      setIsLoading(true)
      const formData = await axios.get("http://localhost:3001/api/user/getUser",{withCredentials:true})
      setThisForm(formData.data.data)
      console.log("this is the form fetched initially at update page", formData.data.data)
    } catch (error) {
      toast.error("Failed to fetch user data")
      if(error.response.status === 401){
         setTimeout(()=>{
            navigate('/sign-in')
         },1)
      }
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  

  const handleSubmit = async () => {
    try {
      setIsLoading(true)
      const formSubmitResponse = await axios.put(
        "http://localhost:3001/api/user/updateUser",
        thisForm,{withCredentials:true}
      )
      if (formSubmitResponse.status === 200) {
        toast.success("Profile updated successfully!")
        navigate('/')
      }
    } catch (error) {
      toast.error("Failed to update profile")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const renderStepIndicator = () => (
    <div className="flex justify-center mb-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center">
          <div
            className={`rounded-full h-10 w-10 flex items-center justify-center transition-all duration-200 ${
              i === step
                ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                : i < step
                ? "bg-green-500 text-white"
                : "bg-white text-gray-400 border-2 border-gray-200"
            }`}
          >
            {i < step ? <Check className="w-5 h-5" /> : i}
          </div>
          {i < 3 && (
            <div
              className={`h-1 w-16 mx-2 rounded transition-all duration-200 ${
                i < step ? "bg-green-500" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  )

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          <p className="text-gray-500">Loading your profile...</p>
        </div>
      </div>
    )
  }

  const inputClassName = "w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400"
  const labelClassName = "block text-sm font-medium text-gray-700 mb-1"
  const radioClassName = "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
          Update Your Profile
        </h1>
        <p className="text-gray-500 text-center">
          Complete your profile to get personalized college recommendations
        </p>
      </div>

      {renderStepIndicator()}

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <AnimatePresence mode="wait" custom={step}>
          <motion.div
            key={step}
            custom={step}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="p-8"
          >
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Personal Details
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className={labelClassName}>
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className={inputClassName}
                      value={thisForm?.firstName || ''}
                      onChange={(e) =>
                        handleChange( )
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className={labelClassName}>
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className={inputClassName}
                      value={thisForm?.lastName || ''}
                      onChange={(e) =>
                        handleChange()
                      }
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className={labelClassName}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className={inputClassName}
                    value={thisForm?.email || ''}
                    onChange={(e) =>
                      handleChange()
                    }
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClassName}>
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 1234567890"
                    className={inputClassName}
                    value={thisForm?.phone || ''}
                    onChange={(e) =>
                      handleChange()
                    }
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  NEET Details
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="score" className={labelClassName}>
                      NEET Score
                    </label>
                    <input
                      id="score"
                      type="text"
                      placeholder="Your score"
                      className={inputClassName}
                      value={thisForm?.neetScore || ''}
                      onChange={(e) =>
                        handleChange()
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="rank" className={labelClassName}>
                      NEET Rank
                    </label>
                    <input
                      id="rank"
                      type="text"
                      placeholder="Your rank"
                      className={inputClassName}
                      value={thisForm?.neetRank || ''}
                      onChange={(e) =>
                        handleChange()
                      }
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="course" className={labelClassName}>
                    Preferred Course
                  </label>
                  <select
                    id="course"
                    className={inputClassName}
                    value={thisForm?.preferredCourse || ''}
                    onChange={(e) =>
                      handleChange()
                    }
                  >
                    {courseOptions.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="domicile" className={labelClassName}>
                    State of Domicile
                  </label>
                  <select
                    id="domicile"
                    className={inputClassName}
                    value={thisForm?.domicleState || ''}
                    onChange={(e) =>
                      handleChange()
                    }
                  >
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Additional Details
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className={labelClassName}>Disability Status</label>
                    <div className="flex gap-6 mt-2">
                      {["Yes", "No"].map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="disable"
                            value={option}
                            checked={thisForm?.quota}
                            onChange={() =>
                              handleChange()
                            }
                            className={radioClassName}
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="quota" className={labelClassName}>
                      Quota Category
                    </label>
                    <select
                      id="quota"
                      className={inputClassName}
                      value={thisForm?.quota || ''}
                      onChange={(e) =>
                        handleChange()
                      }
                    >
                      {quotaOptions.map((quota) => (
                        <option key={quota} value={quota}>
                          {quota}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8 pt-6 border-t">
              {step > 1 && (
                <button
                  className="flex items-center gap-2 px-6 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  onClick={() => setStep(step - 1)}
                  disabled={isLoading}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </button>
              )}
              <button
                className={`flex items-center gap-2 px-6 py-2 ml-auto text-white rounded-lg transition-all duration-200 ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : step === 3
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
                onClick={() => {
                  if (step === 3) {
                    handleSubmit()
                  } else {
                    setStep(step + 1)
                  }
                }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : step === 3 ? (
                  <>
                    Submit
                    <Check className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default UpdateProfile

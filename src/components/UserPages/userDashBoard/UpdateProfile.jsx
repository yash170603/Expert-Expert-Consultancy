// import { useEffect, useState } from "react"
// import axios from "axios"
// import { motion, AnimatePresence } from "framer-motion"
// import { ChevronRight, ChevronLeft, Check } from "lucide-react"
// import { useNavigate } from 'react-router-dom';

// const courseOptions = ["None", "MBBS", "BAMS", "BHMS", "BDS"]
// const quotaOptions = ["None", "OBC", "SC", "ST", "EWS"]
// const states = [
//   "Andhra Pradesh",
//   "Arunachal Pradesh",
//   "Assam",
//   "Bihar",
//   "Chhattisgarh",
//   "Goa",
//   "Gujarat",
//   "Haryana",
//   "Himachal Pradesh",
//   "Jharkhand",
//   "Karnataka",
//   "Kerala",
//   "Madhya Pradesh",
//   "Maharashtra",
//   "Manipur",
//   "Meghalaya",
//   "Mizoram",
//   "Nagaland",
//   "Odisha",
//   "Punjab",
//   "Rajasthan",
//   "Sikkim",
//   "Tamil Nadu",
//   "Telangana",
//   "Tripura",
//   "Uttar Pradesh",
//   "Uttarakhand",
//   "West Bengal",
//   "Delhi",
//   "Lakshadweep",
//   "Puducherry",
//   "Andaman and Nicobar Islands",
//   "Dadra and Nagar Haveli and Daman and Diu",
//   "Outside India",
// ]

// const UpdateProfile = () => {
//   // const { formData, updateFormData } = useSignUp()
//   const [ thisForm, setThisForm ] = useState()
//   const navigate = useNavigate();

//      useEffect(()=>{    // fetched the data from the backend
//         fetcheduserData()
//      } ,[])
//     const fetcheduserData= async () =>{  // data fetching
//         try {
                
//           const formData = await axios.get("http://localhost:3000/api/getData");
          
//           setThisForm(formData.data.data[0]);
//           console.log('this is the thisForm fetched line 57', formData.data.data[0])
//           // console.log('this is the formData fetched', formData.data[0])
//           // console.log(formData.data[0])  --> undefined
            
//         } catch (error) {
//             console.log(error)
//         }
//     }


//        const handleChange = (category, key, value) => {  // update form data
//            console.log("category",category)
//            console.log("key",key)
//             console.log("value",value)

//               setThisForm((prev)=>({
//                   ...prev,
//                   [category]:{
//                       ...prev[category],
//                       [key]:value
//                   }
//               }))
//        }
  

//         const handleSubmit= async ()=>{
//                 try {

//                     console.log('this is the formData before submittig',thisForm)
//                       const formSubmitResponse =  await axios.post("http://localhost:3000/api/postData",thisForm); 
//                       console.log('this is the repsonse form the backend for update data',formSubmitResponse)
//                       if(formSubmitResponse.status === 200){
//                             navigate('/')
//                       }
//                 } catch (error) {
//                      console.log('this is the error at line 87 update form data on submit click',error)
//                 }

//         }



//   const [step, setStep] = useState(1)




//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//     }),
//   }

//   const renderStepIndicator = () => (
//     <div className="flex justify-center mb-8">
//       {[1, 2, 3].map((i) => (
//         <div key={i} className="flex items-center">
//           <div
//             className={`rounded-full h-8 w-8 flex items-center justify-center ${
//               i === step ? "bg-blue-600 text-white" : i < step ? "bg-green-500 text-white" : "bg-gray-200 text-gray-600"
//             }`}
//           >
//             {i < step ? <Check size={16} /> : i}
//           </div>
//           {i < 3 && <div className={`h-1 w-10 mx-2 ${i < step ? "bg-green-500" : "bg-gray-200"}`} />}
//         </div>
//       ))}
//     </div>
//   )

//   return (
//     <div className="max-h-fit p-6 bg-pink-600">
//       <div className="max-w-md mx-auto">
//         {renderStepIndicator()}

//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <AnimatePresence mode="wait" custom={step}>
//             <motion.div
//               key={step}
//               custom={step}
//               variants={slideVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{
//                 x: { type: "spring", stiffness: 300, damping: 30 },
//                 opacity: { duration: 0.2 },
//               }}
//               className="p-6"
//             >
//               {step === 1 && (
//                 <div className="space-y-4">
//                   <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Details</h2>
//                   <div className="space-y-4">
//                     <input
//                       type="text"
//                       placeholder="First Name"
//                       className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                       value={thisForm?.personalDetails?.firstName || ''}
//                       onChange={(e) => handleChange("personalDetails", "firstName", e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Last Name"
//                       className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                        value={thisForm?.personalDetails?.lastName || ''}
//                       onChange={(e) => handleChange("personalDetails", "lastName", e.target.value)}
//                     />
//                     <input
//                       type="email"
//                       placeholder="Email"
//                       className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                        value={thisForm?.personalDetails?.email || ''}
//                        onChange={(e) => handleChange("personalDetails", "email", e.target.value)}
//                     />
//                     <input
//                       type="tel"
//                       placeholder="Phone"
//                       className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                       value={thisForm?.personalDetails?.phone || ''}
//                       onChange={(e) => handleChange("personalDetails", "phone", e.target.value)}
//                     />
//                   </div>
//                 </div>
//               )}

//               {step === 2 && (
//                 <div className="space-y-4">
//                   <h2 className="text-2xl font-bold text-gray-800 mb-6">NEET Details</h2>
//                   <div className="space-y-4">
//                     <input
//                       type="text"
//                       placeholder="Score"
//                       className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                       value={thisForm?.neetDetails?.score ||''}
//                       onChange={(e) => handleChange("neetDetails", "score", e.target.value)}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Rank"
//                       className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                       value={thisForm?.neetDetails?.rank || ''}
//                       onChange={(e) => handleChange("neetDetails", "rank", e.target.value)}
//                     />
//                     <select
//                       className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                       value={thisForm?.neetDetails?.course || ''}
//                       onChange={(e) => handleChange("neetDetails", "course", e.target.value)}
//                     >
//                       {courseOptions.map((course) => (
//                         <option key={course} value={course}>
//                           {course}
//                         </option>
//                       ))}
//                     </select>
//                     <select
//                       className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                       value={thisForm?.neetDetails?.domicle ||''}
//                       onChange={(e) => handleChange("neetDetails", "domicle", e.target.value)}
//                     >
//                       {states.map((state) => (
//                         <option key={state} value={state}>
//                           {state}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//               )}

//               {step === 3 && (
//                 <div className="space-y-4">
//                   <h2 className="text-2xl font-bold text-gray-800 mb-6">Additional Details</h2>
//                   <div className="space-y-6">
//                     <div className="space-y-2">
//                       <label className="block text-sm font-medium text-gray-700">Are you disabled?</label>
//                       <div className="flex gap-6">
//                         {/* {["Yes", "No"].map((option) => (
//                           <label key={option} className="flex items-center gap-2 cursor-pointer">
//                             <input
//                               type="radio"
//                               name="disable"
//                               value={thisForm?.additionalDetails?.disable ||''}
//                               onChange={(e) => handleChange("additionalDetails", "disable", e.target.value)}
//                               className="w-4 h-4 text-blue-600 focus:ring-blue-500"
//                             />
//                             <span className="text-gray-700">{option}</span>
//                           </label>
//                         ))} */}
//                         <label className="inline-flex items-center">
//                           <input
//                             type="radio"
//                             className="form-radio"
//                             name="disability"
//                             value="Yes"
//                             checked={thisForm?.additionalDetails?.disable === "Yes"}
//                             onChange={() => handleChange("additionalDetails", "disable", "Yes")}
                            
//                           />
                            
//                           <span className="ml-2">Yes</span>
//                            <p>{ " "}</p>
//                           <input type="radio" 
//                           className="form-radio"
//                           name="disability"
//                           value="No"
//                           checked={thisForm?.additionalDetails?.disable === "No"}
//                           onChange={() => handleChange("additionalDetails", "disable", "No")}
//                           ></input>
//                           {" "}
//                           <span className="ml-2">No</span>
//                           </label>
//                       </div>
//                     </div>
                    
//                     <label className="block text-sm font-medium text-gray-700">Quota</label>
//                     <select
//                       className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                       value={thisForm?.additionalDetails?.quota ||''}
//                       onChange={(e) => handleChange("additionalDetails", "quota", e.target.value)}
//                     >
//                       {quotaOptions.map((quota) => (
//                         <option key={quota} value={quota}>
//                           {quota}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//               )}

//               <div className="flex justify-between mt-8">
//                 {step > 1 && (
//                   <button
//                     className="flex items-center gap-2 px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
//                     onClick={() => setStep(step - 1)}
//                   >
//                     <ChevronLeft size={20} />
//                     Back
//                   </button>
//                 )}
//                 <button
//                   className={`flex items-center gap-2 px-6 py-2 ml-auto ${
//                     step === 3 ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
//                   } text-white rounded-lg transition-colors`}
//                   onClick={() => {
//                     if (step === 3) {
                      
//                       handleSubmit()
//                     } else {
//                       setStep(step + 1)
//                     }
//                   }}
//                 >
//                   {step === 3 ? (
//                     <>
//                       Submit
//                       <Check size={20} />
//                     </>
//                   ) : (
//                     <>
//                       Next
//                       <ChevronRight size={20} />
//                     </>
//                   )}
//                 </button>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default UpdateProfile




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
      const formData = await axios.get("http://localhost:3000/api/getData")
      setThisForm(formData.data.data[0])
    } catch (error) {
      toast.error("Failed to fetch user data")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (category, key, value) => {
    setThisForm((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value,
      },
    }))
  }

  const handleSubmit = async () => {
    try {
      setIsLoading(true)
      const formSubmitResponse = await axios.post(
        "http://localhost:3000/api/postData",
        thisForm
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
                      value={thisForm?.personalDetails?.firstName || ''}
                      onChange={(e) =>
                        handleChange("personalDetails", "firstName", e.target.value)
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
                      value={thisForm?.personalDetails?.lastName || ''}
                      onChange={(e) =>
                        handleChange("personalDetails", "lastName", e.target.value)
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
                    value={thisForm?.personalDetails?.email || ''}
                    onChange={(e) =>
                      handleChange("personalDetails", "email", e.target.value)
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
                    value={thisForm?.personalDetails?.phone || ''}
                    onChange={(e) =>
                      handleChange("personalDetails", "phone", e.target.value)
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
                      value={thisForm?.neetDetails?.score || ''}
                      onChange={(e) =>
                        handleChange("neetDetails", "score", e.target.value)
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
                      value={thisForm?.neetDetails?.rank || ''}
                      onChange={(e) =>
                        handleChange("neetDetails", "rank", e.target.value)
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
                    value={thisForm?.neetDetails?.course || ''}
                    onChange={(e) =>
                      handleChange("neetDetails", "course", e.target.value)
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
                    value={thisForm?.neetDetails?.domicle || ''}
                    onChange={(e) =>
                      handleChange("neetDetails", "domicle", e.target.value)
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
                            name="disability"
                            value={option}
                            checked={thisForm?.additionalDetails?.disable === option}
                            onChange={() =>
                              handleChange("additionalDetails", "disable", option)
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
                      value={thisForm?.additionalDetails?.quota || ''}
                      onChange={(e) =>
                        handleChange("additionalDetails", "quota", e.target.value)
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

// // import { motion } from "framer-motion"
// // import neet from "../../../assets/neet.jpg"
// // import { useEffect, useState } from "react"
// // import toast from "react-hot-toast";
// // const UserDashboardHome = () => {

// //     const[isfetching,setFetching]=useState(false);

// //   const [ thisForm, setThisForm ] = useState(null)

// //     const fetchData = async () => {

// //          try {
// //           setFetching(true);

// //           const formData = await axios.get("http://localhost:3000/api/getData");

// //           setThisForm(formData.data.data[0]);
// //           console.log('this is the thisForm fetched line 57', formData.data.data[0])

// //          } catch (error) {
// //              toast.error("There was an error fetching the data, please try again later");

// //              window.location.reload();
// //          }
// //          finally{
// //             setFetching(false);
// //          }
// //     }

// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: { staggerChildren: 0.1 },
// //     },
// //   }

// //   const itemVariants = {
// //     hidden: { y: 20, opacity: 0 },
// //     visible: {
// //       y: 0,
// //       opacity: 1,
// //       transition: { type: "spring", stiffness: 100 },
// //     },
// //   }

// //   return (
// //     <motion.div
// //       className="max-w-full mx-auto p-4 h-full space-y-6 bg-yellow-600"
// //       initial="hidden"
// //       animate="visible"
// //       variants={containerVariants}
// //     >
// //       <motion.div variants={itemVariants} className="bg-blue-950 text-yellow-600 rounded-lg shadow-lg p-6 flex items-center space-x-4">
// //         <h1 className="text-2xl font-bold  flex-grow">Hi User, Welcome to your Dashboard</h1>
// //         <motion.img
// //           src={neet}
// //           alt="NEET"
// //           className="rounded-lg object-cover h-16 w-16"
// //           whileHover={{ scale: 1.1 }}
// //           whileTap={{ scale: 0.9 }}
// //         />
// //       </motion.div>

// //       <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// //         {[
// //           {
// //             title: "Personal Details",
// //             items: [
// //               { label: "Course", value: "MBBS" },
// //               { label: "Category", value: "State" },
// //               { label: "Quota", value: "SC" },
// //               { label: "Gender", value: "Male" },
// //             ],
// //           },
// //           {
// //             title: "NEET Details",
// //             items: [
// //               { label: "AIR Rank", value: "11010101" },
// //               { label: "AIR Category Rank", value: "1234" },
// //               { label: "NEET Score", value: "434" },
// //               { label: "Fee Budget", value: "200000" },
// //             ],
// //           },
// //           {
// //             title: "Parents Details",
// //             items: [
// //               { label: "Father's Occupation", value: "Business" },
// //               { label: "Mother's Occupation", value: "Housewife" },
// //             ],
// //           },
// //           {
// //             title: "Contact Details",
// //             items: [
// //               { label: "Email", value: "test10@gmail.com" },
// //               { label: "Phone Number", value: "1234567891" },
// //               { label: "Address", value: "146 PrayagRaj, Uttar Pradesh" },
// //             ],
// //           },
// //         ].map((section, index) => (
// //           <motion.div
// //             key={index}
// //             className="bg-blue-950 text-white rounded-lg shadow-lg p-6"
// //             whileHover={{ scale: 1.02 }}
// //             transition={{ type: "spring", stiffness: 300 }}
// //           >
// //             <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
// //             <div className="space-y-2">
// //               {section.items.map((item, itemIndex) => (
// //                 <div key={itemIndex} className="flex justify-between">
// //                   <p className="font-medium">{item.label}:</p>
// //                   <p>{item.value}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </motion.div>
// //         ))}
// //       </motion.div>
// //     </motion.div>
// //   )
// // }

// // export default UserDashboardHome

// import { motion } from "framer-motion"
// import neet from "../../../assets/neet.jpg"
// import { useEffect, useState } from "react"
// import toast from "react-hot-toast"
// import axios from "axios"
// import { Loader2 } from "lucide-react"

// const UserDashboardHome = () => {
//   const [isfetching, setFetching] = useState(false)
//   const [thisForm, setThisForm] = useState(null)

//   const fetchData = async () => {
//     try {
//       setFetching(true)
//       const formData = await axios.get("http://localhost:3000/api/getData")
//       console.log("this is the thisForm fetched line 57", formData.data.data[0])
//       setThisForm(formData.data.data[0])
//     } catch (error) {
//       toast.error("There was an error fetching the data, please try again later")
//       window.location.reload()
//     } finally {
//       setFetching(false)
//     }
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   }

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 100 },
//     },
//   }

//   if (isfetching) {
//     return (
//       <div className="flex items-center justify-center h-[80vh]">
//         <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
//       </div>
//     )
//   }

//   const sections = [
//     {
//       title: "Personal Details",
//       icon: "👤",
//       items: [
//         { label: "FirstName", value: thisForm?.personalDetails?.firstName },
//         { label: "lastName", value: thisForm?.personalDetails?.lastName },
//         { label: "Course", value: thisForm?.neetDetails?.course },
//         { label: "Category", value: thisForm?.neetDetails?.category },
//         { label: "Quota", value: thisForm?.additionalDetails?.quota },

//       ],
//     },
//     {
//       title: "NEET Details",
//       icon: "📚",
//       items: [
//         { label: "AIR Rank", value: thisForm?.neetDetails?.rank },
//         { label: "AIR Category Rank", value: thisForm?.neetDetails?.category },
//         { label: "NEET Score", value: thisForm?.neetDetails?.score },
//         { label: "Fee Budget", value: thisForm?.additionalDetails?.annualFeeBudget },
//       ],
//     },
//     {
//       title: "Parents Details",
//       icon: "👨‍👩‍👦",
//       items: [
//         { label: "Father's Occupation", value: thisForm?.additionalDetails?.fatherOccuptaion },
//         { label: "Mother's Occupation", value: thisForm?.additionalDetails?.motherOccupation },
//       ],
//     },
//     {
//       title: "Contact Details",
//       icon: "📞",
//       items: [
//         { label: "Email", value: thisForm?.personalDetails?.email},
//         { label: "Phone Number", value: thisForm?.personalDetails?.phone },

//       ],
//     },
//   ]

//   return (
//     <motion.div className="space-y-6 bg-pink-800 " initial="hidden" animate="visible" variants={containerVariants}>
//       <motion.div
//         variants={itemVariants}
//         className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl shadow-lg p-8"
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-white mb-2">Welcome back, {thisForm?.personalDetails?.firstName}! 👋</h1>
//             <p className="text-blue-200">Here's an overview of your profile and application status</p>
//           </div>
//           <motion.img
//             src={neet}
//             alt="NEET"
//             className="h-20 w-20 rounded-2xl object-cover shadow-lg ring-4 ring-white/10"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           />
//         </div>
//       </motion.div>

//       <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {sections.map((section, index) => (
//           <motion.div
//             key={index}
//             className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200"
//             whileHover={{ scale: 1.02 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <span className="text-2xl">{section.icon}</span>
//               <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
//             </div>
//             <div className="space-y-3">
//               {section.items.map((item, itemIndex) => (
//                 <div key={itemIndex} className="flex justify-between items-center text-sm">
//                   <p className="text-gray-600">{item.label}</p>
//                   <p className="font-medium text-gray-900">{item.value}</p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.div>
//   )
// }

// export default UserDashboardHome

import { motion } from "framer-motion";
import neet from "../../../assets/neet.jpg";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Loader2 } from "lucide-react";

const UserDashboardHome = () => {
  const [isfetching, setFetching] = useState(false);
  const [thisForm, setThisForm] = useState(null);

  const fetchData = async () => {
    try {
      setFetching(true);
      const formData = await axios.get("http://localhost:3000/api/getData");
      setThisForm(formData.data.data[0]);
    } catch (error) {
      toast.error(
        "There was an error fetching the data, please try again later"
      );
      window.location.reload();
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  if (isfetching) {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  const sections = [
    {
      title: "Personal Details",
      icon: "👤",
      items: [
        { label: "FirstName", value: thisForm?.personalDetails?.firstName },
        { label: "lastName", value: thisForm?.personalDetails?.lastName },
        { label: "Course", value: thisForm?.neetDetails?.course },
        { label: "Category", value: thisForm?.neetDetails?.category },
        { label: "Quota", value: thisForm?.additionalDetails?.quota },
      ],
    },
    {
      title: "NEET Details",
      icon: "📚",
      items: [
        { label: "AIR Rank", value: thisForm?.neetDetails?.rank },
        { label: "AIR Category Rank", value: thisForm?.neetDetails?.category },
        { label: "NEET Score", value: thisForm?.neetDetails?.score },
        {
          label: "Fee Budget",
          value: thisForm?.additionalDetails?.annualFeeBudget,
        },
      ],
    },
    {
      title: "Parents Details",
      icon: "👨‍👩‍👦",
      items: [
        {
          label: "Father's Occupation",
          value: thisForm?.additionalDetails?.fatherOccuptaion,
        },
        {
          label: "Mother's Occupation",
          value: thisForm?.additionalDetails?.motherOccupation,
        },
      ],
    },
    {
      title: "Contact Details",
      icon: "📞",
      items: [
        { label: "Email", value: thisForm?.personalDetails?.email },
        { label: "Phone Number", value: thisForm?.personalDetails?.phone },
      ],
    },
  ];

  return (
    <motion.div
      className="max-h-screen  p-4 flex flex-col gap-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl shadow-lg p-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome back, {thisForm?.personalDetails?.firstName}! 👋
            </h1>
            <p className="text-blue-200">
              Here's an overview of your profile and application status
            </p>
          </div>
          <motion.img
            src={neet}
            alt="NEET"
            className="h-16 w-16 rounded-xl object-cover shadow-lg ring-2 ring-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 flex-1 gap-4"
      >
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 h-full"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-3 mb-4 border-b pb-3">
              <span className="text-2xl">{section.icon}</span>
              <h2 className="text-xl font-semibold text-gray-900">
                {section.title}
              </h2>
            </div>
            <div className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex justify-between items-center text-sm"
                >
                  <p className="text-gray-600">{item.label}</p>
                  <p className="font-medium text-gray-900">
                    {item.value || "-"}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default UserDashboardHome;

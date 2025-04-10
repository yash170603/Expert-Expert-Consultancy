
import { motion } from "framer-motion";
import neet from "../../../assets/neet.jpg";
import { useEffect, useState,useRef } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Loader2 } from "lucide-react";

const UserDashboardHome = () => {
  const [isFetching, setFetching] = useState(false);
  const [thisForm, setThisForm] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const errorShown = useRef(false);

//   const fetchData = async () => {
//   //   try {
//   //     setFetching(true);
//   //     setError(null); // Reset error state on new fetch attempt
//   //     const formData = await axios.get("http://localhost:3001/api/user/getUser", { withCredentials: true });
//   //     console.log("this is form data",formData);
//   //     setThisForm(formData.data.data);
//   //   } catch (error) {
//   //     setError("There was an error fetching the data, please try again later.");
//   //     toast.error("There was an error fetching the data, please try again later.");
      
//   //   } finally {
//   //     setFetching(false);
//   //   }
//   // };
//   try {
//     setFetching(true);
//     setError(null); // Reset error state on new fetch attempt
//     const formData = await axios.get("http://localhost:3001/api/user/getUser", { withCredentials: true });
//     setThisForm(formData.data.data);
//     console.log("this is form data fetched at user dashboard",formData);
//   } catch (error) {
//     // Handle different error types
//     if (error.response && error.response.status === 401) {
//       // Unauthorized (401) error: Navigate to the Sign-In page
//       setError("You are not authorized. Please log in.");
//       toast.error("You are not authorized. Please log in.");
//       navigate("/sign-in"); // Navigate to the Sign-In page
//     } else {
//       // General error: Display message
//       setError("There was an error fetching the data, please try again later.");
//       toast.error("There was an error fetching the data, please try again later.");
//     }
//   } finally {
//     setFetching(false);
//   }
// };
    
const fetchData = async () => {
  try {
    setFetching(true);
    setError(null);
    errorShown.current = false; // Reset on fresh attempt

    const formData = await axios.get("http://localhost:3001/api/user/getUser", { withCredentials: true });
    setThisForm(formData.data.data);
    console.log("this is form data fetched at user dashboard", formData);
  } catch (error) {
    if (error.response && error.response.status === 401) {
      if (!errorShown.current) {
        toast.error("You are not authorized. Please log in.");
        errorShown.current = true;
      }
      setError("You are not authorized. Please log in.");
      navigate("/sign-in");
    } else {
      if (!errorShown.current) {
        toast.error("There was an error fetching the data, please try again later.");
        errorShown.current = true;
      }
      setError("There was an error fetching the data, please try again later.");
    }
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

  const handleRetry = () => {
    fetchData(); // Retry fetching data
  };

  if (isFetching) {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <p className="text-red-600">{error}</p>
        <button 
          onClick={handleRetry} 
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl"
        >
          Retry
        </button>
      </div>
    );
  }

  const sections = [
    {
      title: "Personal Details",
      icon: "👤",
      items: [
        { label: "First Name", value: thisForm?.firstName },
        { label: "Last Name", value: thisForm?.lastName },
        { label: "Email", value: thisForm?.email },
        { label: "Phone Number", value: thisForm?.phone },
      ],
    },
    {
      title: "NEET Details",
      icon: "📚",
      items: [
        { label: "NEET Score", value: thisForm?.neetScore },
        { label: "NEET Rank", value: thisForm?.neetRank },
        { label: "Category", value: thisForm?.category },
        { label: "Preferred Course", value: thisForm?.preferredCourse },
      ],
    },
    {
      title: "Additional Details",
      icon: "📝",
      items: [
        { label: "Domicile State", value: thisForm?.domicileState },
        { label: "Disable", value: thisForm?.disable },
        { label: " Quota", value: thisForm?.quota },
        { label: "Fee Budget", value: thisForm?.feeBudget },
      ],
    },
    {
      title: "Parents Details",
      icon: "👨‍👩‍👦",
      items: [
        { label: "Father's Occupation", value: thisForm?.fatherOccupation },
        { label: "Mother's Occupation", value: thisForm?.motherOccupation },
      ],
    },
  ];

  return (
    <motion.div
      className="max-h-screen p-4 flex flex-col gap-6"
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
              Welcome back, {thisForm?.firstName}! 👋
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

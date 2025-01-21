// import React from "react";
// import {
//   Box,
//   TextField,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
//   Button,
// } from "@mui/material";
// import { useForm, Controller } from "react-hook-form";

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
// ];
// const course = ["None", "MBBS", "BAMS", "BHMS", "BDS"];

// const NeetDetails = () => {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className="relative  pl-20 pr-4 md:pl-4 w-full">
//       <div className="w-full max-w-md bg-white bg-opacity-80 shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="mb-6 flex space-x-4">
//             <div className="w-1/2">
//               <Controller
//                 name="neetScore"
//                 control={control}
//                 defaultValue=""
//                 rules={{ required: "NEET Score is required" }}
//                 render={({ field }) => (
//                   <TextField
//                     label="NEET Score"
//                     variant="outlined"
//                     type="number"
//                     fullWidth
//                     required
//                     {...field}
//                     error={!!errors.neetScore}
//                     helperText={
//                       errors.neetScore ? errors.neetScore.message : ""
//                     }
//                     sx={{ backgroundColor: "white" }} // White background
//                   />
//                 )}
//               />
//             </div>
//             <div className="w-1/2">
//               <Controller
//                 name="airRank"
//                 control={control}
//                 defaultValue=""
//                 rules={{ required: "AIR Rank is required" }}
//                 render={({ field }) => (
//                   <TextField
//                     label="AIR Rank"
//                     variant="outlined"
//                     type="number"
//                     fullWidth
//                     required
//                     {...field}
//                     error={!!errors.airRank}
//                     helperText={errors.airRank ? errors.airRank.message : ""}
//                     sx={{ backgroundColor: "white" }} // White background
//                   />
//                 )}
//               />
//             </div>
//           </div>

//           <div className="mb-6">
//             <Controller
//               name="categoryRank"
//               control={control}
//               defaultValue=""
//               rules={{ required: "Category Rank is required" }}
//               render={({ field }) => (
//                 <TextField
//                   label="Category Rank"
//                   variant="outlined"
//                   type="number"
//                   fullWidth
//                   required
//                   {...field}
//                   error={!!errors.categoryRank}
//                   helperText={
//                     errors.categoryRank ? errors.categoryRank.message : ""
//                   }
//                   sx={{ backgroundColor: "white" }} // White background
//                 />
//               )}
//             />
//           </div>

//           <div className="mb-6">
//             <Controller
//               name="course"
//               control={control}
//               defaultValue=""
//               rules={{ required: "Course is required" }}
//               render={({ field }) => (
//                 <FormControl fullWidth required>
//                   <InputLabel>Course</InputLabel>
//                   <Select
//                     {...field}
//                     label="Course"
//                     sx={{ backgroundColor: "white" }} // White background
//                   >
//                     {course.map((course, index) => (
//                       <MenuItem key={index} value={course}>
//                         {course}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               )}
//             />
//           </div>

//           <div className="mb-6">
//             <Controller
//               name="domicileState"
//               control={control}
//               defaultValue=""
//               rules={{ required: "Domicile State is required" }}
//               render={({ field }) => (
//                 <FormControl fullWidth required>
//                   <InputLabel>Domicile State</InputLabel>
//                   <Select
//                     {...field}
//                     label="Domicile State"
//                     sx={{ backgroundColor: "white" }} // White background
//                   >
//                     {states.map((state, index) => (
//                       <MenuItem key={index} value={state}>
//                         {state}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               )}
//             />
//           </div>

//           <div className="mb-6">
//             <Controller
//               name="tenthState"
//               control={control}
//               defaultValue=""
//               rules={{ required: "Tenth State is required" }}
//               render={({ field }) => (
//                 <FormControl fullWidth required>
//                   <InputLabel>Tenth State</InputLabel>
//                   <Select
//                     {...field}
//                     label="Tenth State"
//                     sx={{ backgroundColor: "white" }} // White background
//                   >
//                     {states.map((state, index) => (
//                       <MenuItem key={index} value={state}>
//                         {state}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               )}
//             />
//           </div>

//           <div className="mb-6">
//             <Controller
//               name="eleventhState"
//               control={control}
//               defaultValue=""
//               rules={{ required: "Eleventh State is required" }}
//               render={({ field }) => (
//                 <FormControl fullWidth required>
//                   <InputLabel>Eleventh State</InputLabel>
//                   <Select
//                     {...field}
//                     label="Eleventh State"
//                     sx={{ backgroundColor: "white" }} // White background
//                   >
//                     {states.map((state, index) => (
//                       <MenuItem key={index} value={state}>
//                         {state}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               )}
//             />
//           </div>

//           <div className="mb-6">
//             <Controller
//               name="twelfthState"
//               control={control}
//               defaultValue=""
//               rules={{ required: "Twelfth State is required" }}
//               render={({ field }) => (
//                 <FormControl fullWidth required>
//                   <InputLabel>Twelfth State</InputLabel>
//                   <Select
//                     {...field}
//                     label="Twelfth State"
//                     sx={{ backgroundColor: "white" }} // White background
//                   >
//                     {states.map((state, index) => (
//                       <MenuItem key={index} value={state}>
//                         {state}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               )}
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default NeetDetails;
import React from "react";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";

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
];

const course = ["None", "MBBS", "BAMS", "BHMS", "BDS"];

const NeetDetails = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto bg-white bg-opacity-80 shadow-2xl rounded-lg p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex space-x-4">
          <Controller
            name="neetScore"
            control={control}
            defaultValue=""
            rules={{ required: "NEET Score is required" }}
            render={({ field }) => (
              <TextField
                label="NEET Score"
                variant="outlined"
                type="number"
                fullWidth
                required
                {...field}
                error={!!errors.neetScore}
                helperText={errors.neetScore ? errors.neetScore.message : ""}
                sx={{ backgroundColor: "white" }}
              />
            )}
          />
          <Controller
            name="airRank"
            control={control}
            defaultValue=""
            rules={{ required: "AIR Rank is required" }}
            render={({ field }) => (
              <TextField
                label="AIR Rank"
                variant="outlined"
                type="number"
                fullWidth
                required
                {...field}
                error={!!errors.airRank}
                helperText={errors.airRank ? errors.airRank.message : ""}
                sx={{ backgroundColor: "white" }}
              />
            )}
          />
        </div>

        <div className="mb-4">
          <Controller
            name="categoryRank"
            control={control}
            defaultValue=""
            rules={{ required: "Category Rank is required" }}
            render={({ field }) => (
              <TextField
                label="Category Rank"
                variant="outlined"
                type="number"
                fullWidth
                required
                {...field}
                error={!!errors.categoryRank}
                helperText={errors.categoryRank ? errors.categoryRank.message : ""}
                sx={{ backgroundColor: "white" }}
              />
            )}
          />
        </div>

        <div className="mb-4">
          <Controller
            name="course"
            control={control}
            defaultValue=""
            rules={{ required: "Course is required" }}
            render={({ field }) => (
              <FormControl fullWidth required>
                <InputLabel>Course</InputLabel>
                <Select {...field} label="Course" sx={{ backgroundColor: "white" }}>
                  {course.map((course, index) => (
                    <MenuItem key={index} value={course}>
                      {course}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </div>

        <div className="mb-4">
          <Controller
            name="domicileState"
            control={control}
            defaultValue=""
            rules={{ required: "Domicile State is required" }}
            render={({ field }) => (
              <FormControl fullWidth required>
                <InputLabel>Domicile State</InputLabel>
                <Select {...field} label="Domicile State" sx={{ backgroundColor: "white" }}>
                  {states.map((state, index) => (
                    <MenuItem key={index} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </div>

        {/* Repeat for other states (tenthState, eleventhState, twelfthState) */}
{/* 
        <Button type="submit" variant="contained" color="primary" className="w-full">
          Submit
        </Button> */}
      </form>
    </div>
  );
};

export default NeetDetails;
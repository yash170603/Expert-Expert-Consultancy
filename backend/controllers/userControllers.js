import User from "../models/user.js"




export const getUserDetails= async (req, res) => {
      // the request is coming after attachUser middleware, so it has the details, just return req.user
       try {
        const userId = req.userId;
        const userRequired = await User.findById(userId);
        if(!userRequired){
          return res.status(404).json({message:"User not found"})
        }
        const userObject = userRequired.toObject();
         delete userObject.password;
          
        res.status(200).json({
          message: "User details fetched successfully",
          data: userObject,
        })
       } catch (error) {
           console.log("this is error at fetching user details",error)
            res.status(500).json({message:"Internal server error"})
       }
      
}

export const updateUser= async (req,res) =>{
       
   try {
          const userId = req.userId;
          const userRequired = await User.findById(userId);
          if(!userRequired){
            return res.status(404).json({message:"User not found"})
          }
           const {firstName,lastName,email,phone,neetScore,neetRank,category,preferredCourse,domicileState,disabilityQuota,feeBudget,fatherOccupation,motherOccupation} = req.body;
            
           const updateResponse = await User.findByIdAndUpdate(userId,{
             firstName,
             lastName,
             email,
             phone,
             neetScore,
             neetRank,
             category,
             preferredCourse,
             domicileState,
             disabilityQuota,
             feeBudget,
             fatherOccupation,
             motherOccupation
           },{new:true})

            if( updateResponse){
              res.status(200).json({
                message:"User details updated successfully",
                data:updateResponse
              })
            }
            
   } catch (error) {
           console.log("this is the error at updating user details",error)
           res.status(500).json({message:"Internal server error"})
   }
}
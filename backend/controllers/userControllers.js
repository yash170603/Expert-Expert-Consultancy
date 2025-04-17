import User from "../models/user.js"
import News from "../models/news.js";
import Testimonials from "../models/testimonial.js";



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

export const getAllNews = async (req,res)=>{
      try {
            const news = await News.find();
            if(!news){
              return res.status(404).json({message:"No news found"})
            }
            res.status(200).json({
              message:"All news fetched successfully",
              data:news
            })
        
      } catch (error) {
           console.log("this is the error at getting all news",error)
           res.status(500).json({message:"Internal server error"})
      }
}

export const getAllTestimonials = async (req,res)=>{
      try {
            const testimonials = await Testimonials.find();
            if(!testimonials){
              return res.status(404).json({message:"No testimonials found"})
            }
            res.status(200).json({
              message:"All testimonials fetched successfully",
              data:testimonials
            })
        
      } catch (error) {
           console.log("this is the error at getting all testimonials",error)
           res.status(500).json({message:"Internal server error"})
      }
}
let incomingData =[];


  export const getData =(req,res)=>{

    console.log("THe api was hit");
       res.send({
              message:"This is the response which u send",
              data:incomingData
       });
}
   export const postData =(req,res)=>{
    
       incomingData.length=0;
        incomingData.push(req.body);
     
    res.send({
        message:"Data received successfully",
    });
}

// module.exports= {getData,postData};
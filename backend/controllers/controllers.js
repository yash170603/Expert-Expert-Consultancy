let incomingData =[];

  const getData =(req,res)=>{

    console.log("THe api was hit");
       res.send({
              message:"This is the response which u send",
              data:incomingData
       });
}
   const postData =(req,res)=>{
    incomingData.push(req.body);
    res.send({
        message:"Data received successfully",
    });
}

modules.exports= {getData,postData};
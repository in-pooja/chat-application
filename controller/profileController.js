import profilePicture from "../Model/profilepicture.js";

export const profileImage =async (req,res,next)=>{
    try{
    const {profileid,profileURL} = req.body;
    const Dp =await profilePicture.create({profileid,profileURL});
    
    if(Dp)
        return res.status(200).json({message:"profile picture updated succesfully",Dp})
}catch(err){
    console.log(err);
    return res.status(201).json({message:"profile updation failed",err})
}

   
}
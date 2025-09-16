import jwt from 'jsonwebtoken';


const authUser=(req,res,next)=>{
    const token=req.headers

    if (!token) {
        return res.json({success:false,message:"Not Authorized Login"});
    }

    try{
        const token_decode=jwt.verify(token,process.env.JWT_SECRET);

        if(token_decode.id){
            req.body.userId=token_decode.id;
        }
        else{
            res.json({success:false,message:"Not Authorized Login"})
        }
    }
    
    catch(error){
        return res.json({success:false,message:"Token is not valid"});
    }
    next(); 


}
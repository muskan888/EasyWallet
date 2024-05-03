const express=require('express');

const router=express.Router();


//all req will start from /api/v1/...

router.use("/user", userRouter)

module.exports=router;

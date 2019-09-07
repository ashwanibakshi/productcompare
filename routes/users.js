var express= require('express');
var users= require('../models/user');
var router=express.Router();
var jwt=require('jsonwebtoken');
var config=require('../config/database')



 router.post('/add',(req,res)=>{
   try{ 
       const user=new users({
           name:req.body.name,
           email:req.body.email,
           password:req.body.password
       })
    users.addUser(user,(err,data)=>{
         if(err){
             res.json({success:false})
         }
         res.json({success:true,da:data})
    })

   }
   catch(err){
  console.log(err);
   res.json({success:false})
   }
 });
  
  router.post('/authenticate', (req, res, next) => {
    const email= req.body.email;
    const password = req.body.password;
  
    users.getUserByEmailId(email, (err, user) => {
      if(err) throw err;
      if(!user) {
        return res.json({success: false, msg: 'User not found'});
      }
  
      users.comparePassword(password, user.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch) {
          const token = jwt.sign({data:user},config.secret, {
            expiresIn: 604800 // 1 week
          });
          res.json({
            success: true,
            token: 'JWT '+token,
            user: {
              id: user._id,
              email: user.email
            }
          })
        } else {
          return res.json({success: false});
        }
      });
    });
  });

  module.exports=router;

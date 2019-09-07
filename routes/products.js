var express=require('express');
var product=require('../models/product');
var passport=require('passport');

var router=express.Router();


router.post('/add',passport.authenticate('jwt',{session:false}),(req,res)=>{
    try{
        const prod = new product({
            category:req.body.category,
            pname:req.body.pname,
            price:req.body.price,
            pdesc:req.body.pdesc,
        })
        prod.save((err,data)=>{
            if(err){
                res.json({success:false})
            }
            res.json({success:true})
        })
    }
    catch(err){
       console.log(err)
       res.json({success:false});
    }
})

  router.get('/getproduct',(req,res)=>{
    try {
    product.find((err,data)=>{
        if(err){
          res.json({success:false}) 
        }  
        res.json({success:true,da:data})
    })
      
    } catch (error) {
    console.log(error);
    res.json({success:false})
    }
  })

  router.get('/getproduct/:id',(req,res)=>{
      try {
        console.log('dsfsd'+req.params.id)
         product.findOne({_id:req.params.id},(err,data)=>{
            if(err){
              res.json({success:false})
            }    
            res.json({success:true,da:data})
         })
      } catch (error) {
        console.log(error);
        res.json({success:false}) 
      }   
  })

 
  router.post('/pname',(req,res)=>{
    try {
      product.distinct('pname',{category:req.body.category},(err,data)=>{
        if(err){
          console.log(err);
          res.json({success:false})
        }
        res.json({success:true,da:data})
      })  
    } catch (error) {
       console.log(error)
       res.json({success:false})
    }
  })

  router.get('/byname/:name',(req,res)=>{
    try {
      // console.log('dsd',req..pname)
    product.find({pname:req.params.name},(err,data)=>{
       if(err){
         res.json({success:false})
       }
       console.log(data)
       res.json({success:true,da:data})
    })
    } catch (error) {
      
    }
  })

  module.exports=router;
var mongoose=require('mongoose');

const productSchema = mongoose.Schema({
    category:{
        typ:String},
    pname:{
        type:String
    },
    price:{
        type:Number
    },
    pdesc:{
        type:String
    }
});

module.exports=mongoose.model('product',productSchema);

const mongoose = require('mongoose');

const  shopSchema = new mongoose.Schema({
   shopName: {type:String, trim:true, default:''},
   shopLogo: {type:String, trim:true, default:''},
   shopDescription: {type:String, trim:true, default:''},
   shopType: {type:String, trim:true, default:''},
   shopAddresse: {type:String, trim:true, default:''},
   shopCity: {type:String, trim:true, default:''},
   shopTel: {type:String, trim:true, default:''},
   shopId: mongoose.Schema.Types.ObjectId,
   comments: [
     {
       type: mongoose.Schema.Types.ObjectId,
       ref: "Comment"
     }
   ]
});

module.exports = mongoose.model('shop', shopSchema);

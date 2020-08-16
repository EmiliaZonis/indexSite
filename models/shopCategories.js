const mongoose = require('mongoose');

const  shopCategoriesSchema = new mongoose.Schema({
   shopType: {type:String, trim:true, default:''},
   shopTypeHebrewName: {type:String, trim:true, default:''},
   shopTypeImage: {type:String, trim:true, default:''},
   shopTypeId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('shopCategories', shopCategoriesSchema);

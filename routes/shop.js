const express = require('express');
const router = express.Router({mergeParams: true});
const Shop = require("../models/shop");
const ShopCategories = require("../models/shopCategories");
const Comment = require("../models/comment")
//const bootstrap = require('bootstrap');

router.post("/", (req, res) => {
  const newShop = {shopName: req.body.shopName,
                   shopLogo:req.body.shopLogo,
                   shopType:req.params.shopCategory,
                   shopDescription:req.body.shopDescription,
                   shopAddresse:req.body.shopAddresse,
                   shopCity:req.body.shopCity,
                   shopTel:req.body.shopTel
                 };
  //shops.push(newShop);
    Shop.create(newShop, (err, newShopCreated)=>{
     if (err) {
       console.log(err);
     }else {
       console.log(newShop);
       res.redirect('/shopping/' + req.params.shopCategory);
     }
   })
});

// show page for adding new shop
/*router.get('/newshop', (req, res) => {
  res.render('newshop', {shopParamCategory:req.params.shopCategory});
});

// show all shops in the choosen category
router.get("/", (req, res)=>{
  Shop.find({shopType:req.params.shopCategory}).populate("comments").exec(err, allShops)=>{
    if (err) {
      console.log(err);
    }else {
      res.render('shop', {shopParamCategory:req.params.shopCategory, Shops:allShops})
    }
 })
});*/

router.get("/", (req, res)=>{
  Shop.find({shopType:req.params.shopCategory}, (err, allShops)=>{
    if (err) {
      console.log(err);
    }else {
      res.render('shop', {shopParamCategory:req.params.shopCategory, Shops:allShops})
    }
 })
});


//edit shop
router.get('/:id/editshop', (req, res)=>{
  Shop.findById(req.params.id, (err, foundShop)=>{
    if (err) {
      console.log(err);
      res.redirect('/');
    } else {
      //console.log(foundShop);
      //console.log(req.params.id);
      res.render('editshop', {shop:foundShop, shopParamCategory:req.params.shopCategory});
    }
  })
})

//update shop
router.put("/", (req, res)=>{
  Shop.findByIdAndUpdate(req.body.shopId, req.body, {new: true}, (err, updatedShop)=>{
    //console.log(req.body.shopId + " the id");
    //console.log(req.body.shopTel + " the tel");
    //console.log(req.body.shopName + " the Name");
    //console.log(updatedShop);
   if (err) {
     res.redirect("/");
   }  else {
     res.redirect("/shopping/" + req.params.shopCategory);
   }
 });
});

//DELETE SHOP
router.delete("/:id", (req, res)=>{
  //res.send("you are trying to delete something");
  Shop.findByIdAndRemove(req.params.id, (err)=>{
    if (err) {
      res.redirect('/');
    } else {
      res.redirect('/shopping/' + req.params.shopCategory);
    }
  });
});

module.exports = router;

const express = require('express');
const router = express.Router();
/*const seedDB = require("./../seeds");*/

const ShoppingCategory = [
  {shopType: "bicycle", hebrewName:"אופניים", shopTypeImage:"https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=120&w=320"},
  {shopType: "cloths", hebrewName:"בגדים", shopTypeImage:"https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=120&w=320"},
  {shopType: "computers", hebrewName:"מחשבים", shopTypeImage:"https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=120&w=320"},
  {shopType: "barbers", hebrewName:"מספרות"},
  {shopType: "toys", hebrewName:"צעצועים"},
  {shopType: "shoes", hebrewName:"נעליים"},
];

/*seedDB();*/

router.use('/shopping/:shopCategory', require('./shop'));
//router.use('/places', require('./places'));

router.get('/shopping', (req, res)=>{
  /*
ShoppingCategory.find({}, (err, allShopping)=>{
    if (err) {
      console.log(err);
    }else {
*/
      res.render('shopping', {shoppingCategories:ShoppingCategory});
    });
/*
  });
});
*/
router.get('/', (req, res) => {
 res.render('home');
})

router.get('/about', (req, res) => {
 res.render('about');
})

router.get('/contact', (req, res) => {
 res.render('contact');
})


module.exports = router;

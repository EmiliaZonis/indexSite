const mongoose = require('mongoose');
const ShopCategories = require("./models/shopCategories");

const ShoppingCategory = [
  {shopType: "bicycle", hebrewName:"אופניים", shopTypeImage:"https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=120&w=320"},
  {shopType: "cloths", hebrewName:"בגדים", shopTypeImage:"https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=120&w=320"},
  {shopType: "computers", hebrewName:"מחשבים", shopTypeImage:"https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=120&w=320"},
  {shopType: "barbers", hebrewName:"מספרות", shopTypeImage:"https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=120&w=320"},
  {shopType: "toys", hebrewName:"צעצועים", shopTypeImage:"https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=120&w=320"},
  {shopType: "shoes", hebrewName:"נעליים", shopTypeImage:"https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=120&w=320"},
];
/*
function seedDB(){

ShoppingCategory.forEach((seed) => {
 ShopCategories.create(seed, (err, shop)=>{
  if (err) {
    console.log(err);
  }else {
    console.log('added a shopping category');
  }
 })
});
}*/

module.exports = seedDB;

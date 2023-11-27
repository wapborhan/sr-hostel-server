const { model, Schema } = require("mongoose");

const MenuSchema = new Schema({
  meal_title: String,
  meal_category: String,
  meal_image: String,
  ingredients: [String],
  description: String,
  price: Number,
  rating: Number,
  time: String,
  likes_count: Number,
  reviews: Number,
  distributor_name: String,
  distributor_email: String,
});
const Menu = model("menus", MenuSchema);

module.exports = Menu;

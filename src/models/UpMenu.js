const { model, Schema } = require("mongoose");

const MenuSchema = new Schema({
  meal_title: String,
  meal_category: String,
  meal_image: String,
  ingredients: [String],
  description: String,
  price: Number,
  rating: Number,
  time: Date,
  likes_count: Number,
  reviews: Number,
  distributor_name: String,
  distributor_email: String,
});
const UpMenu = model("upcomingmenus", MenuSchema);

module.exports = UpMenu;

const { model, Schema } = require("mongoose");

const MenuSchema = new Schema({
  meal_title: {
    type: String,
    required: true,
  },
});
const Menu = model("Menu", MenuSchema);

module.exports = Menu;

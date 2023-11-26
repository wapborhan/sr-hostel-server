const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true },
  email: { type: String, required: true },
  badge: { type: String, required: true },
});
const User = model("users", UserSchema);

module.exports = User;
const User = require("../../models/User");

const postUserData = async (user) => {
  const userData = new User(user);
  const cursor = await userData
    .save()
    .then((result) => {
      console.log("Data saved successfully:", result);
    })
    .catch((error) => {
      console.error("Error saving data:", error);
    });

  return cursor;
};

module.exports = postUserData;

const Menu = require("../../models/Menu");

const postMealsData = async (meals) => {
  const postData = new Menu(meals);
  const cursor = await postData
    .save()
    .then((result) => {
      console.log("Data saved successfully:", result);
    })
    .catch((error) => {
      console.error("Error saving data:", error);
    });

  return cursor;
};

module.exports = postMealsData;

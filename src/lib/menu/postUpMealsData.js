const UpMenu = require("../../models/UpMenu");

const postUpMealsData = async (meals) => {
  const postData = new UpMenu(meals);
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

module.exports = postUpMealsData;

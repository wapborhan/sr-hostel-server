//
const ReqMeals = require("../../models/ReqMeals");

const postReqMealsData = async (meals) => {
  const postData = new ReqMeals(meals);
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

module.exports = postReqMealsData;

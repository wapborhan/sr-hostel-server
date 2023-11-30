const Menu = require("../../models/Menu");

const upMealsData = async (filter, updateData) => {
  const update = {
    meal_image: updateData?.meal_image,
    meal_title: updateData?.meal_title,
    meal_category: updateData?.meal_category,
    price: updateData?.price,
    rating: updateData?.rating,
    description: updateData?.description,
  };
  let cursor = await Menu.findOneAndUpdate(filter, update);

  return cursor;
};

module.exports = upMealsData;

const delMeals = require("../../api/menu/delMeals");

const router = require("express").Router();

router.delete("/menu/:id", delMeals);

module.exports = router;

const upMeals = require("../../api/menu/upMeals");

const router = require("express").Router();

router.patch("/menu/:id", upMeals);

module.exports = router;

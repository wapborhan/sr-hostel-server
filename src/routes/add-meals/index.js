const postMeals = require("../../api/menu/postMeals");

const router = require("express").Router();

router.post("/menu", postMeals);

module.exports = router;

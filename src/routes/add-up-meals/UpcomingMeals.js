const postUpMeals = require("../../api/menu/postUpMeals");

const router = require("express").Router();

router.post("/upcoming", postUpMeals);

module.exports = router;

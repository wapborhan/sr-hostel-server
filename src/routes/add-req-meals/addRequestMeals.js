const postReqMeals = require("../../api/menu/postReqMeals");

const router = require("express").Router();

router.post("/reqmeals", postReqMeals);

module.exports = router;

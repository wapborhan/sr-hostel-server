const upReqMeals = require("../../api/menu/upReqMeals");

const router = require("express").Router();

router.patch("/reqmeals/:id", upReqMeals);

module.exports = router;

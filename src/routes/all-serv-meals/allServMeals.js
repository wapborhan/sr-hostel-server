// allServMeals
const findAllServ = require("../../api/menu/findAllServ");

const router = require("express").Router();

router.get("/servmeals", findAllServ);

module.exports = router;

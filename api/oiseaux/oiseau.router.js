const { getOiseau } = require("./oiseau.controller");
const router = require("express").Router();

router.get("/", getOiseau);

module.exports = router;

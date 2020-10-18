const { getOiseaux } = require("./oiseau.controller");
const router = require("express").Router();

router.get("/", getOiseaux);

module.exports = router;

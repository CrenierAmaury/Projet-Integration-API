const { getOiseaux } = require("./oiseau.controller");
const router = require("express").Router();

router.get("/:recherche", getOiseaux);

module.exports = router;

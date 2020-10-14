const { createHistorique, getHistorique } = require("./historique.controller");
const router = require("express").Router();

router.post("/", createHistorique);
router.get("/", getHistorique);

module.exports = router;

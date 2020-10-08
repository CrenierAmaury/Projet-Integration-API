const { createHistorique, getHistorique, updateHistorique, deleteHistorique } = require("./historique.controller");
const router = require("express").Router();

router.post("/", createHistorique);
router.get("/", getHistorique);
router.put("/", updateHistorique);
router.delete("/", deleteHistorique);

module.exports = router;

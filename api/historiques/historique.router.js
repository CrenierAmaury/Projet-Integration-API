const { createHistorique, getHistoriques, getHistoriquesByUtilisateur } = require("./historique.controller");
const router = require("express").Router();

router.post("/", createHistorique);
router.get("/all", getHistoriques);
router.get("/", getHistoriquesByUtilisateur);

module.exports = router;

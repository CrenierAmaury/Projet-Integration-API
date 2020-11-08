const { checkToken } = require("../../auth/checkToken");
const { createUtilisateur, getUtilisateurByUID, updateUtilisateur, deleteUtilisateur } = require("./utilisateur.controller");
const router = require("express").Router();

router.post("/", checkToken, createUtilisateur);
router.get("/", checkToken, getUtilisateurByUID);
router.put("/", checkToken, updateUtilisateur);
router.delete("/", checkToken, deleteUtilisateur);

module.exports = router;

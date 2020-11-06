const { checkToken } = require("../../auth/checkToken");
const { createUtilisateur, getUtilisateurByEmail, updateUtilisateur, deleteUtilisateur } = require("./utilisateur.controller");
const router = require("express").Router();

router.post("/", checkToken, createUtilisateur);
router.get("/", checkToken, getUtilisateurByEmail);
router.put("/", checkToken, updateUtilisateur);
router.delete("/", checkToken, deleteUtilisateur);

module.exports = router;

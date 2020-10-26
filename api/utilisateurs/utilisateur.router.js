const { createUtilisateur, getUtilisateurByEmail, updateUtilisateur, deleteUtilisateur } = require("./utilisateur.controller");
const router = require("express").Router();

router.post("/", createUtilisateur);
router.get("/", getUtilisateurByEmail);
router.put("/", updateUtilisateur);
router.delete("/", deleteUtilisateur);

module.exports = router;

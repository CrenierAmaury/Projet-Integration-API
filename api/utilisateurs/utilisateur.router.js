const { createUtilisateur, getUtilisateurById, updateUtilisateur, deleteUtilisateur } = require("./utilisateur.controller");
const router = require("express").Router();

router.post("/", createUtilisateur);
router.get("/", getUtilisateurById);
router.put("/", updateUtilisateur);
router.delete("/", deleteUtilisateur);

module.exports = router;

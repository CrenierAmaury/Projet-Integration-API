const { createUtilisateur, getUtilisateur, updateUtilisateur, deleteUtilisateur } = require("./utilisateur.controller");
const router = require("express").Router();

router.post("/", createUtilisateur);
router.get("/", getUtilisateur);
router.put("/", updateUtilisateur);
router.delete("/", deleteUtilisateur);

module.exports = router;

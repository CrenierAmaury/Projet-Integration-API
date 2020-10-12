const { createUtilisateur, getUtilisateur, updateUtilisateur, deleteUtilisateur, register, signIn } = require("./utilisateur.controller");
const router = require("express").Router();

router.post("/", createUtilisateur);
router.get("/", getUtilisateur);
router.put("/", updateUtilisateur);
router.delete("/", deleteUtilisateur);

router.post("/inscription", register);
router.post("/connexion", signIn);

module.exports = router;

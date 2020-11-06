const { checkToken } = require("../../auth/checkToken");
const { createCapteur, getCapteursByUtilisateur, updateCapteur, deleteCapteur } = require("./capteur.controller");
const router = require("express").Router();

router.post("/", checkToken, createCapteur);
router.get("/", checkToken, getCapteursByUtilisateur);
router.put("/", checkToken, updateCapteur);
router.delete("/", checkToken, deleteCapteur);

module.exports = router;

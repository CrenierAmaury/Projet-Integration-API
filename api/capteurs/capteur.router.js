const { createCapteur, getCapteursByUtilisateur, updateCapteur, deleteCapteur } = require("./capteur.controller");
const router = require("express").Router();

router.post("/", createCapteur);
router.get("/", getCapteursByUtilisateur);
router.put("/", updateCapteur);
router.delete("/", deleteCapteur);

module.exports = router;

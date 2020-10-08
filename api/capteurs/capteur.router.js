const { createCapteur, getCapteur, updateCapteur, deleteCapteur } = require("./capteur.controller");
const router = require("express").Router();

router.post("/", createCapteur);
router.get("/", getCapteur);
router.put("/", updateCapteur);
router.delete("/", deleteCapteur);

module.exports = router;

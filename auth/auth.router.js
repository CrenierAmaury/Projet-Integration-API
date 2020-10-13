const { register, signIn } = require("./auth.controller");
const router = require("express").Router();

router.post("/inscription", register);
router.post("/connexion", signIn);

module.exports = router;

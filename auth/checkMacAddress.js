const { getCapteurs } = require("../api/capteurs/capteur.service");

module.exports = {
    checkMacAddress: (req, res, next) => {
        console.log("start check")
        let macAddress = req.body.capteur
        let check = false;
        let capteurs;
        console.log(macAddress);
            getCapteurs((err, results) => {
                if (err) {
                    console.log(err);
                }
                else {
                console.log(results)
                capteurs = results
                }
            })
    }
};

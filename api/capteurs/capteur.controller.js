const { createCapteur, getCapteursByUtilisateur, updateCapteur, deleteCapteur } = require("./capteur.service");


module.exports = {
    createCapteur: (req, res) => {
        const data = req.body;
        createCapteur(data, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "erreur de connexion à la base de données"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getCapteursByUtilisateur: (req, res) => {
        const data = req.query;
        getCapteursByUtilisateur(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    updateCapteur: (req, res) => {
        const data = req.body;
        updateCapteur(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "échec mise à jour du capteur"
                });
            }
            return res.json({
                success: 1,
                message: "mise à jour réussie"
            });
        });
    },
    deleteCapteur: (req, res) => {
        const data = req.query;
        deleteCapteur(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "capteur non trouvé"
                });
            }
            return res.json({
                success: 1,
                message: "capteur supprimé avec succès"
            });
        });
    }
};

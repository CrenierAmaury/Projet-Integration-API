const { createHistorique, getHistoriques, getHistoriquesByUtilisateur } = require("./historique.service");


module.exports = {
    createHistorique: (req, res) => {
        const data = req.body;
        createHistorique(data, (err, results) => {
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
    getHistoriques: (req, res) => {
        getHistoriques((err, results) => {
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
    getHistoriquesByUtilisateur: (req, res) => {
        data = req.body;
        getHistoriquesByUtilisateur(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    }
};

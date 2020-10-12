const { createUtilisateur, getUtilisateur, updateUtilisateur, deleteUtilisateur } = require("./utilisateur.service");
const FirebaseAuth = require('firebaseauth');
const firebase = new FirebaseAuth(process.env.FIREBASE_API_KEY);

module.exports = {
    createUtilisateur: (req, res) => {
        const data = req.body;
        createUtilisateur(data, (err, results) => {
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
    getUtilisateur: (req, res) => {
        getUtilisateur((err, results) => {
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
    updateUtilisateur: (req, res) => {
        const data = req.body;
        updateUtilisateur(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "échec mise à jour de la catégorie"
                });
            }
            return res.json({
                success: 1,
                message: "mise à jour réussie"
            });
        });
    },
    deleteUtilisateur: (req, res) => {
        const data = req.query;
        deleteUtilisateur(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "données non trouvées"
                });
            }
            return res.json({
                success: 1,
                message: "categorie supprimée avec succès"
            });
        });
    },
    register: (req, res) => {
        const data = req.body;
        const email = data.email;
        const password = data.password;
        const extras = "";
        firebase.registerWithEmail(email, password, extras,function(err, results) {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "inscription réalisée",
                data: results
            });
        });
    },
    signIn: (req, res) => {
        const data = req.body;
        const email = data.email;
        const password = data.password;
        firebase.signInWithEmail(email, password, function(err, results){
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "connexion réalisée",
                data: results
            });
        });
    }
};

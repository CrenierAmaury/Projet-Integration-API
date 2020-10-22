const FirebaseAuth = require('firebaseauth');
const firebase = new FirebaseAuth(process.env.FIREBASE_API_KEY);

module.exports = {
    register: (req, res) => {
        const data = req.body;
        const email = data.email;
        const password = data.password;
        const extras = "";
        let token = "";
        firebase.registerWithEmail(email, password, extras, function (err, results) {
            if (err) {
                console.log(err);
                return;
            }
            token = results.token;
            return res.json({
                success: 1,
                message: "inscription réalisée",
                data: results
            });
        });
        firebase.sendVerificationEmail(token, function(err, result) {
            if (err)
                console.log(err);
            else
                console.log(result);
        });
    },
    signIn: (req, res) => {
        const data = req.body;
        const email = data.email;
        const password = data.password;
        firebase.signInWithEmail(email, password, function (err, results) {
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
    },
};

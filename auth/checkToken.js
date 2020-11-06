const admin = require("firebase-admin")

const serviceAccount = require("../" + process.env.GOOGLE_APPLICATION_CREDENTIALS);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://menura-api.firebaseio.com"
});

module.exports = {
    checkToken: (req, res, next) => {
        console.log("start check")
        let token = req.header('authorization').split(" ")[1];
        console.log(token)
        if (token) {
            admin.auth().verifyIdToken(token)
                .then(function(decodedToken) {
                    next();
                }).catch(function(error) {
                    console.log(error)
            });
        }
    }
};

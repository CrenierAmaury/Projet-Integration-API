const FirebaseAuth = require('firebaseauth');
const firebase = new FirebaseAuth(process.env.FIREBASE_API_KEY);

firebase.registerWithEmail(email, password, function(err, result) {
    if (err)
        console.log(err);
    else
        console.log(result);
});

firebase.signInWithEmail(email, password, function(err, result){
    if (err)
        console.log(err);
    else
        console.log(result);
});

require('dotenv').config();

const express = require('express');
const app = express();
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const rateLimit = require("express-rate-limit");

app.use(cors({
    origin: ['https://projet-int-ca671.web.app', 'https://localhost:4200'],
    credentials: true
}));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});

app.use(limiter);

const utilisateurRouter = require("./api/utilisateurs/utilisateur.router");
const historiqueRouter = require("./api/historiques/historique.router");
const capteurRouter = require("./api/capteurs/capteur.router");
const oiseauRouter = require("./api/oiseaux/oiseau.router");

const privateKey = fs.readFileSync('/etc/letsencrypt/live/menura.be/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/menura.be/fullchain.pem', 'utf8');

const credentials = {
    key: privateKey,
    cert: certificate,
};

const httpsServer = https.createServer(credentials, app);

//production
httpsServer.listen(process.env.APP_PORT, () => {
    console.log('HTTPS Server running on port ' + process.env.APP_PORT);
});


app.use(express.json());

app.use("/v1/api/utilisateurs", utilisateurRouter);
app.use("/v1/api/historiques", historiqueRouter);
app.use("/v1/api/capteurs", capteurRouter);
app.use("/v1/api/oiseaux", oiseauRouter);

//site vitrine
app.use("/",function (req,res) {
    res.redirect("https://projet-int-ca671.web.app/home");
});

// http
//app.listen(process.env.APP_PORT, () =>{
    //console.log("Server up and running : ", process.env.APP_PORT);
//});

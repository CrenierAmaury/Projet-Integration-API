require('dotenv').config();

const express = require('express');
const app = express();
const fs = require('fs');
const https = require('https');
const cors = require('cors');
app.use(cors({
    origin: 'https://projet-int-ca671.web.app',
    credentials: true
}));


const utilisateurRouter = require("./api/utilisateurs/utilisateur.router");
const historiqueRouter = require("./api/historiques/historique.router");
const capteurRouter = require("./api/capteurs/capteur.router");
const oiseauRouter = require("./api/oiseaux/oiseau.router");

const privateKey = fs.readFileSync('key.pem', 'utf8');
const certificate = fs.readFileSync('cert.pem', 'utf8');


const credentials = {
    key: privateKey,
    cert: certificate,
};

const httpsServer = https.createServer(credentials, app);

//production
httpsServer.listen(process.env.APP_PORT, () => {
    console.log('HTTPS Server running on port 3000');
});

app.use(express.json());

app.use("/v1/api/utilisateurs", utilisateurRouter);
app.use("/v1/api/historiques", historiqueRouter);
app.use("/v1/api/capteurs", capteurRouter);
app.use("/v1/api/oiseaux", oiseauRouter);

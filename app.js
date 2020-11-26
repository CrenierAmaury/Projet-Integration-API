require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
    origin: 'https://projet-int-ca671.web.app',
    credentials: true
}));


const utilisateurRouter = require("./api/utilisateurs/utilisateur.router");
const historiqueRouter = require("./api/historiques/historique.router");
const capteurRouter = require("./api/capteurs/capteur.router");
const oiseauRouter = require("./api/oiseaux/oiseau.router");


app.use(express.json());

app.use("/v1/api/utilisateurs", utilisateurRouter);
app.use("/v1/api/historiques", historiqueRouter);
app.use("/v1/api/capteurs", capteurRouter);
app.use("/v1/api/oiseaux", oiseauRouter);

// localhost test
app.listen(process.env.APP_PORT, () =>{
    console.log("Server up and running : ", process.env.APP_PORT);
});

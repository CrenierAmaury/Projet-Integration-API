const pool = require("../../config/database");


module.exports = {
    createCapteur: (data, callback) =>{
        pool.query(
            'insert into capteurs(numeroSerie, utilisateur) ' +
            'values(?,?)',
            [
                data.numeroSerie,
                data.utilisateur,
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    getCapteursByUtilisateur: (data, callBack) => {
        pool.query(
            'select * from capteurs where utilisateur = ? \n' +
            'order by numeroSerie',
            [data.utilisateur],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateCapteur: (data, callBack) => {
        pool.query(
            'update capteurs set utilisateur=? where numeroSerie = ?',
            [
                data.utilisateur,
                data.numeroSerie
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteCapteur: (data, callBack) => {
        pool.query(
            'delete from capteurs where numeroSerie = ?',
            [data.numeroSerie],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
};

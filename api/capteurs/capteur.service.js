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
    getCapteur: callBack => {
        pool.query(
            'select numeroSerie, utilisateur from capteurs \n' +
            'order by numeroSerie',
            [],
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

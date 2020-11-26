const pool = require("../../config/database");


module.exports = {
    createCapteur: (data, callback) =>{
        pool.query(
            'insert into capteurs(macAddress, utilisateur) ' +
            'values(?,?)',
            [
                data.macAddress,
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
            'order by macAddress',
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
            'update capteurs set utilisateur=? where macAddress = ?',
            [
                data.utilisateur,
                data.macAddress
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
            'delete from capteurs where macAddress = ?',
            [data.macAddress],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getCapteurs: (callBack) => {
        pool.query(
            'select * from capteurs',
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
};

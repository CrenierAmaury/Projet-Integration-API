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
            'update capteurs set actif=? where macAddress = ?',
            [
                1,
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
            'UPDATE capteurs\n' +
            'SET actif = ?\n' +
            'WHERE macAddress = ?',
            [
                0,
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
};

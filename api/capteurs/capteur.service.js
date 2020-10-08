const pool = require("../../config/database");


module.exports = {
    createCapteur: (data, callback) =>{
        pool.query(
            'insert into capteurs(utilisateur, numeroSerie) ' +
            'values(?,?)',
            [
                data.nom,
                data.details,
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
            'select id, utilisateur, numeroSerie from capteurs \n' +
            'order by utilisateur',
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
            'update capteurs set utilisateur=?, numeroSerie=? where id = ?',
            [
                data.nom,
                data.details,
                data.id
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
            'delete from capteurs where id = ?',
            [data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
};

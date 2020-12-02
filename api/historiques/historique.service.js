const pool = require("../../config/database");


module.exports = {
    createHistorique: (data, callback) =>{
        pool.query(
            'insert into historiques(oiseau, date, localisation, capteur) ' +
            'values(?,?,?,?)',
            [
                data.oiseau,
                data.date,
                data.localisation,
                data.capteur
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    getHistoriques: callBack => {
        pool.query(
            'select * from historiques \n' +
            'order by date, oiseau',
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getHistoriquesByUtilisateur: (data, callBack) => {
        pool.query(
            'select * from historiques where capteur IN (select macAddress from capteurs where utilisateur= ?) \n' +
            'order by date, oiseau desc',
            [data.utilisateur],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                console.log(data.utilisateur)
                console.log(results)
                return callBack(null, results);
            }
        );
    }
};

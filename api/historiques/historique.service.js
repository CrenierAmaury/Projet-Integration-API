const pool = require("../../config/database");


module.exports = {
    createHistorique: (data, callback) =>{
        pool.query(
            'insert into historiques(oiseau, date, localisation, capteur) ' +
            'values(?,?,?,?)',
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
    getHistorique: callBack => {
        pool.query(
            'select id, oiseau, date, localisation, capteur from historiques \n' +
            'order by date',
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
};

const pool = require("../../config/database");


module.exports = {
    getOiseau: callBack => {
        pool.query(
            'select idoiseaux, nom, espece, details from oiseaux \n' +
            'order by nom',
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



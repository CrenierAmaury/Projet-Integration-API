const pool = require("../../config/database");


module.exports = {
    getOiseaux: callBack => {
        pool.query(
            'select idoiseaux, nom, espece, details from oiseaux \n' +
            'where nom like \%' + data.recherche +
            '%\' or espece like \'%' + data.recherche + '%\' \n' +
            'order by nom, espece',
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



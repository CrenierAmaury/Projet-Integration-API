const pool = require("../../config/database");


module.exports = {
    createUtilisateur: (data, callback) =>{
        pool.query(
            'insert into utilisateurs(nom, prenom) ' +
            'values(?,?)',
            [
                data.nom,
                data.prenom,
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    getUtilisateurById: (data, callBack) => {
        pool.query(
            'select * from utilisateurs where id = ? \n' +
            'order by nom',
            [data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateUtilisateur: (data, callBack) => {
        pool.query(
            'update utilisateurs set nom=?, prenom=? where id = ?',
            [
                data.nom,
                data.prenom,
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
    deleteUtilisateur: (data, callBack) => {
        pool.query(
            'delete from utilisateurs where id = ?',
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

const pool = require("../../config/database");


module.exports = {
    createUtilisateur: (data, callback) =>{
        pool.query(
            'insert into utilisateurs(idutilisateurs, nom, prenom, email) ' +
            'values(?,?,?,?)',
            [
                data.nom,
                data.prenom,
                data.email
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    getUtilisateurByUID: (data, callBack) => {
        pool.query(
            'select * from utilisateurs where idutilisateurs = ? \n' +
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
            'update utilisateurs set nom=?, prenom=?, email=? where id = ?',
            [
                data.nom,
                data.prenom,
                data.email,
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

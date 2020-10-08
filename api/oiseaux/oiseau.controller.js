const { getOiseau } = require("./oiseau.service");


module.exports = {
    getOiseau: (req, res) => {
        getOiseau((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    }
};

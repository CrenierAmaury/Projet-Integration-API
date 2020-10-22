const { getOiseaux } = require("./oiseau.service");


module.exports = {
    getOiseaux: (req, res) => {
        const data = req.query;
        getOiseaux(data, (err, results) => {
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

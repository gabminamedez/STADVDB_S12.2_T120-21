var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    let query = "SELECT * FROM locations L JOIN neighbourhoods N ON (L.neighbourhood_id = N.neighbourhood_id);";
    db.query(query, (err, result) => {
        if(err) throw err;

        res.render('index', { title: 'Index', locations: result });
    });
});

module.exports = router;
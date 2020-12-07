var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    let query = "SELECT * FROM authors";
    db.query(query, (err, result) => {
        if(err) throw err;

        res.render('index', { title: 'Index', authors: result });
    });
});

module.exports = router;
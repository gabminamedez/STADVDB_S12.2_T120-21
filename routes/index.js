var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});

router.get('/query1', function(req, res, next) {
    let query = "SELECT name, room_type, price FROM listings WHERE room_type = 'Private room' AND price <= 125 ORDER BY name;";

    db.query(query, (err, result) => {
        if(err) throw err;

        res.render('query1', { title: 'Query 1', listings: result });
    });
});

router.get('/query2', function(req, res, next) {
    let query = "SELECT name, room_type, price FROM listings WHERE MONTH(last_review) = 09 AND minimum_nights >= 2 ORDER BY name;";
    
    db.query(query, (err, result) => {
        if(err) throw err;

        res.render('query2', { title: 'Query 2', listings: result });
    });
});

router.get('/query3', function(req, res, next) {
    let query = "SELECT l.name, h.host_name, l.number_of_reviews FROM hosts as h JOIN listings as l ON h.host_id=l.host_id WHERE l.number_of_reviews >= 200 ORDER BY l.name;";
    
    db.query(query, (err, result) => {
        if(err) throw err;

        res.render('query3', { title: 'Query 3', listings: result });
    });
});

router.get('/query4', function(req, res, next) {
    let query = "SELECT l.name, h.host_name, l.price FROM hosts as h JOIN listings as l ON h.host_id=l.host_id WHERE l.price BETWEEN 99 AND 201;";
    
    db.query(query, (err, result) => {
        if(err) throw err;

        res.render('query4', { title: 'Query 4', listings: result });
    });
});

router.get('/query5', function(req, res, next) {
    let query = "SELECT * FROM locations L JOIN neighbourhoods N ON (L.neighbourhood_id = N.neighbourhood_id);";
    
    db.query(query, (err, result) => {
        if(err) throw err;

        res.render('query5', { title: 'Query 5', prompt: 'Get the average availability of a certain room type listed in a certain neighbourhood group.', result: result });
    });
});

router.get('/query6', function(req, res, next) {
    let query = "SELECT * FROM locations L JOIN neighbourhoods N ON (L.neighbourhood_id = N.neighbourhood_id);";
    
    db.query(query, (err, result) => {
        if(err) throw err;

        res.render('query6', { title: 'Query 6', prompt: 'Get the minimum and maximum price of listings in a certain neighbourhood.', result: result });
    });
});

router.get('/query7', function(req, res, next) {
    let query = "SELECT * FROM locations L JOIN neighbourhoods N ON (L.neighbourhood_id = N.neighbourhood_id);";
    
    db.query(query, (err, result) => {
        if(err) throw err;

        res.render('query7', { title: 'Query 7', prompt: 'Get the average price of all listings by a certain host in a certain neighbourhood group.', result: result });
    });
});

module.exports = router;
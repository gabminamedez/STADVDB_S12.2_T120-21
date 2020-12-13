var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});

router.get('/query1', function(req, res, next) {
    let query = "SELECT * FROM locations L JOIN neighbourhoods N ON (L.neighbourhood_id = N.neighbourhood_id);";

    db.query(query, (err, result) => {
        if(err) throw err;

        res.render('type1', 
            { title: 'Query 1', prompt: 'Get all listings (name, room_type, price) with a certain room type below or equal to a specified price.', result: result });
    });
});

router.get('/query2', function(req, res, next) {
    let query = "SELECT * FROM locations L JOIN neighbourhoods N ON (L.neighbourhood_id = N.neighbourhood_id);";
    
    db.query(query, (err, result) => {
        if(err) throw err;

        res.render('type1', { title: 'Query 2', prompt: 'Get all listings (name, room_type, price) with a latest review in a certain month with minimum_nights at least a certain number.', result: result });
    });
});

router.get('/query3', function(req, res, next) {
    let query = "SELECT * FROM locations L JOIN neighbourhoods N ON (L.neighbourhood_id = N.neighbourhood_id);";
    
    db.query(query, (err, result) => {
        if(err) throw err;

        res.render('type2', { title: 'Query 3', prompt: 'Get the hosts (name, host_name) that have listings between a specified price range.', result: result });
    });
});

router.get('/query4', function(req, res, next) {
    let query = "SELECT * FROM locations L JOIN neighbourhoods N ON (L.neighbourhood_id = N.neighbourhood_id);";
    
    db.query(query, (err, result) => {
        if(err) throw err;

        res.render('type2', { title: 'Query 4', prompt: 'Get the hosts (name, host_name) that have received a certain number of reviews.', result: result });
    });
});

router.get('/query5', function(req, res, next) {
    let query = "SELECT * FROM locations L JOIN neighbourhoods N ON (L.neighbourhood_id = N.neighbourhood_id);";
    
    db.query(query, (err, result) => {
        if(err) throw err;

        res.render('type3', { title: 'Query 5', prompt: 'Get the average availability of a certain room type listed in a certain neighbourhood group.', result: result });
    });
});

router.get('/query6', function(req, res, next) {
    let query = "SELECT * FROM locations L JOIN neighbourhoods N ON (L.neighbourhood_id = N.neighbourhood_id);";
    
    db.query(query, (err, result) => {
        if(err) throw err;

        res.render('type3', { title: 'Query 6', prompt: 'Get the minimum and maximum price of listings in a certain neighbourhood.', result: result });
    });
});

router.get('/query7', function(req, res, next) {
    let query = "SELECT * FROM locations L JOIN neighbourhoods N ON (L.neighbourhood_id = N.neighbourhood_id);";
    
    db.query(query, (err, result) => {
        if(err) throw err;

        res.render('type3', { title: 'Query 7', prompt: 'Get the average price of all listings by a certain host in a certain neighbourhood group.', result: result });
    });
});

module.exports = router;
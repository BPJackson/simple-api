var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var obj = {
        items: [{
            id: 1,
        },{
            id: 2,
        },{
            id: 3,
        },{
            id: 4,
        },{
            id: 5,
        }]
    };
    res.json(obj);
});

module.exports = router;

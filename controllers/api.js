const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');

let feedbackData = require('../data/feedback.json');

router.get('/api', (req, res) => {
    
    res.json(feedbackData)
})

//request -> middleware -> handler
//grabs form data from header in json
router.use(bodyParser.urlencoded({extended: false}));
//converts header json string into a js object
router.use(bodyParser.json())

//purpose: posting data from client side form
router.post('/api', (req, res) => {
    

    feedbackData.unshift(req.body)

    fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err) => {
        
        if(err){
            console.log(err);
        }
        console.log(req.body);
        res.json(feedbackData);
    });

    console.log(req.body);
});


module.exports = router;
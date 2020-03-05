const express = require('express');
const router = express.Router();
let feedback = require('../data/data.json');

router.get('/feedback', (req, res) => {
    
    let albumPhotos = [];
    let albumNames = [];
    let urlNames = [];

    feedback.albums.forEach((albumObj)=>{
        albumPhotos = albumPhotos.concat(albumObj.coverImage);
        albumNames = albumNames.concat(albumObj.albumName);
        urlNames = urlNames.concat(albumObj.shortName);
    });
    
    res.render('feedback.ejs', {
        coverImage: albumPhotos,
        allAlbums: albumNames,
        urlName: urlNames
    });
});


module.exports = router;
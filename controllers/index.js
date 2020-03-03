const express = require('express');
const router = express.Router();
let data = require('../data/data.json');

router.get('/', (req, res) => {
    
    albumPhotos = [];
    albumNames = [];

    data.albums.forEach((albumObj)=>{
        albumPhotos = albumPhotos.concat(albumObj.coverImage);
        albumNames = albumNames.concat(albumObj.albumName);
    });
    
    res.render('index.ejs', {
        coverImage: albumPhotos,
        allAlbums: albumNames
    });
});

module.exports = router;


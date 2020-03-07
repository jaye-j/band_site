const express = require('express');
const router = express.Router();
let data = require('../data/data.json');


router.get('/chatroom', (req, res) => {

    let albumPhotos = [];
    let albumNames = [];
    let urlNames = [];

    data.albums.forEach((albumObj)=>{
        albumPhotos = albumPhotos.concat(albumObj.coverImage);
        albumNames = albumNames.concat(albumObj.albumName);
        urlNames = urlNames.concat(albumObj.shortName);
    });

    res.render('chatbox.ejs', {
        coverImage: albumPhotos,
        allAlbums: albumNames,
        urlName: urlNames
    });
});

module.exports = router;
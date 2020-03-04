const express = require('express');
const router = express.Router();
let data = require('../data/data.json');

router.get('/albums/:albumid', (req, res) => {
    
    let albumPhotos = [];
    let albumNames = [];
    let albumPhoto = [];
    let albumName = [];
    let albumDate = [];
    let albumSongList = [];
    let urlNames = [];
    let albumSum = [];

    data.albums.forEach((albumObj) => {

        albumPhotos = albumPhotos.concat(albumObj.coverImage);
        albumNames = albumNames.concat(albumObj.albumName);
        urlNames = urlNames.concat(albumObj.shortName);

        if(albumObj.shortName == req.params.albumid){
            albumName.push(albumObj.albumName);
            albumDate.push(albumObj.releaseDate);
            albumSongList.push(albumObj.songList);
            albumSum.push(albumObj.summary);
            albumPhoto = albumObj.coverImage;
        }
    });

    res.render('albums.ejs', { 
        coverImage: albumPhotos,
        allAlbums: albumNames,
        albumCover: albumPhoto,
        albumTitle: albumName,
        albumRelease: albumDate,
        albumSongs: albumSongList,
        urlName: urlNames,
        Summary: albumSum
    });
});




module.exports = router;
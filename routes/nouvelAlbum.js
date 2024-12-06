const express = require('express');
const router = express.Router();

// Route pour ajouter un album (GET)
router.get('/add-album', (req, res) => {
    res.render('nouvelAlbum'); // Rend le fichier product.ejs
});

// Route pour gérer le formulaire d'ajout d'album (POST)
router.post('/albumAjoute', (req, res) => {
    console.log(req.body); // Affiche les données du formulaire dans la console
    res.redirect('/'); // Redirige vers la page des albums
});

module.exports = router;
const express = require('express');
const router = express.Router();

// Route pour la page contenuAlbum
router.get('/contenuAlbum', (req, res) => {
    res.render('contenuAlbum'); // Rend le fichier contenuAlbum.ejs
});

module.exports = router;
const express = require('express');
const router = express.Router();

// Route pour la page Albums
router.get('/', (req, res) => {
    res.render('albums'); // Rend le fichier albums.ejs
});

module.exports = router;
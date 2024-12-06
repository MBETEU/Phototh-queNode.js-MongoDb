const express = require('express');
const router = express.Router();
const Album = require('../models/album');

// Route pour afficher tous les albums
router.get('/', async (req, res) => {
    try {
        const albums = await Album.find().populate('images');
        res.render('albums', { albums });
    } catch (err) {
        res.status(500).send("Erreur lors de l'affichage des albums");
    }
});

// Route pour supprimer un album
router.delete('/albums/:id', async (req, res) => {
    try {
        await Album.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        res.status(500).send("Erreur lors de la suppression de l'album");
    }
});

module.exports = router;

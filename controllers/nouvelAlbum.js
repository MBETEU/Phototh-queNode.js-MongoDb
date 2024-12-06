const express = require('express');
const router = express.Router();
const Album = require('../models/album');

// Formulaire pour créer un nouvel album
router.get('/add-album', (req, res) => {
    res.render('nouvelAlbum');
});

// Traitement du formulaire
router.post('/albumAjouter', async (req, res) => {
    try {
        const newAlbum = new Album({ title: req.body.title });
        await newAlbum.save();
        res.redirect('/');
    } catch (err) {
        res.status(400).send("Erreur lors de la création de l'album");
    }
});

module.exports = router;

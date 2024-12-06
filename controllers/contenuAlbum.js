const express = require('express');
const router = express.Router();
const upload = require('../config/multer'); // Importer la configuration Multer
const Album = require('../models/album');
const Image = require('../models/image');

// Route pour afficher le contenu d'un album
router.get('/albums/:id', async (req, res) => {
    try {
        // Trouver l'album par ID et peupler les images associées
        const album = await Album.findById(req.params.id).populate('images');
        res.render('contenuAlbum', { album });
    } catch (err) {
        res.status(404).send("Album introuvable");
    }
});

// Route pour ajouter une image dans un album
router.post('/albums/:id/add-image', upload.single('image'), async (req, res) => {
    try {
        const album = await Album.findById(req.params.id);

        // Vérifier si le fichier est bien téléchargé
        if (!req.file) {
            return res.status(400).send("Aucune image téléchargée.");
        }

        // Extraire le nom de l'image à partir du nom du fichier téléchargé
        const imageName = req.file.originalname;

        // Créer une nouvelle image avec l'URL et le nom de l'image
        const newImage = new Image({
            url: `/uploads/${req.file.filename}`,
            name: imageName,
            album: album._id
        });

        // Sauvegarder l'image dans la base de données
        await newImage.save();

        // Ajouter l'image à l'album
        album.images.push(newImage);
        await album.save();

        // Rediriger vers la page de l'album pour afficher les images mises à jour
        res.redirect(`/albums/${album._id}`);
    } catch (err) {
        console.error("Erreur lors de l'ajout de l'image:", err);
        res.status(400).send("Erreur lors du téléchargement de l'image");
    }
});

// Route pour supprimer une image d'un album
router.get('/albums/:albumId/delete-image/:imageId', async (req, res) => {
    try {
        const album = await Album.findById(req.params.albumId);
        const image = await Image.findById(req.params.imageId);

        // Supprimer l'image de la base de données
        await Image.findByIdAndDelete(req.params.imageId);

        // Retirer l'image de l'album
        album.images.pull(image._id);
        await album.save();

        // Rediriger vers la page de l'album après suppression
        res.redirect(`/albums/${album._id}`);
    } catch (err) {
        console.error("Erreur lors de la suppression de l'image:", err);
        res.status(400).send("Erreur lors de la suppression de l'image");
    }
});

module.exports = router;

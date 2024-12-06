const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require('dotenv').config();

const nouvelAlbumRouter = require('./controllers/nouvelAlbum');
const contenuAlbumRouter = require('./controllers/contenuAlbum');
const albumsRouter = require('./controllers/albums');

const app = express();

// Configuration de Mongoose
mongoose.connect('mongodb://127.0.0.1/Phototèque');

app.use(express.static('public'));

// Configuration d'Express
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

// Routes
app.use('/', albumsRouter);
app.use('/', nouvelAlbumRouter);
app.use('/', contenuAlbumRouter);

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur en cours d'exécution sur le port ${PORT}`));

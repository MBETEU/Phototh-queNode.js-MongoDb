const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Configuration du moteur de template EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware pour analyser les données du corps de la requête
app.use(express.urlencoded({ extended: true }));
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    url: { type: String, required: true },
    name: { type: String, required: true },  // Ajout du champ 'name' pour le nom de l'image
    album: { type: mongoose.Schema.Types.ObjectId, ref: 'Album', required: true }
});

const Image = mongoose.model('Image', imageSchema);
module.exports = Image;

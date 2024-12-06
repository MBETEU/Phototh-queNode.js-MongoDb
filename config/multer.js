const multer = require('multer');

// Configuration de Multer pour enregistrer les fichiers dans le dossier "public/uploads"
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads'); // Dossier de destination
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname); // Nom unique pour éviter les collisions
    }
});

// Initialiser Multer avec la configuration
const upload = multer({ storage: storage });

module.exports = upload;

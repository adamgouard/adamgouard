const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware pour gérer les données du formulaire
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir le fichier HTML
app.use(express.static(path.join(__dirname, 'public')));

// Route pour afficher le formulaire
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Formulaire.html'));
});

// Route pour traiter le formulaire
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    
    // Traitement des données du formulaire
    console.log('Nom:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Répondre à la demande
    res.json({ message: 'Formulaire soumis avec succès!' });
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});

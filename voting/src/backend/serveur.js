const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware pour gérer les requêtes JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware CORS
app.use(cors());

// Configuration de la connexion à MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'nouveaumotdepasse',
    database: 'talent_hub'
});
db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        process.exit(1); // Terminer le processus si la connexion échoue
    }
    console.log('Connecté à la base de données MySQL');
});

app.get('/', (req, res) => {
    res.send('Bienvenue sur le serveur Express.js !');
});

app.post('/inscription', (req, res) => {
    const { prenom, nom, email, mot_de_passe } = req.body;
    console.log('Données reçues:', req.body); // Log des données reçues

    const INSERT_USER_QUERY = `INSERT INTO User (prenom, nom, email, mot_de_passe) VALUES (?, ?, ?, ?)`;
    db.query(INSERT_USER_QUERY, [prenom, nom, email, mot_de_passe], (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'insertion dans la base de données:', err);
            res.status(500).send("Erreur lors de l'inscription de l'utilisateur");
        } else {
            res.status(200).send("Utilisateur inscrit avec succès");
        }
    });
});

app.post('/connexion', (req, res) => {
    const { email, mot_de_passe } = req.body;
    const FIND_USER_QUERY = 'SELECT id FROM User WHERE email = ? AND mot_de_passe = ?';
    db.query(FIND_USER_QUERY, [email, mot_de_passe], (err, results) => {
        if (err) {
            console.error('Erreur lors de la recherche de l\'utilisateur dans la base de données:', err);
            res.status(500).send("Erreur lors de la connexion de l'utilisateur");
        } else if (results.length > 0) {
            const userId = results[0].id;
            res.status(200).json({ userId }); // Retourner l'ID de l'utilisateur connecté
        } else {
            res.status(401).send("Email ou mot de passe incorrect");
        }
    });
});

app.get('/api/user', (req, res) => {
    const userId = req.query.userId;

    const FIND_USER_QUERY = 'SELECT * FROM User WHERE id = ?';
    db.query(FIND_USER_QUERY, [userId], (err, results) => {
        if (err) {
            console.error('Erreur lors de la recherche de l\'utilisateur dans la base de données:', err);
            res.status(500).send("Erreur lors de la récupération des informations de l'utilisateur");
        } else if (results.length > 0) {
            const user = results[0];
            res.status(200).json(user); // Renvoyer les informations de l'utilisateur au format JSON
        } else {
            res.status(404).send("Utilisateur non trouvé");
        }
    });
});



app.listen(port, () => {
    console.log(`Serveur Express écoutant sur le port ${port}`);
});

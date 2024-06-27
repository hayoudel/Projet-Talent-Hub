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

app.post('/api/createvote', (req, res) => {
    const { userId, title, selectedOption, duration, description, candidates } = req.body;
  
    const sql = `
      INSERT INTO CreateVote (userId, title, selectedOption, duration, description, candidates)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
  
    const candidatesJson = JSON.stringify(candidates);
  
    db.query(sql, [userId, title, selectedOption, duration, description, candidatesJson], (err, result) => {
      if (err) {
        console.error('Error inserting vote:', err);
        return res.status(500).json({ error: 'Failed to create vote' });
      }
  
      res.status(201).json({ message: 'Vote created successfully' });
    });
  });

  app.get('/api/votes', (req, res) => {
    const userId = req.query.userId;

    const FIND_VOTES_QUERY = 'SELECT * FROM CreateVote WHERE userId = ?';
    db.query(FIND_VOTES_QUERY, [userId], (err, results) => {
        if (err) {
            console.error('Error fetching votes:', err);
            res.status(500).json({ error: 'Failed to fetch votes' });
        } else {
            res.status(200).json({ votes: results });
        }
    });
});
app.post('/api/vote/:id', (req, res) => {
    const voteId = req.params.id;
    const { userId, candidate } = req.body;
  
    // Exemple de validation basique
    if (!userId || !candidate) {
      return res.status(400).json({ error: 'Missing userId or candidate' });
    }
  
    // Exemple de traitement
    try {
      // Votre logique de traitement du vote ici
  
      // Exemple de réponse réussie
      res.status(200).json({ message: 'Vote successful' });
    } catch (error) {
      console.error('Error voting:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

app.listen(port, () => {
    console.log(`Serveur Express écoutant sur le port ${port}`);
});

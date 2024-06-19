const express = require('express');
const router = express.Router();
const db = require('../../db'); // Assurez-vous que la configuration de la connexion à la base de données est exportée depuis un fichier db.js

router.post('/connexion', (req, res) => {
    const { username, password } = req.body;

    const sqlInsert = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(sqlInsert, [username, password], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).send(err);
        }
        res.status(200).send('User registered successfully');
    });
});

module.exports = router;

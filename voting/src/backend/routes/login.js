const express = require('express');
const router = express.Router();
const db = require('../../db'); // Assurez-vous que la configuration de la connexion à la base de données est exportée depuis un fichier db.js

router.post('/inscription', (req, res) => {
    const { username, password } = req.body;

    const sqlSelect = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(sqlSelect, [username, password], (err, result) => {
        if (err) {
            console.error('Error fetching user:', err);
            return res.status(500).send(err);
        }
        if (result.length > 0) {
            res.status(200).send('Login successful');
        } else {
            res.status(401).send('Invalid credentials');
        }
    });
});

module.exports = router;

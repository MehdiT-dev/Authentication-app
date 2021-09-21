const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

require('./models/dbConfig');

// app.get('', (req, res) => {

// });

app.listen(PORT, () => {
    console.log(`Server started and listening on port : ${PORT}`);
});

// Connexion avec BDD
// Salage MDP
// Stockage MDP
// Vérification MDP pour connexion
// Statut Connecté / Déconnecté
// Token pour garder session active
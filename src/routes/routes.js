const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

// Rota inicial
router.get('/', (req, res) => {
  res.json({ message: 'API de Games - Bem-vindo!' });
});

// Rotas de games
router.post('/games', gameController.createGame);           // Criar
router.get('/games', gameController.getAllGames);           // Listar todos
router.get('/games/:id', gameController.getGameById);       // Buscar por ID
router.put('/games/:id', gameController.updateGame);        // Atualizar
router.delete('/games/:id', gameController.deleteGame);     // Deletar

module.exports = router;
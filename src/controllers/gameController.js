const Game = require('../models/game');

// Criar um novo game
exports.createGame = async (req, res) => {
  try {
    const game = new Game(req.body);
    await game.save();
    res.status(201).json(game);
  } catch (error) {
    res.status(400).json({ 
      message: 'Erro ao criar game', 
      error: error.message 
    });
  }
};

// Listar todos os games
exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ 
      message: 'Erro ao buscar games', 
      error: error.message 
    });
  }
};

// Buscar game por ID
exports.getGameById = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return res.status(404).json({ message: 'Game não encontrado' });
    }
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ 
      message: 'Erro ao buscar game', 
      error: error.message 
    });
  }
};

// Atualizar um game
exports.updateGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    if (!game) {
      return res.status(404).json({ message: 'Game não encontrado' });
    }
    res.status(200).json(game);
  } catch (error) {
    res.status(400).json({ 
      message: 'Erro ao atualizar game', 
      error: error.message 
    });
  }
};

// Deletar um game
exports.deleteGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);
    if (!game) {
      return res.status(404).json({ message: 'Game não encontrado' });
    }
    res.status(200).json({ message: 'Game deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ 
      message: 'Erro ao deletar game', 
      error: error.message 
    });
  }
};
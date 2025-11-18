const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  genero: {
    type: String,
    required: true
  },
  plataforma: {
    type: String,
    required: true
  },
  lancamento: {
    type: Number,
    required: true
  }
}, {
  timestamps: true // Adiciona createdAt e updatedAt automaticamente
});

module.exports = mongoose.model('Game', gameSchema);
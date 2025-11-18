const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');

const app = express();

// Middlewares globais
app.use(cors()); // Habilita CORS
app.use(express.json()); // Parse JSON no body

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Erro interno do servidor', 
    error: err.message 
  });
});

// Rotas
app.use('/', routes);

// Middleware de log (opcional)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  next();
});

module.exports = app;
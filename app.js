const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const twig = require('twig');
const sistemaController = require('./controllers/sistema');

app.use(express.static('public'));

// Configurar el motor de plantillas Twig
app.set('views', './views');
app.set('view engine', 'twig');

// Datos simulados (en una aplicación real, estos datos vendrían de una base de datos)
// Ruta principal
app.get('/', sistemaController.index);
app.get('/login', sistemaController.login);
app.get('/donar', sistemaController.donar);
app.get('/registro', sistemaController.registro);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

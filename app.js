const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const twig = require('twig');
const estudiantesController = require('./controllers/estudiantes');

app.use(express.static('public'));

// Configurar el motor de plantillas Twig
app.set('views', './views');
app.set('view engine', 'twig');

// Datos simulados (en una aplicación real, estos datos vendrían de una base de datos)
// Ruta principal
app.get('/', estudiantesController.list);
app.get('/login', estudiantesController.login);
app.get('/donar', estudiantesController.donar);
app.get('/registro', estudiantesController.registro);
// Ruta para mostrar calificaciones de un estudiante en un curso específico
app.get('/calificaciones/:estudianteId', estudiantesController.getCalificaciones);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

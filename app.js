const express = require('express');
const twig = require('twig');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const miPassport = require('./miPassport');
const sistemaController = require('./controllers/sistema');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('secret'));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));

// Configuración passport
app.use(miPassport.initialize());
app.use(miPassport.session());

// Agrega una ruta para la vista del administrador
app.get('/admin', (req, res) => {
  res.render('admin.twig'); // Renderiza la vista del administrador
});

// Agrega una ruta para la vista del coordinador
app.get('/coordi', (req, res) => {
  res.render('coordi.twig'); // Renderiza la vista del coordinador
});

// Agrega una nueva ruta para la vista del perfil del coordinador
app.get('/coordi/perfil', (req, res) => {
  res.render('coordi_perfil.twig'); // Renderiza la vista del perfil del coordinador
});

// Agrega una nueva ruta para la vista del perfil del coordinador
app.get('/coordi/cortes', (req, res) => {
  res.render('coordi_cortes.twig'); // Renderiza la vista del perfil del coordinador
});

// Agrega una ruta para la vista del donador
app.get('/donador', (req, res) => {
  res.render('donador.twig'); // Renderiza la vista del donador
});

// Configurar el motor de plantillas Twig
app.set('views', './views');
app.set('view engine', 'twig');

// Ruta principal
app.get('/', sistemaController.index);
app.get('/login', sistemaController.login);
app.post('/login', miPassport.authenticate('local', {
  successRedirect: '/donar',
  failureRedirect: '/login'
}));
app.post('/logout', (req, res, next) => {
  res.clearCookie('connect.sid');
  req.logout((err) => {
    if (err) return next(err);

    req.session.destroy((err) => {
      res.redirect('/');
    });
  });
});
app.get('/donar', (req, res, next) => {
  if (req.isAuthenticated()) return next();

  res.redirect('/login');
}, sistemaController.donar);
app.get('/registro', sistemaController.registro);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
    
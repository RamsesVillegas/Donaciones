const express = require('express');
const twig = require('twig');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const miPassport = require('./miPassport');
const sistemaController = require('./controllers/sistema');
const donadorController = require('./controllers/donador');

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
app.get('/login-google', miPassport.authenticate('google', {
    scope: [ 'email', 'profile'],
    successRedirect: '/donar',
    failureRedirect: '/registro'
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

// Rutas coordinador
const coordinadorRouter = require('./routes/coordinador');
app.use('/coordi', coordinadorRouter);

// Rutas administrador
const administradorRouter = require('./routes/administrador');
app.use('/admin', administradorRouter);

// Rutas donador
app.get('/donador', donadorController.perfil);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

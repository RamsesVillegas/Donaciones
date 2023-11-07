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
//app.use(miPassport.initialize());
//app.use(miPassport.session());

// Agrega una ruta para la vista del administrador
app.get('/admin', (req, res) => {
  res.render('admin.twig'); // Renderiza la vista del administrador
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
  // if (req.isAuthenticated()) return next();

  //res.redirect('/donar');
  next();
}, sistemaController.donar);
app.get('/registro', sistemaController.registro);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
    
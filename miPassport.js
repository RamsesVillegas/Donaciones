const passport = require('passport');
const PassportLocal = require('passport-local').Strategy;

passport.use(new PassportLocal((username, password, done) => {
    fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            email: username,
            password: password
        })
    })
    .then(response => response.json())
    .then(usuario => {
        if (usuario.id && usuario.nombre) {
            return done(null, usuario);
        }
        else {
            return done(null, false);
        }
    });
}));

// Proceso de serialización
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Proceso de deserialización
passport.deserializeUser((id, done) => {
    // TODO: buscar los datos del usuario en la DB
    let user = { id: 1, name: 'Jonathan' };
    done(null, user);
});

module.exports = passport;
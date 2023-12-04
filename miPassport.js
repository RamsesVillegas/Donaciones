const passport = require('passport');
const PassportLocal = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require('dotenv').config();

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

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:3000/login-google',
        passReqToCallback: false
    }, (request, accessToken, refreshToken, profile, done) => {
        fetch('http://localhost:3001/login/google', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                email: profile._json.email
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
    })
);

// Proceso de serialización
passport.serializeUser((user, done) => {
    done(null, user);
});

// Proceso de deserialización
passport.deserializeUser((user, done) => {
    done(null, user);
});

module.exports = passport;
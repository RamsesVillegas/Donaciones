const donaciones = (req, res) => {
    fetch('http://localhost:3001/donaciones')
    .then(response => response.json())
    .then(donaciones => {
        res.render('coordi', { donaciones });
    });
}

const perfil = (req, res) => {
    fetch('http://localhost:3001/usuario/coordi/' + req.user.id)
    .then(response => response.json())
    .then(coordinador => {
        res.render('coordi_perfil', { coordinador });
    });
}

const cortes = (req, res) => {
    fetch('http://localhost:3001/cortes')
    .then(response => response.json())
    .then(cortes => {
        res.render('coordi_cortes', { cortes });
    });
}

module.exports.donaciones = donaciones;
module.exports.perfil = perfil;
module.exports.cortes = cortes;
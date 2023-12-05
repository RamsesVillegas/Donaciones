const donaciones = (req, res) => {
    fetch('http://localhost:3001/donaciones')
    .then(response => response.json())
    .then(donaciones => {
        res.render('coordi', { donaciones });
    });
}

const perfil = (req, res) => {
    res.render('coordi_perfil');
}

const cortes = (req, res) => {
    res.render('coordi_cortes');
}

module.exports.donaciones = donaciones;
module.exports.perfil = perfil;
module.exports.cortes = cortes;
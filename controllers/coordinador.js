const donaciones = (req, res) => {
    res.render('coordi');
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
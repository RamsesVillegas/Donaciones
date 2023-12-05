const donaciones = (req, res) => {
    res.render('admin');
}

const perfil = (req, res) => {
    res.render('admin_perfil');
}

const cortes = (req, res) => {
    res.render('admin_cortes');
}

const usuarios = (req, res) => {
    res.render('admin_usuarios');
}

module.exports.donaciones = donaciones;
module.exports.perfil = perfil;
module.exports.cortes = cortes;
module.exports.usuarios = usuarios;
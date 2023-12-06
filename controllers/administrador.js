const donaciones = (req, res) => {
    fetch('http://localhost:3001/donacionesAdmin')
    .then(response => response.json())
    .then(donaciones => {
        res.render('admin', { donaciones });
    });
}

const perfil = (req, res) => {
    fetch('http://localhost:3001/usuario/admin/' + req.user.id)
    .then(response => response.json())
    .then(administrador => {
        res.render('admin_perfil', { administrador });
    });
}

const cortes = (req, res) => {
    fetch('http://localhost:3001/CortesAdmin')
    .then(response => response.json())
    .then(cortes => {
        res.render('admin_cortes', { cortes });
    });
}

const usuarios = (req, res) => {
    res.render('admin_usuarios');
}

module.exports.donaciones = donaciones;
module.exports.perfil = perfil;
module.exports.cortes = cortes;
module.exports.usuarios = usuarios;
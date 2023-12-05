

const index = (req, res) => {
  res.render('index');
};

const login = (req, res) => {
  res.render('login');
};

const donar = (req, res) => {
  res.render('donar');
};

const registro = (req, res) => {
  res.render('registro');
};

const redireccionar = (req, res) => {
  switch(req.user.rol) {
    // Donadores
    case 1:
      res.redirect('/donar');
      break;
    // Coordinadores
    case 2:
      res.redirect('/coordi');
      break;
    // Administradores
    case 3:
      res.redirect('/admin');
      break;
  }
}

module.exports.index = index;
module.exports.donar = donar;
module.exports.login = login;
module.exports.registro = registro;
module.exports.redireccionar = redireccionar;
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

module.exports.index = index;
module.exports.donar = donar;
module.exports.login = login;
module.exports.registro = registro;
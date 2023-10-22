const {cursos,estudiantes} = require('../models/estudiantes');
const list = (req,res) =>{
    res.render('index', { cursos, estudiantes});
};

const login = (req,res) =>{
  res.render('login', {});
};

const donar = (req,res) =>{
  res.render('donar', {});
};

const registro = (req,res) =>{
  res.render('registro', {});
};

const getCalificaciones = (req, res) => {
    const estudianteId = parseInt(req.params.estudianteId);
  
    const estudiante = estudiantes.find((est) => est.id === estudianteId);
    
  
    if (!estudiante) {
      return res.status(404).send('Estudiante o curso no encontrado');
    }
  
    
    res.render('cursos',{estudiante});
  }

module.exports.list = list;
module.exports.donar = donar;
module.exports.login = login;
module.exports.registro = registro;
module.exports.getCalificaciones = getCalificaciones;
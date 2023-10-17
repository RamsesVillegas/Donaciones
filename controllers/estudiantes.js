const {cursos,estudiantes} = require('../models/estudiantes');
const list = (req,res) =>{
    res.render('index', { cursos, estudiantes });
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
module.exports.getCalificaciones = getCalificaciones;
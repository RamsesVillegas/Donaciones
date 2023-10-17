const cursos = [
    { id: 1, nombre: 'Matemáticas' },
    { id: 2, nombre: 'Historia' },
  ];
  
  const estudiantes = [
    { id: 1,
      nombre: 'Juan',
      calificaciones: [
          { 
              curso: cursos[0],
              valor: 90 
          },
          { 
              curso: cursos[1],
              valor: 85 
          },
      ],
    },
   
    { id: 2,
      nombre: 'María', 
      calificaciones: [
          { 
              curso: cursos[0],
              valor: 95 
          },
          { 
              curso: cursos[1],
              valor: 88 
          },
      ],
    }
   
  ];

  module.exports.estudiantes = estudiantes;
  module.exports.cursos = cursos;
  
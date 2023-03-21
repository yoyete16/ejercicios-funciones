function clasificacion_por_calificacion(calificacion) {
    if (calificacion >= 90) {
      return "A";
    } else if (calificacion >= 80 && calificacion <= 89) {
      return "B";
    } else if (calificacion >= 70 && calificacion <= 79) {
      return "C";
    } else if (calificacion >= 60 && calificacion <= 69) {
      return "D";
    } else {
      return "F";
    }
  }

  let B = clasificacion_por_calificacion(67);
  console.log("es " + B  ); 
let estudiantes = [
  {
    nombre: "Luis",
    semestre: 5,
    nota: 14,
  },
  { nombre: "Daniela", semestre: 5, nota: 17 },
];

let nombresDeAprobados = () => {
  let aprobados = [];
  estudiantes.forEach((est) => {
    if (est.nota >= 10) aprobados.push(est.nombre);
  });
  return aprobados;
};

let salida = document.getElementById("salida");
salida.innerHTML = "Resultados";
salida.innerHTML += `<br> Estudiantes aprobados:`;
salida.innerHTML += "<br>" + JSON.stringify(nombresDeAprobados(estudiantes));

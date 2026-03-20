function boletimGeral() {
   let resultados = [];

  atletas.forEach((atleta) => {
    let notasOrdenadas = [...atleta.notas].sort((a, b) => a - b);

    notasOrdenadas.shift();
    notasOrdenadas.pop();

    let soma = notasOrdenadas.reduce((acc, nota) => acc + nota, 0);

    let media = soma / notasOrdenadas.length;

    resultados.push({nome: atleta.nome, notas: atleta.notas.sort((a, b) => a - b), media: media.toFixed(2) });
  });
  return resultados;
}

let atletas = [
    {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];
console.log(boletimGeral());
 
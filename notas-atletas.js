function boletimGeral() {
   let resultados = [];

  atletas.forEach((atleta) => {
    let notasComp = [...atleta.notas].sort((a, b) => a - b);

    notasComp = notasComp.slice(1, 4);

    let soma = notasComp.reduce((acc, nota) => acc + nota, 0);

    let media = soma / notasComp.length;

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
 
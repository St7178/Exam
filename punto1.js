const matriz = 
[[2,3,5,6],
[3,5,3,6],
[3,6,4,3],
[7,8,6,5]];

function mayor(matriz) {
  let numeroMayor = matriz[0][0];
  for (let fila = 0; fila < 4; fila++) {
    for (let columna = 0; columna < 4; columna++) {
      if (matriz[fila][columna] > numeroMayor) {
        numeroMayor = matriz[fila][columna];
      }
    }
  }
  return numeroMayor;
}

console.log(mayor(matriz));
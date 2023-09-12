const matriz1 = 
[[2, 3, 1],
[1, 3, 6],
[4, 2,]];

const matriz2 = 
[[8, 7, 4],
[4, 3, 1],
[1, 8, 2]];

function matrizCuadrada(matriz) {
    const filas = matriz.length;
    for (let i = 0; i < filas; i++) {
      if (matriz[i].length !== filas) {
        return false;
      }
    }
    return true;
  }

  console.log(matrizCuadrada(matriz1));
  console.log(matrizCuadrada(matriz2));
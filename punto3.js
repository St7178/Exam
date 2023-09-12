const matriz = [
    [2, 3, 5, 6],
    [3, 5, 3, 6, 6, 4],
    [3, 6, 4, 3],
    [7, 8, 6, 5, 7, 4, 2]
  ];
  
  function filaLarga(matriz) {
    let filaLarga = matriz[0];
    for (let i = 1; i < matriz.length; i++) {
      if (matriz[i].length > filaLarga.length) {
        filaLarga = matriz[i];
      }
    }
    return filaLarga;
  }
  
  const filaLargaTotal = filaLarga(matriz);
  console.log(filaLargaTotal);
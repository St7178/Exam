let matriz1 = [
    [1, 4, 3],
    [4, 8, 9],
    [2, 7, 5, 8],
]

function obtenerCantidad(item, items){
    let cont = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items[i].length; j++) {
            if (item === items[i][j]) {
                cont += 1;
            }
        }
    }
    return cont;
}

console.log(obtenerCantidad(7, matriz1));
const arreglo1 = [2,3,5,6]
const arreglo2 = [3,4,2,5]
const sumaArreglos = sumaDeArreglos(arreglo1, arreglo2);
const total = []

function sumaDeArreglos(arreglo1, arreglo2) {
    for (let i = 0; i < arreglo1.length; i++) {
        total.push(arreglo1[i] + arreglo2[i])
    }
    return total;
}
console.log(total)
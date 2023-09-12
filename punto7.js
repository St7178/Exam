const array1 = 
[2,3,5,6,3,4,8,9,7]

function filtrarNumeros(array1) {
    return array1.filter(function(numero) {
        return numero >= 6;
    });
}

const total = filtrarNumeros(array1);

console.log(total)
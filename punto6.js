const numeroInicial = 10;

function cuentaRegresiva(numeroInicial) {
    const total = [];

    for (let i = numeroInicial; i >= 0; i--) {
        total.push(i);
    }
    return total;
}
const total = cuentaRegresiva(numeroInicial);
console.log(total);
function cuentaRegresiva(numeroInicial){
    let cuenta = []
    for(i = numeroInicial; i > 0; i--){
        cuenta.push(i)
    }
    return cuenta;
}

const array = 20

console.log(array)
console.log(cuentaRegresiva(array))
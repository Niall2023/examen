function sumaArreglos(arreglo1, arreglo2){
    let nuevoArreglo = []
    for(let i = 0; i<arreglo1.length; i++){
        nuevoArreglo.push(arreglo1[i] + arreglo2[i])
    }
    return nuevoArreglo
}

const arreglo1 = [2, 3, 4, 5]
const arreglo2 = [5, 6, 7, 8]


console.log(arreglo1)
console.log(arreglo2)
console.log(sumaArreglos(arreglo1, arreglo2))


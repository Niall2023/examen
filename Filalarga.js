function filaLarga(matriz){
    let numeros = matriz[0]
    for(let i = 0; i<matriz.length; i++){
        if(matriz[i].length > numeros.length){
            return matriz[i]
        }
    }
}

const matriz1 = [
    [2, 3, 4, 5, 6],
    [3, 4, 5, 6],
    [4, 5, 6, 7, 8, 9],
    [5, 6, 7, 8]
]

console.log(matriz1)
console.log(filaLarga(matriz1))
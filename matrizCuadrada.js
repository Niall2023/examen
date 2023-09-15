function matrizCuadrada(matriz){
    let Matriz1 = matriz.length
    for(let i = 0; i<Matriz1; i++){
        if(matriz[i].length !== Matriz1){
            return false
        }
    }
    return true
}

const matriz1 = [
    [2, 3, 4, 5, 6],
    [3, 4, 5, 6],
    [4, 5, 6, 7],
    [5, 6, 7, 8 , 9]
]

const matriz2 = [
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [4, 5, 6, 7],
    [5, 6, 7, 8]
]

console.log(matriz1)
console.log(matriz2)
console.log(matrizCuadrada(matriz1))//false
console.log(matrizCuadrada(matriz2))//true
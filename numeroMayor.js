const matriz1 = [
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [4, 5, 6, 7],
    [5, 6, 7, 1]
]
function numeroMayor(matriz){
    let numero = matriz[0][0]
    for(let i = 0; i<matriz.length; i++){
        for(let j = 0; j<matriz.length; j++){
            if(matriz[i][j] > numero){
                numero = matriz[i][j]
            }
        }
    }
    return numero
}
 
const resultado = numeroMayor(matriz1)
console.log(resultado)

/*
 * Enunciado: Dado un array de enteros ordenado y sin repetidos, 
 * crea una función que calcule y retorne todos los que faltan entre
 * el mayor y el menor.
 * - Lanza un error si el array de entrada no es correcto.
 */

console.log('hola')
const arr = [2, 4, 7, 9, 14, 23]
const lastArr = []
const lastNumber = arr[arr.length - 1]
let currentNumber = arr[0]


while (currentNumber <= lastNumber) {
    if (!arr.some((value) => value === currentNumber)) {
        lastArr.push(currentNumber)
    }
    currentNumber++
}
console.log(lastArr)

/*
 * Reto #0
 * EL FAMOSO "FIZZ BUZZ"
 * Fecha publicación enunciado: 27/12/21
 * Fecha publicación resolución: 03/01/22
 * Dificultad: FÁCIL
 * Enunciado: Escribe un programa que muestre por consola (con un print) los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

let initialValue = 1
const lastValue = 100
const multi3 = 'fizz'
const multi5 = 'buzz'
const multi3And5 = 'fizzbuzz'


while(initialValue <= lastValue) {
    if (initialValue % 3 == 0 && initialValue % 5 == 0) {
        console.log(multi3And5)
    } else if (initialValue % 3 == 0) {
        console.log(multi3)
    }
    else if (initialValue % 5 == 0) {
        console.log(multi5)
    } else {
        console.log(initialValue)
    }
    initialValue++
}
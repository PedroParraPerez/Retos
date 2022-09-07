/*
 * Reto #11
 * ELIMINANDO CARACTERES
 * Fecha publicación enunciado: 14/03/22
 * Fecha publicación resolución: 21/03/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba dos cadenas como parámetro (str1, str2) e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const adios = 'adios'
const hola = 'hola'

const deleteChract = (str1, str2) => {
    arr1 = str1.split('')
    arr2 = str2.split('')
    const finaltarr = arr1.filter((value, index) =>
        !arr2.includes(value)
    )
    return finaltarr
}
const finalReturn = (str1, str2) => {
    const finalObject = {
        0: deleteChract(str1, str2),
        1: deleteChract(str2, str1)
    }
    return finalObject
}

console.log(finalReturn(hola, adios))
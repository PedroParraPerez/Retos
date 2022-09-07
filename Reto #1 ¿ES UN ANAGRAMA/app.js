/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const word = 'holaa' // TODO: CON ESTOS STRINGS ME DA QUE ES UN ANAGRAMA CUANDO NO LO ES
const drow = 'holla'
const isNotAnagrama = 'NO ES UN ANAGRAMA'
const isAnagrama = 'ES UN ANAGRAMA'


const transformString = (word) => word.toLowerCase().replace(/ /g, '')

const separate = (word) => word.split('')

const iterateArray = (arr, rra) => {
    let aux = 0;
    while (aux <= arr.length - 1) {
        if (!rra.some((rraValue) => rraValue === arr[aux])) { 
           return true
        }
            aux++
        }
        return false
    }
    

const isAnagramaa = (word, drow) => {
    const arr = separate(transformString(word))   // ['h', 'o', 'l', 'a']
    const rra = separate(transformString(drow))   // ['a', 'l', 'o', 'h']
    
    const arrLength = arr.length
    const rraLength = rra.length

    if (arrLength !== rraLength) return isNotAnagrama
    if (iterateArray(arr, rra)) return isNotAnagrama
    return isAnagrama
}

console.log(isAnagramaa(word, drow))


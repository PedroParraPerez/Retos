/*
 * Reto #10
 * EXPRESIONES EQUILIBRADAS
 * Fecha publicación enunciado: 07/03/22
 * Fecha publicación resolución: 14/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que comprueba si los paréntesis, llaves y corchetes de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios. No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */
const balanced = '{ [ a * ( c + d ) ] - 5 }' // TODO: Terminar, no esta bien
const noBalanced = '{ a * ( c + d ) ] - 5 }'

const expresiones = {
    parentesis1: '(',
    parentesis2: ')',
    llaves1: '{',
    llaves2: '}',
    corchetes1: '[',
    corchetes2: ']',
}

const balancedExpresio = (expresion) => {
    const arr = expresion.replace(/ /g, '').split('')
    const arrfilter = arr.filter((value) => value === expresiones.parentesis1 || value === expresiones.parentesis2 || value === expresiones.llaves1 || value === expresiones.llaves2 || value === expresiones.corchetes1 || value === expresiones.corchetes2)
    const arrLength = arrfilter.length
    const reverArrLength = reverArrFilter.length
    const checkValuesArrays = arrfilter.every((v, i) => v === reverArrFilter[i])
    if (reverArrLength == arrLength && checkValuesArrays) return true
    return false
}

console.log(balancedExpresio(noBalanced))
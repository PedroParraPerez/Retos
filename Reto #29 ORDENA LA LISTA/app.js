/*
 * Reto #29
 * ORDENA LA LISTA
 * Fecha publicación enunciado: 18/07/22
 * Fecha publicación resolución: 26/07/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro adicional
 *   "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const LIST = [22, 1, 22, 15, 3, 6, 3, 9, 99, 0, 34, 95, 32]

const sorting = (list, mode) => {
    if (mode === 'ASC') {
        return list.sort((a, b) => a - b)
    }
    return list.sort((a, b) => b - a)
}
// console.log(sorting(LIST, 'DEC'))

const sortingNative = (list, mode) => {
    const length = list.length
    if (mode === 'ASC') {
        for (let i = 0; i < length - 1; i++) {
            for (let i = 0; i < length - 1; i++) {
                if (list[i] > list[i + 1]) {
                    let aux = list[i]
                    list[i] = list[i + 1]
                    list[i + 1] = aux
                }
            }
        }
        return list
    }for (let i = 0; i < length - 1; i++) {
        for (let i = 0; i < length - 1; i++) {
            if (list[i] < list[i + 1]) {
                let aux = list[i]
                list[i] = list[i + 1]
                list[i + 1] = aux
            }
        }
    }
    return list
}
console.log(sortingNative(LIST, 'DEC'))

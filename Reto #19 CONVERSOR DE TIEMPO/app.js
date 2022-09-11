
/*
 * Reto #19
 * CONVERSOR TIEMPO
 * Fecha publicación enunciado: 09/05/22
 * Fecha publicación resolución: 16/05/22
 * Dificultad: FACIL
 *
 * Enunciado: Crea una función que reciba días, horas, minutos y segundos (como enteros) y retorne su resultado en milisegundos.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */


const TIME = {
    DAYS: 0,
    HOURS: 1,
    MINUTES: 0,
    SECONDS: 0,
    MILISECONDS: 0
}

const miliSeconds = (time) => {
    return time.MILISECONDS = time.SECONDS*1000 + time.MINUTES*1000*60 + time.HOURS*1000*60*60 + time.DAYS * 1000*60*60*24
}
console.log(miliSeconds(TIME))
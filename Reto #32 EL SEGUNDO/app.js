/*
 * Reto #32
 * EL SEGUNDO
 * Fecha publicación enunciado: 08/08/22
 * Fecha publicación resolución: 15/08/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Dado un listado de números, encuentra el SEGUNDO más grande.
 *
 * Información adicional:
 * - Usa el canal de nuestro Discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Tienes toda la información sobre los retos semanales en https://retosdeprogramacion.com/semanales2022.
 *
 */
const ARR_NUMBERS = [1, 2, 3, 5, 43, 2, 57, 8, 9, 56, 34, 2];
const getSecondBigger = (arrNumbers) => {
    let aux = {
        first: 0,
        second: 0,
    };
    arrNumbers.forEach((number) => {
        if (number < aux.first && number < aux.second) return;
        if (number > aux.first) {
            aux.second = aux.first;
            aux.first = number;
        }
        if (number < aux.first && number > aux.second) aux.second = number;
    });
    return aux.second;
};
getSecondBigger(ARR_NUMBERS);

/*
 * Reto #21
 * CALCULADORA .TXT
 * Fecha publicación enunciado: 23/05/22
 * Fecha publicación resolución: 01/06/22
 * Dificultad: MEDIA
 *
 * Enunciado: Lee el fichero "Challenge21.txt" incluido en el proyecto, calcula su resultado e imprímelo.
 * - El .txt se corresponde con las entradas de una calculadora.
 * - Cada línea tendrá un número o una operación representada por un símbolo (alternando ambos).
 * - Soporta números enteros y decimales.
 * - Soporta las operaciones suma "+", resta "-", multiplicación "*" y división "/".
 * - El resultado se muestra al finalizar la lectura de la última línea (si el .txt es correcto).
 * - Si el formato del .txt no es correcto, se indicará que no se han podido resolver las operaciones.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */
//  TODO: dont finish yet

const SYMBOLS = {
    SUM: '+',
    SUBSTRACT: '-',
    MULTIPLICATION: '*',
    SPLIT: '/',
}

const readTextFile = (file) => {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                return rawFile.responseText;

            }
        }
    }
    rawFile.send(null);
    return rawFile.responseText
}
    ;
const file = `${readTextFile('./Callenge21.txt')}`

const takingTheArray = (file) => {
    const arrFile = file.split('')
    const operationsAndNumbers = []
    arrFile.forEach(element => {
        if (element !== '\r' && element !== '\n') operationsAndNumbers.push(element)
    });
    return operationsAndNumbers
}
const paramsForOperation = takingTheArray(file)

const operationNumbers = (params) => {
    const result = params.reducer((accumulator, currentValue) => { }, 0)

}


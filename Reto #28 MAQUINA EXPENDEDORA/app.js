/*
 * Reto #28
 * MÁQUINA EXPENDEDORA
 * Fecha publicación enunciado: 11/07/22
 * Fecha publicación resolución: 18/07/22
 * Dificultad: MEDIA
 *
 * Enunciado: Simula el funcionamiento de una máquina expendedora creando una operación
 * que reciba dinero (array de monedas) y un número que indique la selección del producto.
 * - El programa retornará el nombre del producto y un array con el dinero de vuelta (con el menor
 *   número de monedas).
 * - Si el dinero es insuficiente o el número de producto no existe, deberá indicarse con un mensaje
 *   y retornar todas las monedas.
 * - Si no hay dinero de vuelta, el array se retornará vacío.
 * - Para que resulte más simple, trabajaremos en céntimos con monedas de 5, 10, 50, 100 y 200.
 * - Debemos controlar que las monedas enviadas estén dentro de las soportadas.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const COINS_ACEPTED = [5, 10, 50, 100, 200]
const MY_COINS = [5, 10, 25, 70, 50,50]
const PRODUCTS = [{ name: 'Cafe', cost: 85 }, { name: 'Agua', cost: 50 }, { name: 'Coca Cola', cost: 110 }]

const whatIWant = (product) => {
    const value = product.trim().toLowerCase()
    switch (value) {
        case 'cafe':
            return PRODUCTS[0];
        case 'agua':
            return PRODUCTS[1]
        case 'coca cola':
            return PRODUCTS[2]
        default:
            return false
    }
}
const howMuchMoneyIHave = (coins) => {
    return coins.reduce((a, b) => a + b)
}
const filterMyMoneyRejected = (coins) => {
    return coins.filter(coin => COINS_ACEPTED.some(coinsAcepted => coin === coinsAcepted))
}
const coinRejected = (coins) => {
    return coins.filter(coin => !COINS_ACEPTED.some(coinsAcepted => coin === coinsAcepted))
}
const payForProduct = (product, coins) => {
    if (product.cost > coins) return false
    return { product: product.name, coins: coins - product.cost }
}

const dispenserMachine = (myCoins, product) => {
    const myMoneyAcepted = howMuchMoneyIHave(filterMyMoneyRejected(myCoins))
    if (!whatIWant(product)) return 'No existe ese producto'
    const producWhatIWant = whatIWant(product)
    const coinsRejected = coinRejected(myCoins)
    if (!payForProduct(producWhatIWant, myMoneyAcepted)) return 'No tiene suficiente dinero'
    const {product: finalProduct , coins} = payForProduct(producWhatIWant, myMoneyAcepted)
    const coinsRefund = coinsRejected.reduce((a,b)=>a+b) + coins
    return `Aqui tiene su ${finalProduct} con sus monedas: ${coinsRefund}`
}
console.log(dispenserMachine(MY_COINS, 'COCA COLA'))


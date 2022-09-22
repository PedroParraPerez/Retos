/*
 * Reto #25
 * PIEDRA, PAPEL, TIJERA
 * Fecha publicación enunciado: 20/06/22
 * Fecha publicación resolución: 27/06/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que calcule quien gana más partidas al piedra, papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel) o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const options = ['R', 'P', 'S']

const finalResults = (match) => {
    const prob = match.length
    const option = Math.floor(Math.random() * prob)
    return match[option]
}
const whoWins = (P1, P2, player1, player2) => {
    if (P1 === P2) return 'Empate'
    if (P1 === 'R' && P2 === 'S') return player1
    if (P1 === 'R' && P2 === 'P') return player2
    if (P1 === 'S' && P2 === 'P') return player1
    return 'Nulo'

}

const match = (options) => {
    const match = []
    for (let firstPlayer of options) {
        for (let secondPlayer of options) {
            match.push({ player1: firstPlayer, player2: secondPlayer })
        }
    }
    const results = finalResults(match)

    const firstWhoWins = whoWins(results.player1, results.player2, 'Player 1', 'Player2')
    if (firstWhoWins !== 'Nulo') return firstWhoWins
    return whoWins(results.player2, results.player1, 'Player 2', 'Player 2')
}

const whoIsTheFinalWinner = (options) => {
    const matches = {
        P1: 0,
        P2: 0
    }
    for (let i = 0; i <= 2; i++) {
       if(match(options) == 'Player 1') matches.P1 += 1
       if(match(options) == 'Player 2') matches.P2 += 1
    }
    console.log({matches})
    if(matches.P1 === matches.P2) return 'Empate'
    if(matches.P1 > matches.P2) return ' Ha ganado Player 1'
    return 'Ha ganado Player 2'

}
console.log(whoIsTheFinalWinner(options))
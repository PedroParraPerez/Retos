/*
 * Reto #18
 * TRES EN RAYA
 * Fecha publicación enunciado: 02/05/22
 * Fecha publicación resolución: 09/05/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Crea una función que analice una matriz 3x3 compuesta por "X" y "O" y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta. O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta. Se podría representar con un vacío "", por ejemplo.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const matrix = [
    ['X', 'X', 'O'],
    ['O', 'X', 'O'],
    ['X', 'O', 'O'],
]

const rotateMatrixFunc = (matrix) => matrix[0].map((val, index) => matrix.map(row => row[index]).reverse())

const winnerRow = (matrix) => {
    const winner = []
    matrix.forEach(row => {
        if (row.every((val, i, arr) => val === arr[0])) winner.push(row[0])
    });
    if (winner.length > 1) return 'Nulo'
    if (winner[0] === 'X') return winner[0]
    if (winner[0] === 'O') return winner[0]
    return 'Empate'
}

const winnerColumn = (matrix) => {
    const rotateMatrix = rotateMatrixFunc(matrix)
    return winnerRow(rotateMatrix)
}

const winnerPrincipalDiagonal = (matrix) => {
    const matrixLength = matrix.length
    const winner = []
    let haveWinner = false
    for (let i = 0; i < matrixLength; i++) {
        winner.push(matrix[i][i])
    }
    if (winner.every((val, i, arr) => val === arr[0])) haveWinner = true
    if (haveWinner) {
        if (winner[0] === 'X') return 'X'
        if (winner[0] === 'O') return 'O'
    }
    return 'Empate'
}

const winnerSecondaryDiagonal = (matrix) => {
    const rotateMatrix = rotateMatrixFunc(matrix)
    return winnerPrincipalDiagonal(rotateMatrix)
}

const oneParticipantWin2TimesAtTheSameMatch = (match) => {
    const mathSorted = match.sort()
    const length = match.length
   for(let i = 0; i <length; i++){
    if(mathSorted[i] === mathSorted[i+1] && mathSorted[i] !== 'Empate'){
        return 'Nulo'
    }
   }
}

const respectTheTurn = (matrix) => {
    const matrixFlat = matrix.flat()
    const turn = {
        X: 0,
        O: 0,
    }
    matrixFlat.forEach(value=>{
        if(value==='X') turn.X++
        if(value==='O') turn.O++
    })
    if(turn.O === turn.X) return true
    if(turn.O-1 === turn.X) return true
    if(turn.O === turn.X-1) return true
    return false
}

const winner = (matrix) => {
    const match = [winnerRow(matrix), winnerColumn(matrix), winnerPrincipalDiagonal(matrix), winnerSecondaryDiagonal(matrix)]
    if(oneParticipantWin2TimesAtTheSameMatch(match) === 'Nulo') return 'Nulo'
    if(!respectTheTurn(matrix)) return 'Nulo'
    if (match.some(value => value === 'Nulo')) return 'Nulo'
    if (match.every((val) => val === 'Empate')) return 'Empate'
    if (match.some(value => value === 'X')) return 'X'
    if (match.some(value => value === 'O')) return 'O'
}

console.log(winner(matrix))
/*
 * Reto #33
 * CICLO SEXAGENARIO CHINO
 * Fecha publicación enunciado: 15/08/22
 * Fecha publicación resolución: 22/08/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un función, que dado un año, indique el elemento y animal correspondiente
 * en el ciclo sexagenario del zodíaco chino.
 * - Información: https://www.travelchinaguide.com/intro/astrology/60year-cycle.htm
 * - El ciclo sexagenario se corresponde con la combinación de los elementos madera,
 *   fuego, tierra, metal, agua y los animales rata, buey, tigre, conejo, dragón, serpiente,
 *   caballo, oveja, mono, gallo, perro, cerdo (en este orden).
 * - Cada elemento se repite dos años seguidos.
 * - El último ciclo sexagenario comenzó en 1984 (Madera Rata).
 *
 * Información adicional:
 * - Usa el canal de nuestro Discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Tienes toda la información sobre los retos semanales en https://retosdeprogramacion.com/semanales2022.
 *
 */
const ELEMENTS = {
    METAL: { value: 'metal', year: ['0', '1'] },
    WATER: { value: 'agua', year: ['2', '3'] },
    WOOD: { value: 'madera', year: ['4', '5'] },
    FIRE: { value: 'fuego', year: ['6', '7'] },
    LAND: { value: 'tierra', year: ['8', '9'] },
}

const ELEMENTAL_ARR = [ELEMENTS.WOOD, ELEMENTS.FIRE, ELEMENTS.LAND, ELEMENTS.METAL, ELEMENTS.WATER]
const ANIMALS = ["rata", "buey", "tigre", "conejo", "dragón", "serpiente", "caballo", "oveja", "mono", "gallo", "perro", "cerdo"]
const YEAR_REFERENCE = { year: 1924, animal: 'rata' }

const getElement = (lastNumber) => {
    console.log(lastNumber)
    if (ELEMENTS.METAL.year.includes(lastNumber)) return ELEMENTS.METAL.value
    if (ELEMENTS.LAND.year.includes(lastNumber)) return ELEMENTS.LAND.value
    if (ELEMENTS.WOOD.year.includes(lastNumber)) return ELEMENTS.WOOD.value
    if (ELEMENTS.WATER.year.includes(lastNumber)) return ELEMENTS.WATER.value
    if (ELEMENTS.FIRE.year.includes(lastNumber)) return ELEMENTS.FIRE.value
}

const chineseZodiac = (year) => {
    if (year < 604) {
        return "El ciclo sexagenario comenzó en el año 604"
    }
    const str = year.toString().split('');
    const elementOfYear = getElement(str.at(-1))

}

chineseZodiac(2002)
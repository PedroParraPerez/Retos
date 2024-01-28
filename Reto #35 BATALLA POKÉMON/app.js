/**
 * Reto #35
 * BATALLA POKÉMON
 * Fecha publicación enunciado: 29/08/22
 * Fecha publicación resolución: 06/09/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que calcule el daño de un ataque durante una batalla Pokémon.
 * - La fórmula será la siguiente: daño = 50 * (ataque / defensa) * efectividad
 * - Efectividad: x2 (súper efectivo), x1 (neutral), x0.5 (no es muy efectivo)
 * - Sólo hay 4 tipos de Pokémon: Agua, Fuego, Planta y Eléctrico (buscar su efectividad)
 * - El programa recibe los siguientes parámetros:
 *  - Tipo del Pokémon atacante.
 *  - Tipo del Pokémon defensor.
 *  - Ataque: Entre 1 y 100.
 *  - Defensa: Entre 1 y 100.
 *
 * Información adicional:
 * - Usa el canal de nuestro Discord (https://mouredev.com/discord) "🔁reto-semanal"
 *   para preguntas, dudas o prestar ayuda a la comunidad.
 * - Tienes toda la información sobre los retos semanales en
 *   https://retosdeprogramacion.com/semanales2022.
 *
 */

const EFFICIENCY = {
  STRONG: 2,
  NEUTRAL: 1,
  WEAK: 0.5,
};

const POKEMON_TYPES = {
  water: {
    TYPE: "water",
    STRONG: ["fire"],
    NEUTRAL: ["water"],
    WEAK: ["plant", "electric"],
  },
  fire: {
    TYPE: "fire",
    STRONG: ["plant"],
    NEUTRAL: ["plant", "electric"],
    WEAK: ["water"],
  },
  plant: {
    TYPE: "plant",
    STRONG: ["water", "electric"],
    NEUTRAL: ["plant"],
    WEAK: ["fire"],
  },
  electric: {
    TYPE: "electric",
    STRONG: ["water"],
    NEUTRAL: ["fire", "electric"],
    WEAK: ["plant"],
  },
};


const findPokemonType = (pokemonType) =>
  Object.values(POKEMON_TYPES).find((pkm) => pkm.TYPE === pokemonType);

const calculateEfficiency = (
  pokemonTypeAttack,
  pokemonTypeDefense
) => {

  const attackCharacteristics = findPokemonType(pokemonTypeAttack);
  if (!attackCharacteristics) return null;

  const attackCharacteristicsArray = Object.entries(
    attackCharacteristics
  ).filter((pkm) => Array.isArray(pkm[1]));
  if (!attackCharacteristicsArray?.length) return null

  const efficiencyStringResult = attackCharacteristicsArray.find(pkmCategory => {
    if (pkmCategory[1].includes(pokemonTypeDefense)) {
      return pkmCategory[1]
    }
  })
  if (!efficiencyStringResult[0]) return null

  return EFFICIENCY[efficiencyStringResult[0]]
};

const damage = (
  attack,
  defense,
  pokemonTypeAttack,
  pokemonTypeDefense
) => {
  if (!attack || !defense || !pokemonTypeAttack || !pokemonTypeDefense)
    return "Falta por introducir algún valor";
  const efficiency = calculateEfficiency(pokemonTypeAttack, pokemonTypeDefense);
  if (!efficiency) {
    return "Alguno de los tipos de pokemon especificados no es valido.";
  }
  return 50 * (attack / defense) * efficiency;
};

const finalResult = damage(12, 32, "electric", "plant");
console.log({ finalResult })
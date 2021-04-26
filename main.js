// Afficher plus
// intro_while.js
// 1 Ko
// - # Exo 1 Boucles WHILE
//     - ## Créez une variable classe avec un array
//     - ## A l'aide d'un prompt, choisissez le nombre max d'étudiants dans la classe
//     - ## A l'aide d'une boucle while, inserez des étudiants dans la classe tant que la classe n'est pas remplie
//     - ## Après avoir rempli la classe, affichez tous les etudiants
	
// let classe = [];
// let nombreMax = prompt('rentrez un nombre max');

// while (nombreMax.length != null) {
//  classe.push(nombreMax);
// }

// console.log(classe);

//exo1
let tableau = [];

let max = prompt("Choissisez un nombre max d'Ã©tudiant");

while (tableau.length != max) {
    tableau.push(prompt("rentrez un nom"))
}
console.log(tableau);
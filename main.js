// - ##  Ex 01
//     ## Créer un tableau de 9 prénoms 
//     ## Faire une boucle sur les prénoms précédé de Bonjour tant que 9 n'est pas atteint et les affiché dans la console
//     ## Astuce : let i = 0;
//     ## Astuce 2 : (i < 9)
    
// - ##  Exo 02
//     ## Créer un tableau de 6 fruits
//     ## Avec l'aide d'une boucle while vider le tableau.
//     ## Utilisez fruits.length
    
// - ##  Exo 03
//     ## Créer un tableau de 4 légumes du nom de 'panierLegumes'
//     ## Stocker la longueur du tableau dans une variable du nom de 'longeur'
//     # Vider le tableau panierLegumes pour mettre son contenu dans un second tableau du nom de 'caisseLegumes'

// - ##  Exo4
//     ##  Préparer une énigme, et faites une boucle WHILE qui va vérifier si l'utilisateur répond correctement à l'énigme via un prompt, tant qu'il se trompe, vous lui reposer la question. S'il a juste, faites une alerte qui le félicite

// - ##  Exo5
//     ##  Re faire l'exo 4 avec DO WHILE

// - ##  Exo6
//     ## Créer une variable avec l'année actuelle
//     ## Créer un programme qui génère une année de façon aléatoire entre 1970 et 2018. L’utilisateur doit donner le bon age en répondant à la question suivante
//     ## : “Si je suis née en 1988(année généré aléatoirement), quel age ai-je aujourd’hui ? ”
//     ## L’utilisateur a trois essais. S’il donne la bonne réponse, on sort et s’il arrive à trois essaies on sort également.
//     ## Finir avec un affichage.

// - ##  Exo7 
//     ## Demandez a l'utlisateur de remplir un panier de fruit jusqu'a en obtenir 8
//     ## Quand son panier est rempli montrez lui, puis demandez lui si il désire retirer un fruit
//     ## Si il met le nom d'un fruit alors le fruit est retiré, on lui montre son nouveau panier puis on lui repose la question, si il met autre chose que le nom d'un fruit alors on lui dit "Merci bon appetit"
//     ## Chaque fruit entré par l'utilisateur doit finir par etre ortographié avec une premiere lettre majuscule et le reste en minuscule 
//     ## Lui montrer son panier avec la première lettre en majuscule



blakfreeman
#8559

Alexis 🌵🥉 — 21/04/2021
@Coding School 18  let eleves = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "Loïc", "Mihai", "Oussama", "Tania", "William", "Alain"];
Mohammed 🌵 — 21/04/2021
Rien que pcq y a pas mon nom je vais pas copier ce que ta envoyé
Dorian 🌵⛩ — 21/04/2021
Ouille
Anthony 🌵 — 21/04/2021
t as vue !!!
Issam 🌵 — 21/04/2021
Aucun respect
Dorian 🌵⛩ — 21/04/2021
Il a mit ses préférés
Dorian 🌵⛩ — 21/04/2021
:skull:
c'est vendredi nn ?
Mihai 🌵 — 21/04/2021
Pas de présentiel demain
COMMENT CA C'EST DEMAIN
Issam 🌵 — 21/04/2021
C'est demain les gars
Tania 🌵 — 21/04/2021
les garspas dans exercices svp :sob:
Alexis 🌵🥉 — 21/04/2021
oui demain présentielle
Mohammed 🌵 — 21/04/2021
MDDRR Go supprimer tous les msg @Coding School 18
Issam 🌵 — 21/04/2021
Yassin 🌵🏆 — 21/04/2021
@Alexis 🌵🥉  tu as oublié tout les arabes comme par hasard
Mihai 🌵 — 21/04/2021
^ Il y a Oussama dedans
Mohammed 🌵 — 21/04/2021
Oussama c'est un arabe gentil
Farhad 🌵 🥈 — 21/04/2021
go copier coller wakatime si vous voulez pas tout taper
Mohammed 🌵 — 21/04/2021
Les gars arretez d'ecrire dans ce channel mdr
Yassin 🌵🏆 — 21/04/2021
je vote pr une annulation du contract d'Alex
Abderrahim | Cactus 🌵 — 21/04/2021
//exo1
let eleves = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "LoÃ¯c", "Mihai", "Oussama", "Tania", "William", "Alain"];

for (let i = 0; i < eleves.length; i++) {
    console.log("Bonjour " + eleves[i]);
}
Afficher plus
boucles_exo1_correction.js
1 Ko
-  # Exo 1 Boucles FOREACH
    ## - Creer une varaible de type array et inserez toutes les personnes de la classe
    ## - A l'aide d'une boucle foreach, dites bonjour + prenom à chaque personne du tableau

- # Exo 2 Boucle FOREACH
    - ## Créez un un array qui contient 5 éléments
Afficher plus
exo2_boucles-for.md
1 Ko
let eleves = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "Loïc", "Mihai", "Oussama", "Tania", "William", "Alain"];
Junior 🌵 — 21/04/2021
fini
Abderrahim | Cactus 🌵 — 21/04/2021
presque fini
loind de finir
Dorian 🌵⛩ — 21/04/2021
Ayuda me por favor senior de la Cactus (pas pour moi)
Abderrahim | Cactus 🌵 — 21/04/2021
私を助けて
ewa
Dorian 🌵⛩ — 21/04/2021
wwwwww
Abderrahim | Cactus 🌵 — 21/04/2021
//exo1
let eleves = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "LoÃ¯c", "Mihai", "Oussama", "Tania", "William", "Alain"];

eleves.forEach(e => {
    console.log("Bonjour " + e);
});
Afficher plus
boucles_exo2_correction.js
1 Ko
- ## Exo 1 
    ## Déclarer une variable qui se nomme 'multiplicateur' valant 5
    ## Utiliser une boucle for pour créer une table de multiplication allant jusqu'a 9 et apparaissant dans la console sous le format 5 x 1 = 5 etc.

- ## Exo 2
    ## La même chose sauf qu'on incrémente par deux
Afficher plus
exo3_boucles-for.md
2 Ko
fini
presque fini
loin de finir
תעזור לי אדון הקקטוסים
Mohammed 🌵 — 21/04/2021
wtf

Junior 🌵 — 21/04/2021
@Abderrahim | Cactus 🌵 ayuda por favor
Abderrahim | Cactus 🌵 — 22/04/2021
condition_revision
- # EX1
    - ## Écrivez 3 nombre et affiche la somme des 2 premiers et la multiplication des 2 derniers. Afficher les résultats de la façon suivante :
    - ## Version 1 : 
        - ## Somme des 2 premiers = ? 
        - ## Multiplication des 2 derniers = ?
    - ## Version 2 : 
Afficher plus
condition_revision.md
2 Ko
methode_string_revision
1. Exo1
    - Déclenchez un premier prompt avec comme question "Entrez un mot" et stockez la réponse dans une variable
    - Déclenchez un deusieme prompt avec comme question "Entrez la lettre du mot que vouz voulez retirer" et stockez la réponse dans une variable
    - Affichez le mot sans la lettre choisie

2. Exo 2
Afficher plus
methode_string_revision.md
2 Ko
Abderrahim | Cactus 🌵 — 22/04/2021
variable_revision
# Variable 

## Introduction
### Exercice 1.1  
- Déclare une variable du nom de "firstVariale" qui a comme valeur ton prénom entre guillemets 
- affiche la via un console.log
Afficher plus
variable.md
5 Ko
methode_revision
# Méthodes string (prompt etc)

### Exercice 1
- Créer un programme qui demande un prénom a l'utilisateur (prompt) et qui renvoi le 1er caractere du prénom dans une alert.
### Exercice 2
- Créer un programme qui demande un prénom a l'utilisateur (prompt) et qui renvoi tout sauf le premier caractère du prénom dans une alert
Afficher plus
methode_revision.md
2 Ko
Abderrahim | Cactus 🌵 — 23/04/2021
//EXO1

let multiplicateur = 5;
for (let i = 1; i <= 9; i++) {
    console.log(multiplicateur + " x " + i + " = " + multiplicateur*i);
}
Afficher plus
exo3_boucles_correction.js
2 Ko
# Boucle (for, foreach)

## introduction
## Exercice 1
- répète via une boucle for 5 fois ton prénom dans un console.log
- affiche les tours de boucle dans un console.log
Afficher plus
Projet_Top_Secret.md
4 Ko
Alexis 🌵🥉 — 23/04/2021
finit
Abderrahim | Cactus 🌵 — Hier à 12:54
//exo1
// for (let i = 1; i <= 5; i++) {
//     console.log("William");
//     console.log(i);
// }
Afficher plus
correction_boucles_souffrance_ALED.js
5 Ko
Abderrahim | Cactus 🌵 — Hier à 16:32
//exo1
let tableau = [];

let max = prompt("Choissisez un nombre max d'Ã©tudiant");

while (tableau.length != max) {
Afficher plus
correction_while_exo1.js
1 Ko
Abderrahim | Cactus 🌵 — Aujourd’hui à 10:53
//exo1
let eleves = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "Loïc"];
let i = 0;

while (i < eleves.length) {
    console.log(`Bonjour ${eleves[i]}`);
    i++;
}

exo2
let fruits = ["pomme","poire","banane","fraise","ananas","mihai"];

while (fruits.length > 0) {
    console.log(fruits);
    fruits.pop();
}
console.log(fruits);

//exo3
let panierLegumes = ["carotte", "betterave", "tomate", "broccoli"];
let caisseLegumes = [];
let longueur = panierLegumes.length;
let i = 0;

while (i < longueur) {
    caisseLegumes.push(panierLegumes[0]);
    panierLegumes.splice(0, 1);
    i++;
}

console.log(panierLegumes);
console.log(caisseLegumes);

//exo4
alert('ON VA JOUER AU JUSTE PRIX');
let chiffresAleatoire = Math.round(Math.random() * 10);
let reponse = +prompt("indique ton chiffre");

while (reponse != chiffresAleatoire) {
    reponse = +prompt("indique ton chiffre");
    if (reponse < chiffresAleatoire) {
        alert('ton chiffre est trop petit');
    } else if (reponse > chiffresAleatoire) {
        alert('ton chiffre est trop grand');
    }
}

alert("Bien ouej t'es moche");

//exo5
alert('ON VA JOUER AU JUSTE PRIX');
let chiffresAleatoire = Math.round(Math.random() * 10);
let reponse;
do {
    reponse = +prompt("rentre un chiffre");
    if (reponse < chiffresAleatoire) {
        alert('ton chiffre est trop petit');
    } else if (reponse > chiffresAleatoire) {
        alert('ton chiffre est trop grand');
    }
} while (reponse != chiffresAleatoire);

alert("Bien ouej t'es moche");

//exo6

//methode farhad
const date = new Date();
let ourYear = date.getFullYear();
let randomYear = Math.floor(Math.random()*(ourYear-1970+1))+1970;
let yourTry;
let triesNum = 3;
let answer = ourYear - randomYear;
while (triesNum > 0) {
    yourTry = +prompt(`Si je suis née en ${randomYear}, quel age j'ai aujourd'hui ?`);
    triesNum--;
    if (yourTry == answer) {
        triesNum = 0;
    }
}

if (yourTry == answer) {
    alert("Bonne réponse");
} else {
    alert(`Il te reste ${triesNum} essaies`);
}

//methode andy
const date = new Date();
let ourYear = date.getFullYear();
let randomYear = Math.floor(Math.random()*(ourYear-1970+1))+1970;
let question = prompt(`Si je suis née en ${randomYear}, quel age ai je aujourd'hui ?`);
let i = 0;

while ((question != ourYear-randomYear) && i < 2) {
    question = prompt(`Si je suis née en ${randomYear}, quel age ai je aujourd'hui ?`);
    i++;
}

if (question == ourYear-randomYear) {
... (42 lignes restantes)
Réduire
correction_while_exo2.js
4 Ko
﻿
//exo1
let eleves = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "Loïc"];
let i = 0;

while (i < eleves.length) {
    console.log(`Bonjour ${eleves[i]}`);
    i++;
}

exo2
let fruits = ["pomme","poire","banane","fraise","ananas","mihai"];

while (fruits.length > 0) {
    console.log(fruits);
    fruits.pop();
}
console.log(fruits);

//exo3
let panierLegumes = ["carotte", "betterave", "tomate", "broccoli"];
let caisseLegumes = [];
let longueur = panierLegumes.length;
let i = 0;

while (i < longueur) {
    caisseLegumes.push(panierLegumes[0]);
    panierLegumes.splice(0, 1);
    i++;
}

console.log(panierLegumes);
console.log(caisseLegumes);

//exo4
alert('ON VA JOUER AU JUSTE PRIX');
let chiffresAleatoire = Math.round(Math.random() * 10);
let reponse = +prompt("indique ton chiffre");

while (reponse != chiffresAleatoire) {
    reponse = +prompt("indique ton chiffre");
    if (reponse < chiffresAleatoire) {
        alert('ton chiffre est trop petit');
    } else if (reponse > chiffresAleatoire) {
        alert('ton chiffre est trop grand');
    }
}

alert("Bien ouej t'es moche");

//exo5
alert('ON VA JOUER AU JUSTE PRIX');
let chiffresAleatoire = Math.round(Math.random() * 10);
let reponse;
do {
    reponse = +prompt("rentre un chiffre");
    if (reponse < chiffresAleatoire) {
        alert('ton chiffre est trop petit');
    } else if (reponse > chiffresAleatoire) {
        alert('ton chiffre est trop grand');
    }
} while (reponse != chiffresAleatoire);

alert("Bien ouej t'es moche");

//exo6

//methode farhad
const date = new Date();
let ourYear = date.getFullYear();
let randomYear = Math.floor(Math.random()*(ourYear-1970+1))+1970;
let yourTry;
let triesNum = 3;
let answer = ourYear - randomYear;
while (triesNum > 0) {
    yourTry = +prompt(`Si je suis née en ${randomYear}, quel age j'ai aujourd'hui ?`);
    triesNum--;
    if (yourTry == answer) {
        triesNum = 0;
    }
}

if (yourTry == answer) {
    alert("Bonne réponse");
} else {
    alert(`Il te reste ${triesNum} essaies`);
}

//methode andy
const date = new Date();
let ourYear = date.getFullYear();
let randomYear = Math.floor(Math.random()*(ourYear-1970+1))+1970;
let question = prompt(`Si je suis née en ${randomYear}, quel age ai je aujourd'hui ?`);
let i = 0;

while ((question != ourYear-randomYear) && i < 2) {
    question = prompt(`Si je suis née en ${randomYear}, quel age ai je aujourd'hui ?`);
    i++;
}

if (question == ourYear-randomYear) {
    alert('bonne réponse');
} else {
    alert('game over');
}

//exo7
let panierFruits = [];

while (panierFruits.length != 8) {
    panierFruits.push(prompt("Remplissez le panier de fruit, jusqu'a obtenir 8 fruits"));
    alert(panierFruits); //fin
}

let question = prompt("desire tu retirer un fruit ? ");

let panierFruit = [];
let reponse;
let index = false;
let compteur = 0;

while (index == false) {
    if (compteur < 8) {
        reponse = prompt("Donnez moi un fruit");
        reponse = reponse.charAt(0).toUpperCase() + reponse.slice(1);
        panierFruit.push(reponse);
        compteur++;
    }

    if (compteur == 8) {
        alert(panierFruit);
        reponse = prompt('Voulez vous retirer un fruit ?');
        reponse = reponse.charAt(0).toUpperCase() + reponse.slice(1);
        panierFruit.splice(panierFruit.indexOf(reponse), 1);

        if (panierFruit.indexOf(reponse) == -1) {
            index = true;
        }
    }
}

alert('merci bonne appétit');
alert(`ceci est le derniere etat de votre panier: ${panierFruit}`);
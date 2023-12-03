"use strict";
// type inference c'est le type de variable qui est déterminé par le type de valeur qu'elle contient
let a = "abdoulaye";
a = "moussa";
// union type c'est le fait de définir plusieurs types pour une variable
let b;
b = "abdoulaye";
// type assertion c'est le fait de forcer le type d'une variable
const bouton1 = document.querySelector(".btn");
// literal type c'est le fait de définir une variable avec une valeur précise et non une variable qui peut prendre plusieurs valeurs
let c; // c'est une variable qui peut prendre soit la valeur abdoulaye ou moussa
c = "abdoulaye";
////////////////////////////////////////////////
// les tableaux en typescript 
let d; // c'est un tableau qui ne contient que des chaines de caractères
// tuples c'est un tableau qui contient des valeurs de types différents et dont le nombre d'éléments est fixe
let tupleArray;
tupleArray = ["abdoulaye", 20, true];
// union type avec tableau
let unionArray; // c'est un tableau qui peut contenir soit des chaines de caractères ou des nombres
unionArray = ["abdoulaye", 20, "moussa", 30];
// boucle
for (const array of unionArray) {
    console.log(array);
}
unionArray.forEach((element) => {
    console.log(element);
});
// les objets en typescript
// any type c'est le fait de définir une variable sans type précis et qui peut prendre n'importe quel type de valeur
let person;
person = {
    nom: "Ndiaye",
    prenom: "moussa",
    age: 20,
    cni: 123456
};

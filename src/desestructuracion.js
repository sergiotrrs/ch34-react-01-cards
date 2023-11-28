
// Desestructuración ( Destructuring assignment )
/*
 Es una expresión de JS que permite desempacar
 valores de arreglos o propiedades de objetos
 en distintas variables.

 La desestructuración hace el código más limpio
 y legible al permitir extraer solo la información
 necesaria.

*/

let a = 10;
let b = 20;

console.log(`a: ${a}, b:${b}`);
// Pasar el valor de 'b->a' y el valor de 'a->b'
/*  Solución 1
let c;

c = a;
a = b;
b = c;

console.log(`a: ${a}, b:${b}`);
*/

[b, a] = [a, b];
console.log(`a: ${a}, b:${b}`);

// -------------------------------------
const myArray = ["azul","rojo", "verde", "morado"];

// guardar en la varible colorA y colorB, el índice 0 y 2
// const colorA = myArray[0];
// const colorB = myArray[2];
const [ colorA,     ,colorB] = myArray;
console.log(`colorA: ${ colorA}, colorB: ${colorB}`); // azul, verde

// Desestructurando unn  objeto
const myObj = {
    name: "Sergio",
    lastname: "Torres",
    age: 39
};

// Asignar a una variable name y lastaname el valor de las propiedades
// del objeto myObj

//const myName = myObj.name;
//const lastname = myObj.lastname;

const { name: myName , age} = myObj;

console.log( `${myName} ${age}`);

//-------------------------------------------
 const prop = {
    title:"Pokemon",
    src: "https://ca0b.jpg" ,
    href:"https://pokemon_Wiki",         
    description:'Toma la "pokebola"',
    type:"animal"
 }

 // Usado la desestructuración, imprimir e consola
 // El "title" es "description".

const {title, description} = prop;
console.log(`el titulo es: ${title} y dice: ${description}`);


valoresSinDesestructuracion( prop );
valoresDesestructurados( prop );

function valoresSinDesestructuracion( myObj ){
    console.log(`La url de ${myObj.title} es ${myObj.src}`);
}

function valoresDesestructurados( {title, src} ){
    console.log(`La url de ${title} es ${src}`);
}

//---------------------------------------------------

const myStyle = {
    virtual: {
        color:"green",
        fontSize: 18,
        fontFamily: "Arial"
    } ,
    real: {
        color:"purple",
        fontSize: 20,
        fontFamily: "Georgia"
    }
 };
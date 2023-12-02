
/*
console.log("Hola mundo");
//AMBITO DE LAS VARIABLES

const Kilometros = 100;
console.log(Kilometros);


 if(1 == 1){
    const Kilometros = 300;
    console.log(Kilometros);
}
Kilometros = 50;
console.log(Kilometros); 
// ARREGLOS
const arregloNúmeros = [10, 20, 30];
arregloNúmeros.push(40);

console.log(arregloNúmeros);

//OBJECTOS

const persona = {
    nombre: "Andres",
    apellido: "Cortes",
    edad: "23"
}
console.log(persona);
console.log(persona.apellido); // Imprimir solo el apellido
persona.nombre = "aux"; // modificar nombre

// CLASES
class Animal{
    constructor(patas, tamanio){
        this.patas = patas;
        this.tamanio = tamanio;
    }
}

class Gato extends Animal{
    constructor(patas, tamanio, pelaje){
        super(patas, tamanio);
        this.pelaje = pelaje;
    }
}

// se instancia en objectos
const perro = new Animal(4, "Mediano");
console.log(perro);

const felix = new Gato(4, "Pequeño", "Liso");
console.log(felix);

// Funciones
/*
function mensaje(nombre){
    console.log("hola el nombre es "+nombre);
}
mensaje("Anita");

// Funciones de flecha / function Arrow

const mensaje = (nombre) => {
    console.log("hola el nombre es "+nombre +" y tiene" +edad+"años");
    const saludo = "hola el nombre es "+nombre";
    return saludo;
} 

const suma =(op1, op2) =>{
    const resultado = op1 + op2;
    return resultado;
}

const resultado = mensaje("juanita");
console.log(resultado);
console.log(suma(5, 4));

mensaje("juanita");

// templace string ALT+96 backtick acento grave
// el valor de la suma es ${op1, + op2}; 


const web = {
    nombre: "Udenar",
    links: {
      sitio: "www.udenar.edu.co"
    },
    redesSociales: {
      youtube: {
        enlace: "www.youtube.com/udenar",
        nombre: "Youtube Udenar"
      },
      facebook:{
        enlace: "www.facebook.com/udenar",
        nombre: "Facebook Udenar"
      },
      instagram:{
        enlace: "www.instagram.com/udenar",
        nombre: "Instagram Udenar"
      }
    }
  }
  console.log(web)
  
  const redes = web.redesSociales
  console.log(redes)
  
  const redInstagram = web.redesSociales.instagram
  console.log(redInstagram.enlace)
  
  // Desestucturación de objetos --------------------
  
  const { redesSociales } = web
  console.log(redesSociales)
  
  const { instagram, facebook } = web.redesSociales
  console.log(instagram)
  console.log(facebook)

  // OPERADOR DE PROPAGACION

  const frutas = ['Manzana', 'Pera', 'Mango', 'Fresa'];
  console.log(frutas);
  
  const dulces = ['Mermelada', 'Manjar', 'Helado'];
  console.log(dulces);
  
  const postres = [...frutas, ...dulces];
  console.log(postres);

*/

// Tipo modulo


import { PI, suma } from './modulo.js';

console.log(PI);

suma(5, 10);

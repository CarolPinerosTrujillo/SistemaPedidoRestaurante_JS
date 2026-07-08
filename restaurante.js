const prompt = require("prompt-sync")();

//BASE COMUN MENU RESTAURANTE


let menu = [

    //platos fuertes
  {nombre: "Carne en Bistéc", precio: 15000, categoria: "plato fuerte", disponible: true},
  {nombre: "Arroz con pollo", precio: 28000, categoria: "plato fuerte", disponible: true},
  {nombre: "Mojarra", precio: 35000, categoria: "plato fuerte", disponible: true},
  {nombre: "Bandeja Paisa", precio: 32000, categoria: "plato fuerte", disponible: false},

  //sopas 
  {nombre: "Ajiaco", precio: 30000,  categoria: "sopas",  disponible: true },
  {nombre: "Mondongo", precio: 25000,  categoria: "sopas",  disponible: false  },
  {nombre: "Sopa de tomate",  precio: 20000,  categoria: "sopas",  disponible: true},
  {nombre: "Mazamorra",  precio: 20000,  categoria: "sopas",  disponible: true},

    //bebidas
  {nombre: "Jugos",  precio: 10000,  categoria: "bebida",  disponible: true},
  {nombre: "Malteada",  precio: 15000,  categoria: "bebida",  disponible: true},
  {nombre: "Granizado",  precio: 12000,  categoria: "bebida",  disponible: false},
  {nombre: "Chicha",  precio: 11000,  categoria: "bebida",  disponible: true},
   
  //postres
  {nombre: "Tiramisu",  precio: 9000,  categoria: "postre",  disponible: false},
  {nombre: "Arroz con leche",  precio: 8000,  categoria: "postre",  disponible: true},
  {nombre: "Torta de banano",  precio: 7000,  categoria: "postre",  disponible: true},
  {nombre: "Cuajado con dulce de mora",  precio: 10000,  categoria: "postre",  disponible: true},
];

// console.log(menu[1].precio);
//console.log(menu[1].nombre);
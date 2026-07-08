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


//RETO 1 MOSTRAR MENU COMPLETO 

function mostrarMenu(menu) {
    console.log("Menu Restaurante");
    
  for (let i = 0; i < menu.length; i++) {
  console.log("Categoria:",menu[i].categoria +" ,Nombre:",menu[i].nombre + " — " +",precio:", menu[i].precio);
}  
}

//mostrarMenu(menu)


//RETO 2 SOLO LOS PLATOS DISPONIBLES
function soloDisponibles(menu) {

    let disponibles = []  //array vacio para crear nuevo con disponibles

    for (let i = 0; i < menu.length; i++) {
        
        if (menu[i].disponible==true) {
        disponibles.push(menu[i]);  //creacion array con platos disponibles
        }
    }
    return disponibles;
}
let resultado = soloDisponibles(menu);
//COMPARACION LISTADO COMPLETO VS DISPONIBLES
//console.log("MENU COMPLETO");
//mostrarMenu(menu);
//console.log("MENU DISPONIBLES");
//mostrarMenu(resultado);


//RETO 3 TOMAR PEDIDO DE UNA MESA 


function agregarPlato(pedido, plato) {
    pedido.push(plato);
}

function quitarUltimoPlato(pedido) {
    return pedido.pop();
}



//CREANDO PEDIDO SIMULACION
let pedido = [];

agregarPlato(pedido, menu[0]);
agregarPlato(pedido, menu[2]);

let eliminado = quitarUltimoPlato(pedido);

console.log("Eliminado:", eliminado.nombre);
console.log("Resumen de pedido ");

//ingreso de platos al pedido
//pedido.push(menu[0]);
//pedido.push(menu[3]);
//pedido.push(menu[5]);
//Quitar ultimo plato
//let eliminado = pedido.pop();

mostrarMenu(pedido);

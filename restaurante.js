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
console.log("RETO 1 - MOSTRAR MENU COMPLETO");
console.log("================================== ");
mostrarMenu(menu)



//RETO 2 SOLO LOS PLATOS DISPONIBLES
console.log("RETO 2 - MOSTRAR MENU PLATOS DISPONIBLES ");
console.log("================================== ");

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

console.log("MENU DISPONIBLES");
mostrarMenu(resultado);


//RETO 3 TOMAR PEDIDO DE UNA MESA 


function agregarPlato(pedido, plato) {
    pedido.push(plato);
}

function quitarUltimoPlato(pedido) {
    return pedido.pop();
}

function tomarPedido() {
    let pedido = [];


}

console.log("RETO 3 - SIMULACION PEDIDO DE UNA MESA");
console.log("================================== ");
//CREANDO PEDIDO SIMULACION
let pedido = [];
//AGREGAR PLATOS
agregarPlato(pedido, menu[0]);
agregarPlato(pedido, menu[2]);
agregarPlato(pedido, menu[4]);

console.log("Pedido inicial" ,pedido);
//QUITAR ULTIMO PLATO
let eliminado = quitarUltimoPlato(pedido);

console.log("Plato Eliminado:", eliminado.nombre);

//IMPRIMIR PEDIDO
console.log("Resumen de pedido completo");
//console.log(pedido);

mostrarMenu(pedido);


//RETO 4 COBRAR CUENTA CON IVA

console.log("RETO 4 - CALCULAR Y MOSTRAR LA CUENTA CON IVA ");
console.log("================================== ");
function precioConIva(curso) {
 let subtotal = 0; //ACUMULADOR

    for (let i = 0; i < pedido.length; i++) {
        subtotal += pedido[i].precio;
    }

    let iva = subtotal * 0.19; //CALCULO IVA
    let total = subtotal + iva;

    return total;
}

let totalFinal = precioConIva(pedido);
console.log("La cuenta con IVA es: " ,totalFinal);


//RETO 5 MESERO TOMA PEDIDO 



console.log("RETO 5 - MESERO TOMA PEDIDO POR TECLADO ");
console.log("================================== ");

let total = 0;
let opcion = "";

let pedidoNuevo=[];

//mostrar menu solo disponibles
do {
  console.log("\n--- MENÚ ---");

  for (let i = 0; i < menu.length; i++) {
    console.log(i + ": " + menu[i].nombre + " - $" + menu[i].precio);  //USA MENU DISPONIBLE (resultado ANTES guardada dela funcion solo disponibles)
  }

  let numero = prompt("Elige un plato (número) o escribe TERMINAR:");

  // TERMINAR PEDIDO
  if (numero === "TERMINAR") {
    break;
  }

  numero = Number(numero);

  // VALIDAR  
  if (numero >= 0 && numero < menu.length) {
    pedidoNuevo.push(menu[numero]);
    total = total + menu[numero].precio;
    console.log("Agregado:", resultado[numero].nombre);
  } else {
    console.log(" Opción inválida, intenta de nuevo");
  }

} while (true);



console.log("\n--- PEDIDO FINAL ---");

for (let i = 0; i < pedidoNuevo.length; i++) {
  console.log(pedidoNuevo[i].nombre);
}

console.log("TOTAL DEL PEDIDO: $" + precioConIva(total));
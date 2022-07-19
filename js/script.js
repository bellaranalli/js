//CREAR UN CICLO

let ingresarNombre = prompt("Ingresa tu Nombre");
let deseaJugar = prompt("Querés Jugar?: \n- Si \n- No");



if (deseaJugar == "Si") {
    let seleccionaPlataforma = prompt("Plataforma?: \n- Blue \n- Pink")
    alert(" Bienvenidx a  " + seleccionaPlataforma)
    for (let i = 1; i <= 2; i++) {

        if (i === 2) {
            alert("Apurate!!")
        }
    
        let ingresarJugadores = prompt("Número de jugadores por equipo")
        alert(" Ustedes son " + ingresarJugadores + "." + "\n Initializing:" + i)
       
    }
    alert("La sala está completa. Volvé más tarde")
}


if (deseaJugar == "No") {
    alert("Aún podés comprar tus SKINS")
}

//SIMULADOR INTERACTIVO

let nombreA = "Annika"
let nombreB = "Souka"
let nombreC = "Razen"

let stock = 3
let precio = 1000

let skin = prompt("Selecciona la skin deseada: \n- Annika \n- Souka \n- Razen")
let cantidad = prompt("Selecciona la cantidad de skins deseadas: ")
let precioTotal = (cantidad * precio)


alert("El precio total es: " + precioTotal)

let descuento = prompt("Sorpresa?: \n- Si \n- No")

if (descuento == "Si") {
    alert("Tenés un descuento del 10%")
    var precioDescuento = precioDescuento(precioTotal)
    alert("El precio total con descuento es es de: $" + precioDescuento)

}

function precioDescuento(precioTotal) {
    return precioTotal * 0.90
}


if (descuento == "No") {
    alert("Total a pagar: " + precioTotal)
}





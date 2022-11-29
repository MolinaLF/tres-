//Codigo JavasCripot

//Alerts
alert("Bienvenido(a) a nuestra empresa");
alert("Eliga el tipo de pastel que va a querer.Tenemos:");
alert("Pastele para Matrimonio /Pastele para Bautiso/ Pastele para Aniversario/Pastele para Cumpleaños ")


// 
let tipopastel, cantidad, precioTotal;
let Matri = 45.3;
let precioMatri = Matri.toFixed(2);
let Cumple = 40.5;
let precioCumple = Cumple.toFixed(2);
let Bau = 35.1;
let precioBau = Bau.toFixed(2);
let Aniver = 55.2;
let precioAniver = Aniver.toFixed(2);


tipopastel = prompt("Eliga el tipo de pastel que va a querer: ");
cantidad = prompt("Cuantos pasteles va a querer: ");

if (tipopastel == 'matrimonio' || tipopastel == 'Matrimonio') {
    precioTotal = cantidad * precioMatri;
} else if (tipopastel == 'cumpleaños' || tipopastel == "Cumpleaños") {
    precioTotal = cantidad * precioCumple;
} else if (tipopastel == 'bautiso' || tipopastel == "Bautiso") {
    precioTotal = cantidad * precioBau
} else if (tipopastel == 'aniversario' || tipopastel == "Aniversario") {
    precioTotal = cantidad * precioAniver;
} else {
    precioTotal = "error";
}


document.getElementById("uno").innerHTML = `<h4>Ecogio pastel para: ${tipopastel}</h4>`;
document.getElementById("dos").innerHTML = `<h4>La cantidad de pasteles que escogio: ${cantidad}</h4>`;
document.getElementById("precioTotal").innerHTML = `<h4>El precio total es: S/.${precioTotal}</h4>`;




function datos(nombre, apellido) {
    let datosPersonales;
    datosPersonales = "Muchas Gracias por su compra " + nombre + " " + apellido + " le damos la bienvenida a nuestro empresa";
    return datosPersonales;
}
window.onload = function () {

    let nom = prompt("Escriba su nombre:");
    let apelli = prompt("Escriba su apellido");

    document.getElementById("mensaje3").innerHTML = `<h4>${datos(nom, apelli)}</h4>`
}
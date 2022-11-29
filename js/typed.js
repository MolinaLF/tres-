var i = 1;

var n = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;

var f = 1;
var g = 2;
var h = 3;
var m = 4;
var l = 5;

function banner() {
  var imagen = document.getElementById("img-banner")
  imagen.src = "../imagenes/banners/banner" + i + ".jpg";
  i++;
  if (i > 3) i = 1;
  window.setTimeout("banner()", 2000)
}
function pasteles1() {
  var imagen = document.getElementById("img-pasteles1");
  imagen.src = "../imagenes/pasteles/pastel" + n + ".jpg";
  n++;
  if (n > 5) n = 1;
  window.setTimeout("pasteles1()", 2000);
}
function pasteles2() {
  var imagen = document.getElementById("img-pasteles2");
  imagen.src = "../imagenes/pasteles/pastel" + b + ".jpg";
  b++;
  if (b > 5) b = 1;
  window.setTimeout("pasteles2()", 2000);
}
function pasteles3() {
  var imagen = document.getElementById("img-pasteles3");
  imagen.src = "../imagenes/pasteles/pastel" + c + ".jpg";
  c++;
  if (c > 5) c = 1;
  window.setTimeout("pasteles3()", 2000);
}
function pasteles4() {
  var imagen = document.getElementById("img-pasteles4");
  imagen.src = "../imagenes/pasteles/pastel" + d + ".jpg";
  d++;
  if (d > 5) d = 1;
  window.setTimeout("pasteles4()", 2000);
}
function pasteles5() {
  var imagen = document.getElementById("img-pasteles5");
  imagen.src = "../imagenes/pasteles/pastel" + e + ".jpg";
  e++;
  if (e > 5) e = 1;
  window.setTimeout("pasteles5()", 2000);
}

//precios

function precioPastel1() {
  var imagen = document.getElementById("img-precioPastel1")
  imagen.src = "../imagenes/precios/precio" + f + ".jpg";
  f++;
  if (f > 5) f = 1;
  window.setTimeout("precioPastel1()", 2000);
}
function precioPastel2() {
  var imagen = document.getElementById("img-precioPastel2")
  imagen.src = "../imagenes/precios/precio" + g + ".jpg";
  g++;
  if (g > 5) g = 1;
  window.setTimeout("precioPastel2()", 2000);
}
function precioPastel3() {
  var imagen = document.getElementById("img-precioPastel3")
  imagen.src = "../imagenes/precios/precio" + h + ".jpg";
  h++;
  if (h > 5) h = 1;
  window.setTimeout("precioPastel3()", 2000);
}
function precioPastel4() {
  var imagen = document.getElementById("img-precioPastel4")
  imagen.src = "../imagenes/precios/precio" + m + ".jpg";
  m++;
  if (m > 5) m = 1;
  window.setTimeout("precioPastel4()", 2000);
}
function precioPastel5() {
  var imagen = document.getElementById("img-precioPastel5")
  imagen.src = "../imagenes/precios/precio" + l + ".jpg";
  l++;
  if (l > 5) l = 1;
  window.setTimeout("precioPastel5()", 2000);
}


//definir un metodo anonimo cuando carga 1s pagina web
//Eliminar cada metodo creado

window.onload = function () {
  banner();
  pasteles1();
  pasteles2();
  pasteles3();
  pasteles4();
  pasteles5();
  precioPastel1();
  precioPastel2();
  precioPastel3();
  precioPastel4();
  precioPastel5();

}
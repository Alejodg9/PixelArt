var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    $("#indicador-de-color").css("background-color", colorActual);
    // Completar para que cambie el indicador-de-color al colorActual


  })
);

var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");

// funcion que crea la Paleta de colores

function crearPaleta(nombreColores) {
  for (var i = 0; i < nombreColores.length; i++) {
    var divsPaleta = document.createElement("div");
    divsPaleta.style.backgroundColor = nombreColores[i];
    divsPaleta.classList.add("color-paleta");
    paleta.appendChild(divsPaleta);
  }
};
// funcion que crea la grilla de pixeles donde se va a dibujar

function crearGrillaPixeles(grillaPixeles) {
  for (var i = 0; i < 1750; i++) {
    var divsGrilla = document.createElement("div");
    grillaPixeles.appendChild(divsGrilla);
  }
};


//ejecucion de funciones para visualizar la paleta y la grilla de pixeles

crearPaleta(nombreColores);
crearGrillaPixeles(grillaPixeles);


//funcion para tomar el color de la paleta y mostrarlo en el indicador de color



$(".color-paleta").click(function () {
  var $colorTomado = $(this).css("background-color");
  $("#indicador-de-color").css("background-color", $colorTomado);
});

//funcion para que el puntero pinte sobre la grilla

$("#grilla-pixeles").children("div").click(function () {
  var $colorIndicador = $("#indicador-de-color").css("background-color");
  $(this).css("background-color", $colorIndicador);
});

//creacion de variable booleana para guardar el estado del click

var estadoMouse;

$("#grilla-pixeles").mousedown(function () {
  estadoMouse = true;
});

$("#grilla-pixeles").mouseup(function () {
  estadoMouse = false;
});

$("#grilla-pixeles").children("div").hover(function () {
  if (estadoMouse) {
    var $colorIndicador = $("#indicador-de-color").css("background-color");
    $(this).css("background-color", $colorIndicador);
  }
});

// funcion que borra la grilla de pixeles con un animacion

$("#borrar").click(function () {
  $("#grilla-pixeles").children("div").animate({ "background-color": "White" }, 2000);
});

// llamadas a las funciones que cargan los superheroes en la grilla

$("#batman").click(function(){
  cargarSuperheroe(batman);
});

$("#wonder").click(function(){
  cargarSuperheroe(wonder);
});

$("#flash").click(function(){
  cargarSuperheroe(flash);
});

$("#invisible").click(function(){
  cargarSuperheroe(invisible);
});

// llamado a la funcion que guarda el dibujo en el boton guardar

$("#guardar").click(function(){
  guardarPixelArt()
});

var numero_lineas = document.getElementById('texto_lineas');
var botoncito = document.getElementById('botoncito');

var d = document.getElementById('dibujito'); //Obtiene la etiqueta CANVAS del HTML
var ancho = d.width;
var alto = d.height;
var lienzo = d.getContext("2d"); //Establece una variable para dibujar


var x_in = 0;  //De acuerdo al dibujo que se pretende realizar, la posicion inicla de X nunca va a cambiar
var y_in = 1;  //Es la posicion inicial de Y, la cual incrementara en cada ciclo para mostrar un dibujo diferente
var x_fin = 1; //Es la posiscion final de x, la cual incrementara en cada ciclo para mostrar un dibujo diferente
var y_fin = alto; //De acuerdo al dibujo que se pretende realizar, la posicion inicla de Y nunca va a cambiar

var m_in = 1;
var n_in = 0;
var m_fin = ancho;
var n_fin = 1;

var p_in = ancho;
var q_in = 0;
var p_fin = 0;
var q_fin = 1;

var r_in = ancho;
var s_in = 1;
var r_fin = ancho;
var s_fin = alto;


botoncito.addEventListener("click", dibujoPorClick);
function dibujoPorClick()
{
  var lineas = texto_lineas.value;
  var l = 0;   //Este numero se incrementara cada vez que el ciclo while se repita, para que se detenga al llegar a la variable lineas

  //El ciclo while sirve para crear un ciclo siempre y cuando se cumplan ciertas condiciones
  for(l=1;l <= lineas ;l++)  //Mientras que L sea menor al numero de lineas el ciclo se ejecutara
  {
     //Es el numero de referencia que se tendra para que el ciclo se detenga

    dibujito("green", x_in, y_in, x_fin, y_fin)
    y_in = l*(ancho/lineas);      //ancho/lineas seria el numero de lineas que se agregarian
    x_fin = l*(alto/lineas);

    dibujito("green", m_in , n_in, m_fin, n_fin)
    m_in = l*(ancho/lineas);
    n_fin = l*(ancho/lineas);

    dibujito("red", p_in , q_in, p_fin, q_fin)
    p_in = ancho-(l*(ancho/lineas));
    q_fin = l*(ancho/lineas);

    dibujito("red", r_in , s_in, r_fin, s_fin)
    s_in = l*(ancho/lineas);
    r_fin = alto-(l*(ancho/lineas));


  }
}

function dibujarMarco()
{
dibujito('#094c18',0, 0, 0, alto);
dibujito('#094c18',(ancho), 0, (ancho), alto);
dibujito('#094c18',0, 0, ancho, 0);
dibujito('#094c18',0, (alto), ancho,(alto));
}

dibujarMarco();

function dibujito(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.strokeStyle = color;
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function borrar(){
  lienzo.clearRect(1,1, ancho-2, alto-2);
  dibujarMarco();

}

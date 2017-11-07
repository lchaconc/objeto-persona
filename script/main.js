/*
Aquí se crean los objetos y se ponen a funcionar.
*/
var p1, p2, p3, p4, p5, p6;
function setear() {
  p1 = new Persona(document.getElementById("img1"), document.getElementById("txt1"), document.getElementById("audio1"));
  p2 = new Persona(document.getElementById("img2"), document.getElementById("txt2"), document.getElementById("audio2"));
  p3 = new Persona(document.getElementById("img3"), document.getElementById("txt3"), document.getElementById("audio3"));
  p4 = new Persona(document.getElementById("img4"), document.getElementById("txt4"), document.getElementById("audio4"));
  p5 = new Persona(document.getElementById("img5"), document.getElementById("txt5"), document.getElementById("audio5"));
  p6 = new Persona(document.getElementById("img6"), document.getElementById("txt6"), document.getElementById("audio6"));
  setInterval(function () {
    p1.animar();
    p2.animar();
    p3.animar();
    p4.animar();
    p5.animar();
    p6.animar();
  }, 10000);
}


onload=setear

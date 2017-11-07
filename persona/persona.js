/*Aquí se define la clase Persona
según lo visto en clase*/

function Persona(uiImagen, uiTexto, uiAudio) {
  this.uiImagen = uiImagen;
  this.uiTexto = uiTexto;
  this.uiAudio = uiAudio;
  console.log("persona creada");
}

Persona.prototype.hablar = function () {
	var w = Math.floor((Math.random() * 3) );
  var frase = ["Hola", "Pura vida", "Bien", "¡Que bueno!"];
  this.uiTexto.value = frase[w];
  this.uiImagen.src = "img/talk.png";
};

Persona.prototype.alegrarse = function () {
  this.uiTexto.value = "Estoy alegre";
  this.uiImagen.src = "img/happy.png";
  this.uiAudio.src="audio/risa.ogg"
  this.uiAudio.pause();
  this.uiAudio.currentTime=0;
  this.uiAudio.play();
};

Persona.prototype.entristecerse = function () {
  this.uiTexto.value = "Estoy triste";
  this.uiImagen.src = "img/sad.png";
  this.uiAudio.src="audio/llorando.ogg"
  this.uiAudio.pause();
  this.uiAudio.currentTime=0;
  this.uiAudio.play();
};

Persona.prototype.dormir = function () {
  this.uiTexto.value = "Estoy durmiendo";
  this.uiImagen.src = "img/sleepy.png";
};


Persona.prototype.animar = function () {
  var opc = Math.floor((Math.random() * 4) + 1);
  //console.log(opc);
  switch (opc) {
    case 1:
      this.hablar();
      console.log("hablar");
    break;
    case 2:
      this.alegrarse();
      console.log("alegrarse");
    break;
    case 3:
      this.entristecerse();
      console.log("entristecerse");
    break;
    case 4:
        this.dormir();
        console.log("dormir");
    break;
    default:
      console.log("No econtrada");
  }
  //console.log(this.uiImagen);
};

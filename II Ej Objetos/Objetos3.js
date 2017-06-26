var assert = require("assert");
var fer = new Denissa("Denisse", 24, "jugar basket");

function Denissa(nombre, edad, pasatiempo)
{
  this.nombreDe = nombre;
  this.edadDe = edad;
  this.pasatiempoDe = pasatiempo;
  this.res = function() {return ("Hola soy " + this.nombreDe + " tengo " + this.edadDe + " anios y me gusta " + this.pasatiempoDe);};
}

describe("Denissa", function(){
  it("Hola soy Denisse tengo 24 anios y me gusta jugar basket", function()  {
    assert.equal("Hola soy Denisse tengo 24 anios y me gusta jugar basket", fer.res());
  });
});

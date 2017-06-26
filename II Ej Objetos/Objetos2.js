var assert = require("assert");
var ella = new Persona("Su", 23, 8, 1991, 2017);

function Persona(nombre, dia, mes, anio, anio1)
{
  this.nombrePersona = nombre;
  this.diaPersona = dia;
  this.mesPersona = mes;
  this.anioPersona = anio;
  this.anio1Persona = anio1;
  this.resta = function() {return (this.anio1Persona - this.anioPersona);};
}

describe("Persona", function(){
  it("La edad de Su es 25", function()
  {
    assert.equal(26, ella.resta());
  });
});

var assert = require("assert");
var rectangulo = new AreaRectangulo(100, 40);

function AreaRectangulo(base, altura)
{
  this.baseRect = base;
  this.alturaRect = altura;
  this.multiplicar = function() {return (this.baseRect * this.alturaRect);};
  
}

describe("Area Rectangulo", function(){
  it("El resultado del area es base * altura", function()  {
    assert.equal(4000, rectangulo.multiplicar());
  });
});

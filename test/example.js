// Definir variables
var obj = {
  message: 'hola'
, nombre: 'Nico'
}
, str = 'hello World'
, num = 72
, req = {
  headers: {
    'content-tipo': 'application/xml'
  }
}
, test = require('unit.js')
;

// Realizar pruebas
describe('Aprendiendo mediante el ejemplo', function() {
  it('Número "num" tiene el valor "75"', function() {
    test
      .number(num)
      .is(75); // Test 1
  });

  it('Objeto "obj" tiene la propiedad "name"', function() {
    test
      .object(obj)
      .hasProperty('name'); // Test 1
  });

  it('Objeto "obj" tiene la propiedad "message" con valor "hello"', function() {
    test
      .object(obj)
      .hasProperty('message', 'hello'); // Test 2
  });

  it('Cadena "str" empieza con "Hello"', function() {
    test
      .string(str)
      .startsWith('Hello'); // Test 3
  });

  it('Cadena "str" contiene "world"', function() {
    test
      .string(str)
      .contains('world'); // Test 4
  });

  it('Cadena "str" cumple con la expresión regular "[a-zA-Z]"', function() {
    test
      .string(str)
      .match(/[a-zA-Z]/); // Test 5
  });

  it('La petición "req" tiene una cabecera "content-type"', function() {
    test
      .value(req)
      .hasHeader('content-type') // Test 6
    
  });

  it('La petición "req" tiene una cabecera "content-type" del tipo "application/json"', function() {
    test
      .value(req)
      .hasHeader('content-type', 'application/json'); // Test 7
  });

  it('La petición "req" tiene una cabecera "content-type" del tipo "application/json" 2', function() {
    test
      .value(req)
      .hasHeaderJson(); // The same test 7
  });
});

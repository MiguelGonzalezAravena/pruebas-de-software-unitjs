  var test = unitjs
  , result;

  $.ajax({
    url: 'http://divertrip.miguelgonzaleza.com/index.php3'
  , method: 'POST'
  , dataType: 'json'
  , async: false
  , data: {
      r: 'patrocinador/login'
    , user_name: 'admin'
    , passwd: 'secret'
    }
  })
  .done(function(data) {
    console.log('La petición se ha realizado con éxito.');
    console.log(data.Login_password);
    result = data;
  })
  .fail(function(err) {
    console.log('Error al realizar la consulta.');
    console.log(err);
  });

  describe('Pruebas de una petición ajax', function() {
    it('ID Patrocinador "idPatrocinador" tiene un valor de "1"', function() {
      test
        .string(result.idPatrocinador)
        .isIdenticalTo('1');
    });

    it('Nombre "first_name" tiene un valor de "Patrocinador"', function() {
      test
        .string(result.first_name)
        .isIdenticalTo('Patrocinador');
    });

    it('Apellido "last_name" tiene un valor de "pat1"', function() {
      test
        .string(result.last_name)
        .isIdenticalTo('pat1');
    });

    it('Usuario "Login_user_name" tiene un valor de "admin"', function() {
      test
        .string(result.Login_user_name)
        .isIdenticalTo('admin');
    });

    it('Contraseña "Login_password" tiene un valor de "secret"', function() {
      test
        .string(result.Login_password)
        .isIdenticalTo('secret');
    });

    it('Estado "Estado_idEstado" tiene un valor de "2"', function() {
      test
        .string(result.Estado_idEstado)
        .isIdenticalTo('2');
    });
  })
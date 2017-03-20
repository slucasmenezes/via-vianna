$(document).ready(function(){
  
  $("form").submit(function(){
    var name = $(':input[name=Nome]').val();
    var email = $(':input[name=Email]').val();
    var mensage = $(':input[name=Mensagem]').val();

    var error = "";
    $("#errors").html("");

    if (name ==="") {
      error += "<p>Digite um nome</p>"
    }

    if (email ===""){
      error += "<p>Digite um e-mail</p>"
    }

    if (mensage ==="") {
      error += "<p>Digite uma Mensagem</p>"
    }

    if (error) {
      $("#errors").html(error)
      return false;
    }

    return true;
  });

});


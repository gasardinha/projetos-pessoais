function validarFormulario(){
    var nomePessoa = document.forms["formCadastro"]["nome"].value;
    if (nomePessoa == "") {
        alert("Favor informar o seu nome!");
        return false;     
    }
    else{
        alert("Olá, " + nomePessoa + " !");
        return true;
    }
}
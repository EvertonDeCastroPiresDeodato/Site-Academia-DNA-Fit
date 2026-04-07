// Função para validar o formulário de login
function validarLogin() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    var categoria = document.getElementById("categoria").value;

    // Verifica se o campo usuário está vazio
    if (usuario === "") {
        alert("Por favor, preencha o campo usuário.");
        return false;
    }

    // Verifica se o campo senha está vazio
    if (senha === "") {
        alert("Por favor, preencha o campo senha.");
        return false;
    }

    // Verifica se a senha possui pelo menos 6 caracteres
    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return false;
    }

    // Verifica se a categoria foi selecionada
    if (categoria === "") {
        alert("Por favor, selecione uma categoria.");
        return false;
    }

    // Mensagem de sucesso
    alert("Formulário Validado com Sucesso!");
    return true;
}
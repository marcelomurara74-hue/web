// Aguarda o carregamento da página
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("formContato");

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "") {
            alert("Digite seu nome.");
            return;
        }

        if (email === "") {
            alert("Digite seu e-mail.");
            return;
        }

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexEmail.test(email)) {
            alert("Digite um e-mail válido.");
            return;
        }

        if (mensagem.length < 10) {
            alert("A mensagem deve ter pelo menos 10 caracteres.");
            return;
        }

        alert(
            "Mensagem enviada com sucesso!\n\n" +
            "Nome: " + nome +
            "\nE-mail: " + email +
            "\nTelefone: " + telefone +
            "\nMensagem: " + mensagem
        );

        console.log("===== DADOS DO FORMULÁRIO =====");
        console.log("Nome:", nome);
        console.log("E-mail:", email);
        console.log("Telefone:", telefone);
        console.log("Mensagem:", mensagem);

        form.reset();

    });

});
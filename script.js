function validarFormulario() {
    let inputs = document.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.style.border = "1px solid #00C22B";
      let errorDiv = document.getElementById(input.id + "Error");
      errorDiv.textContent = "";
    });

    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let mensagem = document.getElementById("mensagem");
    let telefone = document.getElementById("tel")
    let isValid = true;

    if (nome.value === "") {
      isValid = false;
      nome.style.border = "1px solid #F52E2E";
      document.getElementById("nomeError").textContent =
        "Campo obrigatório";
    }

    if (email.value === "") {
      isValid = false;
      email.style.border = "1px solid #F52E2E";
      document.getElementById("emailError").textContent =
        "Campo obrigatório";
    }

    if (telefone.value === "") {
        isValid = false;
        telefone.style.border = "1px solid #F52E2E";
        document.getElementById("telError").textContent =
          "Campo obrigatório";
      }

    if (mensagem.value === "") {
      isValid = false;
      mensagem.style.border = "1px solid #F52E2E";
      document.getElementById("mensagemError").textContent =
        "Campo obrigatório";
    }

    if (isValid) {
      nome.style.border = "1px solid #00C22B";
      email.style.border = "1px solid #00C22B";
      telefone.style.border = "1px solid #00C22B";
      mensagem.style.border = "1px solid #00C22B";
      document.getElementById("Formulario").submit();
    }
  }
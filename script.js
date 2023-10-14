document.addEventListener("DOMContentLoaded", function() {
    var cepInput = document.getElementById("cep");

    cepInput.addEventListener("blur", function() {
        var cep = cepInput.value.replace(/\D/g, "");
        if (cep.length != 8) {
            return false;
        }

        var url = "https://viacep.com.br/ws/" + cep + "/json/";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                try {
                    document.getElementById("endereco").value = data.logradouro;
                    document.getElementById("bairro").value = data.bairro;
                    document.getElementById("cidade").value = data.localidade;
                    document.getElementById("uf").value = data.uf;
                } catch (ex) {}
            })
            .catch(error => console.error("Erro ao buscar CEP:", error));
    });
});

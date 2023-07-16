function handleCampoDeEstudoChange() {
    var campoDeEstudoSelect = document.getElementById("Seleção-De-Campo-De-Estudo");
    var componenteCurricularSelect = document.getElementById("Seleção-De-Componente-Curricular");

    if (campoDeEstudoSelect.value === "Ciências Exatas") {
        componenteCurricularSelect.options[0].selected = true; // Defina a primeira opção como selecionada por padrão
        componenteCurricularSelect.options[0].disabled = true; // Desative a primeira opção

        var options = componenteCurricularSelect.options;
        for (var i = 1; i < options.length; i++) {
            var option = options[i];
            var value = option.value;
            if (value === "Matemática" || value === "Estratégias Financeiras" || value === "Matemática Aplicada A Computação") {
                option.disabled = false; // Habilita as opções desejadas
            } else {
                option.disabled = true; // Desabilita as opções indesejadas
            }
        }
    } else if (campoDeEstudoSelect.value === "Ciências Da Natureza") {
        componenteCurricularSelect.options[0].selected = true; // Defina a primeira opção como selecionada por padrão
        componenteCurricularSelect.options[0].disabled = true; // Desative a primeira opção

        var options = componenteCurricularSelect.options;
        for (var i = 1; i < options.length; i++) {
            var option = options[i];
            var value = option.value;
            if (value === "Biotecnologia" || value === "Astrofísica" || value === "Física Teorica") {
                option.disabled = false; // Habilita as opções desejadas
            } else {
                option.disabled = true; // Desabilita as opções indesejadas
            }
        }
    } else {
        for (var i = 0; i < componenteCurricularSelect.options.length; i++) {
            var option = componenteCurricularSelect.options[i];
            option.disabled = false; // Habilita todas as opções
        }
    }
}

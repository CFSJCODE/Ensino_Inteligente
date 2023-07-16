function handleCampoDeEstudoChange() {
    var campoDeEstudoSelect = document.getElementById("Seleção-De-Campo-De-Estudo");
    var componenteCurricularSelect = document.getElementById("Seleção-De-Componente-Curricular");
    var options = componenteCurricularSelect.options;

    componenteCurricularSelect.options[0].selected = true; // Defina a primeira opção como selecionada por padrão
    componenteCurricularSelect.options[0].disabled = true; // Desative a primeira opção

    for (var i = 1; i < options.length; i++) {
        var option = options[i];
        var value = option.value;

        if (campoDeEstudoSelect.value === "Ciências Exatas") {
            if (value === "Matemática" || value === "Estratégias Financeiras" || value === "Matemática Aplicada A Computação") {
                option.disabled = false; // Habilita as opções desejadas
            } else {
                option.disabled = true; // Desabilita as opções indesejadas
            }
        } else if (campoDeEstudoSelect.value === "Ciências Da Natureza") {
            if (value === "Biotecnologia" || value === "Astrofísica" || value === "Física Teorica") {
                option.disabled = false; // Habilita as opções desejadas
            } else {
                option.disabled = true; // Desabilita as opções indesejadas
            }
        } else {
            option.disabled = false; // Habilita todas as opções
        }
    }
}

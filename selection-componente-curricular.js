function handleCampoDeEstudoChange() {
    var campoDeEstudoSelect = document.getElementById("campo-de-estudo-select");
    var componenteCurricularSelect = document.getElementById("componente-curricular-select");
    var options = componenteCurricularSelect.options;

    // Redefina as opções para o padrão original
    for (var i = 0; i < options.length; i++) {
        options[i].disabled = false;
    }

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
        } else if (campoDeEstudoSelect.value === "Ciências Humanas") {
            if (value === "Filosofia Da Informação" || value === "Sociologia Aplicada A Arquitetura E A Engeharia Civil" || value === "Geomorfologia Dos Dobramentos Modernos Na Europa" || value === "A História Da Tecnologia E Os Seus Impactos Socioculturais") {
                option.disabled = false; // Habilita as opções desejadas
            } else {
                option.disabled = true; // Desabilita as opções indesejadas
            }
        } else if (campoDeEstudoSelect.value === "Linguagens") {
            if (value === "Dominio Linguistico E Comunicação" || value === "Produção Editorial" || value === "Comunição Corporativa E Mentorias Corporativas") {
                option.disabled = false; // Habilita as opções desejadas
            } else {
                option.disabled = true; // Desabilita as opções indesejadas
            }
        } else if (campoDeEstudoSelect.value === "Cursos De Extensão Curricular") {
            if (value === "Introdução A Informática E Os Seus Princípios" || value === "Introdução Aos Fundamentos De Elétrica Residencial" || value === "Implementação De Sistemas De Automação Residencial Centralizado E Cabeado" || value === "Introdução A Eletrônica" || value === "Informática Avançada" || value === "Linguagens De Programação" || value === "Modelagem 3D" || value === "Eletrônica Usando Sistemas De Protipagem" || value === "Infraestrutura De TI" || value === "Artesanato E Atelier" || value === "Música" || value === "Desenvolvimento De Projetos Pessoais") {
                option.disabled = false; // Habilita as opções desejadas
            } else {
                option.disabled = true; // Desabilita as opções indesejadas
            }
        }
    }
}

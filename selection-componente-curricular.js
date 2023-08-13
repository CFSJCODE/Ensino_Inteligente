function handleCampoDeEstudoChange() {
    const campoDeEstudoSelect = document.getElementById("campo-de-estudo-select");
    const componenteCurricularSelect = document.getElementById("componente-curricular-select");
    const options = componenteCurricularSelect.options;

    const habilitarOpcoes = (opcoesDesejadas) => {
        for (const option of options) {
            const value = option.value;
            option.disabled = !opcoesDesejadas.includes(value);
        }
    };

    componenteCurricularSelect.options[0].selected = true;
    componenteCurricularSelect.options[0].disabled = true;

    const campoDeEstudo = campoDeEstudoSelect.value;

    switch (campoDeEstudo) {
        case "Ciências Exatas":
            habilitarOpcoes(["Matemática", "Estratégias Financeiras", "Matemática Aplicada A Computação"]);
            break;
        case "Ciências Da Natureza":
            habilitarOpcoes(["Biotecnologia", "Astrofísica", "Física Teorica"]);
            break;
        case "Ciências Humanas":
            habilitarOpcoes(["Filosofia Da Informação", "Sociologia Aplicada A Arquitetura E A Engeharia Civil", "Geomorfologia Dos Dobramentos Modernos Na Europa", "A História Da Tecnologia E Os Seus Impactos Socioculturais"]);
            break;
        case "Linguagens":
            habilitarOpcoes(["Dominio Linguistico E Comunicação", "Produção Editorial", "Comunição Corporativa E Mentorias Corporativas"]);
            break;
        case "Cursos De Extensão Curricular":
            habilitarOpcoes(["Introdução A Informática E Os Seus Princípios", "Introdução Aos Fundamentos De Elétrica Residencial", "Implementação De Sistemas De Automação Residencial Centralizado E Cabeado", "Introdução A Eletrônica", "Informática Avançada", "Linguagens De Programação", "Modelagem 3D", "Eletrônica Usando Sistemas De Protipagem", "Infraestrutura De TI", "Artesanato E Atelier", "Música", "Desenvolvimento De Projetos Pessoais"]);
            break;
        default:
            break;
    }
}

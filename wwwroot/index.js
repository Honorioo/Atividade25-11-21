
const processar = (event) => {
    event.preventDefault();

    // Obter valores digitados (ENTRADA)
    const campoNome = document.querySelector('#nome');
    const campoSobrenome = document.querySelector('#sobrenome');

    const nomeDigitado = campoNome.value;
    const sobrenomeDigitado = campoSobrenome.value;

    // Realizar a ação (PROCESSAMENTO)
    // const nomeCompleto = `${nomeDigitado} ${sobrenomeDigitado}`;
    // const nomeCatalogo = `${sobrenomeDigitado.toUpperCase()}, ${nomeDigitado}`;

    fetch('/Nome', {
        method: 'POST'
        Headers: {
            "Content-Type"
        }
    }
    
    
    )

    // Exibir os resultados (SAÍDA)
    const mensagem = document.querySelector('#mensagem');
    mensagem.innerHTML = `
        <div>Nome completo = ${nomeCompleto}</div>
        <div>Nome catálogo = ${nomeCatalogo}</div>
    `;
};

document.addEventListener('DOMContentLoaded', () => {
    const botaoProcessar = document.querySelector('#processar');
    botaoProcessar.addEventListener('click', processar);
});
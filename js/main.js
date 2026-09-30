// Aguarda o carregamento completo do HTML antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {
    // Pega o parâmetro 'modelo' da URL (ex: ?modelo=pro)
    const parametrosUrl = new URLSearchParams(window.location.search);
    const modeloParametro = parametrosUrl.get('modelo');
    const selecaoModelo = document.getElementById('modeloFone');

    // Se houver um modelo na URL e o select existir na página, seleciona a opção correta
    if (modeloParametro && selecaoModelo) {
        for (let i = 0; i < selecaoModelo.options.length; i++) {
            if (selecaoModelo.options[i].value === modeloParametro) {
                selecaoModelo.value = modeloParametro;
                break;
            }
        }
    }
    
    // Configura o envio do formulário de compra
    const formulario = document.getElementById('formCompra');
    const mensagem = document.getElementById('mensagemSucesso');

    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que a página recarregue
            
            // Mostra a mensagem de sucesso
            mensagem.classList.remove('d-none');
            
            // Limpa o formulário
            formulario.reset();
            
            // Mantém o modelo selecionado após limpar
            if (modeloParametro && selecaoModelo) {
                selecaoModelo.value = modeloParametro;
            }
            
            // Esconde a mensagem após 5 segundos
            setTimeout(() => {
                mensagem.classList.add('d-none');
            }, 5000);
        });
    }
});

// Função para trocar a imagem principal quando clica nas miniaturas
function trocarImagem(elemento) {
    const imagemPrincipal = document.getElementById('imagemPrincipal');
    imagemPrincipal.style.opacity = 0.8;
    
    setTimeout(() => {
        imagemPrincipal.src = elemento.src;
        imagemPrincipal.style.opacity = 1;
    }, 150);

    // Remove a classe 'active' de todas as miniaturas
    const miniaturas = document.querySelectorAll('.miniatura');
    for(let i=0; i < miniaturas.length; i++) {
        miniaturas[i].classList.remove('active');
    }
    // Adiciona a classe 'active' na miniatura clicada
    elemento.classList.add('active');
}

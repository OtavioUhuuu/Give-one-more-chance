const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        // 1. Encontra o elemento que está visível no momento (com a classe 'ativo')
        const atual = document.querySelector('.ativo');
        
        // 2. Pega o valor do atributo 'data-proximo' do botão clicado e monta o ID
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        // 3. Remove a classe 'ativo' do passo atual para ele sumir
        atual.classList.remove('ativo');

        // 4. Adiciona a classe 'ativo' no próximo passo para ele aparecer
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})

const opcoes = [
    { id: 'opcao1', href: 'sequenciaNumeros.html' },
    { id: 'opcao2', href: 'imagensAleatorias.html' },
    { id: 'opcao3', href: 'pagina3.html' },
    { id: 'opcao4', href: 'pagina4.html' },
    { id: 'opcao5', href: 'pagina5.html' },
];

opcoes.forEach(opcao => {
    document.getElementById(opcao.id).addEventListener('click', () => {
        window.location.href = opcao.href;
    });
});
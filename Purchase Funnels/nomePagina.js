let nomePagina = "";
switch (dataLayer[3].pagetype) {
    case "Produto":
        nomePagina = "Produto";
        break;
    case "Home":
        nomePagina = "Home";
        break;
    case "category":
        nomePagina = "Categoria";
        break;
    default:
        nomePagina = "página desconhecida";
        break;
}

console.log(`Nome da página: ${nomePagina}`);
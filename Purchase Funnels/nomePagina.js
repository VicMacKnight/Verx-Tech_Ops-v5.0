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
        nomePagina = "p�gina desconhecida";
        break;
}

console.log(`Nome da p�gina: ${nomePagina}`);
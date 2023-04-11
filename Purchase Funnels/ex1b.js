if (dataLayer[3].pagetype === "Carrinho") {
    const productIds = [];
    const cartTotal = dataLayer[2].itensSacola;

    dataLayer[3].product.forEach((product) => {
        productIds.push(product.classe);
    });

    console.log(`Lista de IDs dos produtos selecionados: ${productIds.join(', ')}`);
    console.log(`Valor total do carrinho: R$ ${dataLayer[3].valorSacola}`);
}
if (dataLayer[3].pageType === "Carrinho") {
    const productIds = [];

    dataLayer[3].product.forEach((product) => {
        productIds.push(product.classe);
    });

    console.log(`Lista de IDs dos produtos selecionados: ${productIds.join(', ')}`);
    console.log(`Valor total do carrinho: R$ ${dataLayer[3].valorSacola}`);
}
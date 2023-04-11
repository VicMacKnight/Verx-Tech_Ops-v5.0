if (dataLayer[3].pagetype === "Produto") {
    const productIds = [];
    const productQty = dataLayer[2].ecommerce.detail.products.length;

    dataLayer[2].ecommerce.detail.products.forEach((product) => {
        productIds.push(product.id);
    });

    console.log(`Quantidade de Itens: ${productQty}`);
    console.log(`Lista de IDs: ${productIds.join(', ')}`);
}
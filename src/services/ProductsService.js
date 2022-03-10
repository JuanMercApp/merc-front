const getProducts = (searchQuery, successCallback, errorCallback) => {
    fetch(`http://localhost:4000/api/items?q=${searchQuery}`)
    .then((payload) => {
        return payload.json();
    }).then((products) => {
        successCallback(products);
    }).catch((error) => {
        errorCallback(error);
    });
};

const getProduct = (productId, successCallback, errorCallback) => {
    fetch(`http://localhost:4000/api/items/${productId}`)
    .then((payload) => {
        return payload.json();
    })
    .then((product) => {
        successCallback(product);
    }).catch((error) => {
        errorCallback(error);
    });
};

const formatProductValue = (productValue, currency) => {
    let formatter = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
    });
    try {
        formatter = new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0
        });
    } catch(e) {}
    return formatter.format(productValue)
}

const productsService = { getProducts, getProduct, formatProductValue };
export default productsService;

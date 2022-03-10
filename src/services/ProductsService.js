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

const productsService = { getProducts, getProduct };
export default productsService;

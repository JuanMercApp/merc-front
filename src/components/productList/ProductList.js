import React, {useState} from 'react';
import productsService from '../../services/ProductsService';
import { createSearchParams, useSearchParams } from "react-router-dom";


function ProductList() {
    const [products, setProducts] = useState({});
    const [queryParams] = useSearchParams();
    const searchQuery = queryParams.get("q");
    const updateProducts = (apiProducts) => {setProducts(apiProducts);}
    const showErrorMessage = (error) => alert(error.message);
    const getProducts = () => {
        console.log(searchQuery);
        console.log(updateProducts);
        console.log(showErrorMessage);
        productsService.getProducts(searchQuery, updateProducts, showErrorMessage);

    }

    return (
        <div>
            <div>Multiple</div>
            <button onClick={getProducts}>getProducts</button>
            <div>{JSON.stringify(products)}</div>
        </div>
    );
}

export default ProductList;
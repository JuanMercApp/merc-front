import React, {useState, useEffect} from 'react';
import productsService from '../../services/ProductsService';
import { useSearchParams } from "react-router-dom";


function ProductList() {
    const [products, setProducts] = useState({});
    const [queryParams] = useSearchParams();
    let searchQuery = queryParams.get("q");
    const updateProducts = (apiProducts) => {setProducts(apiProducts);}
    const showErrorMessage = (error) => alert(error.message);

    useEffect(() => {
        console.log("hello");
        productsService.getProducts(searchQuery, updateProducts, showErrorMessage);
    }, [searchQuery]);

    return (
        <div>
            <div>Multiple</div>
            <div>{JSON.stringify(products)}</div>
        </div>
    );
}

export default ProductList;
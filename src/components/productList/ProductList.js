import React, {useState, useEffect} from 'react';
import productsService from '../../services/ProductsService';
import { useSearchParams } from "react-router-dom";
import Breadcrumb from '../common/Breadcrumb';
import ProductSummary from './ProductSummary';
import './ProductList.scss'

function ProductList() {
    const [products, setProducts] = useState(null);
    console.log(products);
    const [queryParams] = useSearchParams();
    const productsElements = () => {
        const elements = products.items.slice(0,4).map((product) => (
            <li key={product.id}>
                <ProductSummary product={product}/>
            </li>
        ));

        return elements;
    }

    let searchQuery = queryParams.get("q");
    useEffect(() => {
        const updateProducts = (apiProducts) => {setProducts(apiProducts);}
        const showErrorMessage = (error) => alert(error.message);
        productsService.getProducts(searchQuery, updateProducts, showErrorMessage);
    }, [searchQuery]);
    
    return (
        <div className="product-list">
            {products && (
                <>
                    <Breadcrumb categories={products.categories}/>
                    <div className="product-list__main-section">
                        {
                            <ul>
                                {productsElements()}
                            </ul>
                        }
                    </div>
                </>
            )}
        </div>
    );
}

export default ProductList;
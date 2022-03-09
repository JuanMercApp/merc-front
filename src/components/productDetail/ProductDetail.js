import React, {useState, useEffect} from 'react';
import productsService from '../../services/ProductsService';
import { useParams } from 'react-router-dom';

function ProductDetail(props) {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const updateProducts = (apiProduct) => {setProduct(apiProduct)}
    const showErrorMessage = (error) => alert(error.message);
    useEffect(() => {
        productsService.getProduct(id, updateProducts, showErrorMessage);
    }, []);
        
    return (
        <div>
            <div>Single</div>
            <div>{JSON.stringify(product)}</div>
        </div>
    );
}

export default ProductDetail;
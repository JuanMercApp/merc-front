import React, {useState} from 'react';
import productsService from '../../services/ProductsService';
import { useParams } from 'react-router-dom';

function ProductDetail(props) {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const getProduct = () => {
        const updateProducts = (apiProduct) => {setProduct(apiProduct)}
        const showErrorMessage = (error) => alert(error.message);
        productsService.getProduct(id, updateProducts, showErrorMessage);
    }

    return (
        <div>
            <div>Single</div>
            <button onClick={getProduct}>getProduct</button>
            <div>{JSON.stringify(product)}</div>
        </div>
    );
}

export default ProductDetail;
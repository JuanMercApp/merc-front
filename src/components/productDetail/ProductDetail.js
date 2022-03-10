import React, {useState, useEffect} from 'react';
import Breadcrumb from '../common/Breadcrumb';
import productsService from '../../services/ProductsService';
import { useParams } from 'react-router-dom';
import './ProductDetail.scss';

function ProductDetail(props) {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const updateProducts = (apiProduct) => {setProduct(apiProduct)}
    const showErrorMessage = (error) => alert(error.message);
    useEffect(() => {
        productsService.getProduct(id, updateProducts, showErrorMessage);
    }, []);
        
    return (
        <>
            { (product != null && product.item != null) &&
                <div className="product-detail">
                    <Breadcrumb categories={product.categories}/>
                    <div className="product-detail__main-section">
                        <div className="product-detail__principal">
                            <img className="product-detail__principal-image" src={product.item.picture} alt={product.item.title}/>
                            <div className="product-info">
                                <p className="product-info__sold-amount">{product.item.condition} - {product.item.sold_quantity} vendidos</p>
                                <h1 className="product-info__title">{product.item.title}</h1>
                                <div className="product-info__price">
                                    <h2 className="product-info__price-header">{productsService.formatProductValue(product.item.price.amount, product.item.price.currency)}</h2>
                                    <p className="product-info__price-digits">00</p>
                                </div>
                                <button className="product-info__buy-button">Comprar</button>
                            </div>
                        </div>
                        <h2 className="product-detail__description-header">Descripción del producto</h2>
                        <p className="product-detail__description">{product.item.description}</p>
                    </div>
                </div>
            }
        </>
    );
}

export default ProductDetail;
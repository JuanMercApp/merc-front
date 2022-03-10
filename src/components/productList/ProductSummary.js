import shippingStatus from '../../utility/ic_shipping@2x.png';
import './ProductSummary.scss'
import { useNavigate } from "react-router-dom";
import productsService from '../../services/ProductsService';

function ProductSummary(props) {
    const { product } = props;
    const navigate = useNavigate();

    const selectProduct = () => {
        navigate(`/items/${product.id}`);
    };

    return (
        product != null ? 
            (<div className="product-summary" onClick={selectProduct}>
                <img className="product-summary__image" src={product.picture} alt={props.title}/>
                <div className="product-summary__description">
                    <div className="product-summary__description-main">
                        <h2 className="product-summary__description-main-amount">{productsService.formatProductValue(product.price.amount, product.price.currency)}</h2>
                        {   
                            product.free_shipping && <img src={shippingStatus} alt="Product Is Available" className="product-summary__description-main-status"/>
                        }
                    </div>
                    <p className="product-summary__description-secundary">{product.title}</p>
                </div>
                <div className="product-summary__address">{product.address}</div>
            </div>) 
        : <></>
    );
}

export default ProductSummary;
import shippingStatus from '../../utility/ic_shipping@2x.png';
import './ProductSummary.scss'
function ProductSummary(props) {
    const { product } = props;
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
    return (
        product != null ? 
            (<div className="product-summary">
                <img className="product-summary__image" src={product.picture} alt={props.title}/>
                <div className="product-summary__description">
                    <div className="product-summary__description-main">
                        <h2 className="product-summary__description-main-amount">{formatProductValue(product.price.amount, product.price.currency)}</h2>
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
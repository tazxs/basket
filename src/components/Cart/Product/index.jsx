import Count from '../Count';
import './style.scss'
import Cross from './../../../img/icons/cross.svg';
const Product = ({product, deleteProduct, increase,decrease}) => {
    const {img,title,id,count,priceTotla} = product; //count,id
    return (
        <section className="product">
            <div className="product__img">
                <img
                    src={`../../../img/products/${img}`}
                    alt={title}
                />
            </div>
            <div className="product__title">{title}</div>
            <div className="product__count">
                <Count count={count} increase={increase} decrease={decrease} id={id}/>
            </div>
            <div className="product__price">{priceTotla} тг</div>
            <div className="product__controls">
                <button type="button" onClick={() => {deleteProduct(id)}} id={id}>
                    <img src={Cross} alt="Delete" />
                </button>
            </div>
        </section>
    );
};

export default Product;

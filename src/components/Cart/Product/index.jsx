import Count from '../Count';
import './style.scss'
import Cross from './../../../img/icons/cross.svg';
const Product = ({product, deleteProduct}) => {
    const {img,title,price,} = product; //count,id
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
                <Count />
            </div>
            <div className="product__price">{price} тг</div>
            <div className="product__controls">
                <button type="button" onClick={deleteProduct}>
                    <img src={Cross} alt="Delete" />
                </button>
            </div>
        </section>
    );
};

export default Product;

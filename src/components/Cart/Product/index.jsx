import Count from '../Count';
import './style.scss'

const Product = ({product}) => {
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
                <button type="button">
                    <img src={"./img/icons/cross.svg"} alt="Delete" />
                </button>
            </div>
        </section>
    );
};

export default Product;

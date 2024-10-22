import Count from '../Count';
import './style.scss'

const Product = () => {
    return (
        <section className="product">
            <div className="product__img">
                <img
                    src="./img/products/macbook.jpg"
                    alt="Apple MacBook Air 13"
                />
            </div>
            <div className="product__title">Apple MacBook Air 13</div>
            <div className="product__count">
                <Count />
            </div>
            <div className="product__price">110 000 руб.</div>
            <div className="product__controls">
                <button type="button">
                    <img src="./img/icons/cross.svg" alt="Delete" />
                </button>
            </div>
        </section>
    );
};

export default Product;

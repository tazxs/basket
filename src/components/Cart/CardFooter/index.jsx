import "./style.scss";

const CardFooter = ({total}) => {
    const {count,price} = total;
    return (
        <footer className="cart-footer">
            <div className="cart-footer__count">{count} единицы</div>
            <div className="cart-footer__price">{price} тг.</div>
        </footer>
    );
};

export default CardFooter;
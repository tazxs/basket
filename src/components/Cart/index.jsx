import CardFooter from "./CardFooter";
import CartHeader from "./CartHeader";
import Product from "./Product";

const Cart = () => {
    return (
        <section className="cart">
            <CartHeader />

            <Product />

            <CardFooter />
        </section>
    );
};

export default Cart;

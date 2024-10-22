import CardFooter from "./CardFooter";
import CartHeader from "./CartHeader";
import Product from "./Product";
import data from '../../data';
import { useState } from "react";
const Cart = () => {
    const [cart] = useState(data)
    const products = cart.map((product) => {
        return <Product product={product} key={product.id}/>;
    })
    return (
        <section className="cart">
            <CartHeader />
            {products}
            <CardFooter />
        </section>
    );
};

export default Cart;

import CardFooter from "./CardFooter";
import CartHeader from "./CartHeader";
import Product from "./Product";
import data from '../../data';
import { useState } from "react";
const Cart = () => {
    const [cart] = useState(data)
    const deleteProduct = () => {
        console.log('s');
        
    }

    const products = cart.map((product) => {
        return <Product product={product} key={product.id} deleteProduct={deleteProduct}/>;
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

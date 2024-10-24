import CardFooter from "./CardFooter";
import CartHeader from "./CartHeader";
import Product from "./Product";
import data from "../../data";
import { useState } from "react";
const Cart = () => {
    const [cart, setCart] = useState(data);
    const [total, setTotal] = useState({
        price: 500,
        count: 5,
    })

    const deleteProduct = (id) => {
        setCart((cart) => {
            return cart.filter((product) => {
                return id !== product.id;
            });
        });
    };
    
    const increase = (id) => {
        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        count: ++product.count,
                        priceTotla: product.count * product.price
                    };
                };
                return product;
            });
        });
    };
    const decrease = (id) => {
        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        count: product.count - 1 > 1 ? --product.count : 1,
                        priceTotla: product.count * product.price
                    };
                };
                return product;
            });
        });
    }
    const changeValue = (id,value) => {
        setCart((cart) => {
            return cart.map((product) => {
                if(product.id === id){
                    return {
                        ...product,
                        count: value,
                        priceTotla: value * product.price
                    }
                }
                return product;
            })
        })
    }

    const products = cart.map((product) => {
        return (
            <Product
                product={product}
                key={product.id}
                deleteProduct={deleteProduct}
                increase={increase}
                decrease={decrease}
                changeValue={changeValue}
            />
        );
    });
    return (
        <section className="cart">
            <CartHeader />
            {products}
            <CardFooter total={total}/>
        </section>
    );
};

export default Cart;

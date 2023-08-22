import React, { useState } from "react";
import { CartIcon, ClearCart } from "./Icons";

export function Cart() {
    const [cartVisible, setCartVisible] = useState(false);

    const toggleCartVisibility = () => {
        setCartVisible(!cartVisible);
    };

    return (
        <div className="relative">
            <button onClick={toggleCartVisibility}>
                <CartIcon />
            </button>
            {cartVisible && (
                <div className="w-[500px] bg-white absolute top-0 right-0 p-5 shadow">
                    <h3 className="font-semibold">Products in your cart</h3>
                    <ul>
                        <li>
                            <img
                                src="https://static.zara.net/photos///2023/S/0/2/p/1564/390/401/2/w/534/1564390401_1_1_1.jpg?ts=1689847981763"
                                alt=""
                            />
                        </li>
                        <div>
                            <strong>Chaqueta</strong>
                        </div>
                    </ul>
                    <footer>
                        <small>cantidad: 1222</small>
                        <button>+</button>
                    </footer>
                    <button onClick={toggleCartVisibility}>
                        <ClearCart />
                    </button>
                </div>
            )}
        </div>
    );
}

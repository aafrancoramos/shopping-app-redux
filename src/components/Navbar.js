import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/selectors";

import cart from "../assets/cart.png"
import store from "../assets/store.png"
import CartItemCard from "./CartItemCard";
import { checkout } from "../redux/actions";

function Navbar(props) {
    const dispatch = useDispatch()

    const [showCart, setShowCart] = useState(false);
    
    const cartItems = useSelector(getCart)
    var total = 0;
    cartItems.forEach(element => {
        total += element.inCart
    });

    return (
        <nav className="bg-white border px-2 sm:px-4 py-2.5 rounded ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="/" className="flex items-center">
                <img src={store} className="h-9 mr-3" alt="Store" />
                <span className="self-center text-xl font-semibold whitespace-nowrap">Store</span>
            </a>
            <div className="block w-auto float-right" id="navbar-default">
                <span className="flex items-center hover:cursor-pointer" onClick={() => setShowCart(!showCart)}>
                    <img src={cart} className="h-10 mr-3" alt="Cart"/>
                    <span className="self-center text-xl font-semibold whitespace-nowrap">({total})</span>
                </span>
            </div>
        </div>

        {showCart ? 
            <div className="absolute right-2 border rounded bg-white p-2 mt-4 z-10 w-64 flex flex-col items-center">
                <p className="text-xl">CART</p>
                {cartItems.map(item => item.inCart ? <CartItemCard key={item.id} {...item}/> : <></>)}
                <p>Total: ${total}</p>
                <button className="border rounded p-1 mt-2 hover:border-gray-400" onClick={() => {dispatch(checkout())}}>Check Out</button>
            </div> 
            : 
            <></>
        }
        </nav>
    )
}

export default Navbar
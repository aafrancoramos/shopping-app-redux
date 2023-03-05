import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeStock, updatePrice } from "../redux/actions";

function ProductCard(props) {
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState(false)

    const dispatch = useDispatch()

    return (
        <div className="border rounded bg-white shadow-md w-64 h-64 p-2">
            <div className="flex flex-col justify-center items-center">
                <h4 className="text-xl pb-2">{props.name}</h4>
                <img src={props.photoUrl} alt="Cool Item" className="rounded object-contain w-32 h-32"/>         
            </div>
            <div className="flex flex-row">
                <p className="mx-auto">Price: ${props.price}</p>
                <p className="mx-auto">Stock: {props.inStock}</p>
            </div>
            <form className="flex flex-row gap-1 pt-2" 
                onSubmit={(e) => {
                    e.preventDefault();

                    if(amount > props.inStock) {
                        setError(true)
                        setTimeout(() => {
                            setError(false)
                        }, 3000)

                        return
                    }

                    dispatch(addToCart(props.id, amount))
                    dispatch(removeStock(props.id, amount))
                    dispatch(updatePrice(props.id))

                    setAmount(0)
                }}>
                <input className="border rounded p-1 w-32" value={props.inStock > 0 ? amount : "Out of stock"} placeholder="Enter amount..." onChange={(e) => setAmount(e.target.value)}/>
                <button className={`${error === true ? `border-red-500 bg-red-300 text-red-900` : ``} border rounded p-1 w-full hover:border-gray-400`} disabled={props.inStock > 0 ? false : true}>
                    {error ? "Too much!" : "Add to cart"}
                </button>
            </form>
        </div>
        
    )
}

export default ProductCard
import { useDispatch } from "react-redux";
import { putBack, returnItem } from "../redux/actions"

function CartItemCard(props) {
    const dispatch = useDispatch()

    return (
        <div className="border-b-2 p-2 flex flex-col justify-center items-center w-32">
            <p>{props.name}</p>
            <p>Amount: {props.inCart ? props.inCart : 0}</p>
            <span className="block border rounded w-full hover:border-gray-400 hover:cursor-pointer text-center" onClick={() => {
                dispatch(returnItem(props.id, props.inCart))
                dispatch(putBack(props.id, props.inCart))
            }}>Return</span>
        </div>
    )
}

export default CartItemCard
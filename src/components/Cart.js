import ListItem from "./ListItems";
import { useSelector } from "react-redux";
import { clearCart } from "./utils/cartSlice"
import useDispatch from "react-redux";
const Cart = () => {

    const CartItems = useSelector((store) => (store.Cart.items));
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    return (
        <div className="text-center">
            <h1>
                Cart
            </h1>
            <div>
                <button>
                    onClick={handleClearCart}
                     Clear Cart
                </button>
            </div>
            <div>
                <ListItem items={CartItems} />
            </div>
        </div>
    )
}


export default Cart;
import ListItem from "./ListItems";
import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const CartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center w-6/12 mx-auto mt-8">
    <h1 className="text-2xl font-bold m-3">Cart</h1>
    <button
      className="p-2 mb-6 cursor-pointer rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
      onClick={handleClearCart}
    >
      Clear Cart
    </button>
    <ListItem items={CartItems} hideAddButton />
  </div>
  );
};

export default Cart;

import { CDN_URL } from "../utils/constant";
import useDispatch from "react-redux";
import {addItems} from "./utils/cartSlice";


const ListItem = ({ items }) => {
  console.log(items);
  const dispatch=useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItems(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b-1 text-left flex justify-between"
        >
          <div className="w-9/12 size-42 items-center-safe">
            <div className="px-auto py-3  m-2">
              <div className="text-left font-bold">{item.card.info.name}</div>
              <div className="text-left font-semibold ">
                ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice/100}
              </div>
              <div className="text-left text-xs wrap-anywhere">{item.card.info.description}</div>
            </div>
            </div>
            <div className="relative w-32 h-32 mx-auto my-4">
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full h-full object-cover py-2 rounded-xl"
              ></img>
              <button className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2
                           bg-amber-400 text-white px-4 py-1 text-sm rounded-full shadow-md
                           hover:bg-amber-500 transition duration-200"
                           onClick={()=>handleAddItems(item)}>Add</button>
            </div>
          </div>
      ))}
    </div>
  );
};

export default ListItem;

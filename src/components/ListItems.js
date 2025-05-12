import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


const ListItem = ({ items, hideAddButton=false }) => {
  console.log(items);
  const dispatch=useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item,index) => (
        <div
          key={item.card.info.id + "-" + index}
          className="border-b border-gray-200 text-left flex justify-between items-start p-4"
        >
          <div className="w-8/12 pr-4">
            <div className="mb-2">
              <div className="font-bold text-lg">{item.card.info.name}</div>
              <div className="font-semibold text-sm">
                ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
              </div>
              <div className="text-xs text-gray-600 mt-1">{item.card.info.description}</div>
            </div>
          </div>

          <div className="relative w-32 h-32">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full h-full object-cover rounded-xl border border-gray-300 shadow-md"
              alt={item.card.info.name}
            />
            {!hideAddButton && (
              <button
                className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2
                  bg-amber-400 text-white px-4 py-1 text-sm rounded-full shadow-lg
                  hover:bg-amber-500 transition duration-200 cursor-pointer"
                onClick={() => handleAddItems(item)}
              >
                Add
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListItem;

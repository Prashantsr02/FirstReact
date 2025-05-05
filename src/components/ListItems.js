import { CDN_URL } from "../utils/constant";

const ListItem = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((i) => (
        <div
          key={i.card.info.id}
          className="border-b-1 text-left flex justify-between"
        >
          <div className="w-9/12 size-42 items-center-safe">
            <div className="px-auto py-3  m-2">
              <div className="text-left font-bold">{i.card.info.name}</div>
              <div className="text-left font-semibold ">
                ₹{i.card.info.price ? i.card.info.price / 100 : i.card.info.defaultPrice/100}
              </div>
              <div className="text-left text-xs wrap-anywhere">{i.card.info.description}</div>
            </div>
            </div>
            <div className="relative w-32 h-32 mx-auto my-4">
              <img
                src={CDN_URL + i.card.info.imageId}
                className="w-full h-full object-cover py-2 rounded-xl"
              ></img>
              <button className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2
                           bg-amber-400 text-white px-4 py-1 text-sm rounded-full shadow-md
                           hover:bg-amber-500 transition duration-200">Add</button>
            </div>
          </div>
      ))}
    </div>
  );
};

export default ListItem;

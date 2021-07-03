import addToCart from "../actions/addToCart";
import removeFromCart from "../actions/removeFromCart";
import changeAttributes from "../actions/changeAttributes";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];
let quantity = 1;

function reducer(state = initialState, action) {
  switch (action.type) {
    case addToCart:
      const isInCart = state.find((el) => el.name === action.items.name);
      if (isInCart) {
        const item = state.find((el) => el.name === action.items.name);
        item.quantity++;
        item.totalPrice = (item.quantity * item.fullPrice).toFixed(2);
        localStorage.setItem("cart", JSON.stringify([...state]));
        return [...state];
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify([...state, { ...action.items, quantity }])
        );
        return [...state, { ...action.items, quantity }];
      }
    case removeFromCart:
      const item = state.find((el) => el.name === action.items.name);
      item.quantity--;
      item.totalPrice = (item.quantity * item.fullPrice).toFixed(2);
      const idx = state.indexOf(item);
      if (item.quantity === 0) {
        state.splice(idx, 1);
      }
      localStorage.setItem("cart", JSON.stringify([...state]));
      return [...state];

    case changeAttributes:
      const attributeName = action.attributes.attributeName;
      const itemName = action.attributes.itemName;
      const currentItem = state.find((el) => el.name === itemName);
      currentItem[attributeName] = action.attributes;
 
      return state;

    default:
      return state;
  }
}
export default reducer;

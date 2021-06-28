import addToCart from "../actions/addToCart";
import removeFromCart from "../actions/removeFromCart";

const initialState = [];
let quantity = 1;

function reducer(state = initialState, action) {
  switch (action.type) {
    case addToCart:
          console.log(state, action.items);
          const isInCart = state.find((el) => el.name === action.items.name);
          if (isInCart) {
              const item = state.find((el) => el.name === action.items.name);
              item.quantity++;
              item.totalPrice = item.quantity * item.fullPrice;
            return [...state];
          } else {
            return [...state, { ...action.items, quantity }];
          }
    case removeFromCart:
      return [];

    default:
      return state;
  }
}
export default reducer;

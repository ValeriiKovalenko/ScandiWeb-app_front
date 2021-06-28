import currencyChange from "../actions/currencyChange";

const initialState = localStorage.getItem('currency') || "$";
function reducer(state = initialState, action) {
  switch (action.type) {
    case currencyChange:
      console.log(state, action);
      return { value: action.value };

    default:
      return state;
  }
}
export default reducer;
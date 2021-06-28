import itemPageChange from '../actions/itemPageChange';

const initialState = "";
function reducer(state = initialState, action) {
  switch (action.type) {
    case itemPageChange:
      console.log(state, action);
      return { value: action.value };

    default:
      return state;
  }
}
export default reducer;

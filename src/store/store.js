import { createStore } from "redux";
import rootReducer from './reducers/rootReducer';
// import reducer from "./reducers/currencyReducer";
// import reducer2 from "./reducers/cartReducer";

const store = createStore(rootReducer);


export default  store;

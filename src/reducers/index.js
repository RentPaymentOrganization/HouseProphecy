import { combineReducers } from 'redux';
import priceReducer from "./priceReducer";
import infoReducer from "./infoReducer";

const rootReducer = combineReducers({
	priceReducer,
	infoReducer
})

export default rootReducer;
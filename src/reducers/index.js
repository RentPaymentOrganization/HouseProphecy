import { combineReducers } from 'redux';
import priceReducer from "./priceReducer";
import infoReducer from "./infoReducer";
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
	routing:routerReducer,
	priceReducer,
	infoReducer
})

export default rootReducer;
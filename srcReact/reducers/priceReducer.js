import constatnts from '../constatnts/index';

const priceReducer = (state = {}, action) => {
	switch(action.type) {
		case constatnts.GET_PRICE:
			return {
				...state,			
				fetching:true
			}
		case constatnts.GET_PRICE_SUCCESS:
			return {
				...state,		
				price:action.price,		
				fetching:false
			}
		case constatnts.GET_PRICE_FAILED:
			return {
				...state,		
				price:"failed",		
				fetching:false
			}		
		default:
			return state
	}

}

export default priceReducer
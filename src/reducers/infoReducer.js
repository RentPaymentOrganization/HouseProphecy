import constatnts from '../constatnts/index';


const infoReducer = (state = {}, action) => {
	switch(action.type) {
		case constatnts.GET_INFO:
			return {
				...state,
				fetching: true
			}
		case constatnts.GET_INFO_SUCCESS:
			return {
				...state,
				info: action.info,
				fetching: false
			}
		case constatnts.GET_PRICE_FAILED:
			return {
				...state,		
				info:"failed",		
				fetching:false
			}	
		default:
			return state
	}

}

export default infoReducer
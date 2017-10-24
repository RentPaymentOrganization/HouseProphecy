import constants from "../constatnts/index";
import serialize from "../utils/serialize";
import postAjaxJSON from "../utils/postAjaxJSON";


export const getPrice = () => dispatch => {
    
    dispatch({ type: constants.GET_PRICE, price:{}});
    let mainForm = document.getElementById('main-form');
    let serializedMainForm=serialize(mainForm);
    serializedMainForm.Action="getPrice";
    let data = JSON.stringify(serializedMainForm);
    let price = postAjaxJSON(constants.AJAX_URL, data); 
    price.then((res) => {      
                dispatch({ type: constants.GET_PRICE_SUCCESS, price: res });
            })
            .catch(() => {dispatch({ type: constants.GET_PRICE_FAILED })});

   
  };


  export function getInfo(){   
      return (dispatch) =>  {
            dispatch({ type: constants.GET_INFO, info:{}});   
            let mainForm = document.getElementById('main-form');
            let serializedMainForm=serialize(mainForm);
            serializedMainForm.Action="getInfo";
            let data = JSON.stringify(serializedMainForm);
            let price = postAjaxJSON(constants.AJAX_URL, data);  
            price.then((res) => {     
                        dispatch({ type: constants.GET_INFO_SUCCESS, info: res });
                    })
                    .catch(() => dispatch({ type: constants.GET_INFO_FAILED }));
        }
  }

 
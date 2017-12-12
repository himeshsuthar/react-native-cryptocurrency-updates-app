import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL
} from '../utils/ActionTypes';


const initialState = {
  inFetching :false,
  data:null,
  hasError :false,
  errorMessage : null
}

export default function (state = initialState,action){

  switch(action.type){
    case FETCHING_COIN_DATA:
    return Object.assign(state,{
      inFetching : true,
      data:null,
      hasError :false,
      errorMessage : null
    });
    case FETCHING_COIN_DATA_SUCCESS:
    return Object.assign(state,{
      inFetching : false,
      data:action.payload,
      hasError :false,
      errorMessage : null
    });
    case FETCHING_COIN_DATA_FAIL:
    return Object.assign(state,{
      inFetching : false,
      data:null,
      hasError :true,
      errorMessage : action.paylaod
    });
    default:
    return state;
  }


return state;
}

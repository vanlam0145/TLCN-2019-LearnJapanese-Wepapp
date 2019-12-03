import * as topicsConstants from '../constants/Topics'
export const getTopicsRequest=(history)=>{
    return {
      type: topicsConstants.GET_TOPICS_REQUEST,
      payload: history
    }
  }
  
  export const getTopicsSuccess=success=>{
    return {
      type: topicsConstants.GET_TOPICS_SUCCESS,
      payload: success
    }
  }
  
  export const getTopicsError=error=>{
    return {
      type: topicsConstants.GET_TOPICS_ERROR,
      payload: error
    }
  }
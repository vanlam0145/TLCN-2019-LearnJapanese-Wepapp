import * as getmeConstants from "../constants/GetMe";

export const getmeError = error => {
  return {
    type: getmeConstants.GETME_ERROR,
    payload: error
  };
};
export const getmeRequest = history => {
  return {
    type: getmeConstants.GETME_REQUEST,
    payload: history
  };
};
export const getmeSuccess = success => {
  return {
    type: getmeConstants.GETME_SUCCESS,
    payload: success
  };
};
export const getmeReset=()=>{
  return {
    type: getmeConstants.GETME_RESET
  }
}
export const changeavatarSuccess = success => {
  return {
    type: getmeConstants.GETME_SUCCESS,
    payload: success
  };
};
export const changeavatarRequest = data => {
  return {
    type: getmeConstants.CHANGEAVATAR_REQUEST,
    payload: data
  };
};
export const changeavatarError = error => {
  return {
    type: getmeConstants.CHANGEAVATAR_ERROR,
    payload: error
  };
};
export const changeusernameRequest = data => {
  return {
    type: getmeConstants.CHANGEUSERNAME_REQUEST,
    payload: data
  };
};
export const changeusernameSuccess = success => {
  return {
    type: getmeConstants.CHANGEUSERNAME_SUCCESS,
    payload: success
  };
};
export const changeusernameError = error => {
  return {
    type: getmeConstants.CHANGEUSERNAME_ERROR,
    payload: error
  };
};

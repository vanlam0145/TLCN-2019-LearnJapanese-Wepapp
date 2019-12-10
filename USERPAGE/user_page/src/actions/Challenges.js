import * as challengesConstants from "../constants/Challenges";
//Lay danh sach khoa hoc cua user
export const getChallengesRequest = () => {
  return {
    type: challengesConstants.GET_CHALLENGES_REQUEST
  };
};
export const getChallengesSuccess = success => {
  return {
    type: challengesConstants.GET_CHALLENGES_SUCCESS,
    payload: success
  };
};
export const getChallengesError = error => {
  return {
    type: challengesConstants.GET_CHALLENGES_ERROR,
    payload: error
  };
};
export const getChallengesDetailRequest = id => {
  return {
    type: challengesConstants.GET_CHALLENGE_DETAILS_REQUEST,
    payload: id
  };
};
export const getChallengesDetailSuccess = success => {
  return {
    type: challengesConstants.GET_CHALLENGE_DETAILS_SUCCESS,
    payload: success
  };
};
export const getChallengesDetailError = error => {
  return {
    type: challengesConstants.GET_CHALLENGE_DETAILS_ERROR,
    payload: error
  };
};

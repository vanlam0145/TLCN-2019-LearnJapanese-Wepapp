import * as globalloadingConstants from "../constants/GlobalLoading";

export const showLoading = () => ({
  type: globalloadingConstants.SHOW_LOADING
});

export const hideLoading = () => ({
  type: globalloadingConstants.HIDE_LOADING
});

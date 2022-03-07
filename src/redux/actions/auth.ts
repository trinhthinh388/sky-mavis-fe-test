import * as types from '../types/auth';
import { auth, fetchWalletInfo } from '../../api/auth.api';

export const login = (callback: Function = () => {}) => {
  return async (dispatch: Function) => {
    dispatch({
      type: types.LOGGING_IN,
    });
    const res = await auth();
    if (res) {
      dispatch({
        type: types.LOG_IN_SUCCEED,
      });
      callback();
    } else {
      dispatch({
        type: types.LOG_IN_FAILED,
      });
    }
  };
};

export const getWalletInfo = () => async (dispatch: Function) => {
  dispatch({
    type: types.FETCHING_WALLET_INFO,
  });
  const res = await fetchWalletInfo();
  if (res) {
    dispatch({
      type: types.FETCH_WALLET_SUCCEED,
      payload: res,
    });
  } else {
    dispatch({
      type: types.FETCH_WALLET_FAILED,
    });
  }
};

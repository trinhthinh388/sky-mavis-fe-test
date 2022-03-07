import * as types from '../types/asset';
import { fetchAssetBalance } from '../../api/asset.api';

export const getBalance = () => async (dispatch: Function) => {
  dispatch({
    type: types.FETCHING_ASSETS_BALANCE,
  });
  const res = await fetchAssetBalance();
  if (res) {
    dispatch({
      type: types.FETCH_ASSETS_BALANCE_SUCCEED,
      payload: res,
    });
  } else {
    dispatch({
      type: types.FETCH_ASSETS_BALANCE_FAILED,
    });
  }
};

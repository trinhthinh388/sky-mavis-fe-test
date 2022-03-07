import { Asset, fetchAssetBalance } from '../../api/asset.api';
import * as types from '../types/asset';

export type AssetState = {
  loading: boolean;
  currentBalance: Asset[];
};

const initialState: AssetState = {
  loading: false,
  currentBalance: [],
};

export const assetReducer: (
  state: AssetState,
  action: { type: string; payload: any }
) => AssetState = (
  state: AssetState = initialState,
  action: { type: string; payload: any } = { type: '', payload: [] }
) => {
  switch (action.type) {
    case types.FETCHING_ASSETS_BALANCE:
      return { ...state, loading: true };
    case types.FETCH_ASSETS_BALANCE_SUCCEED:
      return { ...state, currentBalance: [...action.payload], loading: false };
    default:
      return state;
  }
};

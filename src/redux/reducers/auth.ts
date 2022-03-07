import { WalletInfo } from '../../api/auth.api';
import * as types from '../types/auth';

export type AuthState = {
  isLoggedIn: boolean;
  loading: boolean;
  loadingWalletInfo: boolean;
  walletInfo: WalletInfo | null;
};

const initialState: AuthState = {
  isLoggedIn: false,
  loading: false,
  loadingWalletInfo: false,
  walletInfo: null,
};

export const authReducer: (
  state: AuthState,
  action: { type: string; payload: any }
) => AuthState = (
  state: AuthState = initialState,
  action: { type: string; payload: any } = { type: '', payload: {} }
) => {
  switch (action.type) {
    case types.LOG_IN_SUCCEED:
      return { ...state, isLoggedIn: true, loading: false };
    case types.LOGGING_IN: {
      return { ...state, loading: true };
    }
    case types.FETCHING_WALLET_INFO: {
      return { ...state, loadingWalletInfo: true };
    }
    case types.FETCH_WALLET_SUCCEED: {
      return {
        ...state,
        loadingWalletInfo: false,
        walletInfo: { ...action.payload },
      };
    }
    default:
      return state;
  }
};

export type WalletInfo = {
  name: string;
  address: string;
  usdBalance: string;
};

export const auth: () => Promise<boolean> = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });

export const fetchWalletInfo: () => Promise<WalletInfo> = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      const wallet: WalletInfo = {
        name: 'My Wallet',
        address: '(7300 3777 3888 3334)',
        usdBalance: '1000',
      };
      resolve(wallet);
    }, 1000);
  });

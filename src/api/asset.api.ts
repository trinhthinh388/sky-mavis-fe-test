export type Asset = {
  id: number | string;
  name: string;
  nativeBalance: string;
  vndBalance: string;
  symbol: string;
  iconURL: string;
};

export type DepositParams = {
  from: string;
  to: string;
  amount: string;
  asset: string;
};

export const deposit: (data: DepositParams) => Promise<boolean> = (
  data: DepositParams
) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });

export const fetchAssetBalance: () => Promise<Asset[]> = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      const assets: Asset[] = [
        {
          id: 1,
          name: 'Euro',
          nativeBalance: '50',
          vndBalance: '1531972',
          iconURL: './eur.png',
          symbol: 'EUR',
        },
        {
          id: 2,
          name: 'Yen',
          nativeBalance: '10000',
          vndBalance: '2103317',
          iconURL: './yen.png',
          symbol: 'YEN',
        },
      ];
      resolve(assets);
    }, 3000);
  });

export type Asset = {
  id: number | string;
  name: string;
  nativeBalance: string;
  vndBalance: string;
  symbol: string;
  iconURL: string;
};

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

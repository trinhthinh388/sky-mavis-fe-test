import BigNumber from 'bignumber.js';

export const renderCurrencyAmount: (value: string | number) => string = (
  value: string | number
) => {
  const n = new BigNumber(value);
  return n.toFormat();
};

// NPM Dependencies
import numeral from 'numeral';

export const sats2BTC = (amount, decimalPlaces = 4) => {
  const BTCAmount = numeral(amount).divide(100000000);
  const zeros = '0'.repeat(decimalPlaces);

  return numeral(BTCAmount).format(`0.${zeros}`);
};

export const BTC2USD  = (amount, BTCPrice) => {
  const amountNumber = Number(amount);
  const USDAmount = amountNumber * BTCPrice;

  return numeral(USDAmount).format('0,0');
};

export const calcOverpayRatio = (onChainFees, LNFees) => {
  const ratio = (onChainFees/LNFees) * 100;

  return numeral(ratio).format('0,0%');
};

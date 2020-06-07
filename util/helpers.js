// NPM Dependencies
import numeral from 'numeral';

export const sats2BTC = (amount) => {
  const amountNumber = Number(amount);
  const BTCAmount = numeral(amountNumber).divide(100000000);
  const formattedAmount = numeral(BTCAmount).format('0.0000');

  return formattedAmount;
};

export const BTC2USD  = (amount, BTCPrice) => {
  const amountNumber = Number(amount);
  const USDAmount = amountNumber * BTCPrice;
  const formattedAmount = numeral(USDAmount).format('0,0');

  return formattedAmount;
};

export const calcOverpayRatio = (onChainFees, LNFees) => {
  const ratio = (onChainFees/LNFees) * 100;
  const formattedAmount = numeral(ratio).format('0');

  return formattedAmount;
};

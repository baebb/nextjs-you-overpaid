// NPM Dependencies
import numeral from 'numeral';

export const sats2BTC = (amount) => {
  const amountNumber = Number(amount);
  const btcAmount = numeral(amountNumber).divide(10000000);
  const formattedAmount = numeral(btcAmount).format('0.0000');

  return formattedAmount;
};

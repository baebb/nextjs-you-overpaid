// NPM Dependencies
// import { NextApiResponse, NextApiRequest } from "next";

// Util Dependencies
import { twitterAPI } from '../../util/twitter';
import { bigsunAPI, blockchainComAPI } from '../../util/api';

export default async (req, res) => {
  const auth = req.headers.authorization;
  if (auth === process.env.AUTH_KEY) {
    try {
      const feeData = await bigsunAPI.get("/days?order=day.desc");
      const priceData = await blockchainComAPI.get("/ticker");
      const {
        total_n,
        total_amount,
        overpaid_n,
        overpaid_amount,
        overpaid_chain_fee,
        overpaid_ln_fee
      } = feeData[0];
      const usdPrice = priceData.USD.last;
      // const overpaid_ln_fee_usd =


      const status = `Yesterday Bitcoin users paid ${overpaid_chain_fee} sats (${overpaid_chain_fee_usd}) in transaction fees, which could have been transferred over the Lightning Network for ${overpaid_ln_fee} sats (${overpaid_ln_fee_usd}). They overpaid by ${((overpaid_chain_fee/overpaid_ln_fee) * 100)}`;

      const tweet = await twitterAPI.post("statuses/update", {
        status
      });

      res.status(200).json({
        tweet
      });
    } catch (err) {
      res.status(500).json({
        err
      });
    }
  } else {
    return res.status(400).send('Unauthorized');
  }
}

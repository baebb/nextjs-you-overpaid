// NPM Dependencies
// import { NextApiResponse, NextApiRequest } from "next";

// Util Dependencies
import { twitterAPI } from '../../util/twitter';

export default async (req, res) => {
  const auth = req.headers.authorization;
  if (auth === process.env.AUTH_KEY) {
    try {
      const status = `test ${auth}`;

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

// NPM Dependencies
// import { NextApiResponse, NextApiRequest } from "next";

export default async (req, res) => {
  const auth = req.headers.authorization;
  if (auth === process.env.AUTH_KEY) {
    res.json('ok')
  } else {
    return res.status(400).send('Unauthorized');
  }
}

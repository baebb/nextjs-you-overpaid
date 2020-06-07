// NPM Dependencies
import axios from 'axios';

export const bigsunAPI = axios.create({
  baseURL: 'https://overpaid.bigsun.xyz/api',
  timeout: 1500
});

export const blockchainComAPI = axios.create({
  baseURL: 'https://blockchain.info',
  timeout: 1500
});

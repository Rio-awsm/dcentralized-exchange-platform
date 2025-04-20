import { Connection } from "@solana/web3.js";
import axios from "axios";

export interface TokenDetails {
  name: string;
  mint: string;
  native: boolean;
  price: string;
  image: string;
  decimals: number;
}

export const SUPPORTED_TOKENS: TokenDetails[] = [
  {
    name: "SOL",
    mint: "So11111111111111111111111111111111111111112",
    native: true,
    price: "180",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/34/Solana_cryptocurrency_two.jpg",
    decimals: 9,
  },
  {
    name: "USDC",
    mint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    native: false,
    price: "1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1vAKYEl0YffTpWSxrqEi_gmUsl-0BuXSKMQ&s",
    decimals: 6,
  },
  {
    name: "USDT",
    mint: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
    native: false,
    price: "1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvSxrpym7ij1Hf6zQOltcDORlrJGyj1kPf3A&s",
    decimals: 6,
  },
];

let LAST_UPDATED: number | null = null;
let prices: {[key: string]: {
    price: string;
}} = {};

const TOKEN_PRICE_REFRESH_INTERVAL = 60 * 1000;

export const connection = new Connection("https://solana-mainnet.g.alchemy.com/v2/czkDI3n01EtS3x7R1CzsvueFDhKL1-Vg")

export async function getSupportedTokens () {
if (!LAST_UPDATED || new Date().getTime() - LAST_UPDATED < TOKEN_PRICE_REFRESH_INTERVAL) {
  try {
    const response = await axios.get("https://price.jup.ag/v6/price?ids=SOL,USDC,USDT")
    prices = response.data.data;
            LAST_UPDATED = new Date().getTime();
  } catch(e) {
    console.log(e);
  }
}
return SUPPORTED_TOKENS.map(s => ({
  ...s,
  price: prices[s.name].price
}))
}
getSupportedTokens();
// https://borsh.m2.xyz/address/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v
import { Connection, PublicKey } from "@solana/web3.js";

async function getTokenAcountInfo() {
  const usdcMint = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v')
  const connection = new Connection('https://api.mainnet-beta.solana.com')

  const mintAccountInfo = await connection.getAccountInfo(usdcMint)
  if (!mintAccountInfo) return

  console.log('~ mintAccountInfo', mintAccountInfo);
}

getTokenAcountInfo()

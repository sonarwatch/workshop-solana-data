import { Connection, PublicKey } from "@solana/web3.js";

async function getTokenAcountInfo() {
  const usdcTokenAccount = new PublicKey('GXjTyatXj6fgXxKXW3LgbQDH1Y4UffLQw5x6MrLWyAe1')
  const connection = new Connection('https://api.mainnet-beta.solana.com')
  const usdcTokenAccountInfo = await connection.getAccountInfo(usdcTokenAccount)
  console.log('~ usdcTokenAccountInfo', usdcTokenAccountInfo);
}

getTokenAcountInfo()

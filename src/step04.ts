import { Connection, PublicKey } from "@solana/web3.js";
import { TokenAccountStruct } from "./structs/TokenAccount";

async function getTokenAcountInfo() {
  const usdcTokenAccount = new PublicKey('GXjTyatXj6fgXxKXW3LgbQDH1Y4UffLQw5x6MrLWyAe1')
  const connection = new Connection('https://api.mainnet-beta.solana.com')
  const usdcTokenAccountInfo = await connection.getAccountInfo(usdcTokenAccount)
  if (!usdcTokenAccountInfo) return

  const parsedAccount = TokenAccountStruct.read(usdcTokenAccountInfo.data, 0)
  console.log('~ parsedAccount', parsedAccount);
  console.log('~ parsedAccount.amount', parsedAccount.amount.toString());
  console.log('~ Amount UI:', parsedAccount.amount.toNumber() / 10 ** 6);
}

getTokenAcountInfo()

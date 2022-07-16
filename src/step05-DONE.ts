import { AccountInfo, Connection, GetProgramAccountsFilter, PublicKey } from "@solana/web3.js";
import { MintAccountStruct } from "./structs/MintAccount";
import { TokenAccountStruct } from "./structs/TokenAccount";

const myWallet = new PublicKey('HACkh2pGTEwosj6xDWiVKQpTZyV1AdAYJfyyd4iR2jHd')
const tokenProgramId = new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA')

const connection = new Connection('https://api.mainnet-beta.solana.com')

async function getProgramAccounts() {
  const filters:GetProgramAccountsFilter[] = [
    {
      dataSize: 165
    },
    {
      memcmp: {
        bytes: myWallet.toString(),
        offset: 32
      }
    }
  ]
  const tokenAccounts = await connection.getProgramAccounts(tokenProgramId, {filters})
  const tokenAccountsParsed = tokenAccounts.map((tokenAccount) => TokenAccountStruct.read(tokenAccount.account.data, 0))

  const mints = tokenAccountsParsed.map((tokenAccountParsed) => tokenAccountParsed.mint)
  const mintAccounts = await connection.getMultipleAccountsInfo(mints)  as AccountInfo<Buffer>[]
  const mintAccountsParsed = mintAccounts.map(mintAccount => MintAccountStruct.read(mintAccount.data, 0))
  const decimals: { [key: string]: number } = {}
  mintAccountsParsed.forEach((mintAccountParsed, i) => {
    const mint = mints[i].toString()
    decimals[mint] = mintAccountParsed.decimals
  });

  tokenAccountsParsed.forEach(tokenAccountParsed => {
    const mint = tokenAccountParsed.mint.toString()
    const mintDecimals = decimals[mint]
    const amount = tokenAccountParsed.amount.toNumber() / 10 ** mintDecimals
    console.log(`${mint}: ${amount}`)
  });
  // TODO: Decode tokenAccounts

  // TODO: Get all mints accounts from you token accounts
  // (use connection.getMultipleAccountsInfo)
  // https://solana-labs.github.io/solana-web3.js/classes/Connection.html#getMultipleAccountsInfo

  // TODO: Decode mints accounts to get decimals

  // TODO: Divide token accounts amounts by 10 ** mintDecimal

  // TODO: Display all your token amounts !
  // EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: 0.075
  // Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: 1.552343
  // orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE: 2.369503
  // ...

  // BONUS: convert mints to symbol
  // https://cdn.jsdelivr.net/gh/solana-labs/token-list@main/src/tokens/solana.tokenlist.json
  // USDC: 0.075
  // USDT: 1.552343
  // ORCA: 2.369503
  // ...
}

getProgramAccounts()

import { Connection, GetProgramAccountsFilter, PublicKey } from "@solana/web3.js";

const myWallet = new PublicKey('HACkh2pGTEwosj6xDWiVKQpTZyV1AdAYJfyyd4iR2jHd')
const tokenProgramId = new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA')

const connection = new Connection('https://api.mainnet-beta.solana.com')

async function getProgramAccounts() {
  const filters:GetProgramAccountsFilter[] = [
    {
      dataSize: 0 // TODO
    },
    {
      memcmp: {
        bytes: 'TODO', // TODO
        offset: 0 // TODO
      }
    }
  ]
  const tokenAccounts = await connection.getProgramAccounts(tokenProgramId, {filters})

  // TODO: Decode tokenAccounts

  // TODO: Get all mints accounts from you token accounts

  // TODO: Decode mints accounts

  // TODO: Get mints decimals

  // TODO: Divide token accounts amounts by 10 ** mintDecimal

  // TODO: Display all your token amounts !
}

getProgramAccounts()

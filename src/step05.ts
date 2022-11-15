/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Connection,
  GetProgramAccountsFilter,
  PublicKey,
  clusterApiUrl,
} from "@solana/web3.js";

import { TokenAccountStruct } from "./structs/TokenAccount";
import { MintAccountStruct } from "./structs/MintAccount";

import { TokenListProvider } from "@solana/spl-token-registry";

const myWallet = new PublicKey("664vpd2BcmQxeidfCa2a4R7r6dBxg5SgJcdecssZeazh");
const tokenProgramId = new PublicKey(
  "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
);

const connection = new Connection(clusterApiUrl("mainnet-beta"));

async function getProgramAccounts() {
  const filters: GetProgramAccountsFilter[] = [
    {
      dataSize: 165,
    },
    {
      memcmp: {
        bytes: myWallet.toString(),
        offset: 32,
      },
    },
  ];
  const tokenAccounts = await connection.getProgramAccounts(tokenProgramId, {
    filters,
  });

  const allOwnedMint = tokenAccounts
    .map((tokenAccount) =>
      TokenAccountStruct.read(tokenAccount.account.data, 0)
    )
    .map((data) => {
      return {
        mint: data.mint,
        amount: data.amount,
      };
    });

  // (use connection.getMultipleAccountsInfo)
  // https://solana-labs.github.io/solana-web3.js/classes/Connection.html#getMultipleAccountsInfo
  const mintsAccount = await connection.getMultipleAccountsInfo(
    allOwnedMint.map((dt) => dt.mint)
  );

  // TODO: Decode mints accounts to get decimals
  const mintsDecimals = mintsAccount
    .flatMap((mintAccount) =>
      mintAccount ? MintAccountStruct.read(mintAccount.data, 0) : []
    )
    .map((data) => {
      return {
        decimal: data.decimals,
      };
    });

  // TODO: Divide token accounts amounts by 10 ** mintDecimal
  const zip = (a, b) => a.map((k, i) => [k, b[i]]);

  const rebaseBalance = (decimal: number, amount: number) => {
    const balance = decimal === 0 ? amount : amount / 10 ** decimal;
    return balance.toFixed(2);
  };

  // BONUS: convert mints to symbol
  const tokenProvider = await new TokenListProvider().resolve();
  const tokenList = tokenProvider.filterByClusterSlug("mainnet-beta").getList();

  const getSymbol = (address: string) => {
    return tokenList.filter((x) => x.address === address).map((x) => x.symbol);
  };

  // TODO: Display all your token amounts !
  const result = zip(allOwnedMint, mintsDecimals).map((dt) => {
    return {
      mint: dt[0].mint.toBase58(),
      symbol: getSymbol(dt[0].mint.toBase58()),
      amount: rebaseBalance(dt[1].decimal, dt[0].amount.toNumber()),
    };
  });

  console.log(result);
}

getProgramAccounts();

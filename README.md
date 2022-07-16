<div id="top"></div>

<br />
<div align="center">
  <a href="https://github.com/sonarwatch/solana-workshop">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">A Solana Workshop - HH Paris</h3>

  <p align="center">
    How to recover data directly from the blockchain
    <br />
    <br />
  </p>
</div>


- [About The Workshop](#about-the-workshop)
- [How does it work?](#how-does-it-work)
- [Practice Time](#practice-time)
  - [Getting started](#getting-started)
  - [Step 01](#step-01)
  - [Step 02](#step-02)
  - [Step 03](#step-03)
  - [Step 04](#step-04)
  - [Step 05 - TODO](#step-05---todo)
- [Go further](#go-further)
  - [Solana Staking (StakeAccount)](#solana-staking-stakeaccount)
  - [Marinade Finance (TicketAccountData)](#marinade-finance-ticketaccountdata)
  - [Jet Staking (StakeAccount)](#jet-staking-stakeaccount)
- [Useful Links](#useful-links)
- [Contact](#contact)



## About The Workshop

The goal of this workshop is to discover through some examples how the data on the Solana blockchain works and how to recover this data

## How does it work?

[Slides link](https://slides.com/olivbau/deck/fullscreen)

## Practice Time

### Getting started

```bash
# Clone the repository (you can also click "Use this template")
git clone https://github.com/sonarwatch/solana-workshop.git solana-workshop
cd solana-workshop

...
# Install dependencies
yarn install

# Run steps files
.\node_modules\.bin\ts-node-dev .\src\step01.ts

# Run main.ts file
yarn dev # runs main.ts file
...
```

### Step 01
In this step we get the account info of the USDC token. For this we use `connection.getAccountInfo`. We obtain some data as a Buffer that we will decode in the next step.

### Step 02
In this step we decode the USDC token data. For that we decode the buffer thanks to the `MintAccountStruct`. `MintAccountStruct` is based on the [Metaplex Beet](https://github.com/metaplex-foundation/beet) library.

### Step 03
In this step, we get the account info a USDC token account. For this, we use `connection.getAccountInfo`. We obtain some data as a Buffer that we will decode in the next step.

### Step 04
In this step we decode the USDC token data. For that we decode the buffer thanks to the `TokenAccountStruct`. `TokenAccountStruct` is based on the [Metaplex Beet](https://github.com/metaplex-foundation/beet) library.

### Step 05 - TODO
In this step, the goal is to display the amount of each token that a wallet has.
For this there are several steps:
1. Get all tokens accounts of a wallet, then decode them with `connection.getProgramAccounts`, then decode them with `TokenAccountStruct`.
2. Get all the mints and get the accounts info with `getMultipleAccountsInfo`, then decode mints accounts with `MintAccountStruct`
3. Divided step 1 amounts by step 2 decimals
4. Display tokens amounts in the console
5. Display mints as symbols thanks to [Solana token list](https://cdn.jsdelivr.net/gh/solana-labs/token-list@main/src/tokens/solana.tokenlist.json)

<p align="right">(<a href="#top">back to top</a>)</p>


## Go further

You can go further and try to decode other accounts. Here are two examples you can start with:

### Solana Staking ([StakeAccount](https://www.apr.dev/program/JPLockxtkngHkaQT5AuRYow3HyUv5qWzmhwsCPd653n?tab=IDL&idl=Accounts))

You can recover your staking accounts.

### Marinade Finance ([TicketAccountData](https://www.apr.dev/program/MarBmsSgKXdrN1egZf5sqe1TMai9K1rChYNDJgjq7aD?tab=IDL&idl=Accounts))

On Marinade, When you choose 'Delayed unstake' your mSOL, these operations happen under the hood:
1. You are given a claim ticket indicating the amount and due time of your unstake.
2. mSOL is burnt and removed from the supply.
3. The unstake operation is launched and performed by the bot.
4. At due time, you will be able to claim your SOL and destroy the claim ticket in exchange. (A claim ticket has no expiry date.)

What you can do is try to decode the TicketAccount.

* [Link](https://marinade.finance/app/staking/)
* [IDL](https://www.apr.dev/program/MarBmsSgKXdrN1egZf5sqe1TMai9K1rChYNDJgjq7aD?tab=IDL&idl=Accounts)

### Jet Staking ([StakeAccount](https://www.apr.dev/program/JPLockxtkngHkaQT5AuRYow3HyUv5qWzmhwsCPd653n?tab=IDL&idl=Accounts))

Jet Protocol has a governance program where you can stake $JET tokens.
You can try to decode your StakeAccount to find out how many $JET you have staked.

* [Link](https://govern.jetassociation.org/#/)
* [IDL](https://www.apr.dev/program/JPLockxtkngHkaQT5AuRYow3HyUv5qWzmhwsCPd653n?tab=IDL&idl=Accounts)

<p align="right">(<a href="#top">back to top</a>)</p>


## Useful Links

* [@solana/web3.js](https://solana-labs.github.io/solana-web3.js/)
* [Solana JSON RPC API](https://docs.solana.com/developing/clients/jsonrpc-api)
* [Solana Cluster RPC Endpoints](https://docs.solana.com/cluster/rpc-endpoints)
* [Borsh Specification](https://borsh.io/)
* [SOL / BORSH Decoder](https://borsh.m2.xyz/)
* [Metaplex Beet](https://github.com/metaplex-foundation/beet)
* [Anchor Program Registry](https://www.apr.dev/)
* [Blahblah IDLs](https://github.com/pqv199x/blahblah/tree/master/idls)
* [bn.js](https://github.com/indutny/bn.js)
* [BigNumber](https://github.com/MikeMcl/bignumber.js)
* [Serialization Cookbook](https://solanacookbook.com/guides/serialization.html#how-to-deserialize-account-data-on-the-client)

<p align="right">(<a href="#top">back to top</a>)</p>


## Contact

* [@Sonarwatch](https://twitter.com/Sonarwatch)
* [Discord Server](http://discord.gg/gG4DvM2JGw)

<p align="right">(<a href="#top">back to top</a>)</p>

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
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Practice Time](#practice-time)
- [Go further](#go-further)
  - [Marinade Finance (TicketAccountData)](#marinade-finance-ticketaccountdata)
  - [Jet Staking (StakeAccount)](#jet-staking-stakeaccount)
- [Useful Links](#useful-links)
- [Contact](#contact)



## About The Workshop

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/sonarwatch/solana-workshop.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>



## Examples

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/sonarwatch/solana-workshop/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

## Practice Time

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.


## Go further

You can go further and try to decode other accounts. Here are two examples you can start with:

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

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

* [@Sonarwatch](https://twitter.com/Sonarwatch)
* [Discord Server](http://discord.gg/gG4DvM2JGw)

Workshop Link: [https://github.com/sonarwatch/solana-workshop](https://github.com/sonarwatch/solana-workshop)

<p align="right">(<a href="#top">back to top</a>)</p>
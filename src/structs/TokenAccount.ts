import { BeetStruct, u32, u64, u8 } from '@metaplex-foundation/beet';
import { publicKey } from '@metaplex-foundation/beet-solana';
import { PublicKey } from '@solana/web3.js';
import BN from 'bn.js'

export enum AccountState {
  Uninitialized = 0,
  Initialized = 1,
  Frozen = 2,
}

export type TokenAccount = {
  readonly mint: PublicKey,
  readonly owner: PublicKey,
  readonly amount: BN,
  readonly delegateOption: number,
  readonly delegate: PublicKey,
  readonly state: AccountState,
  readonly isNativeOption: number,
  readonly isNative: BN,
  readonly delegatedAmount: BN,
  readonly closeAuthorityOption: number,
  readonly closeAuthority: PublicKey,
};

export const TokenAccountStruct = new BeetStruct<TokenAccount>(
  [
    ['mint', publicKey],
    ['owner', publicKey],
    ['amount', u64],
    ['delegateOption', u32],
    ['delegate', publicKey],
    ['state', u8],
    ['isNativeOption', u32],
    ['isNative', u64],
    ['delegatedAmount', u64],
    ['closeAuthorityOption', u32],
    ['closeAuthority', publicKey],
  ],
  (args) => (args as TokenAccount),
  'TokenAccount',
);

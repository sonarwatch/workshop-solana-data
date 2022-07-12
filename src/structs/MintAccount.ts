import { BeetStruct, u32, u8, bool, u64 } from '@metaplex-foundation/beet';
import { publicKey } from '@metaplex-foundation/beet-solana';
import { PublicKey } from '@solana/web3.js';
import BN from 'bn.js';

export type MintAccount = {
  readonly mintAuthorityOption: number,
  readonly mintAuthority: PublicKey,
  readonly supply: BN,
  readonly decimals: number,
  readonly initialized: boolean,
  readonly freezeAuthorityOption: number,
  readonly freezeAuthority: PublicKey,
};

export const MintAccountStruct = new BeetStruct<MintAccount>(
  [
    ['mintAuthorityOption', u32],
    ['mintAuthority', publicKey],
    ['supply', u64],
    ['decimals', u8],
    ['initialized', bool],
    ['freezeAuthorityOption', u32],
    ['freezeAuthority', publicKey],
  ],
  (args) => args as MintAccount,
  'MintAccount',
);

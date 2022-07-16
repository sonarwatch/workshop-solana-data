import { BeetStruct, u64, u8 } from '@metaplex-foundation/beet';
import { publicKey } from '@metaplex-foundation/beet-solana';
import { PublicKey } from '@solana/web3.js';
import BN from 'bn.js';

function blob(byteSize: number) {
  return {
    write(buf: Buffer, offset: number) {
      const bytesArrayBuf = Buffer.allocUnsafe(this.byteSize);
      bytesArrayBuf.copy(buf, offset, 0, this.byteSize);
    },
    read(buf: Buffer, offset: number): Buffer {
      return buf.slice(offset, offset + this.byteSize);
    },
    byteSize,
    description: 'blob',
  };
}


export enum StakeAccountState {
  'uninitialized' = 0,
  'initialized' = 1,
  'delegated' = 2,
  'rewardsPool' = 3,
}

export type StakeAccount = {
  state: StakeAccountState,
  padding: Buffer,
  rentExemptReserve: BN,
  staker: PublicKey,
  withdrawer: PublicKey,
  lockup: Buffer,
  voter: PublicKey,
  stake: BN,
  activationEpoch: BN,
  deactivationEpoch: BN,
  warmupCooldownRate: BN,
  creditsObserved: BN,
  blob: Buffer,
};

export const stakeAccountStruct = new BeetStruct<StakeAccount>(
  [
    ['state', u8],
    ['padding', blob(3)],
    ['rentExemptReserve', u64],
    ['staker', publicKey],
    ['withdrawer', publicKey],
    ['lockup', blob(48)],
    ['voter', publicKey],
    ['stake', u64],
    ['activationEpoch', u64],
    ['deactivationEpoch', u64],
    ['warmupCooldownRate', u64],
    ['creditsObserved', u64],
    ['blob', blob(4)],
  ],
  (args) => args as StakeAccount,
);

export const stakingProgramId = 'Stake11111111111111111111111111111111111111'

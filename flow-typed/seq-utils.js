import type { NtSeq } from '../src/types';

declare module "seq-utils" {
  declare export function generate(): NtSeq;
  declare export function readSequence(sequence: string): NtSeq;
}

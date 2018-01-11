import type { NtSeq } from '../src/types';
import type { Sequence } from '../src/reducers/app';

declare module "seq-utils" {
  declare export function generate(): Sequence;
  declare export function createSequenceFromDNA(dna: string): NtSeq;
}

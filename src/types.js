/* @flow */
import type { State as AppState } from 'reducers/app';
import type { State as EnsemblState } from 'reducers/ensembl';

// TODO: add concrete Flow types instead of Object
export type Action = Object;

export type ReduxState = {|
  app: AppState,
  ensembl: EnsemblState,
|};

export type NtSeq = {|
  complement: () => NtSeq,
  contentATGC: () => {| [string]: number |},
  fractionalContentATGC: () => {| [string]: number |},
  sequence: () => string,
  size: () => number,
|};

// See: https://flow.org/en/docs/react/redux/
export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
export type GetState = () => ReduxState;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;

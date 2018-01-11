/* @flow */
import type { Action, ReduxState } from 'types';

export type Sequence = {|
  id: string,
  name: string,
  dna: string,
|};

export type State = {|
  sequences: Array<Sequence>,
  currentSequenceId: ?string,
|};

const initialState: State = {
  sequences: [],
  currentSequenceId: null,
};

const ADD_SEQUENCE = 'ADD_SEQUENCE';
const REMOVE_SEQUENCE = 'REMOVE_SEQUENCE';
const SELECT_SEQUENCE = 'SELECT_SEQUENCE';

export const addSequence = (sequence: Sequence): Action => {
  return { type: ADD_SEQUENCE, sequence };
};

export const removeSequence = (id: string): Action => {
  return { type: REMOVE_SEQUENCE, id };
};

export const selectSequence = (id: string): Action => {
  return { type: SELECT_SEQUENCE, id };
};

export const getCurrentSequence = (state: ReduxState): ?Sequence => {
  return state.app.sequences.find(s => s.id === state.app.currentSequenceId);
};

const sequenceExists = (sequences: Array<Sequence>, id: string): boolean => {
  return sequences.filter(s => s.id === id).length > 0;
};

export default function reducer(
  state: State = initialState,
  action: Object = {}
) {
  switch (action.type) {
    case ADD_SEQUENCE: {
      if (sequenceExists(state.sequences, action.sequence.id)) {
        console.log('sequence already exists');
        return state;
      }

      return {
        ...state,
        sequences: state.sequences.concat(action.sequence),
      };
    }

    case REMOVE_SEQUENCE:
      return {
        ...state,
        currentSequenceId: null,
        sequences: state.sequences.filter(s => s.id !== action.id),
      };

    case SELECT_SEQUENCE:
      return {
        ...state,
        currentSequenceId: action.id,
      };

    default:
      return state;
  }
}

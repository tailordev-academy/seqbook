/* @flow */
import { addSequence } from './app';
import type { Action, ThunkAction } from 'types';

// State
export type State = {|
  fetching: boolean,
|};

const initialState: State = {
  fetching: false,
};

// Actions
const START_FETCH_SEQUENCE = 'START_FETCH_SEQUENCE';
const END_FETCH_SEQUENCE = 'END_FETCH_SEQUENCE';

// Action Creators
export const fetchSequence = (ensemblId: string): ThunkAction => {
  return dispatch => {
    dispatch(startFetchSequence());

    return fetch(
      `//rest.ensembl.org/sequence/id/${ensemblId}`, {
        headers: { 'Accept': 'application/json' },
      })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        }

        throw new Error(response.statusText);
      })
      .then(json => {
        dispatch(
          addSequence({
            id: json.id,
            name: json.desc,
            sequence: json.seq,
          })
        );
      })
      .catch(error => {
        alert(error);
      })
      .then(() => {
        dispatch(endFetchSequence());
      });
  };
};

export const startFetchSequence = (): Action => {
  return { type: START_FETCH_SEQUENCE };
};

export const endFetchSequence = (): Action => {
  return { type: END_FETCH_SEQUENCE };
};

// Reducer
export default function reducer(
  state: State = initialState,
  action: Action = {}
) {
  switch (action.type) {
    case START_FETCH_SEQUENCE:
      return {
        ...state,
        fetching: true,
      };

    case END_FETCH_SEQUENCE:
      return {
        ...state,
        fetching: false,
      };

    default:
      return state;
  }
}

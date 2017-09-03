const initialState = {
  sequences: [],
  currentSequenceId: null,
};

const ADD_SEQUENCE = 'ADD_SEQUENCE';
const REMOVE_SEQUENCE = 'REMOVE_SEQUENCE';
const SELECT_SEQUENCE = 'SELECT_SEQUENCE';

export const addSequence = sequence => {
  return { type: ADD_SEQUENCE, sequence };
};

export const removeSequence = id => {
  return { type: REMOVE_SEQUENCE, id };
};

export const selectSequence = id => {
  return { type: SELECT_SEQUENCE, id };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_SEQUENCE:
      return {
        ...state,
        sequences: state.sequences.concat(action.sequence),
      };

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

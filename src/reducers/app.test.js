import reducer, {
  addSequence,
  getCurrentSequence,
  removeSequence,
  selectSequence,
} from './app';
import { generate } from 'seq-utils';

describe(__filename, () => {
  describe('reducer()', () => {
    it('initializes properly', () => {
      const state = reducer(undefined);
      expect(state).toEqual({
        currentSequenceId: null,
        sequences: [],
      });
    });

    it('can add a sequence', () => {
      const sequence = generate();
      const state = reducer(undefined, addSequence(sequence));
      expect(state.sequences).toContain(sequence);
    });

    it('can remove a sequence', () => {
      const sequence = generate();
      const prevState = reducer(undefined, addSequence(sequence));
      expect(prevState.sequences).toContain(sequence);

      const state = reducer(prevState, removeSequence(sequence.id));
      expect(state.sequences).not.toContain(sequence);
    });

    it('can select a sequence', () => {
      const sequence = generate();
      const state = reducer(undefined, selectSequence(sequence.id));
      expect(state.currentSequenceId).toEqual(sequence.id);
    });

    it('ensures unicity of the added sequences', () => {
      const sequence = generate();
      const prevState = reducer(undefined, addSequence(sequence));
      const state = reducer(prevState, addSequence(sequence));
      expect(state.sequences).toHaveLength(1);
    });
  });

  describe('addSequence()', () => {
    it('returns a type and a sequence', () => {
      const sequence = generate();
      const action = addSequence(sequence);
      expect(action).toHaveProperty('type');
      expect(action).toHaveProperty('sequence', sequence);
    });
  });

  describe('removeSequence()', () => {
    it('returns a type and a sequence id', () => {
      const sequence = generate();
      const action = removeSequence(sequence.id);
      expect(action).toHaveProperty('type');
      expect(action).toHaveProperty('id', sequence.id);
    });
  });

  describe('selectSequence()', () => {
    it('returns a type and a sequence id', () => {
      const sequence = generate();
      const action = selectSequence(sequence.id);
      expect(action).toHaveProperty('type');
      expect(action).toHaveProperty('id', sequence.id);
    });
  });

  describe('getCurrentSequence()', () => {
    it('returns the current sequence given an id', () => {
      const expected = generate();
      let state = reducer(undefined, addSequence(expected));
      state = reducer(state, selectSequence(expected.id));

      const sequence = getCurrentSequence({ app: state });
      expect(sequence).toEqual(expected);
    });
  });
});

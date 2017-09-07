import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import { generate } from 'seq-utils';

import { addSequence } from './app';
import reducer, {
  fetchSequence,
  startFetchSequence,
  endFetchSequence,
} from './ensembl';

describe(__filename, () => {
  describe('reducer()', () => {
    beforeEach(() => {
      fetchMock.reset();
    });

    afterEach(() => {
      fetchMock.restore();
    });

    it('initializes properly', () => {
      const state = reducer(undefined);
      expect(state).toEqual({
        fetching: false,
      });
    });

    it('indicates when a sequence fetch has ended', () => {
      const prevState = reducer(undefined, startFetchSequence());
      const state = reducer(prevState, endFetchSequence());
      expect(state).toEqual({
        fetching: false,
      });
    });

    it('indicates when a sequence fetch has started', () => {
      const state = reducer(undefined, startFetchSequence());
      expect(state).toEqual({
        fetching: true,
      });
    });

    it('can fetch a sequence on Ensembl', () => {
      const mockStore = configureMockStore([thunk]);
      const store = mockStore({});

      const sequence = generate();
      const expectedActions = [
        startFetchSequence(),
        addSequence(sequence),
        endFetchSequence(),
      ];

      fetchMock.get('*', {
        id: sequence.id,
        desc: sequence.name,
        seq: sequence.sequence,
      });

      return store.dispatch(fetchSequence(sequence.id))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('can handle API errors', () => {
      const mockStore = configureMockStore([thunk]);
      const store = mockStore({});

      const expectedActions = [
        startFetchSequence(),
        // TODO: the error should be handled other than with a `alert()`
        endFetchSequence(),
      ];

      fetchMock.get('*', 400);

      return store.dispatch(fetchSequence('some id'))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });

  describe('endFetchSequence()', () => {
    it('returns a type', () => {
      const action = endFetchSequence();
      expect(action).toHaveProperty('type');
    });
  });
});

/* @flow */
import { generate } from 'seq-utils';
import { connect } from 'react-redux';
import {
  addSequence,
  getCurrentSequence,
  removeSequence,
  selectSequence,
} from 'reducers/app';
import type { Dispatch, ReduxState } from 'types';

import Home from './presenter';

const mapStateToProps = (state: ReduxState) => {
  return {
    sequences: state.app.sequences,
    current: getCurrentSequence(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAddSequence: () => dispatch(addSequence(generate())),
  onRemoveSequence: (id: string) => dispatch(removeSequence(id)),
  onSelectSequence: (id: string) => dispatch(selectSequence(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

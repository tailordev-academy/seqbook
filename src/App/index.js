import { generate } from 'seq-utils';
import { connect } from 'react-redux';
import {
  addSequence,
  getCurrentSequence,
  removeSequence,
  selectSequence,
} from 'reducers/app';

import App from './presenter';

const mapStateToProps = state => {
  return {
    sequences: state.app.sequences,
    current: getCurrentSequence(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onAddSequence: () => dispatch(addSequence(generate())),
  onRemoveSequence: id => dispatch(removeSequence(id)),
  onSelectSequence: id => dispatch(selectSequence(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

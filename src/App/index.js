import { generate } from 'seq-utils';
import { connect } from 'react-redux';
import { addSequence, removeSequence, selectSequence } from 'reducers/app';

import App from './presenter';

const mapStateToProps = state => {
  return {
    sequences: state.app.sequences,
    current: state.app.sequences.find(s => s.id === state.app.currentSequenceId),
  };
};

const mapDispatchToProps = dispatch => ({
  onAddSequence: () => dispatch(addSequence(generate())),
  onRemoveSequence: id => dispatch(removeSequence(id)),
  onSelectSequence: id => dispatch(selectSequence(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

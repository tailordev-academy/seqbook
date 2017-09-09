/* @flow */
import { connect } from 'react-redux';
import EnsemblSearch from './presenter';
import { fetchSequence } from 'reducers/ensembl';
import type { Dispatch, ReduxState } from 'types';

const mapStateToProps = (state: ReduxState) => {
  return {
    isFetching: state.ensembl.fetching,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onFetch: (ensemblId: string) => dispatch(fetchSequence(ensemblId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EnsemblSearch);

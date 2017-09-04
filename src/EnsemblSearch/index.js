import { connect } from 'react-redux';
import EnsemblSearch from './presenter';
import { fetchSequence } from 'reducers/ensembl';

const mapStateToProps = state => {
  return {
    isFetching: state.ensembl.fetching,
  };
};

const mapDispatchToProps = dispatch => ({
  onFetch: ensemblId => dispatch(fetchSequence(ensemblId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EnsemblSearch);

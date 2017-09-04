import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class EnsemblSearch extends React.Component {
  static propTypes = {
    onFetch: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }

  handleOnChange = event => {
    this.setState({ search: event.target.value });
  };

  handleOnFetch = event => {
    event.preventDefault();

    this.props.onFetch(this.state.search);
  };

  render() {
    return (
      <div className="EnsemblSearch">
        <h3>Ensembl database</h3>

        <form onSubmit={this.handleOnFetch}>
          <div className="form-group">
            <label className="sr-only" htmlFor="search">
              Ensembl ID
            </label>
            <input
              type="text"
              name="search"
              value={this.state.search}
              onChange={this.handleOnChange}
              placeholder="Ensembl ID, e.g., ENSG00000274347"
              className="form-control"
            />
            <span className="help-block">
              You can find{' '}
              <a href="http://www.ensembl.org/Multi/Search/Results?site=ensembl;page=1;facet_feature_type=Gene;q=human">
                gene sequence ids on this page
              </a>.
            </span>
          </div>
          {this.props.isFetching
            ? <p>Fetching...</p>
            : <button
                onClick={this.handleOnFetch}
                disabled={this.state.search.trim().length === 0}
                type="submit"
                className="btn btn-default"
              >
                Fetch
              </button>}
        </form>
      </div>
    );
  }
}

export default EnsemblSearch;

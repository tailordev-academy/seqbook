import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from 'Header';
import List from 'List';
import SequenceView from 'SequenceView';

import './styles.css';

const SequenceType = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  header: PropTypes.string,
  sequence: PropTypes.string,
});

class App extends Component {
  static propTypes = {
    sequences: PropTypes.arrayOf(SequenceType).isRequired,
    current: SequenceType,
    onAddSequence: PropTypes.func.isRequired,
    onRemoveSequence: PropTypes.func.isRequired,
    onSelectSequence: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="App">
        <Header />

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <h3>Sequences</h3>
              <List
                sequences={this.props.sequences}
                onSelectSequence={this.props.onSelectSequence}
              />

            <button
              onClick={this.props.onAddSequence}
              className="btn btn-primary"
            >
              Add random sequence
            </button>
          </div>

          <div className="col-md-8">
            {this.props.current ? (
              <SequenceView
                sequence={this.props.current}
                onRemoveSequence={this.props.onRemoveSequence}
              />
            ) : (
              <p>no sequence selected</p>
            )}
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;

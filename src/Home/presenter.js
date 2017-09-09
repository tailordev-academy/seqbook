/* @flow */
import React, { Component } from 'react';

import List from 'List';
import SequenceView from 'SequenceView';
import EnsemblSearch from 'EnsemblSearch';

import './styles.css';
import type { Sequence } from 'reducers/app';

type Props = {|
  current: ?Sequence,
  sequences: Array<Sequence>,
  onAddSequence: Function,
  onRemoveSequence: Function,
  onSelectSequence: Function,
|};

class Home extends Component<Props> {
  render() {
    return (
      <div className="Home">
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

              <EnsemblSearch />
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

export default Home;

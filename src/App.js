import React, { Component } from 'react';
import { generate } from 'seq-utils';

import Header from 'Header';
import List from 'List';
import SequenceView from 'SequenceView';

import 'styles.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sequences: [
        generate(),
        generate(),
        generate(),
      ],
    };
  }

  handleOnAddSequence = () => {
    this.setState(prevState => ({
      sequences: prevState.sequences.concat(generate()),
    }));
  }

  handleOnSelectSequence = (sequenceId) => {
    this.setState({
      current: this.state.sequences.find(s => s.id === sequenceId),
    });
  }

  render() {
    return (
      <div className="App">
        <Header />

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <h3>Sequences</h3>
              <List
                sequences={this.state.sequences}
                onSelectSequence={this.handleOnSelectSequence}
              />

            <button
              onClick={this.handleOnAddSequence}
              className="btn btn-primary"
            >
              Add random sequence
            </button>
          </div>

          <div className="col-md-8">
            {this.state.current ? (
              <SequenceView sequence={this.state.current} />
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

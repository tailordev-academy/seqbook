import React, { Component } from 'react';

import Header from 'Header';
import List from 'List';
import 'styles.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sequences: ['ATCG', 'ATCGATTT'],
    };
  }

  render() {
    return (
      <div className="App">
        <Header />

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <h3>Sequences</h3>
              <List sequences={this.state.sequences} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

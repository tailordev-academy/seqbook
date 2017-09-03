import React from 'react';
import PropTypes from 'prop-types';
import { readSequence } from 'seq-utils';

import Card from 'ui/Card';
import Sequence from 'ui/Sequence';
import Length from 'widgets/Length';
import FractionalContent from 'widgets/FractionalContent';
import Complement from 'widgets/Complement';

class SequenceView extends React.Component {
  static propTypes = {
    sequence: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      sequence: PropTypes.string,
    }).isRequired,
  };

  getGCContent(sequence) {
    const atgc = readSequence(sequence).contentATGC();
    const gc = (atgc['G'] + atgc['C']) / (atgc['A'] + atgc['T'] + atgc['G'] + atgc['C']);

    return Math.round(gc * 100);
  }

  render() {
    const { name, sequence } = this.props.sequence;

    return (
      <div className="SequenceView">
        <h3>{name}</h3>

        <Sequence sequence={sequence} />

        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <Length sequence={sequence} />
          </div>
          <div className="col-xs-12 col-sm-6">
            <Card
              title="GC content"
              value={this.getGCContent(sequence)}
              unit="%"
            />
          </div>
        </div>

        <Complement sequence={readSequence(sequence)} />

        <FractionalContent sequence={readSequence(sequence)} />
      </div>
    );
  }
}

export default SequenceView;

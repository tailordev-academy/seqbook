/* @flow */
import React from 'react';
import { readSequence } from 'seq-utils';

import Card from 'ui/Card';
import Sequence from 'ui/Sequence';
import Length from 'widgets/Length';
import FractionalContent from 'widgets/FractionalContent';
import Complement from 'widgets/Complement';
import type { Sequence as SequenceType } from 'reducers/app';

import './styles.css';

type Props = {|
  sequence: SequenceType,
  onRemoveSequence: Function,
|};

class SequenceView extends React.Component<Props> {
  getGCContent(sequence: string) {
    const atgc = readSequence(sequence).contentATGC();
    const gc =
      (atgc['G'] + atgc['C']) / (atgc['A'] + atgc['T'] + atgc['G'] + atgc['C']);

    return Math.round(gc * 100);
  }

  render() {
    const { id, name, sequence } = this.props.sequence;

    return (
      <div className="SequenceView">
        <h3>{name}</h3>

        <div className="SequenceView-actions">
          <button
            onClick={() => this.props.onRemoveSequence(id)}
            className="btn btn-danger"
          >
            remove
          </button>
        </div>

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

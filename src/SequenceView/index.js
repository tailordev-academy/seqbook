/* @flow */
import React from 'react';
import { createSequenceFromDNA } from 'seq-utils';

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
  getGCContent(dna: string) {
    const atgc = createSequenceFromDNA(dna).contentATGC();
    const gc =
      (atgc['G'] + atgc['C']) / (atgc['A'] + atgc['T'] + atgc['G'] + atgc['C']);

    return Math.round(gc * 100);
  }

  render() {
    const { id, name, dna } = this.props.sequence;

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

        <Sequence dna={dna} />

        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <Length dna={dna} />
          </div>
          <div className="col-xs-12 col-sm-6">
            <Card title="GC content" value={this.getGCContent(dna)} unit="%" />
          </div>
        </div>

        <Complement sequence={createSequenceFromDNA(dna)} />

        <FractionalContent sequence={createSequenceFromDNA(dna)} />
      </div>
    );
  }
}

export default SequenceView;

/* @flow */
import React from 'react';

import './styles.css';

type Props = {|
  dna: string,
|};

const Sequence = ({ dna }: Props) => (
  <pre className="Sequence">
    <code>{dna}</code>
  </pre>
);

export default Sequence;

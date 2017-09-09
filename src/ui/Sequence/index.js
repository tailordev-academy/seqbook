/* @flow */
import React from 'react';

import './styles.css';

type Props = {|
  sequence: string,
|};

const Sequence = ({ sequence }: Props) => (
  <pre className="Sequence">
    <code>{sequence}</code>
  </pre>
);

export default Sequence;

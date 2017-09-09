/* @flow */
import React from 'react';

import Card from 'ui/Card';

type Props = {|
  sequence: string,
|};

const Length = ({ sequence }: Props) => (
  <Card title="length" value={sequence.length} />
);

export default Length;
